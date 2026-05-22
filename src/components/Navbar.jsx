import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      <motion.div
        className={styles.wrapper}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            <span className={styles.sparkle}>✦</span>
            Nail Art Studio
          </Link>

          <ul className={styles.navLinks}>
            {navLinks.map(link => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`${styles.navLink} ${isActive(link.to) ? styles.navLinkActive : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/contact" className={styles.bookBtn}>
            Book Now <span className={styles.btnSparkle}>✦</span>
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.bar1Open : ''}`} />
            <span className={`${styles.bar} ${styles.barMid} ${mobileOpen ? styles.barMidOpen : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.bar3Open : ''}`} />
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            >
              <ul className={styles.mobileLinks}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      to={link.to}
                      className={`${styles.mobileLink} ${isActive(link.to) ? styles.mobileLinkActive : ''}`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.07 + 0.15 }}
                >
                  <Link to="/contact" className={styles.mobileBookBtn}>
                    Book Now ✦
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
