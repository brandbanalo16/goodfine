import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import lab1 from '@/assets/images/labs/1.png'
import lab2 from '@/assets/images/labs/2.png'
import iconDark from '@/assets/images/other/icon-dark.svg'

export type LabsType = {
  image: StaticImageData
  title: string
  email: string
  phone: string
  phoneRaw: string
  address: string
  link: string
}

const labsData: LabsType[] = [
  {
    image: lab1,
    title: 'Blood Test Lab',
    email: 'bennett@example.com',
    phone: '+1 555-0101',
    phoneRaw: '+1555-0101',
    address: '12 Willow Lane, Apt 4B, Portland, OR 97201, USA',
    link: '/blog-details',
  },
  {
    image: lab2,
    title: 'Allergy lab',
    email: 'jones@example.com',
    phone: '+44 20 5550 1002',
    phoneRaw: '+442055501002',
    address: 'Flat 6, 22 Kingsbridge Road, London SW1A 2AA, United Kingdom',
    link: '/blog-details',
  },
]

const Labs = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container-fluid">
        <div className="grid gap-5 md:grid-cols-2">
          {labsData.map((lab, index) => (
            <div key={index}>
              <div className="group relative rounded-2xl bg-white p-5">
                <Link href={lab.link} className="absolute inset-0 z-1" />

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="h-75 overflow-hidden rounded-2xl">
                    <Image src={lab.image} alt="Lab Image" className="size-full overflow-hidden object-cover transition-all duration-500 group-hover:scale-110" />
                  </div>

                  <div className="flex h-full flex-col">
                    <h2 className="text-[30px] font-medium">{lab.title}</h2>

                    <div className="mt-auto space-y-2.5 *:flex">
                      <a href={`mailto:${lab.email}`} className="text-default-950 hover:text-primary">
                        {lab.email}
                      </a>
                      <a href={`tel:${lab.phoneRaw}`} className="text-default-950 hover:text-primary">
                        {lab.phone}
                      </a>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="lab-address">
                        {lab.address}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12.5 text-center">
          <Link href="/list-of-labs" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
            View all Labs
            <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
              <Image src={iconDark} alt="Icon" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Labs
