import Hero from './hero/Hero'
import Projects from './projects/Projects'
import Skills from './skills/Skills'

const Home = () => {
   return (
      <>
         <Hero />
         <div className='[&>*>h2]:text-center flex flex-col gap-12'>
            <Projects />
            <Skills />
         </div>
      </>
   )
}

export default Home
