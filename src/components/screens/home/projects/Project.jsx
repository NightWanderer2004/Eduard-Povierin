import Image from 'next/image'
import s from './Projects.module.scss'

const Project = ({ title, img, url, desc }) => {
   return (
      <li className={`${s.project}`}>
         <a href={url} target='_blank'>
            <Image src={img} alt={title} width='828' height='1438' />
            <p>{desc}</p>
         </a>
      </li>
   )
}

export default Project
