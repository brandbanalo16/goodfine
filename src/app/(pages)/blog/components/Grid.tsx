import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import blog1 from '@/assets/images/blog/1.png'
import blog2 from '@/assets/images/blog/2.png'
import blog3 from '@/assets/images/blog/3.png'
import blog4 from '@/assets/images/blog/4.png'
import blog5 from '@/assets/images/blog/5.png'
import blog6 from '@/assets/images/blog/6.png'

export type GridType = {
  title: string
  description: string
  image: StaticImageData
  category: string
  date: string
  isFeatured?: boolean
}

const gridData: GridType[] = [
  {
    title: '5 Proven strategies to extend your health',
    description: 'Discover evidence-backed methods to not just live longer, but live healthier and more active years.',
    image: blog1,
    category: 'Longevity',
    date: 'Feb 13, 2026',
    isFeatured: true,
  },
  {
    title: 'Why early screening is the key to prevention',
    description: 'Understand how proactive testing helps detect risks before they become health problems.',
    image: blog2,
    category: 'Preventive',
    date: 'Feb 13, 2026',
  },
  {
    title: 'Why early screening is the key to prevention',
    description: 'Understand how proactive testing helps detect risks before they become health problems.',
    image: blog3,
    category: 'Preventive',
    date: 'Feb 13, 2026',
  },
  {
    title: 'Why early screening is the key to prevention',
    description: 'Understand how proactive testing helps detect risks before they become health problems.',
    image: blog4,
    category: 'Preventive',
    date: 'Feb 13, 2026',
  },
  {
    title: 'Why early screening is the key to prevention',
    description: 'Understand how proactive testing helps detect risks before they become health problems.',
    image: blog5,
    category: 'Preventive',
    date: 'Feb 13, 2026',
  },
  {
    title: 'Why early screening is the key to prevention',
    description: 'Understand how proactive testing helps detect risks before they become health problems.',
    image: blog6,
    category: 'Preventive',
    date: 'Feb 13, 2026',
  },
]

const Grid = () => {
  const featuredItem = gridData.find((item) => item.isFeatured)
  const columnItems = gridData.filter((item) => !item.isFeatured).slice(0, 2)
  const bottomItems = gridData.filter((item) => !item.isFeatured).slice(2)

  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container-fluid">
        <div className="mb-10 grid gap-5 md:grid-cols-3">
          <div className="col-span-3">
            <div className="grid grid-cols-7 gap-5">
              {/* Featured Blog */}
              {featuredItem && (
                <div className="col-span-3">
                  <div className="group relative h-full rounded-2xl bg-white">
                    <Link href="/blog-details" className="absolute inset-0 z-1"></Link>

                    <div className="grid h-full grid-cols-2">
                      <div className="flex h-full flex-col items-start gap-5 p-5">
                        <div className="bg-primary inline-flex rounded px-2.5 py-1 text-base text-white">Featured</div>

                        <p className="text-primary">
                          {featuredItem.category} <span className="text-sm">{featuredItem.date}</span>
                        </p>
                        <h2 className="mb-5 text-[22px]">{featuredItem.title}</h2>

                        <p className="mt-auto">{featuredItem.description}</p>
                      </div>

                      <div className="overflow-hidden rounded-e-2xl">
                        <Image src={featuredItem.image} alt={featuredItem.title} className="size-full overflow-hidden object-cover transition-all duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Side Columns */}
              <div className="col-span-4">
                <div className="grid gap-5 md:grid-cols-2">
                  {columnItems.map((item) => (
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
            </div>
          </div>

          {/* Bottom Grid Items */}
          {bottomItems.map((item) => (
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

export default Grid
