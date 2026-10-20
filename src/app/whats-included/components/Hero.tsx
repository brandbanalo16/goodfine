import decorationImg from '@/assets/images/bg/whats-included.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:pt-55 lg:pb-35">
      <Image className="absolute inset-0 -z-1 size-full object-cover opacity-90" src={decorationImg} alt="Decoration" priority />

      <div className="container">
        <div className="mt-40 text-center">
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
