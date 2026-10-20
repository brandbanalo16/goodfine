'use client'

import col1 from '@/assets/images/collections/collection-1.webp'
import col2 from '@/assets/images/collections/collection-2.webp'
import col3 from '@/assets/images/collections/collection-3.webp'
import col4 from '@/assets/images/collections/collection-4.webp'
import col5 from '@/assets/images/collections/collection-5.webp'
import mCol1 from '@/assets/images/collections/mobile-collection-1.webp'
import mCol2 from '@/assets/images/collections/mobile-collection-2.webp'
import mCol3 from '@/assets/images/collections/mobile-collection-3.webp'
import mCol4 from '@/assets/images/collections/mobile-collection-4.webp'
import mCol5 from '@/assets/images/collections/mobile-collection-5.webp'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import { useCallback, useEffect, useState } from 'react'

type Slide = {
  desktop: StaticImageData
  mobile: StaticImageData
  alt: string
}

const slides: Slide[] = [
  { desktop: col1, mobile: mCol1, alt: 'Good Fine – Premium Wood Finish' },
  { desktop: col2, mobile: mCol2, alt: 'Good Fine – Product Collection 2' },
  { desktop: col3, mobile: mCol3, alt: 'Good Fine – Product Collection 3' },
  { desktop: col4, mobile: mCol4, alt: 'Good Fine – Product Collection 4' },
  { desktop: col5, mobile: mCol5, alt: 'Good Fine – Product Collection 5' },
]

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [handleNext, isPaused])

  return (
    <section
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Products Slider"
    >
      <div className="container pb-2">

        {/* Header row: title left, arrows right */}
        <div className="flex items-center justify-between py-5 md:py-7">
          <h2 className="text-xl font-bold tracking-tight text-default-950 md:text-2xl lg:text-3xl">
            Featured Products
          </h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous product"
              className="group flex size-10 items-center justify-center rounded-full border border-default-300 bg-white text-default-800 transition-all duration-300 hover:border-default-950 hover:bg-default-950 hover:text-white cursor-pointer shadow-sm"
            >
              <Icon icon="tabler:arrow-left" className="size-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next product"
              className="group flex size-10 items-center justify-center rounded-full border border-default-300 bg-white text-default-800 transition-all duration-300 hover:border-default-950 hover:bg-default-950 hover:text-white cursor-pointer shadow-sm"
            >
              <Icon icon="tabler:arrow-right" className="size-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Image slider — rounded + shadow */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`w-full transition-opacity duration-700 ease-in-out ${
                idx === currentIndex
                  ? 'opacity-100 relative z-10'
                  : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
              }`}
              aria-hidden={idx !== currentIndex}
            >
              {/* Desktop image */}
              <Image
                src={slide.desktop}
                alt={slide.alt}
                className="hidden md:block w-full h-auto"
                priority={idx === 0}
                sizes="100vw"
              />
              {/* Mobile image */}
              <Image
                src={slide.mobile}
                alt={slide.alt}
                className="block md:hidden w-full h-auto"
                priority={idx === 0}
                sizes="100vw"
              />
            </div>
          ))}

          {/* Dot indicators overlaid on bottom of image */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default FeaturedProducts
