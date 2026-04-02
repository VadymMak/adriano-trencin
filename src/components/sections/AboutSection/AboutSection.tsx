'use client';

import { useTranslations } from 'next-intl';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Левая — фото */}
        <div className={styles.imageCol}>
          <div className={styles.imagePlaceholder} />
        </div>

        {/* Правая — текст */}
        <div className={styles.content}>
          <span className={styles.label}>{t('label')}</span>
          <h2 className={styles.title}>{t('title')}</h2>
          <div className={styles.divider} />
          <p className={styles.text}>{t('text')}</p>

          <div className={styles.stats}>
            {(
              [
                { value: t('stat1Value'), label: t('stat1Label') },
                { value: t('stat2Value'), label: t('stat2Label') },
                { value: t('stat3Value'), label: t('stat3Label') },
              ] as const
            ).map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
