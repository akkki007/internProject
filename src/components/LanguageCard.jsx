import React from 'react'

const LanguageCard = (props) => {
  return (
    <div className='text-zinc-900 bg-white h-[350px] w-[300px] rounded-lg hover:bg-yellow-500 transition hover:scale-110'>
      <img src={props.image} alt="html" className='mx-20 w-32 my-10'/>
      <h1 className='text-center text-lg font-bold'>{props.title}</h1>
      <p className='text-center pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi velit, quas sint provident suscipit mollitia beatae eos a? Harum.</p>
    </div>
  )
}

export default LanguageCard
