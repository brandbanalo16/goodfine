import { Metadata } from 'next'
import Content from './components/Content'
import Hero from './components/Hero'
import Recent from './components/Recent'

export const metadata: Metadata = {
  title: 'Blog Details',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Content />
      <Recent />
    </>
  )
}

export default Page
