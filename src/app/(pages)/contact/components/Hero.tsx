import pageBanner from '@/assets/images/bg/page-banner.png'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="site-page-hero relative size-full overflow-visible pt-24 pb-8 md:pt-28 lg:pt-40 lg:pb-16">
        <Image src={pageBanner} className="site-page-hero-background -z-1 object-cover opacity-90" alt="Decoration" priority />

        <div className="container">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="contact-hero-left">
              <div className="contact-hero-top">
                <h1 className="text-default-50 mb-2.5 text-[47px] lg:text-[70px]">Contact Us</h1>
                <p className="text-default-50">Your health journey is our priority. Whether you're curious about our membership.</p>
              </div>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="bg-default-700 flex size-11 items-center justify-center rounded-md">
                    <Icon icon="tabler:mail" className="text-primary size-7"></Icon>
                  </div>
                  <a href="mailto:healia@example.com" className="text-default-50">
                    healia@example.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="bg-default-700 flex size-11 items-center justify-center rounded-md">
                    <Icon icon="tabler:phone" className="text-primary size-7"></Icon>
                  </div>
                  <a href="tel:+1(415)555-0167" className="text-default-50">
                    +1 (415) 555-0167
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="bg-default-700 flex size-11 items-center justify-center rounded-md">
                    <Icon icon="tabler:map-pin" className="text-primary size-7"></Icon>
                  </div>
                  <div className="text-default-50">1238 Echo Ridge Blvd, Suite 400, San Francisco, CA 94103, United States</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white/10 p-10">
              <div className="mb-5">
                <input type="text" id="name" className="text-default-300 placeholder:text-default-300 border-default-500 flex h-17.5 w-full items-center rounded border bg-transparent px-5 py-2" placeholder="Name" />
              </div>

              <div className="mb-5">
                <input type="email" id="email" className="text-default-300 placeholder:text-default-300 border-default-500 flex h-17.5 w-full items-center rounded border bg-transparent px-5 py-2" placeholder="Email" />
              </div>

              <div className="mb-5">
                <textarea id="message" className="text-default-300 placeholder:text-default-300 border-default-500 flex h-auto w-full items-center rounded border bg-transparent px-5 py-2" rows={4} placeholder="Message"></textarea>
              </div>

              <div className="grid">
                <button type="submit" className="group bg-primary inline-flex items-center justify-center gap-5 rounded-xl px-8 py-4 font-medium text-white transition-all">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
