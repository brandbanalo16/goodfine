'use client'

import googleLogo from '@/assets/images/icons/google-logo.png'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export type TestimonialTextItem = {
  author: string
  role: string
  title: string
  quote: string
}

const textTestimonials: TestimonialTextItem[] = [
  {
    author: 'Sarah M.',
    role: 'Healia member',
    title: 'Quick and effortless',
    quote: "Healia made lab testing stress-free. I booked online, a technician came to my home, and I had my results in less than 24 hours. I'll never go back to waiting rooms again!",
  },
  {
    author: 'James R.',
    role: 'Healia member',
    title: 'Clear answers, without the guesswork',
    quote: 'The results were easy to review, and the information helped me know what questions to bring to my next appointment.',
  },
  {
    author: 'Priya K.',
    role: 'Healia member',
    title: 'Convenient from start to finish',
    quote: 'I appreciated being able to explore testing options on my own time. The experience felt organized and easy to follow.',
  },
  {
    author: 'Michael T.',
    role: 'Healia member',
    title: 'A more proactive approach',
    quote: 'Healia gave me a practical way to keep track of my health and feel more prepared for conversations with my care team.',
  },
  {
    author: 'Aisha W.',
    role: 'Healia member',
    title: 'Everything was easy to understand',
    quote: 'The process was clear at each step, from choosing a test to reviewing the information afterward.',
  },
  {
    author: 'Daniel L.',
    role: 'Healia member',
    title: 'Helpful insights for my next steps',
    quote: 'I found it useful to have my health information presented in a straightforward way that helped me plan what to discuss next.',
  },
  {
    author: 'Emily C.',
    role: 'Healia member',
    title: 'Fits into a busy schedule',
    quote: 'Being able to arrange testing around my schedule made it easier to make time for preventive care.',
  },
  {
    author: 'Robert G.',
    role: 'Healia member',
    title: 'A reassuring experience',
    quote: 'I knew what to expect throughout the process, and that made taking the next step for my health feel more manageable.',
  },
  {
    author: 'Nina P.',
    role: 'Healia member',
    title: 'A useful addition to my routine',
    quote: 'It is nice having a simple way to keep up with regular testing and have the details ready when I need them.',
  },
  {
    author: 'David S.',
    role: 'Healia member',
    title: 'Convenient and easy to navigate',
    quote: 'From browsing available tests to checking my information, the experience felt clear and uncomplicated.',
  },
]

const Testimonials = () => {
  const [itemsPerView, setItemsPerView] = useState(1)
  const [activePage, setActivePage] = useState(0)

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const tabletQuery = window.matchMedia('(min-width: 640px)')

    const updateItemsPerView = () => {
      setItemsPerView(desktopQuery.matches ? 3 : tabletQuery.matches ? 2 : 1)
    }

    updateItemsPerView()
    desktopQuery.addEventListener('change', updateItemsPerView)
    tabletQuery.addEventListener('change', updateItemsPerView)

    return () => {
      desktopQuery.removeEventListener('change', updateItemsPerView)
      tabletQuery.removeEventListener('change', updateItemsPerView)
    }
  }, [])

  const pages = Array.from({ length: Math.ceil(textTestimonials.length / itemsPerView) }, (_, index) => textTestimonials.slice(index * itemsPerView, (index + 1) * itemsPerView))

  useEffect(() => {
    setActivePage(0)
  }, [itemsPerView])

  const showPrevious = () => setActivePage((page) => Math.max(0, page - 1))
  const showNext = () => setActivePage((page) => Math.min(pages.length - 1, page + 1))

  return (
    <section className="relative size-full overflow-hidden py-16 md:py-20 lg:py-25" aria-labelledby="testimonials-title">
      <div className="container-fluid">
        <header className="mx-auto mb-12.5 max-w-200 text-center">
          <div className="text-primary mb-2.5 text-sm">( Testimonials )</div>
          <h2 id="testimonials-title" className="text-4xl lg:text-5xl">
            Health journeys shared by <br /> <span className="text-default-400">our community</span>
          </h2>
        </header>

        <div className="mb-8 overflow-hidden" aria-roledescription="carousel" aria-label="Healia member testimonials">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activePage * 100}%)` }}>
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} role="group" aria-roledescription="slide" aria-label={`Page ${pageIndex + 1} of ${pages.length}`} aria-hidden={pageIndex !== activePage} className="w-full shrink-0">
                <div className="grid h-full gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
                  {page.map((testimonial) => (
                    <article key={testimonial.author} className="border-default-300 h-full rounded-2xl border p-7.5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="testimonial-detail">
                          <h3 className="text-primary mb-1 text-[22px]">{testimonial.author}</h3>
                          <div className="text-default-500 text-sm">{testimonial.role}</div>
                        </div>

                        <span className="bg-default-100 flex items-center rounded-lg px-2.5 py-2">
                          <Image src={googleLogo} alt="Google" className="h-5 w-auto" />
                        </span>
                      </div>

                      <div className="mt-50">
                        <h3 className="mb-2.5 text-xl">{testimonial.title}</h3>
                        <p>“{testimonial.quote}”</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={showPrevious}
            disabled={activePage === 0}
            aria-label="Previous testimonials"
            className="border-default-300 text-default-800 hover:border-primary hover:text-primary flex size-11 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Icon icon="tabler:chevron-left" className="size-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" aria-label="Choose testimonial page">
            {pages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActivePage(index)}
                aria-label={`Go to testimonial page ${index + 1}`}
                aria-current={activePage === index ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all ${activePage === index ? 'bg-primary w-7' : 'bg-default-300 hover:bg-default-400 w-2.5'}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={showNext}
            disabled={activePage === pages.length - 1}
            aria-label="Next testimonials"
            className="border-default-300 text-default-800 hover:border-primary hover:text-primary flex size-11 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Icon icon="tabler:chevron-right" className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
