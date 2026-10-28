'use client'

import banner1 from '@/assets/images/bg/banner-1.png'
import banner2 from '@/assets/images/bg/banner-2.png'
import banner3 from '@/assets/images/bg/banner-3.png'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

type BannerSlide = {
  image: StaticImageData
  alt: string
  eyebrow: string
  title: string
  highlight: string
  description: string
}

const bannerSlides: BannerSlide[] = [
  {
    image: banner1,
    alt: 'Beautiful wooden furniture and finishes',
    eyebrow: 'GoodFine | Advanced German Technology.',
    title: 'Premium Wood Finishes',
    highlight: 'Made to Last',
    description: 'Bring warmth, depth, and lasting protection to every wooden surface with finishes crafted for beautiful results.',
  },
  {
    image: banner2,
    alt: 'Warm, richly finished wood cabinetry',
    eyebrow: 'GoodFine | Advanced German Technology.',
    title: 'Bring Out the',
    highlight: 'Beauty of Wood',
    description: 'Celebrate the natural grain of your wood with a smooth, rich finish designed to protect the details that make it special.',
  },
  {
    image: banner3,
    alt: 'Wooden furniture in a welcoming finished space',
    eyebrow: 'Trusted by Woodworking Professionals',
    title: 'Professional Finish.',
    highlight: 'Beautiful Results.',
    description: 'From furniture to full interiors, find dependable wood-coating solutions for a finish you will love to live with.',
  },
]

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(handleNext, 6000)
    return () => clearInterval(interval)
  }, [handleNext, isPaused])

  const slide = bannerSlides[currentIndex]

  return (
    <section className="group relative w-full px-4 pb-6 select-none sm:px-6 md:pb-8 lg:px-10" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} aria-label="Good Fine featured products">
      <div className="bg-default-950 relative isolate min-h-[560px] overflow-hidden rounded-2xl sm:min-h-[620px] md:min-h-[680px] lg:min-h-[740px]">
        <Image key={slide.alt} src={slide.image} alt={slide.alt} fill priority={currentIndex === 0} className="hero-image-enter object-cover object-center" sizes="(max-width: 768px) 100vw, 95vw" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#21150e]/90 via-[#21150e]/70 to-[#21150e]/15 sm:via-[#21150e]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#21150e]/35 via-transparent to-transparent" />

        <div key={currentIndex} className="relative z-10 flex min-h-[560px] items-center px-6 py-16 sm:min-h-[620px] sm:px-10 md:min-h-[680px] md:px-14 lg:min-h-[740px] lg:px-20">
          <div className="max-w-2xl text-white">
            <p className="hero-copy-enter mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-sm sm:text-sm">
              <Icon icon="tabler:sparkles" className="text-primary size-4" />
              {slide.eyebrow}
            </p>

            <h1 className="hero-copy-enter hero-copy-delay-1 max-w-2xl text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.title}
              <span className="text-primary mt-1 block">{slide.highlight}</span>
            </h1>

            <p className="hero-copy-enter hero-copy-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg md:text-xl">{slide.description}</p>

            <div className="hero-copy-enter hero-copy-delay-3 mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
              <Link href="/contact" className="group/cta bg-primary text-default-950 inline-flex items-center gap-3 rounded-full py-2 ps-6 pe-2 text-sm font-bold transition-colors duration-300 hover:bg-white sm:text-base">
                Talk to an Expert
                <span className="text-default-950 flex size-10 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover/cta:translate-x-0.5">
                  <Icon icon="tabler:arrow-up-right" className="size-5" />
                </span>
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-white/45 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10 sm:text-base">
                Discover Good Fine
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous banner"
          className="hover:bg-primary hover:text-default-950 absolute start-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition-colors sm:start-5 sm:size-12"
        >
          <Icon icon="tabler:chevron-left" className="size-6" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next banner"
          className="hover:bg-primary hover:text-default-950 absolute end-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition-colors sm:end-5 sm:size-12"
        >
          <Icon icon="tabler:chevron-right" className="size-6" />
        </button>

        <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center gap-2.5 md:bottom-7">
          {bannerSlides.map((item, index) => (
            <button
              key={item.alt}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show banner ${index + 1}`}
              aria-current={index === currentIndex}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-9' : 'w-2.5 bg-white/60 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
