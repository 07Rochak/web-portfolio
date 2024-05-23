import React, { useEffect } from 'react'
import '../CSS/aboutMe.css'
import Heading from './Heading'
import img1 from '../assets/me.jpg'
import Button from '@mui/material/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutMe = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  const openResume = () => {
    var url = 'https://drive.google.com/file/d/1JX51Wv8oZdblLQrn7PegtstFr8toEpUR/view?usp=sharing'
    var link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer' // Optional for security reasons
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className='about-me' data-aos='fade-right' data-aos-duration='1000' id='AboutMe'>
      <Heading content='About Me' />
      <div className='about-me-main'>
        <div className='about-me-parent-container'>
          <div className='about-me-child-container1' style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <center>
                Welcome to my web portfolio!👋<br />I'm Rochak Shrivastav, a Computer Science graduate with a passion for software development and machine learning. I have completed my B.Tech. from Vellore Institute of Technology Chennai, I specialize in web technologies like React JS and Node JS, and have a strong foundation in languages like Python and Java. With experience ranging from building secure chat systems to crafting e-commerce platforms and implementing machine learning models, I'm dedicated to creating innovative solutions to real-world problems. Certified in AWS Cloud Computing and proficient in data structures and algorithms optimization, I'm excited to explore new opportunities and push the boundaries of technology. Join me as we embark on this journey of innovation and discovery!
              </center>
            </div>
            <br />
            <div className='resume-button-container'>
              <Button variant='contained' size='large' className='resume-button' onClick={openResume}>
                MY RESUME
              </Button>
            </div>
          </div>
          <div className='about-me-child-container2'>
            <img src={img1} className='about-me-image' alt='Rochak' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
