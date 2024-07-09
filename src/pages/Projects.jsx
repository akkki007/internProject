import React from 'react'
import Project from '../components/Project'
import currency from '/currConvo.png'
import CurrencyCon from './CurrencyCon'
import erp from '/erp.png'
const Projects = () => {
  return (
    <div className='w-[90%] h-auto flex flex-shrink gap-3 bg-sky-400 mx-16 p-10 rounded-xl'>
    <Project title="Currency Convertor" imgSrc ={currency} dest ="/currencyconvertor"/>
    <Project title="ERP system" imgSrc={erp} dest="/inseed"/>
    </div>
  )
}

export default Projects
