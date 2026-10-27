'use client'

import { preline } from '@/utils/preline'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import Topbar from '../topbar/Topbar'

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  useEffect(() => {
    preline.init()
  }, [])

  return (
    <>
      <Topbar />
      <main className={`site-layout w-full ${pathname === '/home' ? 'site-layout-home' : ''}`}>{children}</main>
      <Footer />
    </>
  )
}

export default AppProvidersWrapper
