import React from 'react'
import Card from './Card';
import workshop from '../assets/images/workshop.jpg'
import money from '../assets/images/money.jpg'
import park from '../assets/images/park.png'
import dawah from '../assets/images/dawah.png'
import halaqa from '../assets/images/halaqa.png'
import community from '../assets/images/community.jpg'
const Events = () => {
  return (
    <div className=' padding bg-yellow-50 -z-10 '>
        <div className=' flex flex-col py-6 items-center text-4xl font-bold font-lexend text-ym-purple'><h1>OUR ACTIVITIES</h1></div>
        <div className='grid grid-rows-2 grid-flow-col gap-4'>
            <Card title={"Workshops"} description={"We provide various workshops that are beneficial and enjoyable for our youth. Whether you want to gain leadership skills, get advice in career related fields, or learn some new and fun skills, our workshops provide this and more."} image={workshop}  />
            <Card title={"Halaqat"} description={"We provide a safe and fun environment for girls of all ages. Members and volunteers participate in halaqahs and discussion circles of various topics such as giving Da'wah, Muslim identity, mental health, solcial justice, and more."} image={halaqa} />
            <Card title={"Fundraisers"} description={"All profits and donations go towards our communities and towards making this organization possible for our youth. We raise funds for local Masjids by selling treat boxes and for national causes that affect Muslims worldwide."} image={money} />
            <Card title={"Community Involvement"} description={"Some activities we get involved in are food and clothing drives, making care packages for Women's shelters, volunteering for Homeless shelters, Back2School drives, Masjid clean-ups, and more."} image={community} />
            <Card title={"Dawah Projects"} description={"We guide our youth to living their day-to-day lives by the principles of Islam and to guide others on that path as well. Giving Da'wah at public booths on events such as World Hijab Day and more is an ongoing goal for our organization."} image={dawah} />
            <Card title={"Girl's Hangouts"} description={"We provide fun activities such as grand Eid parties, spa days, Arabic calligraphy sessions, cupcake and cookie decorating, ice skating trips, hiking, pottery painting, Iftar potlucks, henna nights, bowling, and much more."} image={park} />
        </div>
    </div>
  )
}

export default Events