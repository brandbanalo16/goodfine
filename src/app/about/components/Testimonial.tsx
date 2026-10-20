import author4 from '@/assets/images/author/4.jpg'
import Image, { StaticImageData } from 'next/image'

export type TestimonialType = {
  quote: string
  author: string
  role: string
  image: StaticImageData
}

const testimonialData: TestimonialType = {
  quote: "“I've spent years bouncing between doctors without real answers. Function gave me a full picture of my health, and the data-backed insights changed everything. I finally understand what's going on with my body.”",
  author: 'Daniel K.,',
  role: 'Member',
  image: author4,
}

const Testimonial = () => {
  return (
    <section className="relative size-full overflow-hidden pb-20 md:pb-25 lg:pb-35">
      <div className="container">
        <div className="mx-auto max-w-225 text-center">
          <h3 className="mb-10 text-[22px]">{testimonialData.quote}</h3>
          <div className="inline-flex items-center gap-5">
            <Image src={testimonialData.image} alt="Avatar Image" className="size-12.5 rounded-full" />
            <div>
              <h3 className="mb-1 text-xl">{testimonialData.author}</h3>
              <div className="text-sm">{testimonialData.role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
