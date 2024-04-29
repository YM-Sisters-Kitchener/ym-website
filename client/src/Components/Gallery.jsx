import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Gallery = () => {
  return (
    <div className=' bg-ym-purple padding'>
        <div className=''>
            <div className='flex flex-col items-center '>
                <h1 className='font-lexend font-bold uppercase text-ym-yellow text-4xl'>LATEST NEWS</h1>
            </div>

            <div className='flex flex-row m-4'>
                  <InstagramEmbed className='mx-6' url="https://www.instagram.com/p/C5lXLmNu0_R/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                  <InstagramEmbed className='mx-6'  url="https://www.instagram.com/p/C5TO0WFAoGS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                  <InstagramEmbed className='mx-6' url="https://www.instagram.com/p/C4YQqHGu9e3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                 <InstagramEmbed className='mx-6' url="https://www.instagram.com/p/C4L_nwCJ9C8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
            </div>
            <div className=' flex items-center font-lexend text-neutral-50 text-2xl'>
               <p>Follow us on social media!</p>
               <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
         </div>
        </div>
    </div>
  )
}

export default Gallery