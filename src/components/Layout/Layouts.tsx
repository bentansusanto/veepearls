'use client'
import Navbar from '../NavFoot/Navbar'
import React, { ReactNode } from 'react'
import Footer from '@/components/NavFoot/Footer'

const Layouts = ({children} : {children: ReactNode}) => {
  return (
    <div className=''>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layouts