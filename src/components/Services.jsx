import { motion } from 'framer-motion'
import styles from './Services.module.css'

const services = [
  {
    icon: '💅',
    title: 'Classic Manicure',
    description: 'Perfect shaping, cuticle care, and polish for a clean, polished look.',
    price: '₹800',
  },
  {
    icon: '✨',
    title: 'Gel Extensions',
    description: 'Long-lasting gel extensions sculpted to your desired shape and length.',
    price: '₹2,500',
  },
  {
    icon: '🎨',
    title: 'Nail Art Design',
    description: 'Custom hand-painted designs from minimal to intricate masterpieces.',
    price: '₹1,200',
  },
  {
    icon: '💎',
    title: 'Crystal & Chrome',
    description: 'Swarovski crystals and chrome finishes for a luxury statement.',
    price: '₹1,800',
  },
  {
    icon: '🌸',
    title: 'Spa Pedicure',
    description: 'Relaxing foot soak, exfoliation, massage, and perfect polish.',
    price: '₹1,500',
  },
  {
    icon: '🧴',
    title: 'Nail Repair & Care',
    description: 'Strengthening treatments for damaged or brittle nails.',
    price: '₹600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className={styles.tag}>
            <span className={styles.tagLine} />
            OUR SERVICES
            <span className={styles.tagLine} />
          </div>
          <h2 className={styles.title}>Crafted With Passion</h2>
          <p className={styles.subtitle}>Every service is a blend of artistry and care</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map(service => (
            <motion.div
              key={service.title}
              className={styles.card}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 24px 64px rgba(232,160,191,0.18)',
                borderColor: 'rgba(232,160,191,0.45)',
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{service.price}</span>
                <a href="#contact" className={styles.bookLink}>Book Now →</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
