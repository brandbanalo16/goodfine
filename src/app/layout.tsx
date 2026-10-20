import '@/assets/css/style.css'
import favicon from '@/assets/images/favicon.ico'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import { DEFAULT_PAGE_TITLE } from '@/config/constants'
import type { Metadata } from 'next'
import { Golos_Text } from 'next/font/google'

const golosText = Golos_Text({
  variable: '--font-golos-text',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${DEFAULT_PAGE_TITLE}`,
    default: DEFAULT_PAGE_TITLE,
  },
  icons: { icon: favicon.src },
  description: 'Healia is a modern Medical & Healthcare Website Template built with Tailwind CSS 4. Perfect for hospitals, clinics, doctors, dentists, medical centers, healthcare providers, and appointment-based services. Fully responsive, fast-loading, and easy to customize.',
  keywords: [
    'medical website template',
    'healthcare website template',
    'hospital template',
    'clinic website template',
    'doctor website template',
    'dentist website template',
    'medical center template',
    'health services website',
    'tailwind css medical template',
    'tailwind css 4 template',
    'appointment booking template',
    'healthcare landing page',
    'responsive medical template',
    'modern hospital website',
  ],
  authors: [{ name: 'Unifato' }],
  robots: 'index, follow',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" className={`${golosText.variable} antialiased`}>
      <body suppressHydrationWarning>
        <AppProvidersWrapper>{children}</AppProvidersWrapper>
      </body>
    </html>
  )
}

export default RootLayout
