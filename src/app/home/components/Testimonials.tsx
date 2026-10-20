'use client'

import testimonialImage from '@/assets/images/review/testimonial-image.png'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import lightGallery from 'lightgallery'
import lgVideo from 'lightgallery/plugins/video'

export type TestimonialTextItem = {
  author: string
  role: string
  instagram: string
  title: string
  quote: string
}

const textTestimonials: TestimonialTextItem[] = [
  {
    author: 'Sarah M.',
    role: 'Health Conscious',
    instagram: '@mindful_health',
    title: 'Quick and effortless',
    quote: "“Healia made lab testing stress-free. I booked online, a technician came to my home, and I had my results in less than 24 hours. I'll never go back to waiting rooms again!”",
  },
  {
    author: 'Sarah M.',
    role: 'Health Conscious',
    instagram: '@mindful_health',
    title: 'Quick and effortless',
    quote: "“Healia made lab testing stress-free. I booked online, a technician came to my home, and I had my results in less than 24 hours. I'll never go back to waiting rooms again!”",
  },
]

const Testimonials = () => {
  const videoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const lg = lightGallery(videoRef.current, {
        selector: 'this',
        plugins: [lgVideo],
        download: false,
        youTubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
        },
      })
      return () => {
        lg.destroy()
      }
    }
  }, [])

  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container-fluid">
        <div className="mx-auto mb-12.5 max-w-200 text-center">
          <div className="text-primary mb-2.5 text-sm">( Testimonials )</div>
          <h2 className="text-4xl lg:text-5xl">
            Health journeys shared by <br /> <span className="text-default-400">our community</span>
          </h2>
        </div>

        <div className="mb-20 grid gap-7.5 lg:grid-cols-11">
          <div className="col-span-4">
            <div className="border-default-300 h-full rounded-2xl border p-7.5">
              <div className="flex items-center justify-between">
                <div className="testimonial-detail">
                  <h3 className="text-primary mb-1 text-[22px]">{textTestimonials[0].author}</h3>
                  <div className="text-default-500 text-sm">{textTestimonials[0].role}</div>
                </div>

                <Link href="https://www.instagram.com/" target="_blank" className="bg-default-100 flex items-center gap-2 rounded-lg px-2.5 py-2">
                  <Icon icon="tabler:brand-instagram" className="size-5 scale-125" />
                  <div>{textTestimonials[0].instagram}</div>
                </Link>
              </div>

              <div className="mt-50">
                <h3 className="mb-2.5 text-xl">{textTestimonials[0].title}</h3>
                <p>
                  <span className="text-default-950">“Healia made lab testing stress-free.</span> I booked online, a technician came to my home, and I had my results in less than 24 hours. I'll never go back to waiting rooms again!”
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="border-default-100 relative h-full overflow-hidden rounded-2xl border bg-white">
              <Image src={testimonialImage} alt="Testimonial Image" className="absolute inset-0 h-full w-full object-cover" />

              <div className="absolute inset-0 flex h-full flex-col justify-between bg-[repeating-linear-gradient(180deg,transparent,#3c2219)] p-7.5">
                <Link ref={videoRef} href="https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde" data-toggle="video" className="text-primary flex size-10 items-center justify-center rounded-full bg-white" data-lg-id="2c304469-c960-4365-b8b0-8c4108baa05e">
                  <Icon icon="tabler:player-play-filled" className="size-5" />
                </Link>

                <div className="bg-default-50/10 rounded-lg p-2.5">
                  <div className="mb-5">
                    <h3 className="text-primary mb-1 text-[22px]">Sarah M.</h3>
                    <div className="text-default-500 text-sm">Health Conscious</div>
                  </div>

                  <Link href="https://www.instagram.com/" target="_blank" className="bg-default-400/20 text-primary flex items-center gap-2 rounded-lg px-2.5 py-2">
                    <Icon icon="tabler:brand-instagram" className="size-5 scale-125" />
                    <div>@mindful_health</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="border-default-300 h-full rounded-2xl border p-7.5">
              <div className="flex items-center justify-between">
                <div className="testimonial-detail">
                  <h3 className="text-primary mb-1 text-[22px]">{textTestimonials[1].author}</h3>
                  <div className="text-default-500 text-sm">{textTestimonials[1].role}</div>
                </div>

                <Link href="https://www.instagram.com/" target="_blank" className="bg-default-100 flex items-center gap-2 rounded-lg px-2.5 py-2">
                  <Icon icon="tabler:brand-instagram" className="size-5 scale-125" />
                  <div>{textTestimonials[1].instagram}</div>
                </Link>
              </div>

              <div className="mt-50">
                <h3 className="mb-2.5 text-xl">{textTestimonials[1].title}</h3>
                <p>
                  <span className="text-default-950">“Healia made lab testing stress-free.</span> I booked online, a technician came to my home, and I had my results in less than 24 hours. I'll never go back to waiting rooms again!”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
