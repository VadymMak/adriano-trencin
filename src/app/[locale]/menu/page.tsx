'use client';

declare global {
  interface Window { __programmaticScroll: boolean; }
}

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import MenuCard from '@/components/ui/MenuCard/MenuCard';
import { MENU_SECTIONS, FILTER_CATEGORIES } from '@/data/menu';
import styles from './menu.module.css';

const ALL = 'all';

export default function MenuPage() {
  const t = useTranslations('menu');
  const [active, setActive] = useState<string>(ALL);

  const FILTER_IDS = [ALL, ...FILTER_CATEGORIES];

  const scrollToCategory = (categoryId: string) => {
    const el = document.getElementById(categoryId);
    if (!el) return;
    const cs = getComputedStyle(document.documentElement);
    const headerVisible = parseFloat(cs.getPropertyValue('--header-visible')) || 1;
    const headerHeight  = parseInt(cs.getPropertyValue('--header-height'))    || 64;
    const filterHeight  = parseInt(cs.getPropertyValue('--filter-height'))    || 48;
    const offset = headerVisible * headerHeight + filterHeight + 16;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    });
    window.__programmaticScroll = true;
    setTimeout(() => { window.__programmaticScroll = false; }, 800);
  };

  function handleFilter(id: string) {
    setActive(id);
    if (id === ALL) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToCategory(id);
    }
  }

  return (
    <>
      {/* Fixed filter bar */}
      <div
        className={styles.filterBar}
        style={{
          position: 'fixed',
          top: 'calc(var(--header-visible, 1) * var(--header-height, 64px))',
          left: 0,
          right: 0,
          zIndex: 99,
          transition: 'top 0.3s ease',
        }}
      >
        <div className={styles.filterInner}>
          {FILTER_IDS.map((id) => (
            <button
              key={id}
              className={`${styles.filterBtn} ${active === id ? styles.filterBtnActive : ''}`}
              onClick={() => handleFilter(id)}
            >
              {t(`categories.${id}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Page content */}
      <main
        className={styles.main}
        style={{ paddingTop: 'calc(var(--header-height, 64px) + var(--filter-height, 48px))' }}
      >
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <p className={styles.pageLabel}>{t('label')}</p>
            <h1 className={styles.pageTitle}>{t('title')}</h1>
            <div className={styles.pageDivider} />
          </div>

          {MENU_SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={styles.section}
            >
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{t(`categories.${section.id}`)}</h2>
                <div className={styles.sectionDivider} />
              </div>

              <div className={styles.grid}>
                {section.dishes.map((dish) => (
                  <MenuCard
                    key={dish.id}
                    id={dish.id}
                    category={dish.category}
                    categoryLabel={t(`categories.${dish.category}`)}
                    name={dish.name}
                    ingredients={dish.ingredients}
                    weight={dish.weight}
                    price={dish.price}
                    allergens={dish.allergens}
                  />
                ))}
              </div>
            </section>
          ))}

          {/* Allergens legend */}
          <div className={styles.allergens}>
            <p className={styles.allergensTitle}>{t('allergensTitle')}</p>
            <p className={styles.allergensList}>{t('allergensList')}</p>
          </div>
        </div>
      </main>
    </>
  );
}
