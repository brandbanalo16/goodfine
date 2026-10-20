import iconDark from '@/assets/images/other/icon-dark.svg'
import Image from 'next/image'
import Link from 'next/link'

const Mission = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container">
        <div className="bg-default-100 rounded-2xl p-5 lg:p-25">
          <div className="mx-auto mb-12.5 max-w-175 text-center">
            <h2 className="mb-20 text-4xl font-medium lg:text-5xl">
              Changing the way
              <br /> <span className="text-default-400">you see your health</span>
            </h2>

            <p className="text-default-950 mx-auto mb-5 max-w-115 text-[22px]/[1.3em]">
              With <span className="text-primary">125+</span> comprehensive lab tests, personalized reporting, and advanced data tracking over time.
            </p>

            <p className="mb-10">
              Founded in collaboration with world-class doctors, researchers, and innovators, Function was designed to bridge the gap between medical expertise and everyday health management. We recognized that lab testing, while powerful, was often fragmented, expensive, and
              hard to understand. Patients were left with stacks of results but no clear steps forward. We set out to change that.
            </p>

            <div className="grid">
              <Link href="/about" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
                See what's Included
                <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                  <Image src={iconDark} alt="Icon" />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
