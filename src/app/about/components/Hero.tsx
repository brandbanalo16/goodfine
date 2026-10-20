'use client'

import { Icon } from '@iconify/react'
import { useRef, useState } from 'react'

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="absolute inset-0 size-full overflow-hidden">
        <video ref={videoRef} id="myVideo" loop autoPlay muted playsInline className="absolute -inset-full -z-10 m-auto flex h-full w-full bg-[url('/video/bg.jpg')] bg-cover bg-position-[50%] object-cover">
          <source src="/video/about.mp4" type="video/mp4" />
          <source src="/video/about.webm" type="video/webm" />
        </video>

        <div className="absolute end-10 bottom-10 z-100">
          <button id="toggleBtn" onClick={handleToggle} className="text-primary flex size-12.5 items-center justify-center rounded-full bg-white" type="button">
            <Icon icon="tabler:player-play-filled" className={`text-primary size-6 ${isPlaying ? 'hidden' : ''}`} id="playIcon" />
            <Icon icon="tabler:player-pause-filled" className={`text-primary size-6 ${isPlaying ? '' : 'hidden'}`} id="pauseIcon" />
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="relative mt-82.5">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-2">
              <h1 className="text-default-50 mb-2.5 text-[47px] font-medium lg:text-[70px]">About Healia</h1>
              <p className="text-default-300 max-w-82">
                Your Healia starts with <span className="text-primary">125+</span> lab tests. Here is everything we test.
              </p>
            </div>

            <p className="text-default-300 text-[22px]/[1.3em]">We believe that healthcare shouldn't just be about treating symptoms — it should be about uncovering the root causes and helping you live your healthiest life.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
