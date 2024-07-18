import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const Layouts = ({children} : {children: ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
    </div>
  )
}

export default Layouts