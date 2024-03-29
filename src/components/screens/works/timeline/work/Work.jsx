import React, { useEffect, useRef, useState } from 'react'
import s from './Work.module.scss'

const Work = ({ el, index }) => {
   const [inView, setInView] = useState(false)
   const elemRef = useRef(null)

   const options = {
      rootMargin: '0px',
      threshold: 1,
   }

   useEffect(() => {
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            if (entry.isIntersecting) setInView(true)
            else setInView(false)
         })
      }, options)

      if (elemRef.current) observer.observe(elemRef.current)

      return () => {
         if (elemRef.current) observer.unobserve(elemRef.current)
      }
   }, [])

   return (
      <li ref={elemRef} className={`${s.item} ${inView ? s.inView : ''}`}>
         <div className={s.content} style={{ transitionDelay: `${index * 0.12}s` }}>
            <p className={s.company}>
               {el.title} {el.company ? `at ${el.company}` : ''}
            </p>
            <p className={s.date}>{el.date}</p>
            <p className={s.desc}>{el.desc}</p>
         </div>
      </li>
   )
}

export default Work
