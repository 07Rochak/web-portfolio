import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import '../CSS/header-css.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
// import { IoIosMenu } from 'react-icons/io'

const Header = () => {
  // const [expanded, setExpanded] = useState('false')
  useEffect(() => {
    AOS.init()
  }, [])
  const handleSetActive = (to) => {
    console.log(to)
  }
  const [show, setShow] = useState(false)
  return (
    <>
      <Navbar expand='xl' className='header-background header-text padding-4' variant='dark' sticky='top' data-aos='fade-down' data-aos-duration='1500'>
        <Container fluid>
          <Navbar.Brand href='#' style={{ color: 'white', fontSize: '1.8em' }} className='bahnschrift-font'>Rochak Shrivastav</Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-xl' onClick={() => { setShow(!show) }} />
          {/* <button aria-controls='offcanvasNavbar-expand-xl' type='button' aria-label='Toggle navigation' className='navbar-toggler' onClick={() => setExpanded(expanded ? 'false' : 'expanded')}><IoIosMenu className='navbar-toggler-icon' /></button> */}
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-xl'
            aria-labelledby='offcanvasNavbarLabel-expand-xl'
            placement='end'
            style={{ backgroundColor: '#0D0D0D' }}
            show={show}
          >
            <Offcanvas.Header closeButton data-bs-theme='dark' onClick={() => { setShow(!show) }}>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-xl' style={{ color: 'white', fontSize: '1.5em' }} className='bahnschrift-font'>
                <Link to='/' spy offset={-200} smooth duration={500} onSetActive={handleSetActive} activeClass='active-class' onClick={() => { setShow(false) }}>
                  Rochak Shrivastav
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3' style={{ color: 'white' }}>
                <Nav.Link style={{ color: 'white', fontSize: '1.3em' }} className='bahnschrift-font'><Link to='introduction' spy smooth duration={100} onSetActive={handleSetActive} activeClass='active-class' onClick={() => { setShow(false) }}><span className='undAni'>Introduction</span></Link></Nav.Link>
                <Nav.Link style={{ color: 'white', fontSize: '1.3em' }} className='bahnschrift-font'><Link to='AboutMe' spy offset={0} smooth duration={100} onSetActive={handleSetActive} activeClass='active-class' onClick={() => { setShow(false) }}><span className='undAni'>About Me</span></Link></Nav.Link>
                <Nav.Link style={{ color: 'white', fontSize: '1.3em' }} className='bahnschrift-font'><Link to='MySkills' spy offset={0} smooth duration={100} onSetActive={handleSetActive} activeClass='active-class' onClick={() => { setShow(false) }}><span className='undAni'>My Skills</span></Link></Nav.Link>
                <Nav.Link style={{ color: 'white', fontSize: '1.3em' }} className='bahnschrift-font'><Link to='Experience' spy offset={0} smooth duration={100} onSetActive={handleSetActive} activeClass='active-class' onClick={() => { setShow(false) }}><span className='undAni'>Experience</span></Link></Nav.Link>
                <Nav.Link style={{ color: 'white', fontSize: '1.3em' }} className='bahnschrift-font'><Link to='ContactMe' spy offset={0} smooth duration={100} onSetActive={handleSetActive} activeClass='active-class' onClick={() => { setShow(false) }}><span className='undAni'>Contact Me</span></Link></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
