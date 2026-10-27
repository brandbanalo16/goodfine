import { getProductCategory, productCategories } from '@/app/products/product-categories'
import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () => productCategories.map(({ slug }) => ({ slug }))

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const category = getProductCategory(slug)
  if (!category) return { title: 'Product Category Not Found' }

  return {
    title: { absolute: `${category.name} Products | Good Fine` },
    description: category.description,
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  if (!getProductCategory(slug)) notFound()

  redirect('/products#categories')
}

export default Page
