'use client'

import { preline } from '@/utils/preline'
import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import Topbar from '../topbar/Topbar'

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    preline.init()
  }, [])

  return (
    <>
      <Topbar />
      <div className="site-layout px-4 sm:px-6 lg:px-10">
        {children}
        <Footer />
      </div>
    </>
  )
}

export default AppProvidersWrapper
