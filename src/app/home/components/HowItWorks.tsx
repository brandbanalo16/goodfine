import { Icon } from '@iconify/react'

const processSteps = [
  {
    number: '01',
    icon: 'tabler:home-search',
    accentIcon: 'tabler:search',
    title: 'Sign up for a free site visit',
    description: 'Tell us about your space and book a convenient visit with our painting team.',
  },
  {
    number: '02',
    icon: 'tabler:color-swatch',
    accentIcon: 'tabler:palette',
    title: 'Free colour consultation',
    description: 'Explore colour options and get expert advice to find the right finish for your home.',
  },
  {
    number: '03',
    icon: 'tabler:file-check',
    accentIcon: 'tabler:check',
    title: 'Quotation approval',
    description: 'Review a clear project quotation, then approve it when you are ready to begin.',
  },
  {
    number: '04',
    icon: 'tabler:paint',
    accentIcon: 'tabler:sofa',
    title: 'Painting work starts',
    description: 'Our professionals prepare your space and bring your chosen colours to life.',
  },
]

const HowItWorks = () => {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-18 lg:py-22" aria-labelledby="process-title">
      <div className="container">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <div className="text-primary mb-2.5 text-sm font-medium tracking-wide">(Our Process)</div>
          <h2 id="process-title" className="text-default-950 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Steps of Our <span className="text-default-400">Painting Service</span>
          </h2>
          <p className="text-default-700 mx-auto mt-4 max-w-2xl leading-relaxed">From the first visit to the final coat, our team makes it simple to transform your space.</p>
        </header>

        <div className="relative">
          <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-10 z-0 hidden h-52 w-full lg:block" viewBox="0 0 1200 220" preserveAspectRatio="none" fill="none">
            <path d="M150 65 C150 140 450 140 450 65 C450 0 750 0 750 65 C750 140 1050 140 1050 65" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="7 9" />
            <path d="M294 115 L306 121 L294 127" fill="var(--color-primary)" />
            <path d="M594 10 L606 16 L594 22" fill="var(--color-primary)" />
            <path d="M894 115 L906 121 L894 127" fill="var(--color-primary)" />
          </svg>

          <ol className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step) => (
              <li key={step.number} className="flex flex-col items-center text-center">
                <span className="text-primary mb-3 text-3xl leading-none font-semibold tracking-tight">{step.number}</span>

                <div className="relative mb-4 flex h-32 w-36 items-center justify-center rounded-2xl">
                  <span className="bg-default-100 absolute inset-x-4 inset-y-3 rounded-xl" />
                  <Icon icon={step.icon} className="text-default-400 relative z-10 size-20 stroke-[1.4]" aria-hidden="true" />
                  <span className="bg-primary absolute right-5 bottom-5 z-20 flex size-9 items-center justify-center rounded-full text-white ring-4 ring-[var(--color-body-bg)]">
                    <Icon icon={step.accentIcon} className="size-5" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="text-default-950 max-w-52 text-lg leading-snug font-semibold md:text-xl">{step.title}</h3>
                <p className="text-default-700 mt-2 max-w-64 text-sm leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
