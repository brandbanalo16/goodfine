import aboutInterior from '@/assets/images/other/about-interior.png'
import aboutBrush from '@/assets/images/other/about-brush.png'
import aboutKitchen from '@/assets/images/other/about-1.jpeg'
import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type ServiceCardProps = {
  title: string
  description: string
  image: StaticImageData
  alt: string
  className?: string
  imageClassName?: string
}

const ServiceCard = ({ title, description, image, alt, className = '', imageClassName = '' }: ServiceCardProps) => (
  <article className={`flex flex-col ${className}`}>
    <div className={`relative mb-3 overflow-hidden rounded-xl ${imageClassName}`}>
      <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover transition-transform duration-500 hover:scale-105" />
    </div>
    <h3 className="text-default-50 text-xl font-semibold">{title}</h3>
    <p className="text-default-300 mt-1 text-sm">{description}</p>
    <Link
      href="/contact"
      className="group border-default-300 text-default-50 hover:bg-default-50 hover:text-default-950 mt-3 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors"
    >
      Explore now
      <Icon icon="tabler:arrow-right" className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  </article>
)

const InteriorServices = () => {
  return (
    <section className="bg-white py-5 md:py-8" aria-labelledby="interior-services-title">
      <div className="container">
        <div className="rounded-xl bg-black p-5 md:p-8 lg:p-10">
          <div className="grid gap-x-4 gap-y-8 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-5">
            <header className="lg:col-span-2">
              <h2 id="interior-services-title" className="text-default-50 text-2xl font-semibold tracking-tight md:text-3xl">
                One-stop shop for all things interiors
              </h2>
              <p className="text-default-300 mt-2 max-w-3xl text-sm">
                We provide complete painting service, interior design, renovation, and modular solutions for your home, including furniture and decor.
              </p>
            </header>

            <ServiceCard
              title="Home Interiors"
              description="Get home decor advice and interior design solutions."
              image={aboutInterior}
              alt="Contemporary interior with rich wood finishes"
              className="lg:col-start-1 lg:row-start-2"
              imageClassName="aspect-square"
            />
            <ServiceCard
              title="Modular Kitchen"
              description="Shape your dream kitchen with our diverse collection."
              image={aboutKitchen}
              alt="Modern kitchen with warm wood cabinetry"
              className="lg:col-start-2 lg:row-start-2"
              imageClassName="aspect-square"
            />
            <ServiceCard
              title="Painting Services"
              description="Get expert painting with on-time completion guaranteed."
              image={aboutBrush}
              alt="Close-up of a brush applying a finish by hand"
              className="lg:col-start-3 lg:row-span-2 lg:row-start-1"
              imageClassName="aspect-[1.15/1]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteriorServices
