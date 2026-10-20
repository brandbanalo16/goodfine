import logoDark from '@/assets/images/logo-main.webp'
import { Icon } from '@iconify/react'
import Image from 'next/image'

export type ComparisonType = {
  feature: string
  healia: boolean
  primaryCare: boolean
  concierge: boolean
  atHomeKits: boolean
}

const comparisonData: ComparisonType[] = [
  { feature: 'Preventive health focus', healia: true, primaryCare: true, concierge: false, atHomeKits: false },
  { feature: 'Personalized wellness plans', healia: true, primaryCare: false, concierge: true, atHomeKits: false },
  { feature: 'In-person doctor visits', healia: true, primaryCare: true, concierge: false, atHomeKits: false },
  { feature: 'Remote consultations', healia: true, primaryCare: false, concierge: true, atHomeKits: true },
  { feature: 'Same-day appointments', healia: true, primaryCare: true, concierge: false, atHomeKits: false },
  { feature: 'Home sample collection', healia: true, primaryCare: false, concierge: true, atHomeKits: true },
  { feature: 'Digital results portal', healia: true, primaryCare: false, concierge: true, atHomeKits: true },
  { feature: 'Annual health review', healia: true, primaryCare: true, concierge: false, atHomeKits: false },
]

const Comparison = () => {
  return (
    <section className="relative size-full overflow-hidden pt-20 md:pt-25 lg:pt-35">
      <div className="relative z-10 container">
        <div className="mx-auto mb-12.5 max-w-200 text-center">
          <h2 className="text-4xl lg:text-5xl">
            Because your well-being <br /> <span className="text-default-400">Deserves more than CheckUps</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="border-default-200 min-w-full overflow-hidden rounded-2xl border shadow-sm">
            <table className="w-full text-center text-base">
              {/* THEAD */}
              <thead className="border-default-200 border-b bg-white whitespace-nowrap">
                <tr className="divide-default-200 divide-x">
                  <th className="px-3 py-2 text-center text-xs font-semibold lg:p-6 lg:text-base"></th>
                  <th className="px-3 py-2 text-center text-xs font-semibold lg:p-6 lg:text-base">
                    <Image src={logoDark} alt="Logo" className="mx-auto h-4" />
                  </th>
                  <th className="px-3 py-2 text-center text-xs font-semibold lg:p-6 lg:text-base">Primary care</th>
                  <th className="px-3 py-2 text-center text-xs font-semibold lg:p-6 lg:text-base">Concierge</th>
                  <th className="px-3 py-2 text-center text-xs font-semibold lg:p-6 lg:text-base">At-Home Kits</th>
                </tr>
              </thead>

              {/* TBODY */}
              <tbody className="divide-default-200 divide-y">
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="divide-default-200 hover:bg-default-50 divide-x transition">
                    <td className="sticky left-0 z-10 px-6 py-5 font-medium">{row.feature}</td>
                    <td className="px-6 py-5 text-center">{row.healia ? <Icon icon="lucide:check" className="text-primary mx-auto size-6" /> : <Icon icon="lucide:x" className="text-danger mx-auto size-6" />}</td>
                    <td className="bg-primary/5 px-6 py-5 text-center">{row.primaryCare ? <Icon icon="lucide:check" className="text-primary mx-auto size-6" /> : <Icon icon="lucide:x" className="text-danger mx-auto size-6" />}</td>
                    <td className="px-6 py-5 text-center">{row.concierge ? <Icon icon="lucide:check" className="text-primary mx-auto size-6" /> : <Icon icon="lucide:x" className="text-danger mx-auto size-6" />}</td>
                    <td className="px-6 py-5 text-center">{row.atHomeKits ? <Icon icon="lucide:check" className="text-primary mx-auto size-6" /> : <Icon icon="lucide:x" className="text-danger mx-auto size-6" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparison
