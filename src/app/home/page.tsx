import Benefits from '@/app/home/components/Benefits'
import Clients from '@/app/home/components/Clients'
import Cta from '@/app/home/components/Cta'
import FeaturedProducts from '@/app/home/components/FeaturedProducts'
import Hero from '@/app/home/components/Hero'
import HowItWorks from '@/app/home/components/HowItWorks'
import Pricing from '@/app/home/components/Pricing'
import ServiceDashboard from '@/app/home/components/ServiceDashboard'
import SplitFeature from '@/app/home/components/SplitFeature'
import Testimonials from '@/app/home/components/Testimonials'
import WhatsIncluded from '@/app/home/components/WhatsIncluded'
import WhyChoose from '@/app/home/components/WhyChoose'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <WhatsIncluded />
      <SplitFeature />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <Clients />
      <ServiceDashboard />
      <Pricing />
      <Cta />
    </>
  )
}

export default Page
