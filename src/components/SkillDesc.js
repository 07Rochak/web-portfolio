import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import IconButton from '@mui/material/IconButton'
import { CircularProgressbar } from 'react-circular-progressbar'
import Card from 'react-bootstrap/Card'
import 'react-circular-progressbar/dist/styles.css'
import '../CSS/skillDesc.css'
import GradientSVG from './GradientSVG'
import SkillCard from './SkillCard'
import MobileSkillCard from './MobileSkillCard'
import Collapse from 'react-bootstrap/Collapse'

const SkillDesc = (props) => {
  const [open, setOpen] = useState(true)
  const idCSS = 'hello'
  const skills = props.skills
  let val = props.percent
  val = val.substring(0, 2)
  val = Number(val)
  const handleOpen = () => {
    setOpen(!open)
    // document.querySelector('.skill-desc-child-container-2').classList.toggle('collapsed-class')
    // document.querySelector('.mobile-all-skills').classList.toggle('collapsed-class-2')
  }
  return (
    <div className='skill-desc-parent-container' style={{ transition: 'all 2s linear' }}>
      <div className='skill-desc-child-container-1'>
        <div className='skill-desc-child-container-1-expand'>
          <IconButton aria-label='expand' size='large' style={{ color: 'white' }} onClick={handleOpen} className='collapse-button'>
            {open ? <FaChevronLeft className='collapse-button' /> : <FaChevronRight className='collapse-button' />}
          </IconButton>
        </div>
        <div className='skill-desc-child-container-1-progress'>
          <GradientSVG />
          <CircularProgressbar
            strokeWidth={11}
            value={val}
            text={props.percent}
            styles={{
              path: { stroke: `url(#${idCSS})`, height: '100%' },
              trail: {
                stroke: '#404040'
              },
              text: {
                fill: 'white',
                fontSize: '0.8em'
              }
            }}
          />
        </div>
        <div className='skill-desc-child-container-1-title aptos-font'>{props.title}</div>
      </div>
      <Collapse in={open} dimension='width'>
        <div className='skill-desc-child-container-2'>
          <div className='skill-desc-child-container-2-inner'>
            {
              skills.map((skills) => {
                return <SkillCard key={skills.key} title={skills.title} percent={skills.percent} />
              })
            }
          </div>
          <div className='skills-card-mobile'>
            <Card style={{ color: 'white', backgroundColor: '#262626' }}>
              <div className='mobile-all-skills'>
                {
                  skills.map((skills) => {
                    return <MobileSkillCard key={skills.key} title={skills.title} logo={skills.logo} />
                  })
                }
              </div>
            </Card>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default SkillDesc
