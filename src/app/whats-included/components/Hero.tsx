import pageBanner from '@/assets/images/bg/page-banner.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="site-page-hero relative size-full overflow-visible py-12 md:py-16 lg:pt-32 lg:pb-20">
      <Image className="site-page-hero-background -z-1 object-cover opacity-90" src={pageBanner} alt="Decoration" priority />

      <div className="container">
        <div className="text-center">
          <h1 className="text-default-50 mb-2.5 text-5xl leading-[1.2em] md:text-[64px]">What's included</h1>
          <p className="text-default-300 mx-auto inline-block max-w-75">
            Your Healia starts with <span className="text-primary">125+</span> lab tests. <br /> Here is everything we test.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
