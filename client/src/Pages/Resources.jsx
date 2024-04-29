import React from 'react'
import muslim from '../assets/images/muslim-girls.jpg'
const Resources = () => {
  return (
    
   <div>
         <div className='padding relative'>
            <div className='absolute inset-0 bg-ym-purple opacity-75'></div>
            <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${muslim})`, zIndex:-2 }}
      ></div>
            <div className='drop-shadow-2xl grid grid-cols-1 gap-5 justify-center items-center relative z-10'>

              <h1 className='uppercase drop-shadow-2xl text-center text-ym-yellow font-lexend font-bold text-4xl py-8'>Resources</h1>
              <h1 className='uppercase drop-shadow-2xl text-center text-neutral-50 font-lexend font-bold text-xl py-8'>COMING SOON!!</h1>
            </div>

   </div>
   </div>
  )
}

export default Resources