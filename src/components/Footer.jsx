import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

const socials = [
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com' },
  { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/919876543210' },
  { icon: '👍', label: 'Facebook', href: 'https://facebook.com' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>
              <span className={styles.sparkle}>✦</span> Nail Art Studio
            </h3>
            <p className={styles.tagline}>Where beauty meets artistry</p>
            <p className={styles.brandDesc}>
              Premium nail artistry in the heart of Bangalore.
              Crafting beauty, one nail at a time.
            </p>
          </div>

          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Follow Us</h4>
            <div className={styles.socialList}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  <span>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
            <p className={styles.contactFooter}>
              📞 +91 98765 43210<br />
              ✉️ hello@nailartstudio.in
            </p>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 Nail Art Studio. All rights reserved.</p>
          <p className={styles.madeWith}>Crafted with ♥ by Khushab</p>
        </div>
      </div>
    </footer>
  )
}
