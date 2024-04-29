import React from 'react'

const Person = ({name, title, bio}) => {
  return (
    <div className='font-lexend flex flex-col items-start p-6 border-2 m-3'>
        <div className='text-3xl  font-bold border-b-4 rounded align-middle text-ym-purple'>
            <h1>{name}</h1>
            
        </div>
        <div className=''>
            <p className=' uppercase text-xl text-ym-purple'>{title}</p>
            <p className=''>{bio}</p>
        </div>
    </div>
  )
}

export default Person