/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
  const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);
    
  return (
    <div  className='w-full'>
     <div className='text-3xl border-2 max-w-96'>
      <Title text1={'CART'} text2={'TOTALS'}/>
      
     <div className='flex flex-col gap-3 mt-3 text-lg font-bold'>
      <div className='flex justify-between'>
       <p className='text-cyan-900'>SubTotal =</p>
       <p className='text-cyan-900'>{currency} {getCartAmount()}.00 /-</p>
      </div>
      <hr />
      <div className='flex justify-between'>
       <p className='text-cyan-900'>Shipping Charges = </p>
       <p className='text-cyan-900'> {currency} {delivery_fee}.00 /-</p>
      </div>
      <br />
      <div className='flex justify-between'>
       <b className='text-cyan-900'>Total =</b>
       <b className='text-cyan-900'>{currency} {getCartAmount() === 0? 0 : getCartAmount() + delivery_fee}.00 /- </b>
      </div>
     </div>
    </div>   
    </div>
  )
}

export default CartTotal