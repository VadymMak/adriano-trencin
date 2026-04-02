'use client';

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
    const element = document.getElementById(categoryId);
    if (!element) return;

    const header = document.querySelector('header');
    const filterBar = document.querySelector('[data-filter-bar]');

    const headerRect = header?.getBoundingClientRect();
    const filterHeight = filterBar?.getBoundingClientRect().height ?? 0;
    const headerHeight = headerRect?.height ?? 0;
    const headerVisible = headerRect ? headerRect.top >= -1 : false;

    const totalOffset = (headerVisible ? headerHeight : 0) + filterHeight + 16;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({ top: elementTop - totalOffset, behavior: 'smooth' });
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
      {/* Sticky filter bar */}
      <div data-filter-bar className={styles.filterBar}>
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
      <main className={styles.main}>
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
