import { Metadata } from 'next'
import Clients from './components/Clients'
import Faq from './components/Faq'
import Gallery from './components/Gallery'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Reviews',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Clients />
      <Faq />
    </>
  )
}

export default Page
