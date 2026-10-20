import iconDark from '@/assets/images/other/icon-dark.svg'
import Image from 'next/image'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
      <div className="container">
        <div className="mb-20 grid gap-7.5 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-medium md:text-[46px] lg:text-[50px]">
              Take control of your health today and <span className="text-default-400">start building a better tomorrow</span>
            </h2>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-12.5">Join Healia and unlock a personalized health journey designed to help you live longer, healthier, and more confidently every day.</p>

            <div className="flex gap-7.5">
              <Link href="/about" className="border-default-950 text-default-950 hover:border-primary hover:text-primary inline-flex items-center justify-center gap-2.5 rounded-md border bg-transparent px-7.5 py-5 text-lg transition-all">
                Join Healia Now
              </Link>

              <Link href="/about" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
                About Healia
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

export default Cta
