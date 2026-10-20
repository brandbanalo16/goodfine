'use client'

import iconPrimary from '@/assets/images/other/icon-primary.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export type PricingBenefitType = {
  text: string
}

export type FaqType = {
  question: string
  answer: string
  active: boolean
}

const pricingBenefitData: PricingBenefitType[] = [{ text: '125+ health markers' }, { text: 'Personalized plan' }, { text: 'Track your true, Biological age' }, { text: 'Tailored pricing for your needs' }, { text: 'Your goals, your perfect plan' }]

const faqData: FaqType[] = [
  {
    question: 'What makes Healia different from traditional lab testing?',
    answer: 'Healia offers a smarter, data-driven approach to lab testing - combining results, insights, and personalized guidance in one seamless platform for better health decisions.',
    active: true,
  },
  {
    question: 'Do I need a doctor’s referral to get started?',
    answer: 'No referral needed! You can book your test directly with Healia. We handle everything from lab scheduling to delivering your results in a simple, easy-to-understand format.',
    active: false,
  },
  {
    question: 'How often should I get tested?',
    answer: 'Testing frequency depends on your age, health status, and risk factors. Regular check-ups help detect issues early and keep you proactive about your health.',
    active: false,
  },
  {
    question: 'How long does it take to receive my results?',
    answer: 'Results are typically available within a few days, so you can quickly review and take action on your health insights.',
    active: false,
  },
]

const MembershipPricing = () => {
  const [isYearly, setIsYearly] = useState(false)
  const [faqs, setFaqs] = useState<FaqType[]>(faqData)

  const price = isYearly ? 39 : 49

  const toggleAccordion = (index: number) => {
    setFaqs(
      faqs.map((faq, idx) => ({
        ...faq,
        active: idx === index ? !faq.active : false,
      }))
    )
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
                  <label htmlFor="hs-xs-switch" className="text-muted-foreground-1 cursor-pointer text-sm">
                    Monthly
                  </label>
                  <label htmlFor="hs-xs-switch" className="relative inline-block h-5 w-9 cursor-pointer">
                    <input type="checkbox" id="hs-xs-switch" className="peer sr-only" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                    <span className="peer-checked:bg-primary-checked absolute inset-0 rounded-full bg-white transition-colors duration-200 ease-in-out peer-disabled:pointer-events-none peer-disabled:opacity-50"></span>
                    <span className="bg-primary absolute start-0.5 top-1/2 size-4 -translate-y-1/2 rounded-full shadow-sm transition-transform duration-200 ease-in-out peer-checked:translate-x-full"></span>
                  </label>
                  <label htmlFor="hs-xs-switch" className="text-muted-foreground-1 cursor-pointer text-sm">
                    Yearly
                  </label>
                </div>

                <p className="text-default-950">Cut $15,000 in costs down to $399</p>

                <div className="flex items-end">
                  <h2 className="bg-[linear-gradient(90deg,var(--color-primary),#3c2219)] bg-clip-text text-4xl/none text-transparent md:text-[46px] lg:text-[50px]">${price}</h2>
                  <div>/ month</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-default-950 mb-5">What included</div>

            <div className="mb-5 flex flex-wrap items-center gap-4">
              {pricingBenefitData.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5">
                  <div className="bg-primary size-2 rounded-full"></div>
                  <div className="text-default-950">{benefit.text}</div>
                </div>
              ))}
            </div>

            <div className="mb-5 flex items-center gap-3 lg:gap-12.5">
              <div className="flex items-center gap-2">
                <Icon icon="tabler:check" className="text-primary size-6" />
                <div>Cancel anytime</div>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="tabler:check" className="text-primary size-6" />
                <div>HSA/FSA eligible</div>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="tabler:check" className="text-primary size-6" />
                <div>Results&nbsp;in a week</div>
              </div>
            </div>

            <div className="mb-10 grid lg:mb-25">
              <Link href="/contact" className="bg-default-950 text-primary group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
                Start Testing
                <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                  <Image src={iconPrimary} alt="Icon" />
                </i>
              </Link>
            </div>

            <div className="space-y-5 md:space-y-7.5">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`hs-accordion border-default-300 rounded-lg border px-5 py-4 ${faq.active ? 'active' : ''}`}>
                  <button onClick={() => toggleAccordion(idx)} className="hs-accordion-toggle flex w-full items-center justify-between gap-2.5 text-start">
                    <h3>{faq.question}</h3>
                    <Icon icon="tabler:plus" width="20" height="20" className={`size-5 transition-transform duration-500 ${faq.active ? 'rotate-45' : ''}`} />
                  </button>

                  <div className={`hs-accordion-content w-full overflow-hidden text-start transition-[height] duration-300 ${!faq.active ? 'hidden' : ''}`} style={{ display: faq.active ? 'block' : undefined }}>
                    <p className="mt-5">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembershipPricing
