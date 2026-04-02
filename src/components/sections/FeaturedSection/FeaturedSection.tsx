'use client';

import { useTranslations } from 'next-intl';
import styles from './FeaturedSection.module.css';

const ITEMS = [
  { id: 'chobotnica',     dishKey: 'chobotnica',     category: 'Morské plody', price: '29,90€' },
  { id: 'bavette-fruti',  dishKey: 'bavette-fruti',  category: 'Cestoviny',    price: '14,90€' },
  { id: 'homar',          dishKey: 'homar',          category: 'Špeciality',   price: '100€'   },
  { id: 'tuna-steak',     dishKey: 'tuna',           category: 'Ryby',         price: '22,00€' },
  { id: 'paella',         dishKey: 'paella',         category: 'Špeciality',   price: '50,00€' },
  { id: 'bavette-adriano',dishKey: 'bavette-adriano',category: 'Cestoviny',    price: '15,50€' },
  { id: 'pizza-adriano',  dishKey: 'pizza-adriano',  category: 'Pizza',        price: '12,00€' },
  { id: 'fuzi-hluzovka',  dishKey: 'fuzi',           category: 'Cestoviny',    price: '18,90€' },
] as const;

export default function FeaturedSection() {
  const t = useTranslations('featured');

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.label}>{t('label')}</span>
          <h2 className={styles.title}>{t('title')}</h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardImage}>
                <span>{item.category}</span>
              </div>
              <div className={styles.body}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.name}>{t(`dishes.${item.dishKey}.name`)}</h3>
                <p className={styles.description}>{t(`dishes.${item.dishKey}.desc`)}</p>
                <div className={styles.footer}>
                  <span className={styles.price}>{item.price}</span>
                  <button className={styles.orderBtn}>{t('order')}</button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
