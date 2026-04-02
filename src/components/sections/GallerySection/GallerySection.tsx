'use client';

import { useTranslations } from 'next-intl';
import styles from './GallerySection.module.css';

// size: 'large'=400px, 'medium'=280px, 'small'=200px
const ITEMS = [
  { id: 1,  size: 'large'  },
  { id: 2,  size: 'medium' },
  { id: 3,  size: 'medium' },
  { id: 4,  size: 'large'  },
  { id: 5,  size: 'small'  },
  { id: 6,  size: 'medium' },
  { id: 7,  size: 'small'  },
  { id: 8,  size: 'large'  },
  { id: 9,  size: 'medium' },
  { id: 10, size: 'small'  },
  { id: 11, size: 'medium' },
  { id: 12, size: 'small'  },
] as const;

const ITEM_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

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

        <div className={styles.grid}>
          {ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`${styles.card} ${styles[item.size]}`}
              style={{ backgroundImage: `url('/images/gallery/gallery-${item.id}.jpg')` }}
            >
              <div className={styles.overlay}>
                <span className={styles.caption}>{t(`items.${ITEM_INDICES[idx]}`)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
