import { Metadata } from 'next'
import Hero from './components/Hero'
import List from './components/List'

export const metadata: Metadata = {
  title: 'FAQs',
}

const Page = () => {
  return (
    <>
      <Hero />
      <List />
    </>
  )
}

export default Page
