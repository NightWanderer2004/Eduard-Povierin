import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Meta from '../seo/Meta'

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
         <div className={`app flex flex-col min-h-screen overflow-hidden bg-background ${isDarkMode ? 'dark' : ''}`}>
            <Navbar />
            <div className='container mx-auto px-3 flex-1 mt-36 sm:mt-[190px] animate-fadeLeft'>{children}</div>
            <Footer />
         </div>
      </>
   )
}

export default Layout
