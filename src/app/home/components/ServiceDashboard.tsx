'use client'

import dashboard1 from '@/assets/images/other/home-dashboard-1.png'
import dashboard2 from '@/assets/images/other/home-dashboard-2.png'
import dashboard3 from '@/assets/images/other/home-dashboard-3.png'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

export type ServiceTabType = {
  id: string
  label: string
  image: StaticImageData
}

const serviceTabsData: ServiceTabType[] = [
  { id: 'data-dashboard', label: 'Data Dashboard', image: dashboard1 },
  { id: 'total-labs', label: '125+ Labs', image: dashboard2 },
  { id: 'biological-age', label: 'Biological Age', image: dashboard3 },
]

const ServiceDashboard = () => {
  const [activeTabId, setActiveTabId] = useState<string>('data-dashboard')

  return (
    <section className="bg-default-950 relative size-full overflow-hidden py-25">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-default-50 mx-auto max-w-150 text-4xl md:text-[46px] lg:text-[50px]">
            A smarter path to health <span className="text-default-400">with medical guidance</span>
          </h2>
        </div>

        <div>
          {/* Tab Nav */}
          <nav className="flex gap-5" aria-label="Tabs" role="tablist">
            {serviceTabsData.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`w-full rounded-lg border p-5 text-base transition-all duration-300 ${activeTabId === tab.id ? 'border-primary text-primary bg-default-700' : 'text-default-50 bg-default-700 hover:text-primary border-transparent'}`}
                role="tab"
                aria-selected={activeTabId === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          {/* End Tab Nav */}

          {/* Tab Content */}
          <div className="mt-5">
            {serviceTabsData.map((tab) => (
              <div key={tab.id} className={activeTabId === tab.id ? 'block' : 'hidden'} role="tabpanel">
                <span className="overview-dashboard-image flex items-center justify-center overflow-hidden rounded-xl">
                  <Image src={tab.image} alt={tab.label} className="size-full object-cover" />
                </span>
              </div>
            ))}
          </div>
          {/* End Tab Content */}
        </div>
      </div>
    </section>
  )
}

export default ServiceDashboard
