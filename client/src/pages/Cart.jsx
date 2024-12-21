/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets/frontend_assets/assets';

const Cart = () => {

  const {products, currency, cartItems, updateQuantity} = useContext(ShopContext);  
  
  const [cartData, setCartData] = useState([]);

  useEffect(()=> {
   const tempData = [];
   for(const items in cartItems){
    for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
           tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
           })
        }
    }
   }
   //console.log(tempData);
   setCartData(tempData);
  }, [cartItems])
  return (
    <div className='border-t pt-14'>
     <div className='text-2xl mb-3'>
      <Title text1={'YOUR'} text2={'CART'}/>
     </div>
     <div className=''>
      {
        cartData.map((item, index)=> {
            const productData = products.find((product)=> product._id === item._id);
            return (
                <div key={index} className='py-5 border-t border-b text-cyan-900 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-7'>
                   <img src={productData.image[0]} alt="" className='w-18 h-20 sm:w-22'/>
                   <div>
                    <p className='text-xs sm:text-lg font-bold text-cyan-800'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-3'>
                     <p className='text-cyan-600 font-bold'>{currency}{productData.price}</p>
                     <p className='px-2 sm:px-3 sm:py-1 border-2px text-cyan-950 rounded-lg bg-yellow-200'>{item.size}</p>  
                    </div>
                   </div>
                  </div>
                   <input type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'/>
                  <img src={assets.bin_icon} onClick={()=> updateQuantity(item._id)} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
                </div>
            )
        })
      }
     </div>
    </div>
  )
}

export default Cart