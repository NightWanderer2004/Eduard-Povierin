import '@/styles/global.css'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

export default function App({ Component, pageProps }) {
   return (
      <>
         <ShaderGradientCanvas
            importedfiber={{ ...fiber, ...drei, ...reactSpring }}
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
               urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.4&cAzimuthAngle=170&cDistance=4.2&cPolarAngle=70&cameraZoom=1&color1=%235996DD&color2=%238DB8EB&color3=%2375A7E5&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=40&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=disabled&rangeEnd=39.5&rangeStart=2.4&reflection=0.5&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=0.9&uFrequency=0&uSpeed=0.33&uStrength=2.3&uTime=2.4&wireframe=false&zoomOut=false'
            />
         </ShaderGradientCanvas>
         <Component {...pageProps} />
      </>
   )
}
