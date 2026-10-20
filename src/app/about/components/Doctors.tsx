import aboutImage2 from '@/assets/images/other/about-image-02.png'
import areaChart from '@/assets/images/other/area-chart.svg'
import iconDark from '@/assets/images/other/icon-dark.svg'
import symptom1 from '@/assets/images/symptoms/1.png'
import symptom2 from '@/assets/images/symptoms/2.png'
import symptom3 from '@/assets/images/symptoms/3.png'
import symptom4 from '@/assets/images/symptoms/4.png'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export type DoctorFeatureType = {
  title: string
  image: StaticImageData
}

const doctorFeatureData: DoctorFeatureType[] = [
  { title: 'Expert-Led approach', image: symptom1 },
  { title: 'Clinically proven methods', image: symptom2 },
  { title: 'Personalized insights', image: symptom3 },
  { title: 'A lifetime of knowledge', image: symptom4 },
]

const Doctors = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container-fluid">
        <div className="mb-5 grid gap-10 lg:mb-7.5 lg:grid-cols-2 lg:gap-25">
          <div>
            <h2 className="mb-5 text-4xl md:text-[46px] lg:text-[50px]">
              Developed with <span className="text-default-400">top doctors</span>
            </h2>
            <p className="text-default-950 mb-37.5">Every part of our health program is created in collaboration with leading physicians, specialists, and researchers in functional and preventive medicine.</p>

            <div className="border-default-300 rounded-2xl border p-7.5">
              <div className="grid gap-5 md:grid-cols-2">
                {doctorFeatureData.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2.5 rounded-lg bg-white p-1.25">
                    <Image src={feature.image} alt="Sympoms Image" className="size-9 rounded" />
                    <div>{feature.title}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7.5 grid">
                <Link href="/contact" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
                  Contact Us
                  <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                    <Image src={iconDark} alt="Icon" />
                  </i>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg px-17.5 py-12.5 [flex-flow:column]">
            <Image src={aboutImage2} alt="Step Image" className="absolute inset-0 z-0" />

            <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,#3c2219,transparent_50%,#3c2219)]"></div>

            <div className="inset-auto z-10 flex w-full flex-col items-center justify-center rounded-lg p-7.5">
              <Image src={areaChart} alt="Dashboard" className="mb-7.5 h-75 w-full" />

              <div className="flex items-center justify-around gap-6 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="bg-default-50 size-3 rounded-full"></span>
                  <span className="text-default-50 text-base">Lab testing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="bg-primary size-3 rounded-full"></span>
                  <span className="text-primary text-base">Annual checkup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctors
