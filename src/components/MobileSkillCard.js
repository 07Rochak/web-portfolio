import React from 'react'
import '../CSS/mobileCard.css'

const MobileSkillCard = (props) => {
  return (
    <div className='mobile-card'>{props.logo} {props.title}</div>
  )
}

export default MobileSkillCard
