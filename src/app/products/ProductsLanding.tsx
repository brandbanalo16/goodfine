'use client'

import { productCategories } from '@/app/products/product-categories'
import pageBanner from '@/assets/images/bg/page-banner.png'
import lifestyleImage from '@/assets/images/collections/color-1.webp'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

const ProductsLanding = () => {
  const [search, setSearch] = useState('')
  const visibleCategories = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return productCategories
    return productCategories.filter((category) => `${category.name} ${category.description} ${category.campaignProduct ?? ''}`.toLowerCase().includes(query))
  }, [search])

  return (
    <div className="goodfine-catalog w-full overflow-hidden">
      <section className="site-page-hero relative isolate" aria-label="Premium wood coating products">
        <Image src={pageBanner} alt="" fill priority sizes="100vw" className="site-page-hero-background -z-10 object-cover object-center" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link href="/home" className="transition-colors hover:text-white">
              Home
            </Link>
            <Icon icon="tabler:chevron-right" className="size-4" aria-hidden="true" />
            <span aria-current="page" className="font-medium text-white">
              Products
            </span>
          </nav>
          <div className="max-w-2xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              <Icon icon="tabler:home-star" className="text-primary size-4" />
              Good Fine · Wood finishing range
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Premium Wood Coating Products</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">Explore Good Fine product categories for furniture, timber, and interior finishing projects.</p>
            <Link href="#categories" className="bg-primary text-default-950 mt-7 inline-flex items-center gap-3 rounded-full px-6 py-3.5 font-semibold transition hover:bg-white">
              Explore categories
              <Icon icon="tabler:arrow-down" className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto w-full max-w-[1440px] scroll-mt-28 bg-[#fbf6ef] px-4 py-14 sm:px-6 md:py-20 lg:px-10" aria-labelledby="categories-title">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">Explore the range</p>
            <h2 id="categories-title" className="text-default-950 mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore Our Wood Coating Products
            </h2>
            <p className="text-default-600 mt-3 max-w-2xl leading-relaxed">Browse Good Fine categories and open a dedicated page for available campaign product information.</p>
          </div>
          <label className="relative block w-full md:max-w-xs">
            <span className="sr-only">Search product categories</span>
            <Icon icon="tabler:search" className="text-default-500 pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2" aria-hidden="true" />
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search categories" className="border-default-300 text-default-950 placeholder:text-default-400 w-full rounded-xl border bg-white py-3 pr-4 pl-11" />
          </label>
        </div>

        {visibleCategories.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {visibleCategories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/products/category/${category.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ddd2] bg-white shadow-[0_12px_30px_-20px_rgba(60,34,25,0.38)] transition duration-300 hover:-translate-y-1 hover:border-[#d7c5b5] hover:shadow-[0_22px_50px_-24px_rgba(60,34,25,0.3)]"
              >
                <div className="bg-default-100 relative aspect-[16/10] overflow-hidden">
                  <Image src={category.image} alt={category.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className={`object-cover transition duration-500 group-hover:scale-[1.03] ${index === 3 ? 'object-center' : ''}`} />
                  <span className="text-default-950 absolute top-3 left-3 flex size-10 items-center justify-center rounded-full bg-white/95 shadow-sm">
                    <Icon icon={category.icon} className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-default-950 text-xl font-semibold">{category.name}</h3>
                  <p className="text-default-600 mt-2 min-h-12 text-sm leading-relaxed">{category.description}</p>
                  <ul className="text-default-700 mt-4 grid gap-2.5 text-sm">
                    {category.benefits.map((benefit) => (
                      <li key={benefit.label} className="flex items-center gap-2.5">
                        <Icon icon={benefit.icon} className="text-primary size-4 shrink-0" aria-hidden="true" />
                        {benefit.label}
                      </li>
                    ))}
                  </ul>
                  <span className="border-default-200 text-default-950 mt-6 inline-flex items-center justify-between border-t pt-4 text-sm font-semibold">
                    Explore Products
                    <span className="bg-default-50 group-hover:bg-primary flex size-9 items-center justify-center rounded-full transition">
                      <Icon icon="tabler:arrow-up-right" className="size-5" />
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border-default-200 rounded-2xl border bg-white px-6 py-12 text-center">
            <Icon icon="tabler:search-off" className="text-default-400 mx-auto size-8" />
            <p className="text-default-950 mt-3 font-semibold">No categories match “{search}”.</p>
            <button type="button" onClick={() => setSearch('')} className="text-default-700 hover:text-default-950 mt-3 text-sm font-semibold underline underline-offset-4">
              Clear search
            </button>
          </div>
        )}
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-4 pb-14 sm:px-6 md:pb-20 lg:px-10" aria-labelledby="lifestyle-title">
        <div className="relative isolate overflow-hidden rounded-2xl bg-[#3c2219]">
          <Image src={lifestyleImage} alt="Warm wood cabinetry in a contemporary interior" fill sizes="(max-width: 1440px) 100vw, 1440px" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#21150e]/90 via-[#21150e]/65 to-[#21150e]/10" />
          <div className="relative z-10 grid min-h-[330px] items-center gap-8 px-6 py-10 sm:px-10 md:min-h-[370px] md:grid-cols-[1fr_auto] md:px-14 lg:px-16">
            <div className="max-w-2xl text-white">
              <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">Made for beautiful spaces</p>
              <h2 id="lifestyle-title" className="mt-3 text-3xl leading-tight font-semibold text-white sm:text-4xl">
                Bring your next wood project to life.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/80">Explore the range or view the available Premium Wood Finish product information.</p>
            </div>
            <Link href="/products/premium-wood-finish#enquiry" className="bg-primary text-default-950 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition hover:bg-white">
              Get in Touch
              <Icon icon="tabler:arrow-up-right" className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="popular-categories" className="border-default-200 mx-auto w-full max-w-[1440px] scroll-mt-28 border-y bg-white px-4 py-10 sm:px-6 md:py-12 lg:px-10" aria-labelledby="popular-categories-title">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="shrink-0">
            <p className="text-primary text-sm font-semibold tracking-[0.14em] uppercase">Quick links</p>
            <h2 id="popular-categories-title" className="text-default-950 mt-1 text-2xl font-semibold">
              Popular Categories
            </h2>
          </div>
          <nav aria-label="Popular product categories" className="flex flex-wrap gap-2">
            {productCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/category/${category.slug}`}
                className="border-default-200 bg-default-50 text-default-800 hover:border-default-950 hover:bg-default-950 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition hover:text-white"
              >
                <Icon icon={category.icon} className="size-4" aria-hidden="true" />
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </div>
  )
}

export default ProductsLanding
