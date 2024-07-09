import React from 'react'
import { Link } from 'react-router-dom'
const   Navbar = () => {
  return (
    <div className='text-white h-16 w-[90vw] mx-16 my-5 bg-zinc-900 shadow-sm rounded-3xl shadow-white'>
      <nav>
        <ul className='flex gap-96 p-4 font-semibold text-white text-xl justify-center h-fit w-fit'>
          <h1 className='text-4xl mx-16 h-fit w-fit font-extrabold transition ease-in-out delay-100 -my-1 cursor-pointer text-white hover:text-yellow-500'>Intern</h1>
          <div className='flex gap-6 h-fit w-fit -mx-40 '>
            <li className='hover:text-yellow-500'>
             <Link to = "/">Home</Link>
              </li>
            <li className='hover:text-yellow-500'>
              <Link to = "/about">About</Link>
              </li>
            <li className='hover:text-yellow-500'>
              <Link to="/contact">Contact</Link>
            </li>
            <li className='hover:text-yellow-500'>
              <Link to="/projects">Projects</Link>
              </li>
              <li className='hover:text-yellow-500'>
              <Link to="/register">Registration</Link>
              </li>
            </div>
            <button className='mx-16 my-[-0.9px] w-24 h-9 bg-white rounded-2xl text-black hover:scale-110 hover:bg-yellow-500 transition'><Link to={"/login"}>Login</Link></button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
