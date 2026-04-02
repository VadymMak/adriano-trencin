'use client';

import { useTranslations } from 'next-intl';
import styles from './InstagramSection.module.css';

const IG_INDICES = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export default function InstagramSection() {
  const t = useTranslations('instagram');

  return (
    <section className={styles.section} id="instagram">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>{t('label')}</p>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {IG_INDICES.map((n) => (
            <a
              key={n}
              href="https://instagram.com/adrianorestaurantcafe"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ backgroundImage: `url('/images/instagram/ig-${n}.jpg')` }}
              aria-label={`Instagram post ${n}`}
            >
              <div className={styles.overlay}>
                <span className={styles.heart}><HeartIcon /></span>
              </div>
              <div className={styles.igIcon}>
                <InstagramIcon size={20} />
              </div>
            </a>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://instagram.com/adrianorestaurantcafe"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.followBtn}
          >
            <InstagramIcon size={18} />
            {t('followBtn')}
          </a>
        </div>
      </div>
    </section>
  );
}
