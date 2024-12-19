/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets/frontend_assets/assets';
import Title from '../components/Title';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [filter, setFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
       <p onClick={()=> setFilter(!filter)} className='text-cyan-900 border pl-6 w-40 bg-cyan-200 hover:bg-purple-500 hover:text-white rounded-lg text-center font-extrabold my-2 text-2xl flex items-center cursor-pointer gap-3'>FILTERS</p>
      {/* Category Filter */}
       <div className={`border bg-cyan-100 border-gray-700 pl-6 py-4 mt-6 ${filter ? '': 'hidden'} sm:block` }>
        <p className='mb-3 text-sm font-medium text-cyan-800'>CATEGORIES</p>
         <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${filter ? 'rotate-90': ''} `} alt="" />
         <div className='flex flex-col gap-2 text-sm font-bold text-cyan-700'>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Men'}/>Men
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Women'}/>Women
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Kids'}/>Kids
          </p>
         </div>
       </div>
       {/* SubCategory Filter */}
       <div className={`border bg-yellow-100 border-gray-700 pl-6 py-4 mt-6 ${filter ? '': 'hidden'} sm:block` }>
        <p className='mb-3 text-sm font-medium text-cyan-800'>TYPES</p>
         <div className='flex flex-col gap-2 text-sm font-bold text-cyan-700'>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Topwear'}/>Top Wear
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Bottomwear'}/>Bottom Wear
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Winterwear'}/>Winter Wear
          </p>
         </div>
       </div>
      </div>
      {/* Right Side Images*/}
      <div className='flex-1'>
       <div className='flex justify-between text-base sm:text-3xl mb-4'>
        <Title text1={'ALL'} text2={'COLLECTIONS'}/>
        {/* Sort Products */}
         <select className='border-2 bg-cyan-200 text-sm px-3'>
          <option value="relevant">Sort by: Relevance</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
         </select>
       </div>
      </div>
    </div>
  )
}

export default Collection