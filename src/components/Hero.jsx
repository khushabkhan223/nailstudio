import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './Hero.module.css'

/* ── Count-up hook ── */
function useCountUp(end, duration = 2200, decimals = 0) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ once: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return
    let startTime = null
    const animate = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * end
      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration, decimals])

  return { count, ref }
}

function StatCounter({ end, suffix = '', decimals = 0, label }) {
  const { count, ref } = useCountUp(end, 2000, decimals)
  return (
    <div ref={ref} className={styles.stat}>
      <div className={styles.statNumber}>
        {decimals > 0 ? count.toFixed(decimals) : count}{suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

/* ── Animation variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.55 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const trustLogos = ['VOGUE', 'ELLE', 'GLAMOUR', 'COSMO']

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, -140])

  return (
    <section className={styles.section} id="home" ref={sectionRef}>
      <div className={styles.container}>
        {/* ── Left Column ── */}
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.stars}>★★★★★</span>
            Rated 4.9 by 500+ clients
          </motion.div>

          {/* Stat counters */}
          <motion.div
            className={styles.statsRow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <StatCounter end={500} suffix="+" label="Happy Clients" />
            <div className={styles.statDivider} />
            <StatCounter end={4.9} decimals={1} label="Average Rating" />
          </motion.div>

          <motion.h1
            className={styles.headline}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={wordVariants} className={styles.word}>Nails </motion.span>
            <motion.span variants={wordVariants} className={styles.word}>That</motion.span>
            <br />
            <motion.span variants={wordVariants} className={styles.word}>Speak </motion.span>
            <motion.span variants={wordVariants} className={`${styles.word} ${styles.wordAccent}`}>
              Elegance
            </motion.span>
          </motion.h1>

          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Experience premium nail artistry crafted with precision. From classic French tips
            to avant-garde nail designs — your hands deserve perfection.
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="/contact"
              className={styles.ctaPrimary}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 36px rgba(232,160,191,0.55)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            >
              Book Your Session
            </motion.a>
            <motion.a
              href="/gallery"
              className={styles.ctaSecondary}
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(232,160,191,0.1)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            >
              View Our Work →
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.trust}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <span className={styles.trustLabel}>As featured in</span>
            <div className={styles.logos}>
              {trustLogos.map(name => (
                <span key={name} className={styles.logoText}>{name}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right Column — Visual ── */}
        <motion.div
          className={styles.visual}
          style={{ y }}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.glowRing} />

          <div className={styles.mainCircle}>
            <img
              src="https://images.unsplash.com/photo-1743617206507-447c78118622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG5haWwlMjBhcnR8ZW58MHx8MHx8fDA%3D"
              alt="Premium nail art"
              className={styles.circleImg}
            />
          </div>

          <div className={`${styles.orb} ${styles.orb1}`} />
          <div className={`${styles.orb} ${styles.orb2}`} />
          <div className={`${styles.orb} ${styles.orb3}`} />
          <div className={`${styles.orb} ${styles.orb4}`} />

          <motion.div
            className={styles.floatCard1}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>💎</span> Premium Quality
          </motion.div>
          <motion.div
            className={styles.floatCard2}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            <span>✨</span> 500+ Happy Clients
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
