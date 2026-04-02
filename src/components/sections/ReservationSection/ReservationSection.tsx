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

const EMPTY: FormData = { name: '', phone: '', email: '', date: '', time: '', guests: '', message: '' };

export default function ReservationSection() {
  const t = useTranslations('reservation');

  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const GUEST_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
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

  const f = t('fields') as unknown as Record<string, string>;

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
                    <label>{f.name}</label>
                    <input
                      type="text"
                      placeholder={f.namePlaceholder}
                      value={form.name}
                      onChange={e => change('name', e.target.value)}
                    />
                  </div>
                  <div className={errors.phone ? `${styles.field} ${styles.fieldError}` : styles.field}>
                    <label>{f.phone}</label>
                    <input
                      type="tel"
                      placeholder={f.phonePlaceholder}
                      value={form.phone}
                      onChange={e => change('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label>{f.email}</label>
                  <input
                    type="email"
                    placeholder={f.emailPlaceholder}
                    value={form.email}
                    onChange={e => change('email', e.target.value)}
                    className={errors.email ? styles.fieldError : ''}
                  />
                </div>

                <div className={styles.row}>
                  <div className={errors.date ? `${styles.field} ${styles.fieldError}` : styles.field}>
                    <label>{f.date}</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={e => change('date', e.target.value)}
                    />
                  </div>
                  <div className={errors.time ? `${styles.field} ${styles.fieldError}` : styles.field}>
                    <label>{f.time}</label>
                    <input
                      type="time"
                      value={form.time}
                      onChange={e => change('time', e.target.value)}
                    />
                  </div>
                </div>

                <div className={errors.guests ? `${styles.field} ${styles.fieldError}` : styles.field}>
                  <label>{f.guests}</label>
                  <select value={form.guests} onChange={e => change('guests', e.target.value)}>
                    <option value="" disabled>—</option>
                    {GUEST_INDICES.map((i) => (
                      <option key={i} value={t(`guestOptions.${i}`)}>{t(`guestOptions.${i}`)}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label>{f.message}</label>
                  <textarea
                    placeholder={f.messagePlaceholder}
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
                <p className={styles.deposit}>{t('deposit')}</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
