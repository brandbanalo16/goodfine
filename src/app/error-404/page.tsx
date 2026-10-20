import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404',
}

const Page = () => {
  return (
    <>
      <section className="relative py-25 lg:py-50">
        <div className="container">
          <div className="border-primary relative z-10 mx-auto w-150 overflow-hidden rounded-2xl border">
            <div className="flex flex-col gap-5 p-10 text-center lg:p-15">
              <h2 className="text-7xl lg:text-9xl">404</h2>

              <h3 className="lg:text-4xl">Page not found</h3>

              <p className="text-default-600 mb-4">The page you are looking for doesn't exist or has been moved.</p>

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
