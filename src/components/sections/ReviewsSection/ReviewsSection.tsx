'use client';

import { useTranslations } from 'next-intl';
import styles from './ReviewsSection.module.css';

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const STARS = [1, 2, 3, 4, 5];

export default function ReviewsSection() {
  const t = useTranslations('reviews');

  const items = [0, 1, 2, 3].map((i) => ({
    text:   t(`items.${i}.text`),
    author: t(`items.${i}.author`),
  }));

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.label}>{t('label')}</span>
          <h2 className={styles.title}>{t('title')}</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid}>
          {items.map(({ text, author }) => (
            <article key={author} className={styles.card}>
              <div className={styles.stars}>
                {STARS.map((s) => (
                  <span key={s} className={styles.star}><StarIcon /></span>
                ))}
              </div>
              <p className={styles.text}>{text}</p>
              <footer className={styles.footer}>
                <span className={styles.author}>{author}</span>
                <span className={styles.source}>Google</span>
              </footer>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
