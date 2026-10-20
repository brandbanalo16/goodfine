import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import blog2 from '@/assets/images/blog/2.png'
import blog3 from '@/assets/images/blog/3.png'
import blog4 from '@/assets/images/blog/4.png'

export type RecentType = {
  title: string
  description: string
  image: StaticImageData
  category: string
  date: string
}

const recentData: RecentType[] = [
  {
    title: 'Why early screening is the key to prevention',
    description: 'Understand how proactive testing helps detect risks before they become health problems.',
    image: blog2,
    category: 'Preventive',
    date: 'Feb 13, 2026',
  },
  {
    title: 'Top 5 tests everyone should take annually',
    description: 'Stay proactive about your health with essential tests. A simple guide to help you stay ahead of health concerns.',
    image: blog3,
    category: 'Preventive',
    date: 'Feb 13, 2026',
  },
  {
    title: 'Understanding your lab results',
    description: 'Understand the numbers behind your test results, from blood counts to cholesterol levels.',
    image: blog4,
    category: 'Preventive',
    date: 'Feb 13, 2026',
  },
]

const Recent = () => {
  return (
    <section className="relative z-20 overflow-hidden md:pb-25 lg:pb-37.5">
      <div className="container-fluid">
        <div className="mb-5 gap-4 text-center md:mb-7.5 lg:mb-15">
          <h2 className="text-4xl lg:text-[44px]">Recent Blogs</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recentData.map((item) => (
            <div key={item.image.src}>
              <div className="group relative rounded-2xl bg-white">
                <Link href="/blog-details" className="absolute inset-0 z-1"></Link>
                <div className="h-75 overflow-hidden rounded-t-2xl">
                  <Image src={item.image} alt={item.title} className="size-full overflow-hidden object-cover transition-all duration-500 group-hover:scale-110" />
                </div>

                <div className="p-5">
                  <div className="mb-5 flex items-center gap-2.5">
                    <div className="bg-default-100 text-primary rounded-full px-4 py-1 text-sm">{item.category}</div>
                    <p>{item.date}</p>
                  </div>

                  <h2 className="mb-5 text-[22px]">{item.title}</h2>

                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recent
