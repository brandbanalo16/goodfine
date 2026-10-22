import aboutImage from '@/assets/images/other/about-1.jpeg'
import interiorImage from '@/assets/images/other/about-kitchen-1.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const featuresList = ['Best quality standards', 'A wide range of shades', 'Innovative coatings', 'Nationwide distribution', '50+ premium finishes', 'Award-winning products']

const Benefits = () => {
  return (
    <section className="bg-default-50 relative mx-4 overflow-hidden rounded-3xl py-16 sm:mx-6 sm:py-20 lg:mx-10 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
          <div className="relative mx-auto w-full max-w-[560px] pb-14 sm:pb-16 lg:mx-0 lg:max-w-none">
            <div className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[440px] lg:h-[500px]">
              <Image src={interiorImage} alt="Warm wood finishes in an inviting outdoor living space" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 1024px) 90vw, 45vw" />
              <div className="from-default-950/35 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            </div>

            <div className="border-default-50 absolute right-0 bottom-0 z-10 w-[57%] overflow-hidden rounded-2xl border-4 shadow-xl">
              <div className="relative h-[180px] sm:h-[230px]">
                <Image src={aboutImage} alt="Wood cabinetry showcasing a rich, smooth finish" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 640px) 55vw, 300px" />
              </div>
            </div>

            <div className="absolute bottom-5 left-4 z-20 flex items-center gap-3 rounded-xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:left-5 sm:px-5">
              <span className="bg-primary/15 text-primary flex size-11 items-center justify-center rounded-lg">
                <Icon icon="tabler:calendar-star" className="size-6" />
              </span>
              <span>
                <span className="text-default-950 block text-xl leading-none font-bold">Since 2008</span>
                <span className="text-default-500 mt-1 block text-xs font-medium">Crafting better finishes</span>
              </span>
            </div>
          </div>

          <div className="lg:py-6">
            <div className="bg-primary/12 text-default-950 mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold">
              <Icon icon="tabler:sparkles" className="text-primary size-4" />
              The Good Fine difference
            </div>

            <h2 className="text-default-950 max-w-xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Give every surface a finish worth <span className="text-primary">showing off.</span>
            </h2>

            <p className="text-default-600 mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              Since 2008, KC Good Shine Paints has brought thoughtful innovation and lasting beauty to surface coatings. Our Good Shine and Krista ranges help you create spaces that feel unmistakably yours.
            </p>

            <div className="mt-8 grid gap-x-5 gap-y-4 sm:grid-cols-2">
              {featuresList.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="bg-primary/15 text-primary flex size-7 shrink-0 items-center justify-center rounded-full">
                    <Icon icon="tabler:check" className="size-4" />
                  </span>
                  <span className="text-default-800 text-sm font-medium sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="border-default-200 mt-9 flex flex-wrap items-center gap-5 border-t pt-6">
              <div className="flex items-center gap-3">
                <span className="text-default-950 text-4xl leading-none font-bold tracking-tight">
                  450<span className="text-primary">+</span>
                </span>
                <span className="text-default-500 max-w-24 text-sm leading-snug font-medium">successful projects</span>
              </div>
              <Link href="/about" className="group bg-default-950 hover:bg-primary hover:text-default-950 inline-flex items-center gap-3 rounded-full py-2 ps-5 pe-2 text-sm font-semibold text-white transition-colors sm:text-base">
                Get to know us
                <span className="text-default-950 flex size-9 items-center justify-center rounded-full bg-white transition-transform group-hover:translate-x-0.5">
                  <Icon icon="tabler:arrow-up-right" className="size-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
