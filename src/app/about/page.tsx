import Cta from '@/app/about/components/Cta'
import Doctors from '@/app/about/components/Doctors'
import Hero from '@/app/about/components/Hero'
import Mission from '@/app/about/components/Mission'
import Team from '@/app/about/components/Team'
import Testimonial from '@/app/about/components/Testimonial'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Testimonial />
      <Team />
      <Doctors />
      <Cta />
    </>
  )
}

export default Page
