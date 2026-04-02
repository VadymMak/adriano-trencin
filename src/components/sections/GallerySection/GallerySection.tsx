'use client';

import { useTranslations } from 'next-intl';
import styles from './GallerySection.module.css';

const ROW1 = [
  { id: 1, labelIdx: 0 },
  { id: 2, labelIdx: 1 },
  { id: 3, labelIdx: 3 },
] as const;

const ROW2 = [
  { id: 4, labelIdx: 4 },
  { id: 5, labelIdx: 5 },
  { id: 6, labelIdx: 7 },
  { id: 7, labelIdx: 6 },
] as const;

export default function GallerySection() {
  const t = useTranslations('gallery');

  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>{t('label')}</p>
          <h2 className={styles.title}>{t('title')}</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.row1}>
          {ROW1.map((item) => (
            <div
              key={item.id}
              className={`${styles.card} ${styles.cardLarge}`}
              style={{ backgroundImage: `url('/images/gallery/gallery-${item.id}.jpg')` }}
            >
              <div className={styles.overlay}>
                <span className={styles.caption}>{t(`items.${item.labelIdx}`)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.row2}>
          {ROW2.map((item) => (
            <div
              key={item.id}
              className={`${styles.card} ${styles.cardMedium}`}
              style={{ backgroundImage: `url('/images/gallery/gallery-${item.id}.jpg')` }}
            >
              <div className={styles.overlay}>
                <span className={styles.caption}>{t(`items.${item.labelIdx}`)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
