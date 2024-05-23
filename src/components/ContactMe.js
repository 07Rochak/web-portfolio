import React, { useEffect, useState } from 'react'
import '../CSS/contactMe.css'
import Heading from './Heading'
import TextField from '@mui/material/TextField'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiFormLabel-root': {
              color: 'rgb(0, 187, 255)'
            },
            '--TextField-brandBorderColor': 'rgb(0, 187, 255)',
            '--TextField-brandBorderHoverColor': 'rgb(0, 187, 255)',
            '--TextField-brandBorderFocusedColor': 'rgb(0, 187, 255)',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)'
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)'
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)'
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)'
            }
          }
        }
      }
    }
  })

const ContactMe = () => {
  const outerTheme = useTheme()
  useEffect(() => {
    AOS.init()
  }, [])
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState(false)
  function validateEmail (email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailPattern.test(email)
  }
  let flag = 0
  const handleNameChange = (e) => {
    setName(e.target.value)
    if (e.target.validity.valid) {
      setNameError(false)
    } else {
      setNameError(true)
    }
  }
  const handeEmailChange = (e) => {
    setEmail(e.target.value)
    // if (validateEmail) {
    if (e.target.validity.valid) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
  }
  const handeMessageChange = (e) => {
    setMessage(e.target.value)
    if (e.target.validity.valid) {
      setMessageError(false)
    } else {
      setMessageError(true)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    flag = 0
    const serviceID = 'service_0php6ap'
    const templateID = 'template_0hy0iqq'
    const publicKey = '2bygjCZob85REUf4l'
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Rochak Shrivastav',
      message: message
    }

    if (validateEmail(email)) {
      console.log('Valid email address!')
      flag += 1
    } else {
      alert('Invalid email address. Please try again.')
      return
    }
    if (name.length === 0) {
      alert('Please Enter Name.')
      return
    } else {
      flag += 1
    }
    if (message.length === 0) {
      alert('Please Enter Message.')
    } else {
      flag += 1
    }
    if (flag === 3) {
      console.log(name)
      console.log(email)
      console.log(message)
      flag = 0
      emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          alert('Email sent successfully!', response)
          setName('')
          setEmail('')
          setMessage('')
        })
        .catch((error) => {
          alert('Error Sending email:', error)
        })
    }
  }
  return (
    <div data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300' id='ContactMe'>
      <Heading content='Contact Me' />
      <center>
        <div className='contactMe-parent-container'>
          <div className='contactMe-child-container-1'>
            <div className='contactMe-content contactMe-mainHead aptos-font'>I'd Love to hear from you</div>
            <div className='contactMe-content contactMe-subPart'>Let's blend our talents and spark innovation together!</div>
            <div className='contactMe-content contactMe-subPart'>Drop me a message, and let's craft something extraordinary side by side</div>
          </div>
        </div>
        <div className='contactMe-child-container-2'>
          <form className='contactMe-form'>
            <Box
              sx={{
                width: '100%',
                marginBottom: '1.5%',
                marginTop: '1.5%',
                backgroundColor: '#0D0D0D'
              }}
            >
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label='Enter Name' fullWidth sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }} onChange={handleNameChange} required error={nameError} helperText={nameError ? 'Please Enter Name' : ''} />
              </ThemeProvider>
            </Box>
            <Box
              sx={{
                width: '100%',
                marginBottom: '2%',
                marginTop: '2%',
                backgroundColor: '#0D0D0D'
              }}
            >
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField label='Enter Email ID' fullWidth sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }} onChange={handeEmailChange} required error={emailError} helperText={emailError ? 'Please Enter Valid Email' : ''} inputProps={{ type: 'email' }} />
              </ThemeProvider>
            </Box>
            <Box
              sx={{
                width: '100%',
                marginBottom: '1.5%',
                marginTop: '1.5%',
                backgroundColor: '#0D0D0D'
              }}
            >
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField multiline rows='4' label='Enter Message' fullWidth sx={{ '& .MuiOutlinedInput-root': { color: 'white' } }} onChange={handeMessageChange} required error={messageError} helperText={emailError ? 'Please Enter Valid Email' : ''} />
              </ThemeProvider>
            </Box>
            <Box
              sx={{
                marginRight: '86%'
              }}
            >
              <Button variant='contained' className='submit-button' onClick={handleSubmit}>Send</Button>
            </Box>
          </form>
        </div>
      </center>
    </div>
  )
}

export default ContactMe
