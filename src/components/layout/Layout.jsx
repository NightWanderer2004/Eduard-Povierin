import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Meta from '../seo/Meta'

const Layout = ({ title, description, children }) => {
   return (
      <>
         <Meta title={title} description={description} />
         <div className='app flex flex-col min-h-screen overflow-hidden'>
            <Navbar />
            <div className='container mx-auto px-3 flex-1 mt-36 sm:mt-[190px]'>{children}</div>
            <Footer />
         </div>
      </>
   )
}

export default Layout
