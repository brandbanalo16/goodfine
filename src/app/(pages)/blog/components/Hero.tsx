import HeroImg from '@/assets/images/bg/hero-inner-image.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="relative size-full overflow-hidden py-20 md:py-25 lg:pt-55 lg:pb-35">
        <Image src={HeroImg} className="absolute inset-0 -z-1 size-full object-cover opacity-90" alt="Decoration" />

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
