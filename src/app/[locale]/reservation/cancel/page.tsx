import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import styles from './cancel.module.css';

export default async function ReservationCancelPage() {
  const t = await getTranslations('reservationCancel');

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.text}>{t('text')}</p>
        <div className={styles.actions}>
          <Link href="/#reservation" className={styles.btnPrimary}>{t('retry')}</Link>
          <Link href="/" className={styles.btnSecondary}>{t('back')}</Link>
        </div>
      </div>
    </main>
  );
}
