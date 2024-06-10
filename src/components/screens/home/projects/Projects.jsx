import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper'
import 'swiper/scss'
import { projects } from '@/data'
import s from './Projects.module.scss'
import Project from './Project'
import Heading from '@/components/UI/Heading'

const Projects = () => {
   return (
      <div className={s.projects}>
         <Heading>Projects</Heading>
         <Swiper
            breakpoints={{
               320: {
                  slidesPerView: 1.3,
                  spaceBetween: 24,
               },
               768: {
                  slidesPerGroup: 2,
                  slidesPerView: 2.3,
                  spaceBetween: 28,
               },
               1024: {
                  slidesPerGroup: 2,
                  slidesPerView: 3.3,
                  spaceBetween: 32,
               },
            }}
            spaceBetween={24}
            slidesPerView={1.3}
            slidesPerGroup={1}
            modules={[Keyboard]}
            keyboard={{ enabled: true }}
         >
            {projects.map(el => (
               <SwiperSlide key={el.title}>
                  <Project title={el.title} img={el.img} url={el.url} desc={el.desc} info={el.info} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default Projects
