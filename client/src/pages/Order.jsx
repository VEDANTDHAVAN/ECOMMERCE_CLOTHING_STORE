/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Order = () => {
  const {products, currency, } = useContext(ShopContext);

  return (
    <div className='border-t pt-14'>
     <div className='text-3xl'>
      <Title text1={'MY'} text2={'ORDERS'}/>
     </div>
     {/* Orders Data */} 
     <div >
       {
        products.slice(1,4).map((item, index) => (
          <div key={index} className='py-5 px-1 border-t border-b text-cyan-800 flex flex-col md:flex-row md:items-center md:justify-between gap-5'>
           <div className='flex items-start gap-6 text-sm'>
            <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
            <div>
              <p className='text-cyan-800 font-bold'>{item.name}</p>
             <div className='flex items-center gap-4 mt-2 text-base'>
              <p className='text-cyan-900'>{currency}{item.price}</p>
              <p>Quantity: 1</p>
              <p>Size: M</p>
             </div>
             <p>Date: <span className='text-cyan-500'>25, July,2024</span></p>
            </div>
           </div>
           <div className='md:w-1/2 flex justify-between'>
            <div className='flex items-center gap-3'>
             <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
             <p className='text-sm font-extrabold text-blue-600'>Ready to Ship</p>
            </div>
            <button className='px-4 py-2 text-sm font-bold bg-yellow-200 hover:bg-orange-600 hover:text-white'>Track Order</button>
           </div>
          </div>
        ))
       }
     </div>
    </div>
  )
}

export default Order