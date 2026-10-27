'use client'

import { productCategories } from '@/app/products/product-categories'
import logoDark from '@/assets/images/logo-main.webp'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export type SubNavigationType = {
  label: string
  route: string
}

export type NavigationType = {
  label: string
  route?: string
  children?: SubNavigationType[]
}

const navigationData: NavigationType[] = [
  { label: 'Home', route: '/home' },
  { label: 'About', route: '/about' },
  {
    label: 'Category',
    route: '/products#categories',
    children: productCategories.map(({ name, slug }) => ({ label: name, route: `/products/category/${slug}` })),
  },
  { label: 'Blog', route: '/blog' },
  { label: 'Contact Us', route: '/contact' },
]

const Topbar = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/home'
  const isGoodFinePage = pathname.startsWith('/products')
  const isGoodFineProductDetail = pathname === '/products/premium-wood-finish'
  const enquiryHref = isGoodFinePage ? '/products/premium-wood-finish#enquiry' : '/contact'

  useEffect(() => {
    const overlay = document.getElementById('mobile-menu')
    if (overlay && (window as any).HSOverlay) {
      ;(window as any).HSOverlay.close(overlay)
    }
  }, [pathname])

  return (
    <>
      {isHomePage && (
        <header className="bg-default-950 relative z-[141] w-full">
          <div className="mx-auto flex min-h-9 w-full items-center justify-between gap-4 px-4 text-[11px] font-semibold text-white sm:px-6 sm:text-xs lg:px-10">
            <p className="hidden items-center gap-2 text-white/75 sm:flex">
              <Icon icon={isGoodFinePage ? 'tabler:home-star' : 'tabler:heart-plus'} className="text-primary size-4" />
              {isGoodFinePage ? 'Premium wood finishes for beautiful interiors' : 'Better care, made simpler'}
            </p>
            <div className="ms-auto flex items-center gap-4 sm:gap-6">
              <Link href={isGoodFinePage ? '/products#categories' : '/faqs'} className="hover:text-primary transition-colors">
                {isGoodFinePage ? 'Browse products' : 'FAQs'}
              </Link>
              <Link href={isGoodFinePage ? '/products/premium-wood-finish' : '/reviews'} className="hover:text-primary hidden transition-colors sm:inline-flex">
                {isGoodFinePage ? 'Premium Wood Finish' : 'Reviews'}
              </Link>
              <Link href={enquiryHref} className="hover:text-primary transition-colors">
                {isGoodFinePage ? 'Request a quote' : 'Get in touch'}
              </Link>
            </div>
          </div>
        </header>
      )}

      <div className={`${isHomePage ? 'sticky top-0' : 'absolute top-0'} z-140 w-full px-4 pt-3 pb-3 sm:px-6 lg:px-10`}>
        <div className="nav-sticky navbar mx-auto flex min-h-18 w-full items-center justify-between gap-3 rounded-2xl bg-white px-4 py-2 shadow-[0_12px_35px_-20px_rgba(60,34,25,0.45)] transition-all duration-300 sm:px-5 lg:px-6">
          <Link href={isGoodFinePage ? '/products' : '/'} className="flex shrink-0 items-center" aria-label={isGoodFinePage ? 'Good Fine products home' : 'Healia home'}>
            <Image src={logoDark} alt={isGoodFinePage ? 'Good Fine' : 'Healia'} className="h-14 w-auto object-contain sm:h-16" priority />
          </Link>

          <nav id="navbar" aria-label="Main navigation" className="hidden items-center justify-end gap-1 lg:flex">
            {navigationData.map((item) => {
              if (item.children) {
                const rootRoutes = ['/home', '/about', '/whats-included']
                const isDropdownActive = item.children.some((subItem) => pathname === subItem.route && !rootRoutes.includes(subItem.route)) || (item.route === '/products#categories' && pathname.startsWith('/products'))
                return (
                  <div key={item.label} className="hs-dropdown relative inline-flex [--trigger:hover]">
                    <button
                      type="button"
                      className={`hs-dropdown-toggle hover:bg-default-50 hover:text-default-950 flex items-center gap-1 rounded-md px-3 py-2.5 font-medium transition-all xl:px-4 ${isDropdownActive ? 'bg-default-50 text-primary' : 'text-default-600'}`}
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label={`Open ${item.label} menu`}
                    >
                      {item.label}
                      <Icon icon="tabler:chevron-down" className="size-4" />
                    </button>

                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 border-default-100 top-3! mt-2 hidden w-60 rounded-2xl border bg-white p-2 opacity-0 shadow-xl transition-[opacity,margin] duration-300 before:absolute before:start-0 before:-top-6 before:h-6 before:w-full after:absolute after:start-0 after:-bottom-6 after:h-6 after:w-full"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="space-y-1">
                        {item.children.map((subItem) => {
                          const isSubActive = pathname === subItem.route
                          return (
                            <Link
                              key={subItem.route + subItem.label}
                              href={subItem.route}
                              className={`hover:bg-default-50 hover:text-default-950 block rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${isSubActive ? 'active bg-default-50 text-primary' : 'text-default-600'}`}
                            >
                              {subItem.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              } else if (item.route) {
                const isActive = pathname === item.route || (item.route === '/products' && pathname.startsWith('/products/category/')) || (isGoodFineProductDetail && item.route === '/products/premium-wood-finish')
                return (
                  <Link
                    key={item.route + item.label}
                    href={item.route}
                    aria-current={isActive ? 'page' : undefined}
                    className={`hover:bg-default-50 hover:text-default-950 flex items-center rounded-md px-3 py-2.5 font-medium transition-all xl:px-4 ${isActive ? 'active bg-default-50 text-primary' : 'text-default-600'}`}
                  >
                    {item.label}
                  </Link>
                )
              }
              return null
            })}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-2 lg:hidden">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="mobile-menu"
              data-hs-overlay="#mobile-menu"
              className="bg-default-950 hover:bg-primary inline-flex size-11 items-center justify-center rounded-md text-white transition-all"
              aria-label="Open navigation menu"
            >
              <Icon icon="tabler:menu-2" className="size-5" />
            </button>
          </div>

          <Link
            href={enquiryHref}
            className="bg-primary hover:bg-default-950 text-default-950 hidden shrink-0 items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold transition-all duration-300 hover:text-white lg:inline-flex"
          >
            {isGoodFinePage ? 'Request a quote' : 'Start Testing'}
            <Icon icon="tabler:arrow-up-right" className="size-4" />
          </Link>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="hs-overlay hs-overlay-open:translate-y-0 hs-overlay-open:opacity-100 hs-overlay-open:top-auto fixed inset-x-0 top-0 z-140 -translate-y-full transform opacity-0 transition-all duration-300 [--body-scroll:true] lg:hidden"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="mobile-menu-label"
      >
        <div className="px-4 pt-3 sm:px-6">
          <div className="border-default-100 mx-auto mb-4 max-h-[calc(100dvh-1.5rem)] max-w-[1440px] overflow-hidden rounded-2xl border bg-white shadow-[0_24px_80px_-24px_rgba(60,34,25,0.35)]">
            <div className="border-default-100 flex items-center justify-between border-b px-5 py-3">
              <span id="mobile-menu-label" className="text-default-950 text-sm font-semibold">
                {isGoodFinePage ? 'Explore Good Fine' : 'Explore Healia'}
              </span>
              <button type="button" data-hs-overlay="#mobile-menu" className="hover:bg-default-50 text-default-700 inline-flex size-10 items-center justify-center rounded-full transition-colors" aria-label="Close navigation menu">
                <Icon icon="tabler:x" className="size-5" />
              </button>
            </div>
            <div className="divide-default-200 flex max-h-[calc(100dvh-6rem)] flex-col gap-1 divide-y overflow-y-auto p-3">
              {navigationData.map((item) => {
                if (item.children) {
                  const mobileRootRoutes = ['/home', '/pricing']
                  const isDropdownActive = item.children.some((subItem) => pathname === subItem.route && !mobileRootRoutes.includes(subItem.route)) || (item.route === '/products#categories' && pathname.startsWith('/products'))
                  return (
                    <div key={item.label} className="hs-accordion">
                      <button
                        type="button"
                        className={`hs-accordion-toggle hover:bg-default-50 hover:text-default-950 flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium transition-all ${isDropdownActive ? 'text-primary' : 'text-default-600'}`}
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label={`Open ${item.label} menu`}
                      >
                        {item.label}
                        <Icon icon="tabler:chevron-down" className="hs-accordion-active:rotate-180 size-4 transition-all" />
                      </button>

                      <div className="hs-accordion-content hidden w-full overflow-hidden px-3 pb-3 transition-[height]">
                        <div className="space-y-1">
                          {item.children.map((subItem) => {
                            const isSubActive = pathname === subItem.route
                            return (
                              <Link
                                key={'mobile-' + subItem.route + subItem.label}
                                href={subItem.route}
                                className={`hover:bg-default-50 hover:text-default-950 block rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${isSubActive ? 'active bg-default-50 text-primary' : 'text-default-600'}`}
                              >
                                {subItem.label}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                } else if (item.route) {
                  const isActive = pathname === item.route || (item.route === '/products' && pathname.startsWith('/products/category/')) || (isGoodFineProductDetail && item.route === '/products/premium-wood-finish')
                  return (
                    <Link
                      key={'mobile-' + item.route + item.label}
                      href={item.route}
                      aria-current={isActive ? 'page' : undefined}
                      className={`hover:bg-default-50 hover:text-default-950 flex items-center rounded-xl px-4 py-3 font-medium transition-all ${isActive ? 'active bg-default-50 text-primary' : 'text-default-600'}`}
                    >
                      {item.label}
                    </Link>
                  )
                }
                return null
              })}
              <Link href={enquiryHref} className="bg-default-950 hover:bg-primary hover:text-default-950 mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white transition-colors lg:hidden">
                {isGoodFinePage ? 'Request a quote' : 'Start Testing'}
                <Icon icon="tabler:arrow-up-right" className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
