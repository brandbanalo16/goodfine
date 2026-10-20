import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import lab1 from '@/assets/images/labs/1.png'
import lab2 from '@/assets/images/labs/2.png'
import lab3 from '@/assets/images/labs/3.png'
import lab4 from '@/assets/images/labs/4.png'
import lab5 from '@/assets/images/labs/5.png'
import lab6 from '@/assets/images/labs/6.png'

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
    title: 'Blood test lab',
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
  {
    image: lab3,
    title: 'Diagnostics lab',
    email: 'martins@example.com',
    phone: '+55 21 5555 0103',
    phoneRaw: '+552155550103',
    address: 'Rua das Flores, 87, Bloco B, Rio de Janeiro, RJ 20000-000, Brazil',
    link: '/blog-details',
  },
  {
    image: lab4,
    title: 'Microbiology lab',
    email: 'leclerc@example.com',
    phone: '+33 1 55 55 0104',
    phoneRaw: '+33155550104',
    address: '101 Table Mountain Rd, Sea Point, Cape Town 8005, South Africa',
    link: '/blog-details',
  },
  {
    image: lab5,
    title: 'Cardiac lab',
    email: 'saito@example.com',
    phone: '+81 3-5555-0106',
    phoneRaw: '+81355550106',
    address: '5-12 Sakura-cho, Shibuya-ku, Tokyo 150-0002, Japan',
    link: '/blog-details',
  },
  {
    image: lab6,
    title: 'Diabetes lab',
    email: 'meer@example.com',
    phone: '+31 20 555 0108',
    phoneRaw: '+31205550108',
    address: 'Keizersgracht 120, 1015 CJ Amsterdam, Netherlands',
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
                    <Image src={lab.image} alt="Lab Image" className="size-full object-cover transition-all duration-500 group-hover:scale-110" />
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
      </div>
    </section>
  )
}

export default Labs
