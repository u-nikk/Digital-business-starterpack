import React from 'react'
import  './BrandingVideo.css'
const BrandingVideo = () => {
  return (
    <div className="bv-container">
        <div className="container">
            <motion.video className='bv-video'
            loop muted autoPlay content=''
            src="/video.mp4" typeof='video/mp4'></motion.video>
        </div>
    </div>
  )
}

export default BrandingVideo
