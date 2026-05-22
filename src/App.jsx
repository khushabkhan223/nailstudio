import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import BackgroundBlobs from './components/BackgroundBlobs'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import BookPage from './pages/BookPage'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<BookPage />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BackgroundBlobs />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App
