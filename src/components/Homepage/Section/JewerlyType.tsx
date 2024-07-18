import { Mobile } from '@/config/MediaQuery'
import React from 'react'

const JewerlyType = () => {
    const {isMobile} = Mobile()
  return (
    <div className={`${isMobile? "" : ""}`}>

    </div>
  )
}

export default JewerlyType