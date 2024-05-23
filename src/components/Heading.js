import React, { useEffect } from 'react'
import '../CSS/heading.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Heading = (props) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='heading-container' data-aos='fade-right' data-aos-duration='1000'>
      <span className='heading-bar'> </span>
      <p className='heading-content aptos-font'>{props.content}</p>
    </div>
  )
}

export default Heading
