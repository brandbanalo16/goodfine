'use client'

import { Icon } from '@iconify/react'
import { useState } from 'react'

export type FaqType = {
  question: string
  answer: string
  active: boolean
}

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

const Faq = () => {
  const [faqs, setFaqs] = useState<FaqType[]>(faqData)

  const toggleAccordion = (index: number) => {
    setFaqs(
      faqs.map((faq, idx) => ({
        ...faq,
        active: idx === index ? !faq.active : false,
      }))
    )
  }

  return (
    <section className="relative size-full overflow-hidden pb-20 md:pb-25 lg:pb-35">
      <div className="container max-w-237!">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-[46px] lg:text-[50px]">Frequently asked questions</h2>
        </div>

        <div className="space-y-5 md:space-y-7.5">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`hs-accordion border-default-300 rounded-lg border px-5 py-4 ${faq.active ? 'active' : ''}`}>
              <button onClick={() => toggleAccordion(idx)} className="hs-accordion-toggle flex w-full items-center justify-between gap-2.5 text-start">
                <h3>{faq.question}</h3>
                <Icon icon="tabler:plus" width="20" height="20" className={`transition-transform duration-500 ${faq.active ? 'rotate-45' : ''}`} />
              </button>

              <div className={`hs-accordion-content w-full overflow-hidden text-start transition-[height] duration-300 ${!faq.active ? 'hidden' : ''}`} style={{ display: faq.active ? 'block' : undefined }}>
                <p className="mt-5">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
