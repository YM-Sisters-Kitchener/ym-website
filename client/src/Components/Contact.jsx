import instagram from '../assets/icon/instagram (2).png';
import whatsapp from '../assets/icon/whatsapp (2).png';
import facebook from '../assets/icon/facebook.png';
import discord from '../assets/icon/discord.png'
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('')

    const axiosPostData = async() => {
        const postData = {
            first: first,
            last: last,
            email: email,
            message: message
        }
        await axios.post('http://localhost:4000/contact', postData)
        .then(res => setError(<p className='font-lexend text-lg text-green-500'>{res.data}</p>))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!message) {
            setError(<p className='font-lexend py-2 font-lg text-red-600'> Message is empty. Please type a message.</p>)
        } else {
           // console.log(first + " " + last + " " + email + " " + message)
             setError('')
             axiosPostData()
        }
       // setError('')
        
        
    }
    return (
    <div className="padding bg-ym-purple-dark font-lexend text-neutral-50 flex flex-row" >
        <div className="font-lexend">
            <h1 className=" m-10 font-bold text-ym-yellow text-3xl">CONTACT US</h1>
            <p className="m-10 text-lg">Got any questions, comments, or collab ideas?
            Fill in this form or reach us by email:
                kitchener@ymsisters.org</p>

            <p className="text-lg m-10">Follow us on social media: </p>
            <div className='mx-4 flex flex-row px-4'>
                <a href="https://www.instagram.com/ym.s_kitchener/"><img src={instagram} className='p-2 cursor-pointer'/> </a>
                <a href='https://chat.whatsapp.com/JULe1nHcJiM3HaSW6umvqL'><img src={whatsapp} className='p-2 cursor-pointer'/></a>
                <a href='https://m.facebook.com/ymsisterskitchener/'><img src={facebook} className='p-2 cursor-pointer'/></a>
                <a href='https://discord.com/invite/9cPx6HaH8g'><img src={discord} className='p-2 cursor-pointer' /></a>
               
                
            </div>
            <p className="m-10">Made with  &#x2665; from YM Sisters Kitchener. 	&copy; 2024</p>
        </div>
        <div>
            <form>
                <div className="text-lg">
                    <div className="flex flex-row px-4 py-4 ">

                        <div className="">
                            <label>First Name:</label>
                            <input placeholder="" value={first} onChange={ (e)=> setFirst(e.target.value)} className='rounded px-3 py-2 my-2 text-ym-purple-dark'/>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input placeholder="" value={last} onChange={(e)=> setLast(e.target.value)} className='rounded px-3 py-2 my-2 text-ym-purple-dark'/>
                        </div>
                </div>
                <div className=" flex flex-col px-4 py-4 my-2">
                    <label>Email:</label>
                    <input placeholder="example@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}   className='rounded px-6 py-3 my-2 text-ym-purple-dark'/>
                </div>
                <div className="flex flex-col px-4 py-4">
                    <label>Message:</label>
                    <textarea placeholder="Type your message here." value={message} onChange={(e)=>setMessage(e.target.value)} className='rounded px-6 py-8 my-2 text-ym-purple-dark' />
                </div>
                <div className=" px-4 py-4">
                    {error}
                    <button  type="submit" onClick={handleSubmit} className="transition delay-100 duration-300 ease-in-out px-6 py-6 bg-ym-yellow font-bold text-ym-purple rounded hover:bg-neutral-50">SUBMIT</button>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact