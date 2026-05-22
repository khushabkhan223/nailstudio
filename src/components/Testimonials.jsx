import { motion } from 'framer-motion'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    text: 'Absolutely stunning work! My gel extensions lasted 4 weeks without chipping. The attention to detail is unreal.',
    name: 'Priya S.',
    location: 'Koramangala',
  },
  {
    text: 'Best nail studio in Bangalore hands down. The nail art they did for my wedding was breathtaking.',
    name: 'Ananya R.',
    location: 'Indiranagar',
  },
  {
    text: "Super clean, hygienic, and the staff is so professional. I won't go anywhere else for my manicures.",
    name: 'Deepa M.',
    location: 'HSR Layout',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className={styles.tag}>
          <span className={styles.tagLine} />
          WHAT OUR CLIENTS SAY
          <span className={styles.tagLine} />
        </div>
        <h2 className={styles.title}>Loved by 500+ Clients</h2>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {testimonials.map(t => (
          <motion.div
            key={t.name}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(232,160,191,0.16)' }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          >
            <div className={styles.quoteMark}>"</div>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                {t.name.charAt(0)}
              </div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.location}>{t.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
