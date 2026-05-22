import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Gallery.module.css'

const galleryItems = [
  {
    name: 'French Elegance',
    category: 'manicure',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
    height: 280,
  },
  {
    name: 'Chrome Dreams',
    category: 'gel',
    img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
    height: 340,
  },
  {
    name: 'Floral Fantasy',
    category: 'nail-art',
    img: 'https://images.unsplash.com/photo-1736434518489-0eb84070017f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
    height: 260,
  },
  {
    name: 'Minimalist Chic',
    category: 'manicure',
    img: 'https://images.unsplash.com/photo-1641814280326-d74ea2300067?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
    height: 310,
  },
  {
    name: 'Glitter Goddess',
    category: 'gel',
    img: 'https://images.unsplash.com/photo-1641814250010-9887d86eedfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
    height: 330,
  },
  {
    name: 'Ombre Sunset',
    category: 'pedicure',
    img: 'https://images.unsplash.com/photo-1648844421727-cde6c4246b13?q=80&w=680&auto=format&fit=crop&ixlib=rb-4.1.0',
    height: 270,
  },
  {
    name: 'Crystal Luxe',
    category: 'nail-art',
    img: 'https://images.unsplash.com/photo-1737214475335-8ed64d91f473?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0',
    height: 355,
  },
  {
    name: 'Bold & Beautiful',
    category: 'manicure',
    img: 'https://images.unsplash.com/photo-1645566372784-7d017ad7643b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
    height: 295,
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Manicure', value: 'manicure' },
  { label: 'Gel', value: 'gel' },
  { label: 'Nail Art', value: 'nail-art' },
  { label: 'Pedicure', value: 'pedicure' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section className={styles.section} id="gallery">
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
            OUR WORK
            <span className={styles.tagLine} />
          </div>
          <h2 className={styles.title}>Gallery of Perfection</h2>
          <p className={styles.subtitle}>Every nail tells a story of beauty and precision</p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className={styles.filterBar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {filters.map(f => (
            <motion.button
              key={f.value}
              className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(f.value)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid — key forces re-mount on filter change so items animate in fresh */}
        <div key={activeFilter} className={styles.masonryGrid}>
          {filtered.map((item, index) => (
            <motion.div
              key={item.name}
              className={styles.item}
              style={{ height: `${item.height}px` }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                scale: 1.04,
                rotate: 1,
                zIndex: 10,
                transition: { type: 'spring', stiffness: 260, damping: 22 },
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className={styles.itemImg}
              />
              <div className={styles.itemOverlay}>
                <span className={styles.itemName}>{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.instagramCta}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          Want to see more? Follow us on{' '}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramLink}
          >
            Instagram
          </a>
        </motion.p>
      </div>
    </section>
  )
}
