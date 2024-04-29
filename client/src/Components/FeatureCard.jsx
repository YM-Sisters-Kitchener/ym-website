import React from 'react'
import ihm1 from '.././assets/images/ihm1.jpg';


const FeatureCard = ({title, p1,p2,p3, image, link}) => {
  return (
    <div className='m-3.5 px-6 rounded py-8 relative  overflow-hidden  '>
        
    <div className=' absolute inset-0 bg-ym-purple-dark opacity-80 z-10 '></div>

        <div
        className='absolute inset-0 bg-cover bg-center blur-sm'
        style={{ backgroundImage: `url(${ihm1})`, zIndex: 1 }}
        ></div>
    
    {/* Content */}
    <div className=' px-4 font-lexend drop-shadow-2xl grid grid-cols-1 gap-5 justify-center items-center relative z-10 '>
    <h1 className='uppercase text-center font-bold text-3xl text-ym-yellow py-4'>{title}</h1>
    <p className='text-center  text-lg text-neutral-50 py-4'>{p1}</p>
    <p className='text-center  text-lg text-neutral-50 py-4'>{p2}</p>
    <p className='text-center  text-lg text-neutral-50 py-4'>{p3}</p>
    <a className='text-center transition delay-100 duration-300 ease-in-out font-bold px-6 py-4 inline-block rounded bg-ym-yellow text-ym-purple hover:bg-neutral-50 focus:outline-none focus:ring focus:ring-violet-600' href={link}><button className=''>FORM LINK</button></a>
    </div>
</div>

  )
}

export default FeatureCard