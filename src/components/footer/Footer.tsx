import logoLight from '@/assets/images/logo-main.webp'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="bg-default-950 relative size-full overflow-hidden py-25">
        <div className="container-fluid">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-37.5">
            <div>
              <h2 className="text-default-50 mb-6 max-w-4/5 text-[38px]">Stay ahead of your health journey</h2>

              <p className="text-default-100 mb-6">Get expert tips, health insights, and the latest in longevity science delivered monthly.</p>

              <form className="mb-12.5 flex">
                <input type="email" className="bg-default-700 border-default-700 flex h-12.5 w-full items-center rounded-s-lg border px-5 py-2 text-white placeholder:text-white" placeholder="Enter your email" />
                <button type="submit" className="bg-primary inline-flex items-center justify-center gap-5 rounded-e-lg px-9 py-3.5 font-medium text-white transition-all">
                  Subscribe
                </button>
              </form>

              <div className="flex gap-4">
                <Link href="" className="border-default-700 text-primary hover:bg-default-700 flex size-11 items-center justify-center rounded border bg-transparent transition-all duration-300">
                  <Icon icon="tabler:brand-facebook" className="size-6"></Icon>
                </Link>
                <Link href="" className="border-default-700 text-primary hover:bg-default-700 flex size-11 items-center justify-center rounded border bg-transparent transition-all duration-300">
                  <Icon icon="tabler:brand-linkedin" className="size-6"></Icon>
                </Link>
                <Link href="" className="border-default-700 text-primary hover:bg-default-700 flex size-11 items-center justify-center rounded border bg-transparent transition-all duration-300">
                  <Icon icon="tabler:brand-x" className="size-6"></Icon>
                </Link>
                <Link href="" className="border-default-700 text-primary hover:bg-default-700 flex size-11 items-center justify-center rounded border bg-transparent transition-all duration-300">
                  <Icon icon="tabler:brand-instagram" className="size-6"></Icon>
                </Link>
              </div>
            </div>

            <div>
              <div className="border-default-700 rounded-2xl border p-4 lg:p-12.5">
                <div className="grid grid-cols-3 gap-4">
                  <div className="*:text-default-400 *:hover:text-primary space-y-5 *:flex">
                    <Link href="/">Home</Link>
                    <Link href="/">Feature</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                  </div>

                  <div className="*:text-default-400 *:hover:text-primary space-y-5 *:flex">
                    <Link href="/whats-included">What's Included</Link>
                    <Link href="/list-of-labs">List Of Labs</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/faqs">FAQs</Link>
                    <Link href="/reviews">Reviews</Link>
                  </div>

                  <div className="*:text-default-400 *:hover:text-primary space-y-5 *:flex">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-conditions">Terms &amp; Conditions</Link>
                    <Link href="/error-404">Error 404</Link>
                    <a href="https://unifato.com/" target="_blank">
                      Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-end justify-between">
            <Link href="/" aria-current="page" className="footer-logo-link inline-block">
              <Image src={logoLight} alt="Logo" className="h-10 w-10 object-contain" />
            </Link>

            <div className="text-default-400">
              Develop by{' '}
              <a href="https://unifato.com/" target="_blank" className="text-primary font-bold underline">
                Unifato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
