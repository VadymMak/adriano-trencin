import { getTranslations } from 'next-intl/server';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import styles from './contact.module.css';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>{t('label')}</p>
          <h1 className={styles.heroTitle}>{t('pageTitle')}</h1>
          <p className={styles.heroSubtitle}>{t('pageSubtitle')}</p>
        </div>
      </div>
      <ContactSection />
    </>
  );
}
