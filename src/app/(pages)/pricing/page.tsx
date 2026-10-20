import { Metadata } from 'next'
import Comparison from './components/Comparison'
import Details from './components/Details'
import Faq from './components/Faq'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Pricing',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Details />
      <Comparison />
      <Faq />
    </>
  )
}

export default Page
