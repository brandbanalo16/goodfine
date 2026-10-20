import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

import author3 from '@/assets/images/author/3.jpg'
import heroInnerImg from '@/assets/images/bg/hero-inner-image.png'
import areaChart2 from '@/assets/images/other/area-chart-2.svg'
import iconPrimary from '@/assets/images/other/icon-primary.svg'

export type DoctorTagType = {
  text: string
}

export type DoctorFeatureType = {
  text: string
}

const doctorTagData: DoctorTagType[] = [{ text: '100+ biomarker insights' }, { text: 'Nutrition guidance' }, { text: 'Supplement stack' }, { text: 'Clinician-reviewed' }]

const doctorFeatureData: DoctorFeatureType[] = [{ text: 'Total body evaluation' }, { text: 'Health tracking' }]

const DoctorsStack = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <Image className="bg-default-950 absolute inset-0 -z-1 size-full bg-[linear-gradient(180deg,#3c2219,#3c221933)] object-cover opacity-90" src={heroInnerImg} alt="Decoration" />

      <div className="container-fluid">
        <div className="grid gap-4 lg:grid-cols-5 lg:gap-54">
          <div className="lg:col-span-3">
            <h2 className="text-default-50 mb-5 text-4xl md:text-[46px] lg:text-[50px]">
              Your stack developed <br /> <span className="text-primary">with top doctors</span>
            </h2>
            <p className="text-default-100 mb-12.5 max-w-112.5">We partner with world-renowned physicians, nutritionists, and researchers to ensure every recommendation is grounded in science — not guesswork.</p>

            <div className="mb-7.5 flex items-center gap-4">
              <Image src={author3} alt="Avatar Image" className="size-15 rounded-lg object-cover" />

              <div className="doctor-detail">
                <h3 className="text-default-50 mb-1 text-xl">Sarah V, M.D</h3>
                <div className="text-default-100 text-sm">Founder, Healia Clinic Functional Medicine</div>
              </div>
            </div>

            <Link href="/about" className="border-primary text-primary group inline-flex items-center justify-center gap-2.5 rounded-md border px-10 py-6.5 text-lg transition-all">
              Meet our team
              <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                <Image src={iconPrimary} alt="Icon" />
              </i>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-7.5 rounded-md bg-white/10 p-5 [backdrop-filter:blur(6px)]">
              <div className="text-default-50">TSH thread over time (Thyroid function)</div>
              <Image src={areaChart2} alt="Dashboard" className="size-full" />
            </div>

            <div className="*:text-default-100 mb-7.5 flex flex-wrap gap-2.5 *:inline-flex *:rounded-md *:bg-white/10 *:px-2.5 *:py-1.5 *:[backdrop-filter:blur(6px)]">
              {doctorTagData.map((tag) => (
                <div key={tag.text}>{tag.text}</div>
              ))}
            </div>

            <div className="flex items-center gap-7.5">
              {doctorFeatureData.map((feature) => (
                <div key={feature.text} className="text-primary flex items-center gap-2 text-sm">
                  <Icon icon="tabler:check" className="size-6" />
                  <div className="doctor-list-text">{feature.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorsStack
