/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
const Hero = () => {
  return (
    <>
    <div className='flex flex-col border border-gray-500 sm:flex-row'>
     {/* Hero for left */}
     <div className='flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0'>
      <div className='text-gray-800'>
       <div className='flex items-center gap-3'>
        <p className='w-8 md:w-11 h-[2px] bg-gray-800'></p>
        <p className='text-sm font-bold  md:text-base'>OUR BESTSELLERS</p>
       </div>
       <h1 className='text-3xl font-extrabold leading-relaxed prata-regular sm:py-3 lg:text-5xl'>Latest Arrivals</h1>
       <div className='flex items-center gap-2'>
        <p className='text-sm font-semibold md:text-base '>SHOP NOW</p>
        <p className='w-8 md:w-11 h-[2px] bg-gray-800'></p>
       </div>
      </div>
     </div>
     {/*Hero for Right */}
     <img src={assets.hero_img} className='w-full sm:w-1/2 ' alt="" />
    </div>
    
    </>
  )
}

export default Hero