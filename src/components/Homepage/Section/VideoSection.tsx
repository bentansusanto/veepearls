import { Mobile } from '@/config/MediaQuery'
import React from 'react'

const VideoSection = () => {
    const {isMobile} = Mobile()
  return (
    <div className={`${isMobile? "" : "px-28 mt-40"}`}>
      <p className='text-3xl text-white'>Hello world</p>
      <video src={require(`@/assets/images/necklare01-video.mp4`)} autoPlay muted loop className='w-[50%]'></video>
    </div>
  )
}

export default VideoSection