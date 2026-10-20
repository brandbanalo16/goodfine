'use client'

import banner1 from '@/assets/images/bg/banner-1.png'
import banner2 from '@/assets/images/bg/banner-2.png'
import banner3 from '@/assets/images/bg/banner-3.png'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

const bannerSlides = [
  {
    image: banner1,
    alt: 'Banner Slide 1',
  },
  {
    image: banner2,
    alt: 'Banner Slide 2',
  },
  {
    image: banner3,
    alt: 'Banner Slide 3',
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
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [handleNext, isPaused])

  return (
    <section
      className="group relative w-full overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Image Banner Slider"
    >
      <div className="relative aspect-[2000/750] w-full min-h-[260px] md:min-h-[420px] lg:min-h-[520px]">
        {bannerSlides.map((slide, index) => {
          const isActive = index === currentIndex
          return (
            <div
              key={index}
              className={`absolute inset-0 size-full transition-opacity duration-700 ease-in-out ${isActive ? 'z-10 opacity-100 pointer-events-auto' : 'z-0 opacity-0 pointer-events-none'
                }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="size-full object-cover object-center"
                sizes="100vw"
              />
            </div>
          )
        })}

        {/* Previous Navigation Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute start-4 md:start-8 top-1/2 z-20 -translate-y-1/2 flex size-10 md:size-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-white shadow-lg cursor-pointer"
        >
          <Icon icon="tabler:chevron-left" className="size-6 md:size-7" />
        </button>

        {/* Next Navigation Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute end-4 md:end-8 top-1/2 z-20 -translate-y-1/2 flex size-10 md:size-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-white shadow-lg cursor-pointer"
        >
          <Icon icon="tabler:chevron-right" className="size-6 md:size-7" />
        </button>

        {/* Dots Pagination */}
        <div className="absolute bottom-4 md:bottom-8 inset-x-0 z-20 flex justify-center items-center gap-2.5">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                  ? 'w-8 h-2.5 bg-primary shadow-md'
                  : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
