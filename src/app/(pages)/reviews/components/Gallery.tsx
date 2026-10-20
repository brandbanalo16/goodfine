'use client'

import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import lightGallery from 'lightgallery'
import lgFullscreen from 'lightgallery/plugins/fullscreen'
import lgVideo from 'lightgallery/plugins/video'
import lgZoom from 'lightgallery/plugins/zoom'

import author1 from '@/assets/images/author/1.jpg'
import author2 from '@/assets/images/author/2.jpg'
import author5 from '@/assets/images/author/5.jpg'

import videoBg1 from '@/assets/images/review/video-bg-1.png'
import videoBg2 from '@/assets/images/review/video-bg-2.png'
import videoBg3 from '@/assets/images/review/video-bg-3.png'
import videoBg4 from '@/assets/images/review/video-bg-4.png'

import review1 from '@/assets/images/review/review-1.png'
import review2 from '@/assets/images/review/review-2.png'

import avatar4 from '@/assets/images/avatars/4.png'
import iconDark from '@/assets/images/other/icon-dark.svg'

export type TextReviewItem = {
  type: 'text'
  title: string
  quote: string
  author: string
  role: string
  avatar: StaticImageData
}

export type VideoReviewItem = {
  type: 'video'
  bgImage: StaticImageData
  videoUrl: string
}

export type ImageReviewItem = {
  type: 'image_overlay'
  image: StaticImageData
  author: string
  location: string
  title: string
  quote: string
}

export type GalleryType = TextReviewItem | VideoReviewItem | ImageReviewItem

const galleryData: GalleryType[] = [
  {
    type: 'text',
    title: 'Stress levels finally down',
    author: 'John D',
    role: 'Small business owner',
    avatar: author5,
    quote: "I've tried different wellness apps before, but none gave me insights as personalized as Healia.",
  },
  {
    type: 'video',
    bgImage: videoBg1,
    videoUrl: 'https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde',
  },
  {
    type: 'text',
    title: 'Stress levels finally down',
    author: 'John D',
    role: 'Small business owner',
    avatar: author1,
    quote: "I've tried different wellness apps before, but none gave me insights as personalized as Healia.",
  },
  {
    type: 'video',
    bgImage: videoBg2,
    videoUrl: 'https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde',
  },
  {
    type: 'image_overlay',
    image: review1,
    author: 'Omar F',
    location: 'Cairo, Egypt',
    title: 'My sleep improved drastically',
    quote: "My sleep improved drastically after using Healia's personalized health insights. I discovered underlying issues affecting my rest and followed simple recommendations tailored to my needs.",
  },
  {
    type: 'image_overlay',
    image: review2,
    author: 'Haruto S.',
    location: 'Tokyo, Japan',
    title: 'No more brain fog',
    quote: "I've tried different wellness apps before, but none gave me insights as personalized as Healia.",
  },
  {
    type: 'video',
    bgImage: videoBg3,
    videoUrl: 'https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde',
  },
  {
    type: 'text',
    title: 'Confidence in my health',
    author: 'Emily R.',
    role: 'Los Angeles, USA',
    avatar: author2,
    quote: 'As a busy professional, Healia makes health checkups easy and convenient',
  },
  {
    type: 'video',
    bgImage: videoBg4,
    videoUrl: 'https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde',
  },
  {
    type: 'text',
    title: 'Stress levels finally down',
    author: 'John D',
    role: 'Small business owner',
    avatar: avatar4,
    quote: "I've tried different wellness apps before, but none gave me insights as personalized as Healia.",
  },
]

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const lgInstance = lightGallery(containerRef.current, {
        selector: '[data-toggle="video"]',
        plugins: [lgVideo, lgZoom, lgFullscreen],
        download: false,
        autoplayVideoOnSlide: true,
        zoomFromOrigin: false,
        youTubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
        },
      })

      return () => {
        lgInstance.destroy()
      }
    }
  }, [])

  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container-fluid">
        <div ref={containerRef} className="relative columns-1 gap-x-5 *:mb-5 sm:columns-2 md:columns-4 lg:gap-x-7.5 lg:*:mb-7.5" data-toggle="gallery">
          {galleryData.map((item, idx) => {
            if (item.type === 'text') {
              return (
                <div key={idx} className="border-default-100 relative h-full overflow-hidden rounded-2xl border bg-white p-5">
                  <h3 className="mb-25 text-xl">“{item.title}”</h3>

                  <div className="flex gap-2.5">
                    <Image src={item.avatar} alt="Avatar Image" className="size-9 rounded-md" />
                    <div>
                      <h3 className="mb-1">{item.author}</h3>
                      <div className="text-sm">{item.role}</div>
                    </div>
                  </div>
                  <p className="mt-4">{item.quote}</p>
                </div>
              )
            } else if (item.type === 'video') {
              return (
                <div key={idx}>
                  <div className="border-default-100 relative h-130 overflow-hidden rounded-2xl border bg-white">
                    <Image src={item.bgImage} alt="Testimonial Image" className="absolute inset-0 h-full w-full object-cover" />

                    <div className="absolute inset-0 flex h-full flex-col items-center justify-center bg-[repeating-linear-gradient(180deg,transparent,#3c2219)] p-7.5">
                      <a href={item.videoUrl} data-toggle="video" className="text-primary flex size-12.5 items-center justify-center rounded-full bg-white" data-lg-id="2c304469-c960-4365-b8b0-8c4108baa05e">
                        <Icon icon="tabler:player-play-filled" className="size-5" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            } else if (item.type === 'image_overlay') {
              return (
                <div key={idx} className="border-default-100 relative h-full overflow-hidden rounded-2xl border bg-white p-5">
                  <div className="relative mb-5">
                    <Image src={item.image} alt="Review Image" className="size-full rounded-lg bg-cover" />

                    <div className="absolute inset-0 flex h-full flex-col justify-end p-2.5">
                      <div className="flex items-center justify-between rounded bg-white/10 px-2 py-1.5 [backdrop-filter:blur(6px)]">
                        <div className="text-default-50 text-sm">{item.author}</div>
                        <div className="text-default-100 text-sm">{item.location}</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-25 text-xl">“{item.title}”</h3>

                  <p>{item.quote}</p>
                </div>
              )
            }
            return null
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-default-950 mb-5 text-xl">Share your experience with us by clicking the below button!</p>

          <Link href="/about" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
            Submit a Review
            <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
              <Image src={iconDark} alt="Icon" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery
