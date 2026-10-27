import pageBanner from '@/assets/images/bg/page-banner.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="site-page-hero relative w-full overflow-visible pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-44 lg:pb-20">
      <div className="site-page-hero-background -z-10">
        <Image src={pageBanner} alt="" fill priority sizes="100vw" className="object-cover object-center" />
      </div>

      <div className="relative z-10 mx-auto mt-10 w-full max-w-[1440px] px-5 md:mt-10 md:px-10 lg:mt-6">
        <div className="grid gap-8 md:grid-cols-3 md:items-end">
          <div className="md:col-span-2">
            <h1 className="text-default-50 mb-2.5 text-[47px] font-medium lg:text-[70px]">About Healia</h1>
            <p className="text-default-300 max-w-82">
              Your Healia starts with <span className="text-primary">125+</span> lab tests. Here is everything we test.
            </p>
          </div>
          <p className="text-default-300 text-lg leading-[1.3] md:text-[22px]/[1.3em]">We believe that healthcare shouldn't just be about treating symptoms — it should be about uncovering the root causes and helping you live your healthiest life.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
