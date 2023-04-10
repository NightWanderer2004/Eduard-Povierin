import React from 'react'
import Timeline from './timeline/Timeline'
import Projects from '../home/projects/Projects'
import s from './Works.module.scss'

const Works = () => {
   return (
      <div className={s.works}>
         <Timeline />
         <Projects />
      </div>
   )
}

export default Works
