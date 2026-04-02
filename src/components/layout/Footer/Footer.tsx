import styles from './Footer.module.css';

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Domov',       href: '/' },
  { label: 'Menu',        href: '#menu' },
  { label: 'O nás',       href: '#about' },
  { label: 'Galéria',     href: '#gallery' },
  { label: 'Rezervácia',  href: '#reservation' },
  { label: 'Kontakt',     href: '#contact' },
];

const HOURS = [
  { days: 'Pondelok – Piatok', time: '11:00 – 22:00' },
  { days: 'Sobota',            time: '11:00 – 23:00' },
  { days: 'Nedeľa',            time: '12:00 – 21:00' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* Колонка 1 — Бренд */}
          <div className={styles.col}>
            <div className={styles.brandLogo}>
              <span className={styles.brandDash}>—</span>
              <span className={styles.brandName}>ADRIANO</span>
              <span className={styles.brandDash}>—</span>
            </div>
            <p className={styles.brandDesc}>
              Stredomorská kuchyňa, čerstvé morské plody a vína z Istrie v srdci Trenčína.
            </p>
            <div className={styles.socials}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Колонка 2 — Навигация */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigácia</h4>
            <nav className={styles.navList}>
              {NAV_LINKS.map(({ label, href }) => (
                <a key={label} href={href} className={styles.navLink}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Колонка 3 — Контакты */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Kontakt</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}><LocationIcon /></span>
                <span>Námestie sv. Anny 3,<br />Trenčín</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}><PhoneIcon /></span>
                <a href="tel:+421949551553" className={styles.contactLink}>0949 551 553</a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}><MailIcon /></span>
                <a href="mailto:adrianorestaurantcafe@gmail.com" className={styles.contactLink}>
                  adrianorestaurantcafe@gmail.com
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/421949551553"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          {/* Колонка 4 — Часы работы */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Otváracie hodiny</h4>
            <ul className={styles.hoursList}>
              {HOURS.map(({ days, time }) => (
                <li key={days} className={styles.hoursItem}>
                  <span className={styles.hoursDays}>{days}</span>
                  <span className={styles.hoursTime}>{time}</span>
                </li>
              ))}
            </ul>
            <p className={styles.hoursNote}>
              Kuchyňa zatvára 30 min. pred záverom.
            </p>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <div className={styles.goldLine} />
          <div className={styles.copyright}>
            <span>© {year} Adriano Trenčín. Všetky práva vyhradené.</span>
            <span className={styles.copyrightSep}>·</span>
            <span className={styles.copyrightMuted}>Námestie sv. Anny 3, Trenčín</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
