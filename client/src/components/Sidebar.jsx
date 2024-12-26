/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets/frontend_assets/assets'
const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink className='bg-white hover:bg-orange-300 flex items-center gap-3 border border-white px-3 py-2 border-r-0 rounded' to="/add">
           <img className='w-5 h-5' src={assets.add_icon} alt="" />
           <p className='hidden md:block hover:text-white'>Add Items</p>
        </NavLink> 
        <NavLink className='bg-white hover:bg-orange-300 flex items-center gap-3 border border-white px-3 py-2 border-r-0 rounded' to="/list">
           <img className='w-5 h-5' src={assets.order_icon} alt="" />
           <p className='hidden md:block hover:text-white'>List Items</p>
        </NavLink> 
        <NavLink className='bg-white hover:bg-orange-300 flex items-center gap-3 border border-white px-3 py-2 border-r-0 rounded' to="/orders">
           <img className='w-5 h-5' src={assets.parcel_icon} alt="" />
           <p className='hidden md:block hover:text-white'>Orders</p>
        </NavLink> 
      </div>  
    </div>
  )
}

export default Sidebar