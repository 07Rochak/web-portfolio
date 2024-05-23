import React, { useEffect } from 'react'
import Heading from './Heading'
import SkillDesc from './SkillDesc'
import '../CSS/skills.css'
import { IoLogoHtml5, IoLogoReact } from 'react-icons/io5'
import { IoLogoJavascript } from 'react-icons/io'
import { FaNodeJs, FaJava, FaPython, FaMagnifyingGlass } from 'react-icons/fa6'
import { SiExpress, SiMongodb, SiPostgresql, SiPowerbi, SiTableau } from 'react-icons/si'
import { PiFileCppFill } from 'react-icons/pi'
import { GrMysql } from 'react-icons/gr'
import { LuComputer } from 'react-icons/lu'
import { HiMiniCpuChip } from 'react-icons/hi2'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  const dataScienceSkills = [['Data Science', '75%'], [
    {
      key: '1',
      title: 'Data Analytics',
      percent: '75%',
      logo: <FaMagnifyingGlass />
    },
    {
      key: '2',
      title: 'Power BI',
      percent: '80%',
      logo: <SiPowerbi />
    },
    {
      key: '3',
      title: 'Tableau',
      percent: '80%',
      logo: <SiTableau />

    },
    {
      key: '4',
      title: 'Machine Learning',
      percent: '75%',
      logo: <LuComputer />
    },
    {
      key: '5',
      title: 'Deep Learning',
      percent: '70%',
      logo: <HiMiniCpuChip />
    }
  ]]
  const progLanguageSkills = [['Prog. Languages', '80%'], [
    {
      key: '1',
      title: 'Java',
      percent: '85%',
      logo: <FaJava />
    },
    {
      key: '2',
      title: 'Python',
      percent: '80%',
      logo: <FaPython />
    },
    {
      key: '3',
      title: 'C++',
      percent: '70%',
      logo: <PiFileCppFill />

    },
    {
      key: '4',
      title: 'C',
      percent: '70%',
      logo: <strong>C</strong>
    },
    {
      key: '5',
      title: 'JavaScript',
      percent: '85%',
      logo: <IoLogoJavascript />
    }
  ]]
  const dataBaseSkills = [['Database', '85%'], [
    {
      key: '1',
      title: 'MySQL',
      percent: '90%',
      logo: <GrMysql />
    },
    {
      key: '2',
      title: 'PostGreSQL',
      percent: '80%',
      logo: <SiPostgresql />
    },
    {
      key: '3',
      title: 'Mongo DB',
      percent: '75%',
      logo: <SiMongodb />

    }
  ]]
  const appDevSkills = [['App Development', '70%'], [
    {
      key: '1',
      title: 'React Native JS',
      percent: '70%',
      logo: <IoLogoReact />
    },
    {
      key: '2',
      title: 'Java',
      percent: '70%',
      logo: <FaJava />
    }
  ]]
  const webDevskills = [['Web Development', '75%'], [
    {
      key: '1',
      title: 'HTML/CSS',
      percent: '80%',
      logo: <IoLogoHtml5 />
    },
    {
      key: '2',
      title: 'Javascript',
      percent: '75%',
      logo: <IoLogoJavascript />
    },
    {
      key: '3',
      title: 'React JS',
      percent: '70%',
      logo: <IoLogoReact />

    },
    {
      key: '4',
      title: 'Node JS',
      percent: '70%',
      logo: <FaNodeJs />
    },
    {
      key: '5',
      title: 'Express JS',
      percent: '70%',
      logo: <SiExpress />
    }
  ]]
  const allSkills = [
    {
      skills: webDevskills,
      key: '1'
    },
    {
      skills: progLanguageSkills,
      key: '2'
    },
    {
      skills: dataBaseSkills,
      key: '3'
    },
    {
      skills: dataScienceSkills,
      key: '4'
    },
    {
      skills: appDevSkills,
      key: '5'
    }

  ]
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div id='MySkills'>
      <Heading content='Skills' />
      <div className='skills-content' data-aos='fade-right' data-aos-duration='1000'>
        {
          allSkills.map((allSkills) => {
            return <SkillDesc key={allSkills.key} title={allSkills.skills[0][0]} percent={allSkills.skills[0][1]} skills={allSkills.skills[1]} />
          })
        }
        {/* <SkillDesc title={webDevskills[0][0]} percent={webDevskills[0][1]} skills={webDevskills[1]} />
        <SkillDesc title={webDevskills[0][0]} percent={webDevskills[0][1]} skills={webDevskills[1]} /> */}
        {/* <SkillDesc /> */}
      </div>
    </div>
  )
}

export default Skills
