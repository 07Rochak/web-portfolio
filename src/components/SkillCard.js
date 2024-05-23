import React from 'react'
import '../CSS/SkillCard.css'

const SkillCard = (props) => {
  return (
    <div className='skillCard-parent-container'>
      <div className='skillCard-child-container-1'>
        <div className='skillCard-child-container-1-title'>{props.title}</div>
        <div className='skillCard-child-container-1-percent'>{props.percent}</div>
      </div>
      <div className='skillCard-child-container-2'>
        <span className='skillCard-total'>
          <span className='skillCard-stat' style={{ width: `${props.percent}` }}> </span>
        </span>
      </div>
    </div>
  )
}

export default SkillCard
