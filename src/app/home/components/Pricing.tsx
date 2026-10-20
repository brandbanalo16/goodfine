'use client'

import iconPrimary from '@/assets/images/other/icon-primary.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const pricingBenefitsData: string[] = ['125+ health markers', 'Personalized plan', 'Track your true, Biological age', 'Tailored pricing for your needs', 'Your goals, your perfect plan']

const pricingBadgesData: string[] = ['Cancel anytime', 'HSA/FSA eligible', 'Results\u00A0in a week']

export type FaqItem = {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: 'What makes Healia different from traditional lab testing?',
    answer: 'Healia offers a smarter, data-driven approach to lab testing - combining results, insights, and personalized guidance in one seamless platform for better health decisions.',
  },
  {
    question: 'Do I need a doctor’s referral to get started?',
    answer: 'No referral needed! You can book your test directly with Healia. We handle everything from lab scheduling to delivering your results in a simple, easy-to-understand format.',
  },
  {
    question: 'How often should I get tested?',
    answer: 'Testing frequency depends on your age, health status, and risk factors. Regular check-ups help detect issues early and keep you proactive about your health.',
  },
  {
    question: 'How long does it take to receive my results?',
    answer: 'Results are typically available within a few days, so you can quickly review and take action on your health insights.',
  },
]

const Pricing = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [isYearly, setIsYearly] = useState<boolean>(false)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

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
                  <span className="text-muted-foreground-1 text-sm">Monthly</span>
                  <label htmlFor="hs-xs-switch" className="relative inline-block h-5 w-9 cursor-pointer">
                    <input type="checkbox" id="hs-xs-switch" className="peer sr-only" checked={isYearly} onChange={(e) => setIsYearly(e.target.checked)} />
                    <span className="peer-checked:bg-primary-checked absolute inset-0 rounded-full bg-white transition-colors duration-200 ease-in-out peer-disabled:pointer-events-none peer-disabled:opacity-50"></span>
                    <span className="bg-primary absolute start-0.5 top-1/2 size-4 -translate-y-1/2 rounded-full shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-full"></span>
                  </label>
                  <span className="text-muted-foreground-1 text-sm">Yearly</span>
                </div>

                <p className="text-default-950">Cut $15,000 in costs down to $399</p>

                <div className="flex items-end">
                  <h2 className="bg-[linear-gradient(90deg,var(--color-primary),#3c2219)] bg-clip-text text-4xl/none text-transparent md:text-[46px] lg:text-[50px]">{isYearly ? '$49' : '$49'}</h2>
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
              {pricingBenefitsData.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5">
                  <div className="bg-primary size-2 rounded-full"></div>
                  <div className="text-default-950">{benefit}</div>
                </div>
              ))}
            </div>

            <div className="mb-5 flex items-center gap-3 lg:gap-12.5">
              {pricingBadgesData.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icon icon="tabler:check" className="text-primary size-6" />
                  <div>{badge}</div>
                </div>
              ))}
            </div>

            <div className="mb-25 grid">
              <Link href="/contact" className="bg-default-950 text-primary group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
                Start Testing
                <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                  <Image src={iconPrimary} alt="Icon" />
                </i>
              </Link>
            </div>

            <div className="space-y-5 md:space-y-7.5">
              {faqData.map((faq, index) => {
                const isOpen = openFaqIndex === index
                return (
                  <div key={index} className={`hs-accordion border-default-300 rounded-lg border px-5 py-4 ${isOpen ? 'active' : ''}`}>
                    <button onClick={() => toggleFaq(index)} className="hs-accordion-toggle flex w-full items-center justify-between gap-2.5 text-start" type="button">
                      <h3>{faq.question}</h3>
                      <Icon icon="tabler:plus" className="hs-accordion-active:rotate-45 size-5 shrink-0 transition-transform duration-500" />
                    </button>

                    <div className={`hs-accordion-content w-full overflow-hidden text-start transition-[height] duration-300 ${isOpen ? '' : 'hidden'}`} style={{ display: isOpen ? 'block' : 'none' }}>
                      <p className="mt-5">{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
