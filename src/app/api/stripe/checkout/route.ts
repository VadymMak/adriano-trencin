// ============================================================
// src/app/api/stripe/checkout/route.ts
// Creates Stripe Checkout Session — €10 deposit for reservation
// Metadata carries all reservation data (no DB needed yet)
// Pattern: vendly-storefront / src/app/api/checkout/route.ts
// ============================================================

import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, date, time, guests, message, locale } = body;

  if (!name || !phone || !email || !date || !time || !guests) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const origin =
    req.headers.get('origin') ??
    process.env.NEXT_PUBLIC_BASE_URL ??
    'http://localhost:3000';

  const safeLocale = locale ?? 'sk';

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Rezervačný depozit — Adriano Trenčín',
            description: `${date} ${time} · ${guests}`,
          },
          unit_amount: 1000, // €10.00
        },
        quantity: 1,
      },
    ],
    metadata: {
      name,
      phone,
      email,
      date,
      time,
      guests,
      message: message ?? '',
      locale: safeLocale,
    },
    success_url: `${origin}/${safeLocale}/reservation/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/${safeLocale}/reservation/cancel`,
  });

  return NextResponse.json({ url: session.url }, { status: 201 });
}
