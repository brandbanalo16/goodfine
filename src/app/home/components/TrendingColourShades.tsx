import aboutKitchen from '@/assets/images/other/about-1.jpeg'
import aboutInterior from '@/assets/images/other/about-interior.png'
import kitchenPatio from '@/assets/images/other/about-kitchen-1.jpg'
import kitchenLounge from '@/assets/images/other/about-kitchen-2.jpg'
import kitchenDining from '@/assets/images/other/about-kitchen-3.jpg'
import woodFinish from '@/assets/images/other/feature.jpg'
import Image, { StaticImageData } from 'next/image'

type ShadeImage = {
  image: StaticImageData
  alt: string
  className: string
}

const shadeImages: ShadeImage[] = [
  {
    image: aboutKitchen,
    alt: 'Warm wood tones in a contemporary kitchen',
    className: 'lg:col-start-1 lg:row-start-1',
  },
  {
    image: aboutInterior,
    alt: 'Rich wood finish in a modern interior',
    className: 'col-span-2 aspect-[16/9] lg:col-start-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto',
  },
  {
    image: kitchenLounge,
    alt: 'Natural wood and greenery in a lounge',
    className: 'lg:col-start-4 lg:col-span-2 lg:row-start-1',
  },
  {
    image: kitchenPatio,
    alt: 'Wood finishes in an outdoor dining space',
    className: 'lg:col-start-1 lg:row-start-2',
  },
  {
    image: kitchenDining,
    alt: 'A bright dining space with wood furniture',
    className: 'lg:col-start-4 lg:row-start-2',
  },
  {
    image: woodFinish,
    alt: 'A wood surface being finished by hand',
    className: 'lg:col-start-5 lg:row-start-2',
  },
]

const TrendingColourShades = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-16" aria-labelledby="trending-colour-shades-title">
      <div className="container">
        <div className="mb-7 text-center md:mb-9">
          <h2 id="trending-colour-shades-title" className="text-default-950 text-2xl font-bold tracking-tight md:text-3xl">
            Trending Colour Shades
          </h2>
          <p className="text-default-700 mt-2">Find the Perfect Colour Shades for Your Walls</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:h-[40rem] lg:grid-cols-5 lg:grid-rows-2 lg:gap-5">
          {shadeImages.map(({ image, alt, className }) => (
            <div key={alt} className={`relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-auto ${className}`}>
              <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 40vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingColourShades
