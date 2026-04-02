'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './Header.module.css';

const LOCALE_OPTIONS = [
  { code: 'sk', label: 'SK' },
  { code: 'cs', label: 'CS' },
  { code: 'de', label: 'DE' },
  { code: 'hr', label: 'HR' },
  { code: 'en', label: 'EN' },
] as const;

const NAV_KEYS = ['home', 'menu', 'about', 'gallery', 'blog', 'contact'] as const;
const NAV_HREFS: Record<string, string> = {
  home:    '/',
  about:   '#about',
  gallery: '#gallery',
  contact: '#contact',
};

function BurgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 7h12M7 1c1.7 1.7 2.7 3.7 2.7 6s-1 4.3-2.7 6c-1.7-1.7-2.7-3.7-2.7-6s1-4.3 2.7-6z" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2.5 3.75l2.5 2.5 2.5-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [hidden, setHidden]     = useState(false);
  const lastScrollY             = useRef(0);
  const t                       = useTranslations('nav');
  const currentLocale             = useLocale();

  function getHref(key: string): string {
    if (key === 'menu') return `/${currentLocale}/menu`;
    if (key === 'blog') return `/${currentLocale}/blog`;
    return NAV_HREFS[key] ?? '/';
  }
  const router                    = useRouter();
  const pathname                  = usePathname();

  // Vendly pattern: useRef for lastScrollY — no re-render on every scroll tick
  useEffect(() => {
    const THRESHOLD = 10;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY.current) < THRESHOLD) return;
      setHidden(currentY > lastScrollY.current && currentY > 80);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const close = () => { setLangOpen(false); };
    if (langOpen) document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [langOpen]);

  const switchLocale = useCallback((code: string) => {
    setLangOpen(false);
    setMenuOpen(false);
    const segments = pathname.split('/');
    segments[1] = code;
    router.push(segments.join('/') || '/');
  }, [pathname, router]);

  return (
    <header className={`${styles.header} ${hidden ? styles.headerHidden : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoDash}>—</span>
          <span className={styles.logoText}>ADRIANO</span>
          <span className={styles.logoDash}>—</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {NAV_KEYS.map((key) => (
            <a key={key} href={getHref(key)} className={styles.navLink}>
              {t(key)}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className={styles.actions}>
          {/* Language switcher */}
          <div className={styles.langWrap} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.langBtn}
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Zmeniť jazyk"
            >
              <GlobeIcon />
              <span>{currentLocale.toUpperCase()}</span>
              <ChevronIcon />
            </button>
            {langOpen && (
              <div className={styles.langDropdown}>
                {LOCALE_OPTIONS.map(({ code, label }) => (
                  <button
                    key={code}
                    className={`${styles.langOption} ${currentLocale === code ? styles.langOptionActive : ''}`}
                    onClick={() => switchLocale(code)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a href="#reservation" className={styles.ctaBtn}>
            {t('reservation')}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
        >
          {menuOpen ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {NAV_KEYS.map((key) => (
              <a
                key={key}
                href={getHref(key)}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {t(key)}
              </a>
            ))}
            <a
              href="#reservation"
              className={styles.mobileCta}
              onClick={() => setMenuOpen(false)}
            >
              {t('reservation')}
            </a>
          </nav>

          {/* Mobile lang pills */}
          <div className={styles.mobileLangs}>
            {LOCALE_OPTIONS.map(({ code, label }) => (
              <button
                key={code}
                className={`${styles.mobileLangPill} ${currentLocale === code ? styles.mobileLangPillActive : ''}`}
                onClick={() => switchLocale(code)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
