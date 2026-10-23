import { Icon } from '@iconify/react'

const processSteps = [
  {
    number: '01',
    icon: 'tabler:palette',
    title: 'Choose Your Coating Solution',
    description: 'Browse our wide range of Wood, Metal, Glass, Plastic & Specialty Coatings and select the product that best matches your project requirements.',
  },
  {
    number: '02',
    icon: 'tabler:shopping-bag',
    title: 'Place Your Order',
    description: 'Connect with our sales team or authorized distributors for detailed specifications, bulk pricing, and delivery timelines. We make ordering simple and hassle-free.',
  },
  {
    number: '03',
    icon: 'tabler:paint',
    title: 'Apply & Experience Excellence',
    description: 'With support from our application experts, apply your coating and enjoy durable, elegant, long-lasting finishes on your surfaces.',
  },
]

const HowItWorks = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-20 lg:py-25" aria-labelledby="process-title">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <div className="text-primary mb-2.5 text-sm font-medium tracking-wide">(Our Process)</div>
          <h2 id="process-title" className="text-default-950 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Get Our Service In <span className="text-default-400">3 Steps</span>
          </h2>
          <p className="text-default-700 mx-auto mt-4 max-w-2xl leading-relaxed">
            Over the years, we have built a reputation as an <strong className="text-default-950 font-semibold">ISO 9001:2015 certified company</strong>, delivering products that combine{' '}
            <strong className="text-default-950 font-semibold">durability, aesthetics, and performance.</strong>
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {processSteps.map((step) => (
            <article key={step.number} className="border-default-200 bg-default-50 flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7.5">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-primary text-4xl font-semibold tracking-tight">{step.number}</span>
                <span className="bg-primary/10 text-primary flex size-14 items-center justify-center rounded-full">
                  <Icon icon={step.icon} className="size-7" aria-hidden="true" />
                </span>
              </div>

              <h3 className="text-default-950 mb-3 text-xl leading-snug font-semibold md:text-2xl">{step.title}</h3>
              <p className="text-default-700 text-sm leading-relaxed md:text-base">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
