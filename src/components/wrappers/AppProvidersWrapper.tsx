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
      {children}
      <Footer />
    </>
  )
}

export default AppProvidersWrapper
