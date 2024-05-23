import React, { useEffect } from 'react'
import '../CSS/timeline.css'
import { FaLaptopCode } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Timelineview () {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='container py-5' data-aos='fade-right' data-aos-duration='1000'>
      <div className='main-timeline-4 text-white'>
        <div className='timeline-4 left-4'>
          <div className='card gradient-custom'>
            <div className='card-body p-4'>
              <FaLaptopCode className='timeline-icon mb-2' />
              <h3 style={{ color: 'white' }} className='aptos-font'>Full Stack Web Development Intern</h3>
              <h4 className='aptos-font mb-2' style={{ color: 'white' }}>Kaere</h4>
              <div style={{ color: 'white' }} className='aptos-font timeline-conent-font'>
                <ul>
                  <li>Developed the main landing page using React JS and various libraries like AOS.</li>
                  <li>Implemented additional routes for creating pages such as login, signup, and user details.</li>
                  <li>Utilized Firebase for user authentication and Firestore for storing user data, integrating these services using the Context API.</li>
                  <li>Focused on creating a seamless user experience through responsive design and interactive elements.</li>
                </ul>
              </div>
              <h5 style={{ color: 'white' }} className='aptos-font'>01/2023 - 07/2023</h5>
            </div>
          </div>
        </div>
        <div className='timeline-4 right-4'>
          <div className='card gradient-custom-4'>
            <div className='card-body p-4'>
              <FaCode className='timeline-icon mb-2' />
              <h3 style={{ color: 'white' }} className='aptos-font'>Freelancer</h3>
              <div style={{ color: 'white' }} className='aptos-font timeline-conent-font'>
                <ul>
                  <li>Assisting small and large businesses in expanding their reach by turning innovative ideas into high-performance mobile applications.</li>
                  <li>Helping small and large businesses grow by converting their creative ideas into dynamic and engaging web applications.</li>
                  <li>Enabling businesses to streamline operations and enhance efficiency through cutting-edge automation and image processing solutions.</li>
                  <li>Empowering businesses to make informed decisions and drive growth by transforming data into valuable insights.</li>
                  <li>Supporting businesses in achieving their goals with custom programming solutions tailored to their unique needs and challenges.</li>
                </ul>
              </div>
              <h5 style={{ color: 'white' }} className='aptos-font'>04/2024 - Present</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
