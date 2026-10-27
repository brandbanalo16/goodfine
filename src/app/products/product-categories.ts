import collection1 from '@/assets/images/collections/collection-1.webp'
import collection2 from '@/assets/images/collections/collection-2.webp'
import collection3 from '@/assets/images/collections/collection-3.webp'
import collection4 from '@/assets/images/collections/collection-4.webp'
import collection5 from '@/assets/images/collections/collection-5.webp'
import product6 from '@/assets/images/products/product-6.jpeg'
import type { StaticImageData } from 'next/image'

export type ProductCategory = {
  slug: string
  name: string
  description: string
  image: StaticImageData
  imageAlt: string
  icon: string
  benefits: { icon: string; label: string }[]
  campaignProduct?: string
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'wood-coating',
    name: 'Wood Coating',
    description: 'Wood finish options for furniture and interior projects.',
    image: collection1,
    imageAlt: 'Good Fine Premium Wood Finish product campaign',
    icon: 'tabler:wood',
    benefits: [
      { icon: 'tabler:sparkles', label: 'High-gloss finish' },
      { icon: 'tabler:clock', label: 'Quick drying' },
      { icon: 'tabler:shield-check', label: 'Long-lasting protection' },
    ],
    campaignProduct: 'Premium Wood Finish',
  },
  {
    slug: 'pu-coating',
    name: 'PU Coating',
    description: 'Good Fine PU coating campaign for premium wood finishes.',
    image: collection2,
    imageAlt: 'Good Fine PU High Gloss coating campaign',
    icon: 'tabler:layers-subtract',
    benefits: [
      { icon: 'tabler:sparkles', label: 'High-gloss finish' },
      { icon: 'tabler:clock', label: 'Quick drying' },
      { icon: 'tabler:shield-check', label: 'Long-lasting protection' },
    ],
    campaignProduct: 'PU High Gloss',
  },
  {
    slug: 'nc-paints',
    name: 'NC Paints',
    description: 'Good Fine N.C. Paint campaign for premium wood finishes.',
    image: collection3,
    imageAlt: 'Good Fine N.C. Paint product campaign',
    icon: 'tabler:paint',
    benefits: [
      { icon: 'tabler:sparkles', label: 'High-gloss finish' },
      { icon: 'tabler:clock', label: 'Quick drying' },
      { icon: 'tabler:shield-check', label: 'Wood protection' },
    ],
    campaignProduct: 'N.C. Paint',
  },
  {
    slug: 'wood-stain',
    name: 'Wood Stain',
    description: 'Browse the wood stain category and enquire about current options.',
    image: product6,
    imageAlt: 'Wood finishing application reference for the wood stain category',
    icon: 'tabler:color-swatch',
    benefits: [
      { icon: 'tabler:palette', label: 'Wood colour category' },
      { icon: 'tabler:armchair', label: 'Furniture projects' },
      { icon: 'tabler:messages', label: 'Availability by enquiry' },
    ],
  },
  {
    slug: 'wood-filler',
    name: 'Wood Filler',
    description: 'Good Fine Wood Filler campaign for wood surface finishing.',
    image: collection4,
    imageAlt: 'Good Fine Wood Filler product campaign',
    icon: 'tabler:tools',
    benefits: [
      { icon: 'tabler:sparkles', label: 'Smooth surface finish' },
      { icon: 'tabler:clock', label: 'Quick drying' },
      { icon: 'tabler:check', label: 'Easy application' },
    ],
    campaignProduct: 'Wood Filler',
  },
  {
    slug: 'packing-thinner',
    name: 'Packing Thinner',
    description: 'Good Fine thinner campaign for coating and paint projects.',
    image: collection5,
    imageAlt: 'Good Fine Thinner product campaign',
    icon: 'tabler:flask',
    benefits: [
      { icon: 'tabler:sparkles', label: 'Superior solvent power' },
      { icon: 'tabler:clock', label: 'Quick evaporation' },
      { icon: 'tabler:check', label: 'Smooth application' },
    ],
    campaignProduct: 'Thinner',
  },
]

export const getProductCategory = (slug: string) => productCategories.find((category) => category.slug === slug)
