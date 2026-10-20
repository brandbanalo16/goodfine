import { Metadata } from 'next'
import Cta from './components/Cta'
import Hero from './components/Hero'
import Labs from './components/Labs'

export const metadata: Metadata = {
  title: 'List of Labs',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Labs />
      <Cta />
    </>
  )
}

export default Page
