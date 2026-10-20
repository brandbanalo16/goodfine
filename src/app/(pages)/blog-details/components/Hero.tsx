import HeroBg from '@/assets/images/bg/blog.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="relative size-full overflow-hidden bg-[linear-gradient(180deg,#3c2219,transparent,#3c2219_70%)] pt-32 pb-14 md:pt-37.5 lg:pt-80 lg:pb-20">
        <Image src={HeroBg} className="absolute inset-0 -z-1 size-full object-cover opacity-90" alt="Decoration" />

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
