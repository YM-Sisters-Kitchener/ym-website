import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Mailinglist = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const axiosPostData = async() => {
    const postData = {
      email: email
    }
    await axios.post('http://localhost:4000/mail', postData)
    .then(res=>setError(<p className='font-lexend text-lg text-green-500'>{res.data}</p>))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email) {
      setError(<p className='font-lexend text-lg text-red-500'>Please enter a valid email. </p>)
    } else {
      setError('');
      axiosPostData();
    }
  }
  return (
    <div className='px-9 py-4  bg-yellow-50 flex justify-around '>
        
        <div className='  text-ym-purple font-lexend  py-3 px-4  '>
            <h2 className='font-bold text-2xl'>JOIN OUR MAILING LIST</h2>
            <p>By signing up you agree to receive emails from kitchener@ymsisters.org</p>
        </div>
        <div className='font-lexend text-xl '>
            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="example@gmail.com"className='rounded px-6 py-4 '></input>
            <button type="submit"  onClick={handleSubmit} className='font-bold px-6 py-4 inline-block rounded bg-ym-purple text-neutral-50 hover:bg-ym-purple-dark focus:outline-none focus:ring focus:ring-violet-600'>SUBMIT</button>
        </div>
        <div>
          {error}
        </div>
    </div>
  )
}

export default Mailinglist