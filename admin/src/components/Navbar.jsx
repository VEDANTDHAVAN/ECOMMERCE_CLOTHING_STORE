/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-[4%] justify-between'>
        <img className='w-[max(10%,80px)]' src="clothesLogo.png" alt="" />
       <button className='bg-cyan-800 font-bold text-white px-5 sm:px-7 py-2 sm:py-2 rounded-full text-xs sm:text-sm hover:text-black hover:bg-red-500'>Logout</button>
    </div>
  )
}

export default Navbar