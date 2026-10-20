'use client'

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

export const PAGES_SUBMENUData: SubNavigationType[] = [
  { label: 'Home', route: '/home' },
  { label: 'About', route: '/about' },
  { label: 'Blog', route: '/blog' },
  { label: 'Blog Details', route: '/blog-details' },
  { label: 'Pricing', route: '/pricing' },
  { label: 'List Of Labs', route: '/list-of-labs' },
  { label: 'Contact', route: '/contact' },
  { label: "What's Included", route: '/whats-included' },
  { label: 'Reviews', route: '/reviews' },
  { label: 'Terms & Conditions', route: '/terms-conditions' },
  { label: 'FAQs', route: '/faqs' },
  { label: 'Privacy Policy', route: '/privacy-policy' },
]

const desktopMenuData: NavigationType[] = [
  { label: 'Home', route: '/home' },
  { label: 'About', route: '/about' },
  { label: "What's included", route: '/whats-included' },
  { label: 'Pages', children: PAGES_SUBMENUData },
]

const mobileMenuData: NavigationType[] = [
  { label: 'Home', route: '/home' },
  { label: 'Pages', children: PAGES_SUBMENUData },
  { label: 'Pricing', route: '/pricing' },
]

const Topbar = () => {
  const pathname = usePathname()

  useEffect(() => {
    const overlay = document.getElementById('mobile-menu')
    if (overlay && (window as any).HSOverlay) {
      ; (window as any).HSOverlay.close(overlay)
    }
  }, [pathname])

  return (
    <>
      <header className="container-fluid fixed inset-x-0 top-0 z-140">
        <div className="sticky inset-x-auto top-0 z-120 my-2.5 md:my-5 lg:my-7.5">
          <div className="nav-sticky navbar flex w-full items-center justify-between rounded-full bg-white p-2.5 ps-5 transition-all duration-300">
            <Link href="/" className="flex items-center">
              <Image src={logoDark} alt="Logo" className="h-20 w-auto object-contain" priority />
            </Link>

            <div id="navbar" className="mx-auto hidden items-center justify-center lg:flex">
              {desktopMenuData.map((item) => {
                if (item.children) {
                  const rootRoutes = ['/home', '/about', '/whats-included']
                  const isDropdownActive = item.children.some((subItem) => pathname === subItem.route && !rootRoutes.includes(subItem.route))
                  return (
                    <div key={item.label} className="hs-dropdown relative inline-flex [--trigger:hover]">
                      <button type="button" className={`hs-dropdown-toggle hover:text-primary flex items-center px-4 py-2 font-medium transition-all ${isDropdownActive ? 'text-primary' : 'text-default-600'}`} aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        {item.label}
                        <Icon icon="tabler:chevron-down" className="ms-3" />
                      </button>

                      <div
                        className="hs-dropdown-menu hs-dropdown-open:opacity-100 border-default-100 top-3! mt-2 hidden w-55 rounded-lg border bg-white p-1.25 opacity-0 transition-[opacity,margin] duration-300 before:absolute before:start-0 before:-top-6 before:h-6 before:w-full after:absolute after:start-0 after:-bottom-6 after:h-6 after:w-full"
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
                                className={`hover:bg-primary/6 hover:text-primary block rounded-sm px-3 py-1.75 text-sm font-semibold transition-all ${isSubActive ? 'active text-primary bg-primary/6' : 'text-default-600'}`}
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
                  const isActive = pathname === item.route
                  return (
                    <Link key={item.route + item.label} href={item.route} className={`hover:text-primary flex items-center px-4 py-2 font-medium transition-all ${isActive ? 'active text-primary' : 'text-default-600'}`}>
                      {item.label}
                    </Link>
                  )
                }
                return null
              })}
            </div>

            <div className="flex items-center justify-end gap-4">
              <div className="hidden items-center md:flex">
                <Link href="/contact" className="bg-primary text-default-900 hover:bg-primary/20 inline-flex items-center justify-center rounded-full px-6 py-2.5 font-medium transition-all duration-500">
                  Start Testing
                </Link>
              </div>

              <div className="flex items-center lg:hidden">
                <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="mobile-menu" data-hs-overlay="#mobile-menu" className="bg-primary inline-flex size-10 items-center justify-center rounded-full font-medium text-white transition-all">
                  <Icon icon="tabler:align-right" className="size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className="hs-overlay hs-overlay-open:translate-y-0 hs-overlay-open:opacity-100 hs-overlay-open:top-auto fixed inset-x-0 top-0 z-140 h-78 -translate-y-full transform opacity-0 transition-all duration-300 [--body-scroll:true] lg:hidden"
          role="dialog"
          tabIndex={-1}
          aria-labelledby="mobile-menu-label"
        >
          <div className="container-fluid">
            <div className="mb-4 rounded-2xl bg-white shadow-xl">
              <div className="divide-default-200 flex max-h-74 flex-col gap-1 divide-y overflow-y-auto">
                {mobileMenuData.map((item) => {
                  if (item.children) {
                    const mobileRootRoutes = ['/home', '/pricing']
                    const isDropdownActive = item.children.some((subItem) => pathname === subItem.route && !mobileRootRoutes.includes(subItem.route))
                    return (
                      <div key={item.label} className="hs-accordion">
                        <button type="button" className={`hs-accordion-toggle hover:text-primary flex items-center px-4 py-2 font-medium transition-all ${isDropdownActive ? 'text-primary' : 'text-default-600'}`} aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                          {item.label}
                          <Icon icon="tabler:chevron-down" className="hs-accordion-active:rotate-180 ms-4 transition-all" />
                        </button>

                        <div className="hs-accordion-content hidden w-full overflow-hidden ps-5 pb-4 transition-[height]">
                          <div className="space-y-1">
                            {item.children.map((subItem) => {
                              const isSubActive = pathname === subItem.route
                              return (
                                <Link
                                  key={'mobile-' + subItem.route + subItem.label}
                                  href={subItem.route}
                                  className={`hover:bg-primary/6 hover:text-primary block rounded-sm px-3 py-1.75 text-sm font-semibold transition-all ${isSubActive ? 'active text-primary bg-primary/6' : 'text-default-600'}`}
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
                    const isActive = pathname === item.route
                    return (
                      <Link key={'mobile-' + item.route + item.label} href={item.route} className={`hover:text-primary flex items-center px-4 py-2 font-medium transition-all ${isActive ? 'active text-primary' : 'text-default-600'}`}>
                        {item.label}
                      </Link>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Topbar
