import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import styles from './success.module.css';

export default async function ReservationSuccessPage() {
  const t = await getTranslations('reservationSuccess');

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.text}>{t('text')}</p>
        <Link href="/" className={styles.btn}>{t('back')}</Link>
      </div>
    </main>
  );
}
