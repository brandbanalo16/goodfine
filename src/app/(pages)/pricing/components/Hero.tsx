import pageBanner from '@/assets/images/bg/page-banner.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="site-page-hero relative size-full overflow-visible py-12 md:py-16 lg:pt-32 lg:pb-20">
        <Image src={pageBanner} className="site-page-hero-background -z-1 object-cover opacity-90" alt="Decoration" priority />

        <div className="container">
          <div className="text-center">
            <h1 className="text-default-50 mb-2.5 text-5xl leading-[1.2em] md:text-[64px]">Pricing Plan</h1>
            <p className="text-default-50">Simple, transparent plans designed for every lifestyle</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
