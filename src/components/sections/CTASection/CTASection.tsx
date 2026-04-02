'use client';

import { useTranslations } from 'next-intl';
import styles from './CTASection.module.css';

export default function CTASection() {
  const t = useTranslations('cta');

  function scrollToReservation() {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.subtitle}>{t('subtitle')}</p>
        <div className={styles.buttons}>
          <button className={styles.reserveBtn} onClick={scrollToReservation}>
            {t('reserveBtn')}
          </button>
          <a
            href="https://wa.me/421949551553"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            {t('whatsappBtn')}
          </a>
        </div>
      </div>
    </section>
  );
}
