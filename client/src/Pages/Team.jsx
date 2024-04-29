import React from 'react'
import {Person} from '../Components';
import mosque from '../assets/images/mosque.jpg'
//team info
const members = [
    {name: 'Razan Mohamed', title: 'Graphic Designer', bio:'Hi'},
    {name: 'Razan Mohamed', title: 'Graphic Designer', bio:'Hi'},
    {name: 'Razan Mohamed', title: 'Graphic Designer', bio: 'Hi'},
    {name: 'Razan Mohamed', title: 'Graphic Designer', bio: 'Hi'},
] 
const Team = () => {
  return (
    
         <div>
            <div className='padding relative'>
                <div className='absolute inset-0 bg-ym-purple opacity-70'></div>
                <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${mosque})`, zIndex: -1 }}></div>
                <div className='drop-shadow-2xl grid grid-cols-1 gap-5 justify-center items-center relative z-10'>
                <h1 className='uppercase drop-shadow-2xl text-center text-ym-yellow font-lexend font-bold text-4xl py-8'>MEET THE TEAM</h1>
                </div>
        </div>
       
       
        
        <div className='bg-yellow-50'  >
        <div className='bg-ym-purple m-12 rounded-lg'>
            <h1 className='uppercase p-4 text-ym-yellow text-center font-lexend font-bold text-3xl'>Advisory</h1>
        </div>
        <div className='flex flex-row'>
            {members.map(member=>(
                <Person key = {member.name} name = {member.name} title={member.title} bio={member.bio} />
            )
            )}
        </div>

        <div className='bg-ym-purple m-12 rounded-lg'>
            <h1 className='uppercase p-4  text-ym-yellow text-center font-lexend font-bold text-3xl'>Social Media</h1>
        </div>
        <div className='flex flex-row'>
            {members.map(member=>(
                <Person key = {member.name} name = {member.name} title={member.title} bio={member.bio} />
            )
            )}
        </div>

        <div className='bg-ym-purple m-12 rounded-lg'>
            <h1 className='uppercase p-4  text-ym-yellow text-center font-lexend font-bold text-3xl'>Events</h1>
        </div>
        <div className='flex flex-row'>
            {members.map(member=>(
                <Person key = {member.name} name = {member.name} title={member.title} bio={member.bio} />
            )
            )}
        </div>

        <div className='bg-ym-purple m-12 rounded-lg'>
            <h1 className='uppercase p-4 text-ym-yellow text-center font-lexend font-bold text-3xl'>General Members</h1>
        </div>
        <div className='flex flex-row'>
            {members.map(member=>(
                <Person key = {member.name} name = {member.name} title={member.title} bio={member.bio} />
            )
            )}
        </div>

    </div>
    </div>
  )
}

export default Team