import React from 'react'
import logo from '../assets/icon/KITCHENER.png';
import {Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='bg-ym-purple-dark px-12 py-4 flex justify-between items-center flex-row'>
        <div className='px-4 py-1'>
            <img className= 'cursor-pointer h-20 w-20' src={logo}></img>
        </div>
        <div className=' text-2xl bg-ym-purple-dark text-neutral-50 font-bold font-lexend'>
            <ul className=' flex flex-row '>
            <Link to='/'>
            <li className='mx-2 transition delay-100 duration-300 ease-in-out cursor-pointer px-6 py-2 rounded hover:bg-ym-yellow hover:text-ym-purple'>HOME</li>
            </Link>
            <Link to='/Volunteer'>
            <li className='mx-2 transition delay-100 duration-300 ease-in-out cursor-pointer px-6 py-2 rounded hover:bg-ym-yellow hover:text-ym-purple'>GET INVOLVED</li>
            </Link>
            <Link to='/Resources'>
            <li className='mx-2 transition delay-100 duration-300 ease-in-out cursor-pointer px-6 py-2 rounded hover:bg-ym-yellow hover:text-ym-purple'>RESOURCES</li>
            </Link>
            <Link to='/Team'>
            <li className='mx-2 transition delay-100 duration-300 ease-in-out cursor-pointer px-6 py-2 rounded hover:bg-ym-yellow hover:text-ym-purple'>OUR TEAM</li>
            </Link>
                
            </ul>
        </div>
        <div className=''>
            <button className='transition delay-100 duration-300 ease-in-out font-bold px-6 py-4 inline-block rounded bg-ym-yellow text-ym-purple hover:bg-neutral-50 focus:outline-none focus:ring focus:ring-violet-600'>DONATE</button>
        </div>
    </div>
  )
}

export default Navbar