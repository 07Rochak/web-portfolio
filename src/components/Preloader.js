import React, { useEffect } from 'react'
import '../CSS/preloader.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Preloader = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div style={{ backgroundColor: '#0D0D0D', width: '100%', height: '100vh' }}>
      <div className='preloader'>
        <div className='texts-container' data-aos='fade-up' data-aos-delay='500' data-aos-duration='1000' data-aos-anchor-placement='top-bottom'>
          <span className='preloader-span'>Discover</span>
          <span className='preloader-span'>a</span>
          <span className='preloader-span'>world of</span>
          <div className='cover-box'> </div>
        </div>
        <div className='texts-container' data-aos='fade-in' data-aos-delay='1500' data-aos-anchor-placement='top-bottom'>
          <span className='first'>Innovation</span>
          <span className='reveal-text'>with a developer</span>
          <div className='cover-box'> </div>
        </div>
        <div className='texts-container' data-aos='fade-in' data-aos-delay='3000' data-aos-anchor-placement='top-bottom'>
          <span className='preloader-span'>Driven </span>
          <span className='preloader-span'>by</span>
          <div className='cover-box'> </div>
        </div>
        <div className='texts-container' data-aos='fade-in' data-aos-delay='4000' data-aos-anchor-placement='top-bottom'>
          <span className='first'>Passion</span>
          <span className='reveal-text-2'>and Creativity</span>
          <div className='cover-box'> </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
