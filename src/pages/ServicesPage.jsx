import PageTransition from '../components/PageTransition'
import Services from '../components/Services'
import ScrollProgress from '../components/ScrollProgress'

export default function ServicesPage() {
  return (
    <PageTransition>
      <ScrollProgress />
      <Services />
    </PageTransition>
  )
}
