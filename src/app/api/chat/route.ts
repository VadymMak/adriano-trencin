// ============================================================
// src/app/api/chat/route.ts
// AI Chat assistant for Adriano Restaurant
// Pattern: smartctx-dev / src/app/api/chat/route.ts
// No RAG for MVP — full knowledge injected in system prompt
// Rate limit: 10 messages / IP / minute
// ============================================================

import { NextRequest, NextResponse } from 'next/server';
import { RESTAURANT_KNOWLEDGE } from '@/data/restaurant-knowledge';

const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 10;
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

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'AI chat is not configured' }, { status: 503 });
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many messages. Please wait a minute.' }, { status: 429 });
  }

  const body = await req.json();
  const { messages, honeypot } = body as { messages: Message[]; honeypot?: string };

  // Honeypot — silent reject (bot thinks it succeeded)
  if (honeypot) {
    return NextResponse.json({ reply: 'Ďakujeme!' });
  }

  if (!messages?.length) {
    return NextResponse.json({ error: 'No messages provided' }, { status: 400 });
  }

  const systemPrompt = `You are a helpful assistant for Adriano Restaurant & Cafe in Trenčín, Slovakia.
Answer concisely — 2–4 sentences maximum.
Never invent prices, dishes, or hours that are not in the information below.
If you don't know the answer, say: "For more details, please call us at +421 949 551 553 or visit us at Námestie sv. Anny 3."
Respond in the same language the user writes in (Slovak, Czech, German, Croatian, or English).
Do not answer questions unrelated to the restaurant.

${RESTAURANT_KNOWLEDGE}`;

  const { default: OpenAI } = await import('openai');
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 300,
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages.slice(-6),
    ],
  });

  const reply = completion.choices[0]?.message?.content ?? '';
  return NextResponse.json({ reply });
}
