import ProductDetail from '@/app/products/premium-wood-finish/ProductDetail'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Premium Wood Finish | Good Fine' },
  description: 'Explore Good Fine Premium Wood Finish, available in Glossy, Matt, Satin, and Wood Natural finishes.',
}

const Page = () => <ProductDetail />

export default Page
