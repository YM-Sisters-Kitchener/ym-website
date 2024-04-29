import React from 'react'
import muslimgirl from '../assets/images/muslim-girls.jpg'
import {FeatureCard} from '../Components'

const Volunteer = () => {
  return (
<div className=''>
    <div>
          <div className='padding relative'>
            <div className='absolute inset-0 bg-ym-purple opacity-75'></div>
            <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${muslimgirl})`, zIndex:-2 }}
      ></div>
            <div className='drop-shadow-2xl grid grid-cols-1 gap-5 justify-center items-center relative z-10'>

              <h1 className='uppercase drop-shadow-2xl text-center text-ym-yellow font-lexend font-bold text-4xl py-8'>Get involved</h1>
              <h1 className='uppercase drop-shadow-2xl text-center text-neutral-50 font-lexend font-bold text-xl py-8'>We are always looking for new members and volunteers to join our team</h1>
            </div>

            
        </div>
      </div >
        <div className='bg-yellow-50 my-4 p-6 font-lexend text-ym-purple text-lg'>
          <h2>Interested in joining YM? Join our team! Please note that all applicants must be a declared Muslim, and must be females between the age of 14-27. </h2>
        </div>
           <div className='flex flex-row'>
            
              <div className='w-1/2'>
              <FeatureCard title={"BECOME A MEMBER"} p1={"- Financial contribution required (based on capacity) in the form of a donation."}  p2={"- Can vote in elections and can be voted for executive positions at the local, regional, and national levels."} p3={"- Will gain extra skills in leadership, creativity, teamwork, time management, and much more "} img={""} link={'https://docs.google.com/forms/d/e/1FAIpQLSc5NGlowKzyZnjRVWZjeC1ORxFhjT67vuCfyF1AiF78g70xHg/viewform'} />

              </div>
              <div className='w-1/2'>
              <FeatureCard  title={"BECOME A VOLUNTEER "} p1={" - To claim volunteer hours or certificate for official purposes, a volunteer commitment of 20 hours within 6 consecutive months is required​."}  p2={"- Anyone who wants to connect with MYN in any capacity can join MYN as volunteers"} p3={"- All volunteer hours will be tracked and recorded by local MYN executive teams​."} img={""} link={"https://docs.google.com/forms/d/e/1FAIpQLSfTRCSoUrhtxNZZwtqpdkN5ktrYbbNRua-eiaXfAENkJXZahw/viewform"}  />

              </div>
           </div>
           <div className='padding'>
            <p className='font-lexend text-lg text-ym-purple'>Drop your form off to us at one of our meetings, or send an email to kitchener@ymsisters.org with your completed volunteer form. </p>
           </div>
  </div>
  )
}

export default Volunteer