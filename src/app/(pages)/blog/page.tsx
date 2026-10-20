import { Metadata } from 'next'
import Grid from './components/Grid'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Blog',
}

const Page = () => {
  return (
    <>
      <Hero />
      <Grid />
    </>
  )
}

export default Page
