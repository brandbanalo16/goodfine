'use client'

import icon16 from '@/assets/images/icons/icon-16.svg'
import icon19 from '@/assets/images/icons/icon-19.svg'
import icon20 from '@/assets/images/icons/icon-20.svg'
import icon21 from '@/assets/images/icons/icon-21.svg'
import stepSvg from '@/assets/images/other/setp.svg'
import stepImage from '@/assets/images/other/step-image.png'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

export type CategoryItem = {
  name: string
  icon: StaticImageData
}

export type TabType = {
  id: string
  label: string
  ariaSelected: string
  ariaControls: string
  dataHsTab: string
  description: string
  description2?: string
  bullets: string[]
  categories?: CategoryItem[]
}

const tabData: TabType[] = [
  {
    id: 'scheduled-test-tab',
    label: 'Schedule lab tests',
    ariaSelected: 'true',
    ariaControls: 'scheduled-test-tab',
    dataHsTab: '#scheduled-test-tab',
    description: 'Browse our test catalog and choose the package that best fits your health needs. Whether it’s a routine check-up or a specific diagnostic.',
    bullets: ['Select your test online with clear, upfront pricing', 'No doctor referral required', 'Choose your preferred time slot instantly'],
    categories: [
      { name: 'Metabolic health', icon: icon19 },
      { name: 'Nutrient levels', icon: icon16 },
      { name: 'Heart health', icon: icon20 },
      { name: 'Thyroid health', icon: icon21 },
    ],
  },
  {
    id: 'sample-collection-tab',
    label: 'Sample collection',
    ariaSelected: 'false',
    ariaControls: 'sample-collection-tab',
    dataHsTab: '#sample-collection-tab',
    description: 'Experience a smooth and hygienic sample collection process designed for your comfort.',
    description2: 'Once your lab tests are scheduled, a certified phlebotomist will arrive at your location (or you can visit a nearby lab) for a smooth sample collection process. ',
    bullets: ['At-Home Sample Collection', 'In-Lab Collection', 'Secure Handling', 'Flexible Timing'],
  },
  {
    id: 'result-tab',
    label: 'Get result',
    ariaSelected: 'false',
    ariaControls: 'result-tab',
    dataHsTab: '#result-tab',
    description: 'Receive a comprehensive health report with clear explanations and actionable insights',
    description2: 'Your test results will be available securely on your online dashboard within a few days. Each report is easy to understand and includes personalized insights, trend tracking, and early detection alerts.',
    bullets: ['Interactive Health Dashboard', 'Personalized Health Score', 'Trend Analysis', 'Early Detection Alerts'],
  },
]

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<string>('scheduled-test-tab')

  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container-fluid">
        <div className="mx-auto mb-12.5 max-w-200 text-center">
          <div className="text-primary mb-2.5 text-sm">(How it works)</div>
          <h2 className="text-4xl lg:text-5xl">
            The smarter way to take <br /> <span className="text-default-400">control of your health</span>
          </h2>
        </div>

        <div className="border-default-300 rounded-2xl border p-10">
          <div className="grid grid-cols-2 gap-7.5">
            <nav id="hs-tabs" className="flex gap-5" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
              {tabData.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`hs-tab-active:border-primary hs-tab-active:text-primary text-default-950 rounded-lg border border-transparent bg-white px-5 py-3 text-base transition-all duration-300 ${isActive ? 'active' : ''}`}
                    aria-selected={isActive ? 'true' : 'false'}
                    data-hs-tab={tab.dataHsTab}
                    aria-controls={tab.ariaControls}
                    role="tab"
                  >
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="mt-5">
            {tabData.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <div key={tab.id} id={tab.id} className={isActive ? '' : 'hidden'} role="tabpanel" aria-labelledby={tab.ariaControls + '-item'}>
                  <div className="grid grid-cols-2 gap-7.5">
                    <div className={tab.id === 'scheduled-test-tab' ? 'flex h-full flex-col' : 'text-default-950 flex h-full flex-col'}>
                      <p className={tab.id === 'scheduled-test-tab' ? 'text-default-950 mb-7.5' : 'mb-7.5'}>{tab.description}</p>

                      {tab.description2 && <p>{tab.description2}</p>}

                      {tab.id === 'scheduled-test-tab' ? (
                        <ul className="marker:text-primary mb-12.5 list-inside list-disc space-y-1.5">
                          {tab.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                        </ul>
                      ) : (
                        <div className="bg-default-100 mt-auto rounded-xl p-7.5">
                          <ul className="marker:text-primary list-inside list-disc space-y-1.5">
                            {tab.bullets.map((bullet, idx) => (
                              <li key={idx}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {tab.categories && (
                        <div className="bg-default-100 mt-auto rounded-xl p-7.5">
                          <div className="grid grid-cols-2 gap-7.5">
                            {tab.categories.map((cat, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Image src={cat.icon} alt="Icon" className="size-7" />
                                <div className="text-default-950">{cat.name}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="-mt-17">
                      <div className="relative flex h-125 items-center justify-center overflow-hidden rounded-lg p-12.5 [flex-flow:column] lg:p-25">
                        <Image src={stepImage} alt="Step Image" className="absolute inset-0 z-0" />

                        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#3c2219,transparent_50%,#3c2219)]"></div>

                        <div className="absolute inset-auto flex flex-col items-center justify-center rounded-lg bg-white/10 p-7.5 [backdrop-filter:blur(10px)]">
                          <h3 className="text-[26px] text-white">Good morning, Sarah</h3>
                          <Image src={stepSvg} alt="Dashboard" className="w-75" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
