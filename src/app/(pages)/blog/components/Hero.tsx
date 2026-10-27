import pageBanner from '@/assets/images/bg/page-banner.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="site-page-hero relative size-full overflow-visible py-12 md:py-16 lg:pt-32 lg:pb-20">
        <Image src={pageBanner} className="site-page-hero-background -z-1 object-cover opacity-90" alt="Decoration" priority />

        <div className="container">
          <div className="text-center">
            <h1 className="text-default-50 mb-2.5 text-5xl leading-[1.2em] md:text-[64px]">Blog</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
