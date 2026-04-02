import { useTranslations } from 'next-intl';
import styles from './blog.module.css';

export default function BlogPage() {
  const t = useTranslations('blog');

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <span className={styles.label}>{t('label')}</span>
        <h1 className={styles.title}>{t('title')}</h1>
        <div className={styles.divider} />
        <p className={styles.coming}>{t('comingSoon')}</p>
      </div>
    </main>
  );
}
