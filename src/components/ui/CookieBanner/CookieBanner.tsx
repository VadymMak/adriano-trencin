'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import styles from './CookieBanner.module.css';

const STORAGE_KEY = 'cookie-consent';

export function CookieBanner() {
  const t = useTranslations('cookieBanner');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only if no choice saved yet
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'all');
    setVisible(false);
  }

  function necessary() {
    localStorage.setItem(STORAGE_KEY, 'necessary');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <p className={styles.text}>{t('text')}</p>
      <div className={styles.actions}>
        <button className={styles.btnPrimary} onClick={accept}>
          {t('acceptAll')}
        </button>
        <button className={styles.btnSecondary} onClick={necessary}>
          {t('necessary')}
        </button>
      </div>
    </div>
  );
}
