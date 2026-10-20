import { Metadata } from 'next'
import Comparison from './components/Comparison'
import Cta from './components/Cta'
import DoctorsStack from './components/DoctorsStack'
import Hero from './components/Hero'
import LabTests from './components/LabTests'
import MembershipFeatures from './components/MembershipFeatures'
import MembershipPricing from './components/MembershipPricing'

export const metadata: Metadata = {
  title: "What's Included",
}

const Page = () => {
  return (
    <>
      <Hero />
      <LabTests />
      <MembershipFeatures />
      <DoctorsStack />
      <Comparison />
      <MembershipPricing />
      <Cta />
    </>
  )
}

export default Page
