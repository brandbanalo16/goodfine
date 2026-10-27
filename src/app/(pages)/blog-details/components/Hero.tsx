import pageBanner from '@/assets/images/bg/page-banner.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="site-page-hero relative size-full overflow-visible pt-24 pb-10 md:pt-28 lg:pt-50 lg:pb-16">
        <Image src={pageBanner} className="site-page-hero-background -z-1 object-cover opacity-90" alt="Decoration" priority />

        <div className="container max-w-245!">
          <div className="text-center">
            <div className="mb-2.5 inline-flex items-center justify-center gap-5">
              <div className="text-primary rounded-full bg-white px-4 py-1 text-sm">Preventive</div>

              <span className="bg-primary rounded-full px-4 py-1 text-sm text-white">Feb 13, 2025</span>
            </div>

            <h1 className="text-default-50 mb-2.5 text-5xl leading-[1.2em] md:text-[64px]">5 Proven strategies to extend your health</h1>

            <p className="text-default-50 mx-auto max-w-150">Discover evidence-backed methods to not just live longer, but live healthier and more active years.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
