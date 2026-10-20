import aboutImage1 from '@/assets/images/other/about-kitchen-1.jpg'
import aboutImage2 from '@/assets/images/other/about-1.jpeg'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const featuresList = [
  'Best Quality Standards',
  'Unlimited Shades',
  'Innovative Coatings',
  'Nationwide Distribution',
  '50+ Finishes',
  'Award Winning Coatings',
]

const Benefits = () => {
  return (
    <section className="relative size-full overflow-hidden bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Overlapping Images */}
          <div className="relative mx-auto w-full max-w-[540px] lg:col-span-6 lg:max-w-none">
            <div className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
              {/* Back Image (Top-Left) */}
              <div className="relative h-[300px] w-[72%] overflow-hidden rounded-xl shadow-lg sm:h-[380px] md:h-[420px]">
                <Image
                  src={aboutImage1}
                  alt="Modern kitchen surface coatings"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 70vw, 35vw"
                  priority
                />
              </div>

              {/* Front Overlapping Image (Bottom-Right) */}
              <div className="absolute top-16 right-0 z-10 h-[280px] w-[64%] overflow-hidden rounded-xl border-4 border-white shadow-2xl sm:top-24 sm:h-[360px] md:top-28 md:h-[400px]">
                <Image
                  src={aboutImage2}
                  alt="Wood cabinet coatings and finishes"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 60vw, 30vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6">
            {/* Top red accent line */}
            <div className="mb-4 h-1 w-12 rounded bg-[#ea4c46]" />

            {/* Main Heading */}
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-[#0a2540] sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
              We Elevate The Beauty Of Your Surfaces
            </h2>

            {/* Italic Quote */}
            <p className="mb-5 text-base italic leading-relaxed text-[#0a2540]/80">
              &ldquo;Each coating evokes different emotions for each individual. Your emotions still depend on your individual life experience and how you associate each coating&rdquo;.
            </p>

            {/* Paragraph */}
            <p className="mb-8 text-sm leading-relaxed text-default-600 sm:text-base">
              Established in 2008, KC Good Shine Paints Pvt. Ltd. ( Formely Krishna Chemicals) has transformed into a leading brand in surface coatings. With our flagship brands Good Shine &amp; Krista, we bring innovation, durability, and beauty to every surface.
            </p>

            {/* Stats Badge & Features List */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              {/* Stat Card */}
              <div className="flex min-w-[190px] flex-col items-center justify-center rounded-2xl bg-[#ea4c46] p-6 text-center text-white shadow-md">
                <div className="mb-3 flex size-14 items-center justify-center rounded-lg">
                  <Icon icon="fluent:paint-roller-24-regular" className="size-12 text-white" />
                </div>
                <div className="text-3xl font-extrabold tracking-tight">450 +</div>
                <div className="mt-1 text-sm font-medium text-white/95">Successful Project</div>
              </div>

              {/* Bullet Features (2 Columns on larger screens) */}
              <div className="grid flex-1 grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                {featuresList.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    {/* Bullseye / target dot icon matching reference */}
                    <span className="flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-[#ea4c46]">
                      <span className="size-1.5 rounded-full bg-[#ea4c46]" />
                    </span>
                    <span className="text-sm font-medium text-[#0a2540]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
