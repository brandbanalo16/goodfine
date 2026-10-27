import icon1 from '@/assets/images/icons/icon-1.svg'
import icon2 from '@/assets/images/icons/icon-2.svg'
import featureImage from '@/assets/images/other/feature.jpg'
import Image, { StaticImageData } from 'next/image'

export type HeartMarkerItem = {
  name: string
  status: string
  value: string
  icon: StaticImageData
  colorClass: string
}

const heartMarkers: HeartMarkerItem[] = [
  {
    name: 'Hematocrit',
    status: 'Below range',
    value: '128',
    icon: icon1,
    colorClass: 'bg-primary',
  },
  {
    name: 'MCH',
    status: 'In range',
    value: '75',
    icon: icon2,
    colorClass: 'bg-default-950',
  },
]

const WhatsIncluded = () => {
  return (
    <section className="relative size-full overflow-hidden pb-20 md:pb-25 lg:pb-35">
      <div className="container">
        <div className="mx-auto mb-12.5 max-w-200 text-center">
          <div className="text-primary mb-2.5 text-sm">(Why Choose Us)</div>
          <h2 className="text-4xl lg:text-5xl">
            Quality That Professionals Trust <br /> <span className="text-default-400">Good Fine</span>
          </h2>
        </div>

        <div className="mb-20 grid items-stretch gap-7.5 lg:grid-cols-2">
          <div className="bg-default-950 relative aspect-[4/5] min-h-[520px] overflow-hidden rounded-xl">
            <Image src={featureImage} alt="Wood furniture with Good Fine glossy and matte finish examples" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain object-center" />

            <div className="absolute inset-0 z-1 flex flex-col justify-end bg-[linear-gradient(180deg,transparent,#3c2219)] p-5 lg:p-10">
              <div className="feature-one-content">
                <div className="feature-one-top mb-6">
                  <h3 className="text-default-50 mb-2.5 text-[30px]">Metabolic Health</h3>
                  <div className="text-default-100">We Test Glucose Regulation, Lipid Profile, Hormonal Balance.</div>
                </div>

                <div className="bg-default-50/10 flex items-center justify-between rounded-md p-5">
                  <h3 className="text-primary text-5xl">92 mg/dL</h3>

                  <div className="space-y-1.5 text-end text-sm">
                    <div className="text-default-50">Fasting glucose</div>
                    <div className="text-default-300">down from 104</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-default-100 flex min-h-[520px] items-center justify-center rounded-xl p-6 sm:p-10 lg:p-12">
            <div className="w-full text-center">
              <h3 className="mb-2.5 text-[30px]">Heart Health</h3>
              <p className="text-default-600 mx-auto mb-8 max-w-md text-sm leading-relaxed">
                Goodfine delivers reliable wood finishing solutions designed to enhance the beauty, durability, and performance of wooden surfaces. Our products help achieve smooth finishes and professional results across furniture and interior woodwork applications.
              </p>
              <p className="text-default-600 mx-auto mb-8 max-w-md text-sm leading-relaxed">
                We focus on consistent product quality, dependable performance, and value-driven pricing to meet the needs of furniture manufacturers, dealers, distributors, and woodworking professionals. Our solutions are designed to support efficient application and lasting
                finishes.
              </p>
              <p className="text-default-600 mx-auto mb-8 max-w-md text-sm leading-relaxed">
                Goodfine delivers reliable wood finishing solutions designed to enhance the beauty, durability, and performance of wooden surfaces. Our products help achieve smooth finishes and professional results across furniture and interior woodwork applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsIncluded
