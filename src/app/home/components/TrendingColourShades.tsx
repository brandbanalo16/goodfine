import aboutKitchen from '@/assets/images/collections/color-1.webp'
import aboutInterior from '@/assets/images/collections/color-2.webp'
import kitchenPatio from '@/assets/images/collections/color-3.webp'
import kitchenLounge from '@/assets/images/collections/color-4.webp'
import kitchenDining from '@/assets/images/collections/color-5.webp'
import woodFinish from '@/assets/images/collections/color-6.webp'
import Image, { StaticImageData } from 'next/image'

type ShadeImage = {
  image: StaticImageData
  alt: string
  className: string
  sizes: string
}

const shadeImages: ShadeImage[] = [
  {
    image: aboutKitchen,
    alt: 'Warm wood tones in a contemporary kitchen',
    className: 'col-span-2 aspect-[16/9] lg:col-span-8 lg:row-start-1 lg:aspect-auto',
    sizes: '(min-width: 1024px) 67vw, 100vw',
  },
  {
    image: aboutInterior,
    alt: 'Bright kitchen with deep green cabinets and wood shelving',
    className: 'col-span-2 aspect-[16/9] lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:aspect-auto',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    image: kitchenLounge,
    alt: 'Wooden cabinet and chairs in a sunlit room',
    className: 'aspect-[3/4] lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:aspect-auto',
    sizes: '(min-width: 1024px) 25vw, 50vw',
  },
  {
    image: kitchenPatio,
    alt: 'Wooden patio furniture beneath a timber pergola',
    className: 'aspect-[3/4] lg:col-span-3 lg:col-start-4 lg:row-start-2 lg:aspect-auto',
    sizes: '(min-width: 1024px) 25vw, 50vw',
  },
  {
    image: kitchenDining,
    alt: 'Warm wood furniture in a cozy living room',
    className: 'aspect-[3/4] lg:col-span-3 lg:col-start-7 lg:row-start-2 lg:aspect-auto',
    sizes: '(min-width: 1024px) 25vw, 50vw',
  },
  {
    image: woodFinish,
    alt: 'Blue painted dresser with a brush and plant nearby',
    className: 'aspect-[3/4] lg:col-span-3 lg:col-start-10 lg:row-start-2 lg:aspect-auto',
    sizes: '(min-width: 1024px) 25vw, 50vw',
  },
]

const TrendingColourShades = () => {
  return (
    <section className="site-layout-full-width relative w-full py-12 md:py-16" aria-labelledby="trending-colour-shades-title">
      <div className="w-full px-3 sm:px-5 lg:px-8 xl:px-10">
        <header className="mb-6 flex flex-col gap-4 sm:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="bg-default-100 text-default-800 inline-flex rounded-full px-3 py-1 text-xs font-medium">Our Inspiration</span>
            <h2 id="trending-colour-shades-title" className="text-default-950 mt-3 text-4xl leading-none font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Trending Colour Shades
            </h2>
          </div>
          <p className="text-default-700 max-w-sm text-sm leading-relaxed md:pb-1 md:text-right">Find the perfect colour shades for your walls and discover finishes that bring every room to life.</p>
        </header>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:aspect-[3/2] lg:grid-cols-12 lg:grid-rows-2 lg:gap-3">
          {shadeImages.map(({ image, alt, className, sizes }) => (
            <div key={alt} className={`relative overflow-hidden rounded-lg sm:rounded-xl ${className}`}>
              <Image src={image} alt={alt} fill sizes={sizes} className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingColourShades
