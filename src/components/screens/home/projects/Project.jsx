import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import s from './Projects.module.scss'

const Project = ({ title, img, url, desc }) => {
   const [inView, setInView] = useState(false)
   const elemRef = useRef(null)

   const options = {
      rootMargin: '-70px',
      threshold: 0.4,
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
      <li ref={elemRef} className={`${s.project} ${inView ? s.inView : ''}`}>
         <Image src={img} alt={title} width='828' height='1438' />
         <a href={url} className={s.backdrop}>
            <p className={s.description}>{desc}</p>
            <p className={s.visit}>visit</p>
         </a>
      </li>
   )
}

export default Project
