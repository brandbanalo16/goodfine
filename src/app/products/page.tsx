import ProductsLanding from '@/app/products/ProductsLanding'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Wood Coating Products & Categories | Good Fine' },
  description: 'Explore Good Fine wood coating, PU coating, N.C. paints, wood stain, wood filler, and thinner categories.',
}

const Page = () => <ProductsLanding />

export default Page
