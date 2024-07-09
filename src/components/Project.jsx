import React from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {
  return (
    <div className='bg-white rounded-xl p-4 flex flex-col items-center w-72 hover:scale-110 transition-all'>
        <img src={props.imgSrc} alt={props.title} className='w-28 pt-5' />
        <h1 className='mt-4 font-bold text-lg text-center'>{props.title}</h1>
        <Link to={props.dest} className='mt-3'>
          <p className='text-blue-700 cursor-pointer'>Learn more</p>
        </Link>
    </div>
  )
}

export default Project
