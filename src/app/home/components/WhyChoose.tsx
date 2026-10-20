import icon42 from '@/assets/images/icons/icon-42.svg'
import icon43 from '@/assets/images/icons/icon-43.svg'
import icon44 from '@/assets/images/icons/icon-44.svg'
import iconDark from '@/assets/images/other/icon-dark.svg'
import runningImage from '@/assets/images/other/running.png'
import whyChooseImage from '@/assets/images/other/why-choose-image.png'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export type ChoiceType = {
  title: string
  description: string
  icon: StaticImageData
}

const choiceData: ChoiceType[] = [
  {
    title: 'Convenience first',
    description: 'Book your tests online in minutes, with flexible at-home collection.',
    icon: icon42,
  },
  {
    title: 'Transparent pricing',
    description: 'No hidden costs; clear and upfront pricing for every test.',
    icon: icon44,
  },
  {
    title: 'Data security',
    description: 'Your health data is private and fully protected with end-to-end',
    icon: icon43,
  },
]

const WhyChoose = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25" style={{ backgroundImage: `linear-gradient(#3c2219b3, #3c2219b3), url(${runningImage.src})` }}>
      <div className="container-fluid">
        <div className="bg-default-950 overflow-hidden rounded-2xl">
          <div className="grid lg:grid-cols-14">
            <div className="col-span-10">
              <div className="p-17">
                <div className="mb-25 flex items-center justify-between">
                  <h3 className="text-default-50 text-[38px]">
                    Why are more people choosing <br /> Healia every day
                  </h3>

                  <Link href="/pricing" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
                    See Pricing
                    <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                      <Image src={iconDark} alt="Icon" />
                    </i>
                  </Link>
                </div>

                <div className="grid gap-7.5 lg:grid-cols-3">
                  {choiceData.map((item, index) => (
                    <div key={index} className="why-choose-item">
                      <Image src={item.icon} alt="Icon" className="mb-4 size-10" />
                      <div>
                        <h3 className="text-default-50 mb-2.5 text-[22px]">{item.title}</h3>
                        <p className="text-default-100 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="relative h-full overflow-hidden text-center">
                <Image src={whyChooseImage} alt="Testimonial Image" className="absolute inset-0 h-full w-full object-cover" />

                <div className="absolute inset-0 flex h-full flex-col justify-end bg-[repeating-linear-gradient(180deg,transparent,#3c2219)] p-7.5">
                  <p className="choose-right-content">“It's not just about numbers. The expert explained what my results meant for my lifestyle and helped me take action.”</p>
                  <div>
                    <h3 className="why-choose-text">Daniel L.</h3>
                    <div>Health Conscious</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
