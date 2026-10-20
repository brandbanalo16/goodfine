import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import iconDark from '@/assets/images/other/icon-dark.svg'
import whatsIncluded1 from '@/assets/images/other/whats-included-1.png'
import whatsIncluded2 from '@/assets/images/other/whats-included-2.png'
import whatsIncluded3 from '@/assets/images/other/whats-included-3.png'
import whatsIncluded4 from '@/assets/images/other/whats-included-4.jpg'

import icon3 from '@/assets/images/icons/icon-3.svg'
import icon4 from '@/assets/images/icons/icon-4.svg'
import icon5 from '@/assets/images/icons/icon-5.svg'
import icon6 from '@/assets/images/icons/icon-6.svg'
import icon7 from '@/assets/images/icons/icon-7.svg'

export type LabTestType = {
  title: string
  image: StaticImageData
  description: string
  listItems: string[]
}

export type CategoryBadgeType = {
  icon: StaticImageData
  text: string
}

const labTestData: LabTestType[] = [
  {
    title: 'Metabolic Health',
    image: whatsIncluded3,
    description: 'Your metabolism powers every cell in your body — it determines how efficiently you convert food into energy',
    listItems: ['Glucose Regulation', 'Lipid Profile', 'Inflammation Markers'],
  },
  {
    title: 'Heart Health',
    image: whatsIncluded2,
    description: 'Your heart is the engine that keeps your body running, supplying oxygen and nutrients to every organ.',
    listItems: ['Cholesterol Levels', 'Blood Pressure Markers', 'Triglycerides'],
  },
  {
    title: 'Thyroid Health',
    image: whatsIncluded1,
    description: 'Your thyroid gland regulates metabolism, growth, and energy balance.',
    listItems: ['TSH (Thyroid Stimulating Hormone)', 'Free T3 & T4 Hormones', 'Thyroid Antibodies', 'Iodine & Nutrient Markers'],
  },
  {
    title: 'Nutrient Levels',
    image: whatsIncluded4,
    description: 'Understanding your nutrient levels helps identify deficiencies and optimize overall health.',
    listItems: ['Vitamin D – bones & immunity', 'Vitamin B12 – energy & brain', 'Iron – oxygen & energy', 'Calcium – bone strength'],
  },
]

const categoryBadgeData: CategoryBadgeType[] = [
  { icon: icon3, text: 'Nutrient levels' },
  { icon: icon4, text: 'Immune function' },
  { icon: icon5, text: 'Liver & Kidney health' },
  { icon: icon6, text: 'Thyroid function' },
  { icon: icon7, text: 'Digestive health' },
]

const LabTests = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="relative z-10 container">
        <div className="mb-20 grid gap-10 md:grid-cols-3 lg:gap-25">
          <div className="md:col-span-2">
            <h2 className="mb-10 text-4xl font-medium md:text-[46px] lg:text-[50px]">
              125+ Annual <span className="text-default-400">lab tests</span>
            </h2>

            <div className="flex items-center gap-2.5">
              <div className="border-default-300 text-default-950 rounded-md border px-2.5 py-1.5 text-sm">2x/year</div>
              <div>Key biomarkers are tested every 6 months for accuracy</div>
            </div>
          </div>

          <div>
            <div className="text-default-950 mb-5">
              Included with your <span className="text-primary">$399</span> Healia membership
            </div>

            <Link href="/about" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
              View Pricing
              <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                <Image src={iconDark} alt="Icon" />
              </i>
            </Link>
          </div>
        </div>

        <div className="bg-default-100 mb-12.5 rounded-2xl p-6 lg:p-12.5">
          {labTestData.map((test, index) => (
            <div key={test.title}>
              <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:gap-38">
                <div className="md:col-span-2">
                  <div className="mb-6 flex items-center gap-5">
                    <Image src={test.image} alt={test.title} className="size-15 rounded-lg object-cover" />
                    <h3 className="text-[26px]">{test.title}</h3>
                  </div>

                  <p className="info-list-description">{test.description}</p>
                </div>

                <div className="space-y-2.5">
                  {test.listItems.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Icon icon="tabler:droplet-filled" className="text-primary size-3 rotate-90" />
                      <div className="list-text">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              {index < labTestData.length - 1 && <hr className="border-default-300 my-17.5" />}
            </div>
          ))}
        </div>

        <div className="mx-auto flex flex-wrap items-center justify-center gap-5 lg:w-4/5">
          {categoryBadgeData.map((badge) => (
            <div key={badge.text} className="bg-default-100 flex items-center gap-2.5 rounded-lg px-7.5 py-2.5">
              <Image src={badge.icon} alt={badge.text} className="size-7.5" />
              <div className="text-default-950">{badge.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LabTests
