'use client'

import pageBanner from '@/assets/images/bg/page-banner.png'
import product1 from '@/assets/images/products/product-1.jpeg'
import product2 from '@/assets/images/products/product-2.jpeg'
import product3 from '@/assets/images/products/product-3.jpeg'
import product4 from '@/assets/images/products/product-4.jpeg'
import product5 from '@/assets/images/products/product-5.jpeg'
import product6 from '@/assets/images/products/product-6.jpeg'
import { Icon } from '@iconify/react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import WhyChoose from '@/app/home/components/WhyChoose'

const finishes = [
  { name: 'Glossy', swatch: 'linear-gradient(135deg, #9a5425, #e5a34f)' },
  { name: 'Matt', swatch: 'linear-gradient(135deg, #684733, #b28b62)' },
  { name: 'Satin', swatch: 'linear-gradient(135deg, #945e37, #d6a86e)' },
  { name: 'Wood Natural', swatch: 'linear-gradient(135deg, #b77a3d, #e1b978)' },
] as const

const packSizes = ['500 ml', '1 L', '4 L', '20 L'] as const

type Finish = (typeof finishes)[number]['name']
type PackSize = (typeof packSizes)[number]

type GalleryImage = {
  src: StaticImageData
  alt: string
}

const galleryImages: GalleryImage[] = [
  { src: product1, alt: 'Wood surface being polished to a glossy finish' },
  { src: product2, alt: 'Wood surface being wiped during finishing' },
  { src: product3, alt: 'Brush applying finish to a wood surface' },
  { src: product4, alt: 'Wood surface receiving a spray finish' },
  { src: product5, alt: 'Wood repair and preparation work' },
  { src: product6, alt: 'Brush applying a clear-looking finish to timber' },
]

const overviewTabs = [
  { id: 'overview', label: 'Product Overview' },
  { id: 'technical', label: 'Technical Details' },
  { id: 'application', label: 'Application Guide' },
  { id: 'safety', label: 'Safety & Storage' },
] as const

type OverviewTab = (typeof overviewTabs)[number]['id']

const tabContent: Record<OverviewTab, { title: string; body: string; points: string[] }> = {
  overview: {
    title: 'A considered finish for wood surfaces',
    body: 'Good Fine Premium Wood Finish is presented for beautiful interiors. The existing product artwork highlights a high-gloss finish, quick drying, and long-lasting protection.',
    points: ['For wood finishing projects', 'Four selectable finish options', 'Multiple pack sizes for enquiry'],
  },
  technical: {
    title: 'Technical information',
    body: 'No verified technical data sheet is currently available in the site content. Contact Good Fine to request the latest product-specific technical information before specifying or applying the finish.',
    points: ['Finish: select a variant above', 'Pack size: select an available option above', 'Request current technical data from Good Fine'],
  },
  application: {
    title: 'Application guide',
    body: 'Application method and preparation requirements can vary by substrate and product variant. Refer to the product label and current manufacturer instructions for surface preparation, application, and drying guidance.',
    points: ['Confirm the selected finish is suitable for your project', 'Follow the current product label', 'Request application guidance from Good Fine'],
  },
  safety: {
    title: 'Safety & storage',
    body: 'Follow all warnings and handling, storage, and disposal instructions on the product label. Request the current Safety Data Sheet from Good Fine before use; no specific safety or storage limits are published here.',
    points: ['Read the product label before use', 'Request the current Safety Data Sheet', 'Follow local handling and disposal requirements'],
  },
}

const variantImages = [product1, product3, product4, product6]

