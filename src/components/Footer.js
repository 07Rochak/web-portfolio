import React from 'react'
import '../CSS/footer.css'

const Footer = () => {
  let now = new Date()
  let year = now.getFullYear()
  return (
    <div className='footer'>
      <span className='footer-bar'> </span>
      <div className='footer-copyright'><center>Created by Rochak Shrivastav <br />Copyright © {year} ROCHAK SHRIVASTAV</center></div>
    </div>
  )
}

export default Footer
