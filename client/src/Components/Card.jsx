import React from 'react'
import ihm1 from '.././assets/images/ihm1.jpg';

const Card = ({title, description, image}) => {
  return (
    <div className='m-3.5 px-6 rounded py-8 relative  overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl'>
        
        <div className=' absolute inset-0 bg-ym-purple opacity-75 z-10 '></div>

            <div
            className='absolute inset-0 bg-cover bg-center '
            style={{ backgroundImage: `url(${image})`, zIndex: 1 }}
            ></div>
        
        {/* Content */}
        <div className=' px-4 font-lexend drop-shadow-2xl grid grid-cols-1 gap-5 justify-center items-center relative z-10 '>
        <h1 className='uppercase text-center font-bold text-3xl text-ym-yellow py-4'>{title}</h1>
        <p className='drop-shadow-lg text-center  text-lg text-neutral-50 py-4'>{description}</p>
        </div>
  </div>
 
  )
}

export default Card