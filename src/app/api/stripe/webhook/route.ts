// ============================================================
// src/app/api/stripe/webhook/route.ts
// Handles Stripe webhook events
// On checkout.session.completed → send Resend emails
// Pattern: vendly-storefront / src/app/api/webhooks/stripe/route.ts
// ============================================================

import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { sendOwnerEmail, sendGuestEmail } from '@/lib/reservation-emails';
import type Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headersList = await headers();
  const sig = headersList.get('stripe-signature');

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: 'Missing signature or webhook secret' },
      { status: 400 },
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;

      if (session.payment_status !== 'paid') break;

      const { name, phone, email, date, time, guests, message } =
        session.metadata ?? {};

      if (!name || !email) {
        console.error('Missing metadata in session', session.id);
        break;
      }

      console.log(`✅ Deposit paid — ${name} ${date} ${time}`);

      await Promise.allSettled([
        sendOwnerEmail({ name, phone: phone ?? '', email, date: date ?? '', time: time ?? '', guests: guests ?? '', message }),
        sendGuestEmail({ name, email, date: date ?? '', time: time ?? '', guests: guests ?? '' }),
      ]);

      break;
    }

    case 'checkout.session.expired': {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`⏰ Session expired — ${session.id}`);
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
