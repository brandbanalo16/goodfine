import { Metadata } from 'next'
import Hero from './components/Hero'
import Labs from './components/Labs'

export const metadata: Metadata = {
  title: 'Contact Us',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Labs />
    </>
  )
}

export default Page
