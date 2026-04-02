'use client';

import { useTranslations } from 'next-intl';
import styles from './HeroSection.module.css';

const MENU_ITEMS = [
  { name: 'Bavette Fruti di Mare', price: '14,90€', category: 'Cestoviny' },
  { name: 'Chobotnica na grile',   price: '29,90€', category: 'Morské plody' },
  { name: 'Steak z tuniaka',       price: '22,00€', category: 'Ryby' },
  { name: 'Paella plody mora',     price: '50,00€', category: 'Špeciality' },
  { name: 'Homár s prílohou',      price: '100€',   category: 'Špeciality' },
  { name: 'Krevety na grile',      price: '19,00€', category: 'Morské plody' },
  { name: 'Bavette ADRIANO',       price: '15,50€', category: 'Cestoviny' },
  { name: 'Pizza Adriano',         price: '12,00€', category: 'Pizza' },
];

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <>
      <section
        className={styles.hero}
        style={{
          backgroundImage: `url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Левая колонка */}
        <div className={styles.left}>
          <span className={styles.badge}>{t('badge')}</span>

          <h1 className={styles.logo}>
            <span className={styles.dash}>—</span>
            {t('title')}
            <span className={styles.dash}>—</span>
          </h1>

          <p className={styles.subtitle}>{t('subtitle')}</p>

          <div className={styles.divider} />

          <p className={styles.tagline}>{t('tagline')}</p>

          <div className={styles.buttons}>
            <button className={styles.btnGold}>{t('ctaReservation')}</button>
            <button className={styles.btnOutline}>{t('ctaMenu')}</button>
          </div>
        </div>

        {/* Правая колонка — бесконечный скролл */}
        <div className={styles.right}>
          <div className={styles.scrollTrack}>
            {[...MENU_ITEMS, ...MENU_ITEMS].map((item, i) => (
              <div key={i} className={styles.card}>
                <span className={styles.cardCategory}>{item.category}</span>
                <span className={styles.cardName}>{item.name}</span>
                <span className={styles.cardPrice}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <a
        className={styles.whatsapp}
        href="https://wa.me/421949551553"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kontaktujte nás cez WhatsApp"
      >
        <svg
          className={styles.whatsappIcon}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
