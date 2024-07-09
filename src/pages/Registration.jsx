import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Registration() {
  const [form,setForm] = useState({});
  const [message,setMessage] = useState('');
  const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/registration', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
              'Content-Type': 'application/json',
          },
      });
      const data = await response.json();
      if (response.ok) {
          setMessage('Registration successful!');
      } 
  } catch (error) {
      setMessage('An error occurred. Please try again.');
  }
  }

  return (
    <div>
      <div className='flex flex-col gap-1 bg-zinc-800 min-h-[85vh] w-[30vw] mx-[540px] text-white rounded-xl'>
        <h1 className='font-bold text-3xl mx-[170px] my-4 '>Register</h1>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label className='mx-16 text-lg'>Enter your name :</label>
        <input onChange={handleForm}  placeholder='Enter your full name' className='border rounded-lg border-black w-80 h-10 placeholder:pl-2 mx-16 text-black' type="text" name='username' /><br />
        <label className='mx-16 text-lg'>Enter your enrollment no :</label>
         <input onChange={handleForm} type="text" name='enrollment' placeholder='Only digits allowed' className='border rounded-lg text-black border-black w-80 h-10 placeholder:pl-2 mx-16' /><br />
        <label className='mx-16 text-lg'>Enter your local address :</label>
        <input onChange={handleForm} type="text" name='address' placeholder='Enter your full address' className='border rounded-lg text-black border-black w-80 h-10 placeholder:pl-2 mx-16' /><br />
        <label className='mx-16 text-lg'>Enter a new password</label>
        <input onChange={handleForm} type="text"  name='password' placeholder='Enter your full address' className='border rounded-lg text-black border-black w-80 h-10 placeholder:pl-2 mx-16' /><br />
        <label className='mx-16 text-lg'>Re-nter your password :</label>
        <input type="text" placeholder='Enter your full address' className='border rounded-lg text-black border-black w-80 h-10 placeholder:pl-2 mx-16' />
        <button type='submit' className='border border-white rounded-md h-fit w-fit mx-32 my-10  text-white px-5 py-2 hover:bg-white hover:text-zinc-900 hover:transition-all'>Register</button>
        <button className='text-white border px-5 py-2 my-[-82px] mx-64 border-b-2 w-fit border-white rounded-md hover:bg-white hover:text-zinc-900 hover:transition-all'><Link to="/login">Login</Link></button>
      </form>
      {message && <p className='text-center mt-4'>{message}</p>} {/* Conditionally render the message */}
      </div>
    </div>
  )
}

export default Registration
