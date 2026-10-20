import bodyVector from '@/assets/images/other/body-vector.svg'
import iconDark from '@/assets/images/other/icon-dark.svg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const bulletItemsData: string[] = ['Detects thyroid issues early', 'Spots autoimmune risks in advance', 'Optimizes metabolism & weight']

const SplitFeature = () => {
  return (
    <section className="bg-default-950 relative size-full overflow-hidden py-25">
      <div className="container-fluid">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-24">
          <div>
            <h3 className="text-primary mb-10 text-[22px]">Unlock hidden patterns in thyroid health</h3>

            <div className="mb-7.5 flex items-center gap-7.5">
              <div className="bg-default-700 flex size-25 items-center justify-center rounded-full">
                <Icon icon="tabler:arrow-narrow-down" className="text-primary size-15" />
              </div>

              <h2 className="text-default-50 text-[47px] lg:text-[70px]">
                <span data-target="55">55</span>%
              </h2>
            </div>

            <h2 className="text-default-50 mb-7.5 text-2xl text-4xl md:text-[46px] lg:text-[50px]">Achieved better sleep quality</h2>
            <p className="text-default-300">With continuous tracking and personalized insights, we make sure you don't just manage thyroid symptoms — you address root causes for lasting health improvements.</p>

            <div className="text-default-300 mt-20 text-sm">Normal TSH/FT4. low FT3 (+ high rT3)</div>
          </div>

          <div className="bg-default-700 rounded-xl p-5 pt-12.5">
            <div className="grid gap-4 md:grid-cols-3 lg:gap-24">
              <div className="flex justify-center">
                <Image src={bodyVector} alt="Icon" className="split-feature-image" />
              </div>

              <div className="md:col-span-2">
                <div className="mb-12.5">
                  <h3 className="text-default-50 mb-2.5 text-[22px]">TSH (Thyroid Stimulating Hormone)</h3>
                  <p className="text-default-300">First-line indicator of thyroid health.</p>
                </div>

                <div className="mb-12.5 space-y-1.5 text-center">
                  <div className="text-xs">Healthy</div>
                  <div className="bg-default-100 relative flex h-5 w-full justify-evenly">
                    <div className="bg-primary h-5 w-1"></div>
                    <div className="bg-primary h-5 w-1"></div>
                  </div>
                  <div className="text-xs">Range</div>

                  <div className="-mt-5.5 flex justify-evenly text-sm">
                    <div className="text-center">
                      <div className="text-primary">0.1</div>
                      <div className="text-white">IU/mL</div>
                    </div>
                    <div className="text-center">
                      <div className="text-primary">4.5</div>
                      <div className="text-white">IU/mL</div>
                    </div>
                  </div>
                </div>
                <ul className="marker:text-primary list-disc space-y-2.5 text-white">
                  {bulletItemsData.map((item, index) => (
                    <li key={index} className="feature-list-text">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 grid">
              <Link href="/about" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
                See what's Included
                <span className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                  <Image src={iconDark} alt="Icon" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SplitFeature
