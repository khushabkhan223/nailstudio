import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Contact.module.css'

const contactInfo = [
  { icon: '📍', text: '123 MG Road, Koramangala, Bangalore 560034' },
  { icon: '📞', text: '+91 98765 43210' },
  { icon: '✉️', text: 'hello@nailartstudio.in' },
  { icon: '🕐', text: 'Mon–Sat: 10:00 AM – 8:00 PM' },
]

const serviceOptions = [
  'Classic Manicure — ₹800',
  'Gel Extensions — ₹2,500',
  'Nail Art Design — ₹1,200',
  'Crystal & Chrome — ₹1,800',
  'Spa Pedicure — ₹1,500',
  'Nail Repair & Care — ₹600',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4500)
  }

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className={styles.section} id="contact">
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
            GET IN TOUCH
            <span className={styles.tagLine} />
          </div>
        </motion.div>

        <div className={styles.panel}>
          {/* Left — Info */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2 className={styles.title}>Let's Get<br />You Booked</h2>
            <p className={styles.subtitle}>Walk-ins welcome. Appointments preferred.</p>

            <ul className={styles.contactList}>
              {contactInfo.map((item, i) => (
                <motion.li
                  key={i}
                  className={styles.contactItem}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                >
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <span className={styles.contactText}>{item.text}</span>
                </motion.li>
              ))}
            </ul>

            <div className={styles.quote}>
              <p className={styles.quoteText}>"Where beauty meets artistry"</p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={styles.input}
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="service">Service</label>
                <div className={styles.selectWrapper}>
                  <select
                    id="service"
                    name="service"
                    className={styles.input}
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <span className={styles.selectArrow}>▾</span>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="date">Preferred Date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className={styles.input}
                  value={form.date}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.input} ${styles.textarea}`}
                  rows={3}
                  placeholder="Any special requests or questions..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 36px rgba(232,160,191,0.5)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                Book Appointment ✦
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className={styles.mapPlaceholder}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className={styles.mapGrid} />
          <span className={styles.mapText}>📍 Find Us on Google Maps</span>
        </motion.div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            className={styles.toast}
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          >
            <span className={styles.toastIcon}>✅</span>
            <div>
              <div className={styles.toastTitle}>Booking Requested!</div>
              <div className={styles.toastSub}>We'll confirm within 24 hours.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
