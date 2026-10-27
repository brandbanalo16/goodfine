'use client'

import runningImage from '@/assets/images/other/running.png'
import { Icon } from '@iconify/react'

const productUsps = [
  {
    title: 'Made for lasting finishes',
    description: 'Wood-coating solutions designed to protect surfaces and bring out their natural beauty.',
    icon: 'tabler:shield-check',
  },
  {
    title: 'A finish for every style',
    description: 'Choose from 50+ premium finishes across the Good Shine and Krista ranges.',
    icon: 'tabler:color-swatch',
  },
]

const productSpecifications = [
  { label: 'Product ranges', value: 'Good Shine and Krista' },
  { label: 'Finish options', value: '50+ premium finishes' },
  { label: 'Applications', value: 'Furniture and interior woodwork' },
  { label: 'Coating focus', value: 'Beauty, durability, and performance' },
]

const WhyChoose = () => {
  return (
    <section className="site-layout-full-width relative w-full overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20" style={{ backgroundImage: `linear-gradient(#3c2219b3, #3c2219b3), url(${runningImage.src})` }}>
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="bg-default-950 grid overflow-hidden rounded-2xl lg:grid-cols-2">
          <div className="p-6 text-white sm:p-9 lg:p-10 xl:p-12">
            <span className="text-primary text-sm font-semibold tracking-wide">THE GOOD FINE DIFFERENCE</span>
            <h2 className="text-default-50 mt-3 text-3xl leading-tight font-semibold sm:text-4xl">A beautiful finish starts with the right coating.</h2>
            <p className="text-default-300 mt-3 max-w-xl leading-relaxed">Discover dependable wood-finishing solutions, developed to support lasting results across furniture and interior woodwork.</p>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {productUsps.map((usp) => (
                <li key={usp.title} className="flex gap-3">
                  <span className="bg-primary/15 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                    <Icon icon={usp.icon} className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-default-50 font-semibold">{usp.title}</h3>
                    <p className="text-default-300 mt-1 text-sm leading-relaxed">{usp.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-default-700 mt-8 border-t pt-6">
              <h3 className="text-default-50 text-lg font-semibold">Product specifications</h3>
              <dl className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {productSpecifications.map((specification) => (
                  <div key={specification.label}>
                    <dt className="text-default-400 text-xs font-medium tracking-wide uppercase">{specification.label}</dt>
                    <dd className="text-default-100 mt-1 text-sm">{specification.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="bg-default-50 p-6 sm:p-9 lg:p-10 xl:p-12">
            <div className="mb-6">
              <span className="text-primary text-sm font-semibold tracking-wide">LET’S GET STARTED</span>
              <h2 className="text-default-950 mt-2 text-2xl font-semibold sm:text-3xl">Book an appointment</h2>
              <p className="text-default-600 mt-2 text-sm leading-relaxed">Share a few details and our team can help you plan your painting project.</p>
            </div>

            <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label htmlFor="appointment-name" className="text-default-800 mb-1.5 block text-sm font-medium">
                  Name<span className="text-primary">*</span>
                </label>
                <input
                  id="appointment-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="border-default-300 text-default-950 placeholder:text-default-400 focus:border-primary w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="appointment-mobile" className="text-default-800 mb-1.5 block text-sm font-medium">
                  Mobile Number<span className="text-primary">*</span>
                </label>
                <input
                  id="appointment-mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  required
                  title="Enter exactly 10 digits."
                  className="border-default-300 text-default-950 placeholder:text-default-400 focus:border-primary w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label htmlFor="appointment-email" className="text-default-800 mb-1.5 block text-sm font-medium">
                  Email <span className="text-default-500">(optional)</span>
                </label>
                <input
                  id="appointment-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="border-default-300 text-default-950 placeholder:text-default-400 focus:border-primary w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none"
                  placeholder="you@business.com"
                />
              </div>

              <div>
                <label htmlFor="business-type" className="text-default-800 mb-1.5 block text-sm font-medium">
                  Business Type<span className="text-primary">*</span>
                </label>
                <select id="business-type" name="businessType" required defaultValue="" className="border-default-300 text-default-950 focus:border-primary w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none">
                  <option value="" disabled>
                    Select business type
                  </option>
                  {['Paint Shop / Retailer', 'Dealer', 'Distributor / Wholesaler', 'Furniture Manufacturer', 'Other'].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="business-location" className="text-default-800 mb-1.5 block text-sm font-medium">
                  City &amp; State<span className="text-primary">*</span>
                </label>
                <input
                  id="business-location"
                  name="businessLocation"
                  type="text"
                  autoComplete="address-level2"
                  required
                  className="border-default-300 text-default-950 placeholder:text-default-400 focus:border-primary w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none"
                  placeholder="Enter your business location"
                />
              </div>

              <div>
                <label htmlFor="products-interested" className="text-default-800 mb-1.5 block text-sm font-medium">
                  Products Interested In<span className="text-primary">*</span>
                </label>
                <select id="products-interested" name="productsInterested" required defaultValue="" className="border-default-300 text-default-950 focus:border-primary w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none">
                  <option value="" disabled>
                    Select a product
                  </option>
                  {['PU Coatings', 'NC Paints', 'Wood Stains', 'Wood Fillers', 'Thinners', 'Multiple Products'].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="appointment-message" className="text-default-800 mb-1.5 block text-sm font-medium">
                  Message <span className="text-default-500">(optional)</span>
                </label>
                <textarea
                  id="appointment-message"
                  name="message"
                  rows={3}
                  className="border-default-300 text-default-950 placeholder:text-default-400 focus:border-primary w-full resize-y rounded-lg border bg-white px-4 py-3 text-sm outline-none"
                  placeholder="Tell us a little about your requirements"
                />
              </div>

              <p className="text-default-600 text-xs leading-relaxed sm:col-span-2">
                By proceeding, I authorize Asian Paints Limited and its authorized contractors/partners to contact me via WhatsApp, phone calls, SMS and e-mail and I agree to the{' '}
                <a href="https://www.asianpaints.com/footer-links/terms-and-conditions.html" target="_blank" rel="noreferrer" className="text-default-950 underline underline-offset-2">
                  Terms &amp; Conditions
                </a>{' '}
                and{' '}
                <a href="https://www.asianpaints.com/footer-links/terms-and-conditions/privacy-policy.html" target="_blank" rel="noreferrer" className="text-default-950 underline underline-offset-2">
                  Privacy Policy
                </a>
                .
              </p>

              <button type="submit" className="bg-primary text-default-950 hover:bg-default-950 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold transition-colors hover:text-white sm:col-span-2">
                Book an appointment
                <Icon icon="tabler:arrow-up-right" className="size-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