const benefits = [
  { icon: 'tabler:building-store', title: 'Built for business', description: 'Enquire about project and trade requirements.' },
  { icon: 'tabler:package', title: 'Pack-size choice', description: 'Select from four listed pack sizes.' },
  { icon: 'tabler:messages', title: 'Direct product enquiry', description: 'Share your finish and requirement in one message.' },
]

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedFinish, setSelectedFinish] = useState<Finish>('Glossy')
  const [selectedPack, setSelectedPack] = useState<PackSize>('500 ml')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<OverviewTab>('overview')
  const [requirement, setRequirement] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [whatsappDraft, setWhatsappDraft] = useState<string | null>(null)

  const moveImage = (direction: -1 | 1) => {
    setSelectedImage((current) => (current + direction + galleryImages.length) % galleryImages.length)
  }

  const createWhatsAppUrl = (details: string) => {
    const message = ['Hello Good Fine, I would like to enquire about Premium Wood Finish.', `Finish: ${selectedFinish}`, `Pack size: ${selectedPack}`, `Quantity: ${quantity}`, details].filter(Boolean).join('\n')
    const url = new URL('https://wa.me/')
    url.searchParams.set('text', message)
    return url.toString()
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const details = [
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Email: ${formData.get('email')}`,
      `Company: ${formData.get('company') || 'Not provided'}`,
      `Product requirement: ${formData.get('requirement')}`,
      `Message: ${formData.get('message') || 'Not provided'}`,
    ].join('\n')

    setWhatsappDraft(createWhatsAppUrl(details))
    setFormMessage('Your enquiry is ready. Open the WhatsApp draft to review it and choose a recipient.')
  }

  const selectFinish = (finish: Finish) => {
    setSelectedFinish(finish)
    document.getElementById('product-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="product-detail-page w-full overflow-hidden">
      <section className="site-page-hero relative isolate w-full" aria-label="Good Fine Premium Wood Finish banner">
        <Image src={pageBanner} alt="" fill priority sizes="100vw" className="site-page-hero-background -z-10 object-cover object-center" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link href="/home" className="transition-colors hover:text-white">
              Home
            </Link>
            <Icon icon="tabler:chevron-right" className="size-4" aria-hidden="true" />
            <span>Products</span>
            <Icon icon="tabler:chevron-right" className="size-4" aria-hidden="true" />
            <span aria-current="page" className="font-medium text-white">
              Premium Wood Finish
            </span>
          </nav>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Premium Wood Finish</h1>
        </div>
      </section>

      <section id="product-details" className="site-layout-full-width w-full py-10 md:py-16" aria-labelledby="product-title">
        <div className="container-fluid">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <div className="border-default-200 relative aspect-square overflow-hidden rounded-2xl border bg-white">
                <Image src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover transition-opacity duration-300" />
                <span className="text-default-950 absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold shadow-sm">Good Fine • Wood Finish</span>
                <button type="button" onClick={() => moveImage(-1)} aria-label="Previous product image" className="text-default-950 absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md transition hover:bg-white">
                  <Icon icon="tabler:chevron-left" className="size-5" />
                </button>
                <button type="button" onClick={() => moveImage(1)} aria-label="Next product image" className="text-default-950 absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-md transition hover:bg-white">
                  <Icon icon="tabler:chevron-right" className="size-5" />
                </button>
              </div>
              <div className="mt-3 grid grid-cols-6 gap-2 sm:mt-4 sm:gap-3">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.alt}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`Show image ${index + 1}: ${image.alt}`}
                    aria-pressed={selectedImage === index}
                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition ${selectedImage === index ? 'border-primary' : 'hover:border-default-300 border-transparent'}`}
                  >
                    <Image src={image.src} alt="" fill sizes="100px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-center">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="bg-default-100 text-default-800 rounded-full px-3 py-1 text-xs font-semibold">Good Fine</span>
                <span className="bg-primary/10 text-default-950 rounded-full px-3 py-1 text-xs font-semibold">Premium Wood Finish</span>
              </div>
              <h1 id="product-title" className="text-default-950 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Premium Wood Finish
              </h1>
              <p className="text-default-700 mt-4 max-w-2xl text-base leading-relaxed">A Good Fine wood finish for beautiful interiors. The product artwork highlights a high-gloss finish, quick drying, and long-lasting protection.</p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: 'tabler:sparkles', text: 'High-gloss finish' },
                  { icon: 'tabler:clock', text: 'Quick drying' },
                  { icon: 'tabler:shield-check', text: 'Long-lasting protection' },
                ].map((feature) => (
                  <li key={feature.text} className="border-default-200 text-default-800 flex items-center gap-2 rounded-xl border bg-white px-3 py-3 text-sm font-medium">
                    <Icon icon={feature.icon} className="text-primary size-5 shrink-0" aria-hidden="true" />
                    {feature.text}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h2 className="text-default-950 font-semibold">Choose a finish</h2>
                  <span className="text-default-500 text-sm">Selected: {selectedFinish}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {finishes.map((finish) => (
                    <button
                      key={finish.name}
                      type="button"
                      onClick={() => setSelectedFinish(finish.name)}
                      aria-pressed={selectedFinish === finish.name}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition ${selectedFinish === finish.name ? 'border-default-950 bg-default-950 text-white' : 'border-default-300 text-default-800 hover:border-default-500 bg-white'}`}
                    >
                      <span className="size-4 rounded-full border border-black/10" style={{ background: finish.swatch }} />
                      {finish.name}
                    </button>
                  ))}
                </div>
                <p className="text-default-500 mt-2 text-xs">Illustrative swatches. Confirm the finish appearance with Good Fine.</p>
              </div>

              <div className="mt-6">
                <h2 className="text-default-950 mb-3 font-semibold">Pack size</h2>
                <div className="grid grid-cols-4 gap-2">
                  {packSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedPack(size)}
                      aria-pressed={selectedPack === size}
                      className={`rounded-lg border px-2 py-3 text-sm font-semibold transition sm:px-3 ${selectedPack === size ? 'border-primary bg-primary/10 text-default-950' : 'border-default-300 text-default-700 hover:border-default-500 bg-white'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-end gap-4">
                <div>
                  <label htmlFor="quantity" className="text-default-950 mb-2 block text-sm font-semibold">
                    Quantity
                  </label>
                  <div className="border-default-300 flex h-11 items-center rounded-lg border bg-white">
                    <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity" className="text-default-800 flex size-10 items-center justify-center">
                      <Icon icon="tabler:minus" className="size-4" />
                    </button>
                    <output id="quantity" aria-live="polite" className="text-default-950 min-w-8 text-center font-semibold">
                      {quantity}
                    </output>
                    <button type="button" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity" className="text-default-800 flex size-10 items-center justify-center">
                      <Icon icon="tabler:plus" className="size-4" />
                    </button>
                  </div>
                </div>
                <p className="text-default-500 pb-3 text-sm">Pricing is available on enquiry.</p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="#enquiry"
                  onClick={() => setRequirement('Bulk pricing enquiry')}
                  className="bg-primary text-default-950 hover:bg-default-950 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-center font-semibold transition hover:text-white"
                >
                  Request Bulk Pricing
                  <Icon icon="tabler:arrow-right" className="size-4" />
                </a>
                <a
                  href={createWhatsAppUrl('Please share product availability and pricing.')}
                  target="_blank"
                  rel="noreferrer"
                  className="border-default-300 text-default-950 hover:border-default-950 hover:bg-default-50 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 font-semibold transition"
                >
                  <Icon icon="tabler:brand-whatsapp" className="size-5 text-[#25D366]" />
                  WhatsApp Enquiry
                </a>
              </div>
              <p className="text-default-500 mt-2 text-xs">WhatsApp opens a prefilled draft; choose a recipient to send it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-layout-full-width w-full bg-white py-12 md:py-16" aria-labelledby="specifications-title">
        <div className="container-fluid">
          <div className="mb-7 max-w-2xl">
            <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">At a glance</p>
            <h2 id="specifications-title" className="text-default-950 mt-2 text-3xl font-semibold">
              Product specifications
            </h2>
          </div>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Product', 'Good Fine Premium Wood Finish'],
              ['Product category', 'Wood finish'],
              ['Finish options', 'Glossy, Matt, Satin, Wood Natural'],
              ['Available pack sizes', '500 ml, 1 L, 4 L, 20 L'],
            ].map(([term, value]) => (
              <div key={term} className="border-default-200 bg-default-50 rounded-xl border p-5">
                <dt className="text-default-500 text-sm">{term}</dt>
                <dd className="text-default-950 mt-2 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-default-500 mt-4 text-sm">For product-specific technical and safety specifications, please request the latest manufacturer documentation.</p>
        </div>
      </section>

      <section className="site-layout-full-width w-full py-12 md:py-16" aria-labelledby="overview-title">
        <div className="container-fluid">
          <div className="mb-6">
            <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">Learn more</p>
            <h2 id="overview-title" className="text-default-950 mt-2 text-3xl font-semibold">
              Product information
            </h2>
          </div>
          <div className="border-default-200 overflow-hidden rounded-2xl border bg-white">
            <div role="tablist" aria-label="Product information" className="border-default-200 flex gap-1 overflow-x-auto border-b p-2">
              {overviewTabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 rounded-lg px-4 py-3 text-sm font-semibold transition ${activeTab === tab.id ? 'bg-default-950 text-white' : 'text-default-600 hover:bg-default-50 hover:text-default-950'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`} className="p-6 md:p-8">
              <h3 className="text-default-950 text-xl font-semibold">{tabContent[activeTab].title}</h3>
              <p className="text-default-700 mt-3 max-w-3xl leading-relaxed">{tabContent[activeTab].body}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {tabContent[activeTab].points.map((point) => (
                  <li key={point} className="text-default-700 flex gap-2 text-sm">
                    <Icon icon="tabler:check" className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />

      <section id="available-variants" className="site-layout-full-width w-full py-12 md:py-16" aria-labelledby="variants-title">
        <div className="container-fluid">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">Find your finish</p>
              <h2 id="variants-title" className="text-default-950 mt-2 text-3xl font-semibold">
                Available variants
              </h2>
            </div>
            <p className="text-default-600 max-w-md text-sm leading-relaxed">Select an option to update your product enquiry. Confirm finish availability and appearance with Good Fine.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {finishes.map((finish, index) => (
              <article id={`variant-${finish.name.toLowerCase().replaceAll(' ', '-')}`} key={finish.name} className="border-default-200 overflow-hidden rounded-2xl border bg-white">
                <div className="bg-default-100 relative aspect-[4/3]">
                  <Image src={variantImages[index]} alt={`Wood finishing project reference ${index + 1}`} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  <span className="text-default-950 absolute top-3 left-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold shadow-sm">
                    <span className="size-4 rounded-full border border-black/10" style={{ background: finish.swatch }} />
                    {finish.name}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-default-950 text-lg font-semibold">{finish.name} Wood Finish</h3>
                  <p className="text-default-600 mt-2 text-sm">Pack sizes available to select for enquiry:</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {packSizes.map((size) => (
                      <span key={size} className="bg-default-50 text-default-700 rounded-md px-2.5 py-1 text-xs font-medium">
                        {size}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => selectFinish(finish.name)}
                    className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition ${selectedFinish === finish.name ? 'bg-default-950 text-white' : 'border-default-300 text-default-950 hover:border-default-950 hover:bg-default-50 border'}`}
                  >
                    {selectedFinish === finish.name ? 'Selected' : 'Select this finish'}
                    <Icon icon="tabler:arrow-right" className="size-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-layout-full-width w-full bg-white py-12 md:py-16" aria-labelledby="related-title">
        <div className="container-fluid">
          <div className="mb-7">
            <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">Explore the range</p>
            <h2 id="related-title" className="text-default-950 mt-2 text-3xl font-semibold">
              Related products &amp; finish options
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {finishes.map((finish, index) => (
              <article key={finish.name} className="border-default-200 overflow-hidden rounded-xl border bg-white">
                <div className="relative aspect-[4/3]">
                  <Image src={variantImages[index]} alt={`Wood finishing project reference ${index + 1}`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-default-950 font-semibold">Premium Wood Finish — {finish.name}</h3>
                  <Link href={`#variant-${finish.name.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setSelectedFinish(finish.name)} className="text-default-700 hover:text-primary mt-3 inline-flex items-center gap-1 text-sm font-semibold transition">
                    View variant
                    <Icon icon="tabler:arrow-up-right" className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
