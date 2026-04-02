import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, date, time, guests, message } = body;

  // TODO: integrate Resend when RESEND_API_KEY is set
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: '...', to: 'adrianorestaurantcafe@gmail.com', subject: '...', html: '...' });
  console.log('[Reservation]', { name, phone, email, date, time, guests, message });

  const text = `Rezervácia – ${name}%0AHostia: ${guests}%0ADátum: ${date} ${time}%0ATel: ${phone}%0AEmail: ${email}${message ? `%0ASpráva: ${message}` : ''}`;
  const whatsappUrl = `https://wa.me/421949551553?text=${text}`;

  return NextResponse.json({ success: true, whatsappUrl });
}
