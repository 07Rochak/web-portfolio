import React, { useEffect } from 'react'
import '../CSS/introduction-css.css'
import { TypeAnimation } from 'react-type-animation'
import img1 from '../assets/avatar.jpg'
// import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import '../CSS/scrollbar.css'
import { BiLogoGmail } from 'react-icons/bi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Introduction = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  const email = 'rochakshrivastav02@gmail.com'
  const phone = '+919302437202'

  const copyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email)
      } else {
        fallbackCopyTextToClipboard(email)
      }
    } catch (err) {
      console.error('Could not copy email: ', err)
    }
  }

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      document.execCommand('copy')
    } catch (err) {
      console.error('Fallback: Could not copy email: ', err)
    }

    document.body.removeChild(textArea)
  }
  // const copyEmail = () => {
  //   navigator.clipboard.writeText('rochakshrivastav02@gmail.com').then(function () {
  //     console.log('Text copied to clipboard')
  //   }).catch(function (error) {
  //     console.error('Error copying text: ', error)
  //   })
  // }
  const copyLinkedIn = () => {
    var url = 'https://www.linkedin.com/in/RochakShrivastav/'
    var link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer' // Optional for security reasons
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  const copyGithub = () => {
    var url = 'https://github.com/07Rochak'
    var link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer' // Optional for security reasons
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  const copyInstagram = () => {
    var url = 'https://www.instagram.com/07Rochak/'
    var link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer' // Optional for security reasons
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  const copyPhone = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(phone)
      } else {
        fallbackCopyTextToClipboard(phone)
      }
    } catch (err) {
      console.error('Could not copy phone: ', err)
    }
  }
  return (
    <div className='introduction-container' id='introduction'>
      <div className='introduction-parent-container'>
        <div className='introduction-child-container1' data-aos='fade-right' data-aos-delay='15000' data-aos-duration='1500'>
          <div className='aptos-font introduction-font-size'>I'm <strong>Rochak Shrivastav</strong></div>
          <div className='aptos-font introduction-font-size'>I'm  <TypeAnimation
            sequence={[
              'a MERN Stack Developer',
              1500,
              'a Freelancer',
              1500,
              'a React JS Enthusiast',
              1500,
              'a Data Analyst',
              1500,
              'an AWS Cloud Practitioner',
              1500,
              'a Bug Hunter',
              1500,
              'an Application Developer',
              1500
            ]}
            wrapper='strong'
            speed={50}
            repeat={Infinity}
            />
            <div className='introduction-links mb-3'>
              {/* <Button variant='contained' size='large' className='intro-button' style={{ borderRadius: '50%', marginRight: '0.5em', fontSize: '4.8vw' }}>
                <FaLinkedin />
              </Button>
              <Button variant='contained' size='large' className='intro-button' style={{ borderRadius: '50%', marginRight: '0.5em', fontSize: '4.8vw' }}>
                <FaGithub />
              </Button>
              <Button variant='contained' size='large' className='intro-button' style={{ borderRadius: '50%', marginRight: '0.5em', fontSize: '4.8vw' }}>
                <FaInstagram />
              </Button>
              <Button variant='contained' size='large' className='intro-button' style={{ borderRadius: '50%', marginRight: '0.5em', fontSize: '4.8vw' }}>
                <FaPhoneAlt />
              </Button> */}
              <Stack direction='row' alignItems='center' spacing={2}>
                <OverlayTrigger
                  placement='bottom'
                  // style={{ backgroundColor: 'red' }}
                  overlay={
                    <Tooltip id='bottom'>
                      Copy to clipboard!
                    </Tooltip>
                  }
                >
                  <IconButton aria-label='linked in' size='large' className='intro-button' onClick={copyEmail}>
                    <BiLogoGmail fontSize='inherit' style={{ color: 'white' }} />
                  </IconButton>
                </OverlayTrigger>
                <OverlayTrigger
                  placement='bottom'
                  // style={{ backgroundColor: 'red' }}
                  overlay={
                    <Tooltip id='bottom'>
                      Open in new Tab!
                    </Tooltip>
                  }
                >
                  <IconButton aria-label='linked in' size='large' className='intro-button' onClick={copyLinkedIn}>
                    <FaLinkedin fontSize='inherit' style={{ color: 'white' }} />
                  </IconButton>
                </OverlayTrigger>
                <OverlayTrigger
                  placement='bottom'
                  // style={{ backgroundColor: 'red' }}
                  overlay={
                    <Tooltip id='bottom'>
                      Open in new Tab!
                    </Tooltip>
                  }
                >
                  <IconButton aria-label='linked in' size='large' className='intro-button' onClick={copyGithub}>
                    <FaGithub fontSize='inherit' style={{ color: 'white' }} />
                  </IconButton>
                </OverlayTrigger>
                <OverlayTrigger
                  placement='bottom'
                  // style={{ backgroundColor: 'red' }}
                  overlay={
                    <Tooltip id='bottom'>
                      Open in new Tab!
                    </Tooltip>
                  }
                >
                  <IconButton aria-label='linked in' size='large' className='intro-button' onClick={copyInstagram}>
                    <FaInstagram fontSize='inherit' style={{ color: 'white' }} />
                  </IconButton>
                </OverlayTrigger>
                <OverlayTrigger
                  placement='bottom'
                  // style={{ backgroundColor: 'red' }}
                  overlay={
                    <Tooltip id='bottom'>
                      Copy to clipboard!
                    </Tooltip>
                  }
                >
                  <IconButton aria-label='linked in' size='large' className='intro-button' onClick={copyPhone}>
                    <FaPhoneAlt fontSize='inherit' style={{ color: 'white' }} />
                  </IconButton>
                </OverlayTrigger>
              </Stack>
            </div>
          </div>
        </div>
        <div className='introduction-child-container2' data-aos='fade-right' data-aos-delay='500' data-aos-duration='1500'><div><img src={img1} className='introduction-circle' alt='avatar' /></div></div>
      </div>
    </div>
  )
}

export default Introduction
