import heroBg from '@/assets/images/bg/hero-inner-image.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="relative size-full overflow-hidden py-20 md:py-25 lg:pt-55 lg:pb-35">
        <Image src={heroBg} className="absolute inset-0 -z-1 size-full object-cover" alt="Decoration" />

        <div className="container">
          <div className="text-center">
            <h1 className="text-default-50 mb-5 text-5xl leading-[1.2em] md:text-[64px]">Reviews</h1>

            <p className="text-default-50 mx-auto max-w-150">Insightful and thought-provoking perspective on business challenges that aren't as clear-cut as they appear. </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
