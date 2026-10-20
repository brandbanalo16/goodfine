'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import iconDark from '@/assets/images/other/icon-dark.svg'

export type ListType = {
  question: string
  answer: string
  active: boolean
}

const listData: ListType[] = [
  {
    question: 'What is Healia?',
    answer: 'Healia is a smart health platform that simplifies lab testing, tracking, and insights - all in one place.',
    active: true,
  },
  {
    question: 'How does Healia work?',
    answer: 'You choose your test, visit a partner lab, and receive personalized results with expert guidance online.',
    active: false,
  },
  {
    question: 'Do I need a doctor’s prescription?',
    answer: 'Most Healia tests can be booked directly - no prescription required.',
    active: false,
  },
  {
    question: 'Can I talk to a doctor about my results?',
    answer: 'Yes, you can book a consultation with a medical expert directly through your Healia account.',
    active: false,
  },
  {
    question: 'How often should I get tested?',
    answer: 'It depends on your health goals. Most people benefit from testing every 3–6 months.',
    active: false,
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards and secure digital payment options.',
    active: false,
  },
  {
    question: 'Can I share my results with my doctor?',
    answer: 'Yes, you can easily download or share your reports with any healthcare provider.',
    active: false,
  },
  {
    question: 'What if I have a question about my results?',
    answer: 'You can message our support team or schedule a consultation anytime.',
    active: false,
  },
]

const List = () => {
  const [faqs, setFaqs] = useState<ListType[]>(listData)

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
      <div className="relative z-10 container max-w-245!">
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

        <div className="mt-20 text-center">
          <h3 className="mb-7.5 text-5xl">Have more Questions?</h3>

          <Link href="/contact" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
            Contact us
            <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
              <Image src={iconDark} alt="Icon" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default List
