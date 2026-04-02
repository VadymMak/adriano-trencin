'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import styles from './ReservationSection.module.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

const REQUIRED: (keyof FormData)[] = ['name', 'phone', 'email', 'date', 'time', 'guests'];

// numeric guest counts matching guestOptions indices: index 0=1 guest, ..., index 8=9 guests, index 9=10+
const GUEST_COUNTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

const EMPTY: FormData = { name: '', phone: '', email: '', date: '', time: '', guests: '', message: '' };

export default function ReservationSection() {
  const t = useTranslations('reservation');

  const [form, setForm] = useState<FormData>(EMPTY);
  const [guests, setGuests] = useState(0);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const HOURS_INDICES = [0, 1, 2] as const;

  function validate(): boolean {
    const next: Partial<Record<keyof FormData, boolean>> = {};
    for (const key of REQUIRED) {
      if (!form[key].trim()) next[key] = true;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function change(key: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: false }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setWhatsappUrl(data.whatsappUrl);
        setSuccess(true);
        setForm(EMPTY);
      }
    } catch {
      alert(t('errorText'));
    } finally {
      setSubmitting(false);
    }
  }

  function buildWhatsappUrl(): string {
    const text = `Rezervácia – ${form.name || '...'}%0AHostia: ${form.guests || '?'}%0ADátum: ${form.date || '?'} ${form.time || '?'}%0ATel: ${form.phone || '?'}%0AEmail: ${form.email || '?'}${form.message ? `%0ASpráva: ${form.message}` : ''}`;
    return `https://wa.me/421949551553?text=${text}`;
  }

  return (
    <section className={styles.section} id="reservation">
      <div className={styles.container}>
        <p className={styles.label}>{t('label')}</p>
        <h2 className={styles.title}>{t('title')}</h2>

        <div className={styles.grid}>
          {/* ─── Form ─── */}
          <div>
            {success ? (
              <div className={styles.success}>
                <p className={styles.successTitle}>{t('successTitle')}</p>
                <p className={styles.successText}>{t('successText')}</p>
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                    style={{ display: 'inline-flex', marginTop: 20 }}
                  >
                    {t('whatsappBtn')}
                  </a>
                )}
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <div className={errors.name ? `${styles.field} ${styles.fieldError}` : styles.field}>
                    <label>{t('fields.name')}</label>
                    <input
                      type="text"
                      placeholder={t('fields.namePlaceholder')}
                      value={form.name}
                      onChange={e => change('name', e.target.value)}
                    />
                  </div>
                  <div className={errors.phone ? `${styles.field} ${styles.fieldError}` : styles.field}>
                    <label>{t('fields.phone')}</label>
                    <input
                      type="tel"
                      placeholder={t('fields.phonePlaceholder')}
                      value={form.phone}
                      onChange={e => change('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className={errors.email ? `${styles.field} ${styles.fieldError}` : styles.field}>
                  <label>{t('fields.email')}</label>
                  <input
                    type="email"
                    placeholder={t('fields.emailPlaceholder')}
                    value={form.email}
                    onChange={e => change('email', e.target.value)}
                  />
                </div>

                <div className={styles.row}>
                  <div className={errors.date ? `${styles.field} ${styles.fieldError}` : styles.field}>
                    <label>{t('fields.date')}</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={e => change('date', e.target.value)}
                    />
                  </div>
                  <div className={errors.time ? `${styles.field} ${styles.fieldError}` : styles.field}>
                    <label>{t('fields.time')}</label>
                    <input
                      type="time"
                      placeholder={t('fields.timePlaceholder')}
                      value={form.time}
                      onChange={e => change('time', e.target.value)}
                    />
                  </div>
                </div>

                <div className={errors.guests ? `${styles.field} ${styles.fieldError}` : styles.field}>
                  <label>{t('fields.guests')}</label>
                  <select
                    value={guests === 0 ? '' : guests}
                    onChange={e => {
                      const count = Number(e.target.value);
                      setGuests(count);
                      change('guests', t(`guestOptions.${count - 1}`));
                    }}
                  >
                    <option value="" disabled>{t('fields.guestsPlaceholder')}</option>
                    {GUEST_COUNTS.map((count, i) => (
                      <option key={count} value={count}>{t(`guestOptions.${i}`)}</option>
                    ))}
                  </select>
                </div>

                {guests > 0 && guests <= 2 && (
                  <div className={`${styles.depositHint} ${styles.depositHintNone}`}>
                    {t('depositNone')}
                  </div>
                )}
                {guests >= 3 && guests <= 5 && (
                  <div className={`${styles.depositHint} ${styles.depositHintPaid}`}>
                    {t('depositSmall')}
                  </div>
                )}
                {guests >= 6 && (
                  <div className={`${styles.depositHint} ${styles.depositHintPaid}`}>
                    {t('depositLarge')}
                  </div>
                )}

                <div className={styles.field}>
                  <label>{t('fields.message')}</label>
                  <textarea
                    placeholder={t('fields.messagePlaceholder')}
                    value={form.message}
                    onChange={e => change('message', e.target.value)}
                  />
                </div>

                <div className={styles.actions}>
                  <button type="submit" className={styles.submitBtn} disabled={submitting}>
                    {submitting ? t('submitting') : t('submitBtn')}
                  </button>
                  <a
                    href={buildWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                  >
                    {t('whatsappBtn')}
                  </a>
                </div>

                <p className={styles.confirm}>{t('confirm')}</p>

                <div className={styles.cancelPolicy}>
                  <p>{t('cancel24h')}</p>
                  <p>{t('cancel12h')}</p>
                  <p>{t('cancelNoShow')}</p>
                </div>
              </form>
            )}
          </div>

          {/* ─── Info column ─── */}
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <h3>{t('hours')}</h3>
              {HOURS_INDICES.map((i) => (
                <p key={i}>{t(`hoursRows.${i}`)}</p>
              ))}
            </div>

            <div className={styles.divider} />

            <div className={styles.infoBlock}>
              <h3>{t('label')}</h3>
              <p>{t('address')}</p>
              <p>
                <a href={`tel:${t('phone2').replace(/\s/g, '')}`}>{t('phone2')}</a>
              </p>
              <p>
                <a href={`mailto:${t('emailInfo')}`}>{t('emailInfo')}</a>
              </p>
            </div>

            <div className={styles.divider} />

            <div className={styles.groupBlock}>
              <h3>{t('groupTitle')}</h3>
              <p>{t('groupText')}</p>
              <a
                href="https://wa.me/421949551553"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.groupWhatsappBtn}
              >
                {t('groupBtn')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
