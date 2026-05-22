import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import styles from './BookPage.module.css'

const WA_LINK =
  "https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20Nail%20Art%20Studio."

function WhatsAppLogo({ fill = '#25D366', size = 56 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={size} height={size} aria-hidden="true">
      <path
        fill={fill}
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      />
    </svg>
  )
}

const infoPills = [
  { icon: '📍', text: 'Koramangala, Bangalore' },
  { icon: '🕐', text: 'Mon–Sat: 10AM – 8PM' },
  { icon: '⚡', text: 'Instant Confirmation' },
]

export default function BookPage() {
  return (
    <PageTransition>
      <section className={styles.section}>
        {/* Hero Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.tag}>
            <span className={styles.tagLine} />
            GET IN TOUCH
            <span className={styles.tagLine} />
          </div>
          <h1 className={styles.title}>Book Your Appointment</h1>
          <p className={styles.subtitle}>
            The easiest way to book is through WhatsApp. We'll confirm your slot within minutes.
          </p>
        </motion.div>

        {/* WhatsApp CTA Card */}
        <motion.div
          className={styles.ctaCard}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={styles.waLogo}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <WhatsAppLogo fill="#25D366" size={56} />
          </motion.div>

          <h2 className={styles.cardTitle}>Chat With Us on WhatsApp</h2>
          <p className={styles.cardSubtext}>
            Tell us your preferred service, date, and time. We'll get back to you instantly.
          </p>

          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waButton}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(37,211,102,0.38)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            Open WhatsApp
          </motion.a>
        </motion.div>

        {/* Info Pills */}
        <motion.div
          className={styles.pills}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {infoPills.map(p => (
            <div key={p.text} className={styles.pill}>
              <span>{p.icon}</span>
              {p.text}
            </div>
          ))}
        </motion.div>

        {/* Direct Contact */}
        <motion.div
          className={styles.directContact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.directLabel}>Or reach us directly</p>
          <div className={styles.directLinks}>
            <a href="tel:+919876543210" className={styles.directLink}>
              📞 +91 98765 43210
            </a>
            <span className={styles.directDivider}>·</span>
            <a href="mailto:hello@nailartstudio.in" className={styles.directLinkGold}>
              ✉️ hello@nailartstudio.in
            </a>
          </div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          className={styles.mapWrapper}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0174!2d77.6254!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144b3ef01f63%3A0x6d89a8bfefc76921!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '20px', display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nail Art Studio Location"
          />
        </motion.div>
      </section>
    </PageTransition>
  )
}
