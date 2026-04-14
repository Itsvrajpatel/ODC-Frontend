import styles from './Footer.module.css';

const links = {
  Explore: [
    { label: 'How ODC works', href: '#' },
    { label: 'Who it\'s for', href: '#' },
    { label: 'Safety & EWD', href: '#' },
  ],
  Company: [
    { label: 'About ODC', href: '#' },
    { label: 'Insights & Updates', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Support', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Main Footer Content */}
      <div className={styles.main}>

        {/* Left: Branding */}
        <div className={styles.brand}>
          {/* Logo */}
          <div className={styles.logoRow}>
            <div className={styles.logoIcon}>
              <div className={`${styles.ring} ${styles.ring1}`}></div>
              <div className={`${styles.ring} ${styles.ring2}`}></div>
              <div className={`${styles.ring} ${styles.ring3}`}></div>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>ODC</span>
              <span className={styles.logoSub}>Owner Driver Collective</span>
            </div>
          </div>

          <p className={styles.tagline}>
            A freight operations platform built for safer,<br />compliant road transport.
          </p>

          <div className={styles.contactList}>
            <a href="tel:+61123456789" className={styles.contactLink}>
              <span className={styles.contactIconWrap}>📞</span>
              +61 12 345 678
            </a>
            <a href="mailto:info@ownerdrivercollective.com.au" className={styles.contactLink}>
              <span className={styles.contactIconWrap}>✉️</span>
              info@odc.com.au
            </a>
          </div>
        </div>

        {/* Right: Nav Columns */}
        <div className={styles.navGrid}>
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className={styles.navCol}>
              <h4 className={styles.navHeading}>{section}</h4>
              <ul className={styles.navList}>
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className={styles.navLink}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Middle bar: Legal + Social */}
      <div className={styles.legalBar}>
        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>Privacy Policy</a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.legalLink}>Terms & Conditions</a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.legalLink}>Accessibility</a>
        </div>

        <div className={styles.socials}>
          {/* Instagram */}
          <a href="#" className={styles.socialBtn} aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" className={styles.socialBtn} aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom bar: Copyright */}
      <div className={styles.bottomBar}>
        <p>© 2026 Owner Driver Collective. All rights reserved.</p>
      </div>

    </footer>
  );
}
