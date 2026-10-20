import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

import iconPrimary from '@/assets/images/other/icon-primary.svg'

export type DetailsType = {
  features: string[]
  benefits: string[]
}

const detailsData: DetailsType = {
  features: ['125+ health markers', 'Personalized plan', 'Track your true, Biological age', 'Tailored pricing for your needs', 'Your goals, your perfect plan'],
  benefits: ['Cancel anytime', 'HSA/FSA eligible', 'Results in a week'],
}

const Details = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container">
        <div className="bg-default-100 rounded-2xl p-5 lg:p-25">
          <div className="mb-12.5 grid gap-7.5 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="mb-5 text-4xl md:text-[46px] lg:text-[50px]">
                Healia <br /> <span className="text-default-400">Membership</span>
              </h2>
              <p>To keep you on track with preventive care and regular testing.</p>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-5">
                <div className="flex items-center gap-x-3">
                  <label htmlFor="hs-xs-switch" className="text-muted-foreground-1 text-sm">
                    Monthly
                  </label>
                  <label htmlFor="hs-xs-switch" className="relative inline-block h-5 w-9 cursor-pointer">
                    <input type="checkbox" id="hs-xs-switch" className="peer sr-only" />
                    <span className="peer-checked:bg-primary-checked absolute inset-0 rounded-full bg-white transition-colors duration-200 ease-in-out peer-disabled:pointer-events-none peer-disabled:opacity-50"></span>
                    <span className="bg-primary absolute start-0.5 top-1/2 size-4 -translate-y-1/2 rounded-full shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-full"></span>
                  </label>
                  <label htmlFor="hs-xs-switch" className="text-muted-foreground-1 text-sm">
                    Yearly
                  </label>
                </div>

                <p className="text-default-950">Cut $15,000 in costs down to $399</p>

                <div className="flex items-end">
                  <h2 className="bg-[linear-gradient(90deg,var(--color-primary),#3c2219)] bg-clip-text text-4xl/none text-transparent md:text-[46px] lg:text-[50px]">$49</h2>
                  <div>/ month</div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-w-id="37567534-1e32-6ce1-f5d3-6841881af093"
            style={{
              opacity: 1,
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
            }}
            className="pricing-bottom"
          >
            <div className="text-default-950 mb-5">What included</div>

            <div className="mb-5 flex flex-wrap items-center gap-4">
              {detailsData.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5">
                  <div className="bg-primary size-2 rounded-full"></div>
                  <div className="text-default-950">{feature}</div>
                </div>
              ))}
            </div>

            <div className="mb-5 flex items-center gap-3 lg:gap-12.5">
              {detailsData.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Icon icon="tabler:check" className="iconify tabler--check text-primary size-6" />
                  <div>{benefit}</div>
                </div>
              ))}
            </div>

            <div className="grid">
              <Link href="/contact" className="bg-default-950 text-primary group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
                Start Testing
                <span className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                  <Image src={iconPrimary} alt="Icon" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Details
