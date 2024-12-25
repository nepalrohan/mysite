// import React from 'react'
import  { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast('Message sent successfully');
const Contact = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const [message, setMessage] = useState('');

  const handleSubmit =(e)=>{
e.preventDefault();
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId= import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;


const templateParams = {
from_name:name,
to_name:email,
message:message,

}

emailjs.send(serviceId, templateId, templateParams, publicKey)
.then((response)=>{
  // console.log(response);
  notify();
  setName('');
  setEmail('');
  setMessage('');
}).catch((error)=>{
  console.error('Error sending mail', + error);
})
  }


  return (
    <div className='flex flex-col mt-4 items-center justify-center mb-7'>
<h2 className='text-slate-900 text-2xl font-bold mx-auto   mb-7'>Contact Me</h2>
<form  onSubmit={handleSubmit}  className='flex flex-col gap-2  shadow-md p-2.5 sm:p-5 shadow-black'>

  <div className='flex gap-5'>
    <div className='flex flex-col gap-1'>
    <label className='text-lg font-semibold text-orange-400'>Fullname:</label>
    <input type='text' value={name} 
    onChange={(e)=>setName(e.target.value)} 
    placeholder='Enter your fullname' className='outline-none border-slate-800 border p-0.5 rounded-md' required />
    </div>

    <div className='flex  flex-col gap-1'>
    <label className='text-lg font-semibold text-orange-400' >Email:</label>
    <input type='email'
    value={email} 
    onChange={(e)=>setEmail(e.target.value)} 
    className='outline-none p-0.5 rounded-md border-slate-800 border' placeholder='Enter your email' required />
    </div>

    </div>

    <div className='flex flex-col gap-3'>
    <label className='text-lg font-semibold text-orange-400'>Message:</label>
    <textarea placeholder='Write your message here'
    value={message} 
    onChange={(e)=>setMessage(e.target.value)} 
    className='p-2 outline-none border border-slate-800 rounded-md' rows='6' required />

    </div>


    <button type='submit'  className='text-gray-200 font-bold text-xl bg-slate-700 px-8 py-2 mt-7 rounded-md hover:bg-slate-800'> Send</button>
    <Toaster
  toastOptions={{
    className: '',
    style: {
      position: 'bottom-right',
      borderRadius: '5px',
      maxWidth: '300px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: '1px solid #713200',
      padding: '16px',
      color: 'white',
      backgroundColor:'#008000'
    },
  }}
/>
  
</form>
    </div>
  )
}

export default Contact