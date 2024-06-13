import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Meta from '../seo/Meta'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
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
         <ShaderGradientCanvas
            importedFiber={{ ...fiber, ...drei, ...reactSpring }}
            style={{
               position: 'fixed',
               top: 0,
               zIndex: 1,
               pointerEvents: 'none',
            }}
         >
            <ShaderGradient
               control='query'
               enableTransition={false}
               urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.4&cAzimuthAngle=170&cDistance=4.2&cPolarAngle=70&cameraZoom=1&color1=%23a5b7f7&color2=%239caef3&color3=%238ba4eb&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=40&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=disabled&rangeEnd=39.5&rangeStart=2.4&reflection=0.5&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=0.9&uFrequency=0&uSpeed=0.33&uStrength=2.3&uTime=2.4&wireframe=false&zoomOut=false'
            />
         </ShaderGradientCanvas>
         <div className='bg-background min-h-screen w-screen fixed z-0 top-0 left-0'></div>
         <div className='app relative flex flex-col min-h-screen overflow-hidden'>
            <Navbar />
            <motion.main
               initial={{ opacity: 0.4, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.36, ease: 'backOut' }}
               className='container mx-auto px-3 flex-1 mt-36 sm:mt-[190px] z-10 relative'
            >
               {children}
            </motion.main>
            <Footer />
         </div>
      </>
   )
}

export default Layout
