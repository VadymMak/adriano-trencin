import { getTranslations, getLocale } from 'next-intl/server';
import styles from './about.module.css';

export default async function AboutPage() {
  const t      = await getTranslations('about');
  const locale = await getLocale();

  return (
    <>
      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>{t('heroLabel')}</p>
          <h1 className={styles.heroTitle}>{t('heroTitle')}</h1>
          <p className={styles.heroSubtitle}>{t('heroSubtitle')}</p>
        </div>
      </div>

      {/* ── Section 1: Story ── */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div>
              <p className={styles.storyLabel}>{t('label')}</p>
              <h2 className={styles.storyTitle}>{t('storyTitle')}</h2>
              <div className={styles.storyDivider} />
              <p className={styles.storyText}>{t('storyP1')}</p>
              <p className={styles.storyText}>{t('storyP2')}</p>
              <p className={styles.storyText}>{t('storyP3')}</p>
              <p className={styles.storyText}>{t('storyP4')}</p>
            </div>
            <div className={styles.storyPhoto} role="img" aria-label={t('storyTitle')} />
          </div>
        </div>
      </section>

      {/* ── Section 2: Stats ── */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <p className={styles.statsTitle}>{t('statsTitle')}</p>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <p className={styles.statValue}>{t('stat1Value')}</p>
              <p className={styles.statLabel}>{t('stat1Label')}</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statValue}>{t('stat2Value')}</p>
              <p className={styles.statLabel}>{t('stat2Label')}</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statValue}>{t('stat3Value')}</p>
              <p className={styles.statLabel}>{t('stat3Label')}</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statValue}>{t('stat4Value')}</p>
              <p className={styles.statLabel}>{t('stat4Label')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Cuisine ── */}
      <section className={styles.cuisine}>
        <div className={styles.container}>
          <div className={styles.cuisineHeader}>
            <p className={styles.cuisineLabel}>{t('cuisineLabel')}</p>
            <h2 className={styles.cuisineTitle}>{t('cuisineTitle')}</h2>
          </div>
          <div className={styles.cuisineCards}>
            <div className={styles.cuisineCard}>
              <div className={styles.cuisineIcon}>🦐</div>
              <h3 className={styles.cuisineCardTitle}>{t('cuisine1Title')}</h3>
              <p className={styles.cuisineCardText}>{t('cuisine1Text')}</p>
            </div>
            <div className={styles.cuisineCard}>
              <div className={styles.cuisineIcon}>🍝</div>
              <h3 className={styles.cuisineCardTitle}>{t('cuisine2Title')}</h3>
              <p className={styles.cuisineCardText}>{t('cuisine2Text')}</p>
            </div>
            <div className={styles.cuisineCard}>
              <div className={styles.cuisineIcon}>🍷</div>
              <h3 className={styles.cuisineCardTitle}>{t('cuisine3Title')}</h3>
              <p className={styles.cuisineCardText}>{t('cuisine3Text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Team ── */}
      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.teamHeader}>
            <p className={styles.teamLabel}>{t('teamLabel')}</p>
            <h2 className={styles.teamTitle}>{t('teamTitle')}</h2>
            <p className={styles.teamText}>{t('teamText')}</p>
          </div>
          <div className={styles.teamPhoto}>
            <span className={styles.teamPhotoPlaceholder}>foto tímu</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <p className={styles.ctaTitle}>{t('ctaTitle')}</p>
          <a href={`/${locale}/#reservation`} className={styles.ctaBtn}>
            {t('ctaBtn')}
          </a>
        </div>
      </section>
    </>
  );
}
