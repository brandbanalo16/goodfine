import { Icon } from '@iconify/react'
import Link from 'next/link'

export type CtaCardType = {
  icon: string
  isGrow?: boolean
  text: string
  buttonText: string
  isPrimaryButton: boolean
  link: string
}

export type CtaBadgeType = {
  icon: string
  text: string
}

const ctaCardData: CtaCardType[] = [
  {
    icon: 'tabler:crown',
    text: 'Your membership is more than a test.',
    buttonText: "See What's Included",
    isPrimaryButton: true,
    link: '/contact',
  },
  {
    icon: 'tabler:star',
    isGrow: true,
    text: 'Skip the confusion. Talk to a professional today.',
    buttonText: 'Talk to a Health Export',
    isPrimaryButton: false,
    link: '/contact',
  },
]

const ctaBadgeData: CtaBadgeType[] = [
  {
    icon: 'tabler:xbox-x-filled',
    text: 'Cancel any time',
  },
  {
    icon: 'tabler:shield-check-filled',
    text: 'Secure payment',
  },
]

const Cta = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container max-w-236!">
        <div className="mx-auto mb-12.5 max-w-200 text-center">
          <div className="text-primary mb-2.5 text-sm">(Start your journey)</div>
          <h2 className="text-4xl lg:text-5xl">
            Today's choices define, <span className="text-default-400">tomorrow's health</span>
          </h2>
        </div>

        <div className="grid gap-7.5 lg:grid-cols-2">
          {ctaCardData.map((card, index) => {
            const buttonClass = card.isPrimaryButton ? 'bg-primary text-default-950 hover:bg-white' : 'bg-default-950 text-white hover:bg-primary'

            return (
              <div key={index} className="border-default-300 h-full rounded-xl border p-5">
                <div className="mb-10 flex items-center gap-5">
                  <div className={`bg-default-100 flex size-12.5 items-center justify-center rounded-md ${card.isGrow ? 'grow' : ''}`}>
                    <Icon icon={card.icon} className="text-primary size-8" />
                  </div>

                  <div className="text-default-950">{card.text}</div>
                </div>

                <div className="grid">
                  <Link href={card.link} className={`inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all ${buttonClass}`}>
                    {card.buttonText}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-5 flex items-center justify-center gap-7.5">
          {ctaBadgeData.map((badge, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <Icon icon={badge.icon} className="size-5" />
              <div className="text-sm">{badge.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cta
