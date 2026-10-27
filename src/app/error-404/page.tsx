import pageBanner from '@/assets/images/bg/page-banner.png'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404',
}

const Page = () => {
  return (
    <>
      <section className="site-page-hero relative isolate">
        <Image src={pageBanner} alt="" fill priority sizes="100vw" className="site-page-hero-background -z-10 object-cover object-center" />
        <div className="container relative z-10">
          <div className="border-primary relative z-10 mx-auto w-full max-w-150 overflow-hidden rounded-2xl border bg-[#21150e]/65 text-white">
            <div className="flex flex-col gap-5 p-10 text-center lg:p-15">
              <h2 className="text-7xl lg:text-9xl">404</h2>

              <h3 className="lg:text-4xl">Page not found</h3>

              <p className="mb-4 text-white/80">The page you are looking for doesn't exist or has been moved.</p>

              <div className="grid">
                <Link href="/" className="bg-primary inline-flex items-center justify-center gap-5 rounded-2xl px-9 py-3.5 font-medium text-white transition-all">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
