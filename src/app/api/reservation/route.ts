// ============================================================
// src/app/api/reservation/route.ts
// WhatsApp flow (no deposit) — sends emails + returns WhatsApp URL
// Rate limit: 5 submissions / IP / minute
// ============================================================

import { NextRequest, NextResponse } from 'next/server';
import { sendOwnerEmail, sendGuestEmail } from '@/lib/reservation-emails';

// In-memory rate limit — resets on server restart
const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > RATE_WINDOW) {
    rateMap.set(ip, { count: 1, ts: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const body = await req.json();
  const { name, phone, email, date, time, guests, message } = body;

  if (!name || !phone || !email || !date || !time || !guests) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  await Promise.allSettled([
    sendOwnerEmail({ name, phone, email, date, time, guests, message: message ?? '' }),
    sendGuestEmail({ name, email, date, time, guests }),
  ]);

  const text = `Rezervácia – ${name}%0AHostia: ${guests}%0ADátum: ${date} ${time}%0ATel: ${phone}%0AEmail: ${email}${message ? `%0ASpráva: ${message}` : ''}`;
  const whatsappUrl = `https://wa.me/421949551553?text=${text}`;

  return NextResponse.json({ success: true, whatsappUrl });
}
