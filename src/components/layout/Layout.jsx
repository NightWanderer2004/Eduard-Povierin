import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Meta from '../seo/Meta'
import { motion } from 'framer-motion'

const Layout = ({ title, description, children }) => {
   const [isDarkMode, setIsDarkMode] = useState(false)

   useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const listener = e => setIsDarkMode(e.matches)

      mediaQuery.addEventListener('change', listener)
      setIsDarkMode(mediaQuery.matches)

      return () => mediaQuery.removeEventListener('change', listener)
   }, [])

   return (
      <>
         <Meta title={title} description={description} />
         <div className='bg-background min-h-screen w-screen fixed z-0 top-0 left-0'></div>
         <div className='app relative flex flex-col min-h-screen overflow-hidden'>
            <Navbar />
            <motion.main
               initial={{ opacity: 0.4, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.36, ease: 'backOut' }}
               className='container max-w-6xl mx-auto px-3 lg:px-0 flex-1 mt-36 mb-20 sm:mt-[120px] z-10 relative'
            >
               {children}
            </motion.main>
            <Footer />
         </div>
      </>
   )
}

export default Layout
