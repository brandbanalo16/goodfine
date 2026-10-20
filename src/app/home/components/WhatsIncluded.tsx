import icon1 from '@/assets/images/icons/icon-1.svg'
import icon2 from '@/assets/images/icons/icon-2.svg'
import cardiogramVector from '@/assets/images/other/cardiogram-vector.svg'
import featureImage from '@/assets/images/other/feature.jpg'
import iconDark from '@/assets/images/other/icon-dark.svg'
import radarChart from '@/assets/images/other/radar-chart.svg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

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
          <div className="text-primary mb-2.5 text-sm">(What's included)</div>
          <h2 className="text-4xl lg:text-5xl">
            What's included in your <br /> <span className="text-default-400">health intelligence</span>
          </h2>
        </div>

        <div className="mb-20 grid gap-7.5 lg:grid-cols-2">
          <div className="relative h-full overflow-hidden">
            <div className="size-full rounded-xl bg-cover bg-position-[0_0,100%_70%] bg-no-repeat" style={{ backgroundImage: `url(${featureImage.src})` }}></div>

            <div className="absolute inset-0 z-1 flex flex-col justify-end rounded-xl bg-[linear-gradient(180deg,transparent,#3c2219)] p-5 lg:p-10">
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

          <div className="bg-default-100 space-y-12.5 rounded-lg p-10">
            <div className="text-center">
              <h3 className="mb-10 text-[30px]">Heart Health</h3>

              <div className="border-default-300 rounded-md border p-5">
                <h3 className="text-primary mb-2.5 text-2xl">-5.9</h3>
                <div>Biological age</div>
              </div>
            </div>

            <Image src={cardiogramVector} alt="Icon" className="mx-auto flex h-20 w-full" />

            <div className="flex gap-12.5">
              {heartMarkers.map((marker, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className={`h-12 w-1 rounded ${marker.colorClass}`}></div>

                  <div className="biological-list-text">
                    <div className="text-default-950">{marker.name}</div>
                    <div className="flex items-center gap-2 text-xs">
                      <div>{marker.status}</div>
                      <div>•</div>
                      <div>
                        <span className="text-primary">{marker.value}</span> pg/ml
                      </div>
                    </div>
                  </div>

                  <span className="ms-5 flex self-end">
                    <Image src={marker.icon} alt="Icon" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-default-100 overflow-hidden rounded-lg p-10">
              <div className="mx-auto mb-25 max-w-145 text-center">
                <h3 className="mb-4 text-[30px]">Hormone balance</h3>
                <p>Track and optimize key hormones to improve energy, mood, metabolism, and overall well-being with personalized insights and lifestyle guidance.</p>
              </div>

              <div className="mx-auto -mb-75 h-125 w-137.5">
                <Image src={radarChart} alt="Vector Image" className="size-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <Link href="/about" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
            See what's Included
            <span className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
              <Image src={iconDark} alt="Icon" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WhatsIncluded
