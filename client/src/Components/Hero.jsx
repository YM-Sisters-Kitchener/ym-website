import '../index.css';
import ihm1 from '.././assets/images/ihm1.jpg';
import zIndex from '@material-ui/core/styles/zIndex';
import { useState } from 'react';



const Hero = () => {


  return (
    <div className='padding relative'>
      <div className='absolute inset-0 bg-ym-purple opacity-85'></div>

      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${ihm1})`, zIndex: -1 }}
      ></div>
      
      {/* Content */}
      <div className='drop-shadow-2xl grid grid-cols-1 gap-5 justify-center items-center relative z-10'>
        <h1 className='text-center font-bold text-4xl text-neutral-50 py-8'>السلام عليكم </h1>
        <h1 className='drop-shadow-2xl text-center text-ym-yellow font-lexend font-bold text-4xl py-8'>YOUNG MUSLIMS (YM) SISTERS</h1>
        <h1 className='drop-shadow-2xl text-center font-lexend font-bold text-4xl text-neutral-50 py-8'>KITCHENER</h1>
      </div>
      
    </div>
  );
}

export default Hero;