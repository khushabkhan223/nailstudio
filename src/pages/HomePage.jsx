import PageTransition from '../components/PageTransition'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Testimonials />
    </PageTransition>
  )
}
