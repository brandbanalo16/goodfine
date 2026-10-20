import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import icon39 from '@/assets/images/icons/icon-39.svg'
import icon40 from '@/assets/images/icons/icon-40.svg'
import icon41 from '@/assets/images/icons/icon-41.svg'
import iconPrimary from '@/assets/images/other/icon-primary.svg'

export type MembershipCardType = {
  icon: StaticImageData
  title: string
  description: string
  styleType: 'white' | 'border' | 'gray'
}

const membershipCardData: MembershipCardType[] = [
  {
    icon: icon39,
    title: 'Core health panels',
    description: 'Foundational tests are included for everyone, providing a full-body health baseline.',
    styleType: 'white',
  },
  {
    icon: icon40,
    title: 'Advanced specialty panels',
    description: 'Deeper insights into systems that often go unnoticed but greatly impact well-being.',
    styleType: 'border',
  },
  {
    icon: icon41,
    title: 'Personalized Add-On tests',
    description: "Targeted testing based on your goals, symptoms, or doctor's recommendation.",
    styleType: 'gray',
  },
]

const MembershipFeatures = () => {
  return (
    <section className="relative size-full overflow-hidden pb-20 md:pb-25 lg:pb-35">
      <div className="container-fluid relative z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-2.5 text-4xl font-medium md:text-[46px] lg:text-[50px]">
            What you receive with <span className="text-default-400">every membership</span>
          </h2>
          <p className="text-default-950">Our advanced testing tracks 100+ biomarkers to deliver a comprehensive perspective of your health status.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-7.5">
          {membershipCardData.map((card) => {
            const cardClass = card.styleType === 'white' ? 'bg-white' : card.styleType === 'border' ? 'border border-default-300' : 'bg-default-100'

            return (
              <div key={card.title} className={`rounded-2xl p-12.5 text-center ${cardClass}`}>
                <Image src={card.icon} alt="Icon" className="mx-auto mb-12.5 size-27.5" />

                <h3 className="mb-5 text-[26px]">{card.title}</h3>

                <p>{card.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12.5 flex justify-center gap-7.5">
          <Link href="/about" className="bg-default-950 text-primary group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
            About Healia
            <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
              <Image src={iconPrimary} alt="Icon" />
            </i>
          </Link>

          <Link href="/about" className="border-default-300 text-primary hover:border-primary inline-flex items-center justify-center gap-2.5 rounded-md border bg-transparent px-7.5 py-5 text-lg transition-all">
            Talk to a Health Export
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MembershipFeatures
