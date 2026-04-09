// ============================================================
// src/lib/reservation-emails.ts
// Shared email functions — used by:
//   • src/app/api/reservation/route.ts  (WhatsApp flow)
//   • src/app/api/stripe/webhook/route.ts (Stripe flow)
// ============================================================

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  message?: string;
}

const FROM =
  process.env.RESEND_FROM_EMAIL ?? 'Adriano Restaurant <noreply@smartctx.dev>';
const TO_OWNER =
  process.env.RESEND_TO_EMAIL ?? 'adrianorestaurantcafe@gmail.com';

// --- Email to restaurant owner ----------------------------
export async function sendOwnerEmail(data: ReservationData) {
  if (!process.env.RESEND_API_KEY) return;

  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: FROM,
    to: TO_OWNER,
    replyTo: data.email,
    subject: `Nová rezervácia – ${data.name} | ${data.date} ${data.time}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <h2 style="background:#0D1A24;color:#C9A347;padding:20px 24px;margin:0;border-radius:6px 6px 0 0">
          🍽️ Nová rezervácia — Adriano Trenčín
        </h2>
        <div style="border:1px solid #e5e5e5;border-top:none;border-radius:0 0 6px 6px;padding:24px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:120px">Meno</td><td style="padding:8px 0;font-weight:600">${data.name}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Telefón</td><td style="padding:8px 0">${data.phone}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0">${data.email}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Dátum</td><td style="padding:8px 0;font-weight:600">${data.date}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Čas</td><td style="padding:8px 0;font-weight:600">${data.time}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Hostia</td><td style="padding:8px 0">${data.guests}</td></tr>
            ${data.message ? `<tr><td style="padding:8px 0;color:#666;vertical-align:top">Správa</td><td style="padding:8px 0">${data.message.replace(/\n/g, '<br>')}</td></tr>` : ''}
          </table>
          <hr style="margin:20px 0;border:none;border-top:1px solid #e5e5e5">
          <a href="https://wa.me/421949551553" style="background:#25D366;color:#fff;padding:10px 20px;border-radius:4px;text-decoration:none;font-size:14px">
            Odpovedať cez WhatsApp
          </a>
        </div>
      </div>
    `,
  });
}

// --- Confirmation email to guest --------------------------
export async function sendGuestEmail(data: Pick<ReservationData, 'name' | 'email' | 'date' | 'time' | 'guests'>) {
  if (!process.env.RESEND_API_KEY) return;

  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: FROM,
    to: data.email,
    subject: `Potvrdenie rezervácie – Adriano Trenčín`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <h2 style="background:#0D1A24;color:#C9A347;padding:20px 24px;margin:0;border-radius:6px 6px 0 0">
          Ďakujeme, ${data.name}!
        </h2>
        <div style="border:1px solid #e5e5e5;border-top:none;border-radius:0 0 6px 6px;padding:24px">
          <p>Vaša rezervácia bola prijatá. Čoskoro vás budeme kontaktovať na potvrdenie.</p>
          <table style="width:100%;border-collapse:collapse;margin-top:16px">
            <tr><td style="padding:8px 0;color:#666;width:120px">Dátum</td><td style="padding:8px 0;font-weight:600">${data.date}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Čas</td><td style="padding:8px 0;font-weight:600">${data.time}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Hostia</td><td style="padding:8px 0">${data.guests}</td></tr>
          </table>
          <hr style="margin:20px 0;border:none;border-top:1px solid #e5e5e5">
          <p style="color:#666;font-size:14px">
            Adriano Restaurant &amp; Cafe<br>
            Námestie sv. Anny 3, Trenčín<br>
            <a href="tel:+421949551553">+421 949 551 553</a>
          </p>
        </div>
      </div>
    `,
  });
}
