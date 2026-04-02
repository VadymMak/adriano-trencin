'use client';

import { useTranslations } from 'next-intl';
import styles from './ContactSection.module.css';

function AddressIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Left: info ── */}
          <div className={styles.info}>
            <p className={styles.label}>{t('label')}</p>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.divider} />

            <div className={styles.blocks}>

              <a
                href="https://maps.google.com/?q=N%C3%A1mestie+sv.+Anny+3,+Tren%C4%8D%C3%ADn"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.block}
              >
                <span className={styles.blockIcon}><AddressIcon /></span>
                <div>
                  <p className={styles.blockTitle}>{t('addressTitle')}</p>
                  <p className={styles.blockText}>{t('address1')}</p>
                  <p className={styles.blockText}>{t('address2')}</p>
                </div>
              </a>

              <a href="tel:+421949551553" className={styles.block}>
                <span className={styles.blockIcon}><PhoneIcon /></span>
                <div>
                  <p className={styles.blockTitle}>{t('phoneTitle')}</p>
                  <p className={styles.blockText}>{t('phone')}</p>
                </div>
              </a>

              <div className={styles.block}>
                <span className={styles.blockIcon}><ClockIcon /></span>
                <div>
                  <p className={styles.blockTitle}>{t('hoursTitle')}</p>
                  <p className={styles.blockText}>{t('hours1')}</p>
                  <p className={styles.blockText}>{t('hours2')}</p>
                  <p className={styles.blockText}>{t('hours3')}</p>
                  <p className={styles.blockNote}>{t('hoursNote')}</p>
                </div>
              </div>

            </div>

            <div className={styles.socials}>
              <a
                href="https://instagram.com/adrianorestaurantcafe"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <InstagramIcon />
                {t('instagram')}
              </a>
              <a
                href="https://www.facebook.com/adrianorestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <FacebookIcon />
                {t('facebook')}
              </a>
              <a
                href="https://wa.me/421949551553"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialBtn} ${styles.socialBtnWhatsApp}`}
              >
                <WhatsAppIcon />
                {t('whatsapp')}
              </a>
            </div>
          </div>

          {/* ── Right: map ── */}
          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.123!2d18.044!3d48.894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47194547f0000001%3A0x1234!2sN%C3%A1mestie+sv.+Anny+3%2C+Tren%C4%8D%C3%ADn!5e0!3m2!1ssk!2ssk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Adriano Restaurant na mape"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
