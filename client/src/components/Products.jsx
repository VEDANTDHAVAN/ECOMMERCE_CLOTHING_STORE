/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
const Products = ({id,image,name,price}) => {
  
  const {currency} = useContext(ShopContext);
    return (
     <Link className='text-gray-600 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
       <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        <p className='pt-3 pb-2 text-sm'>{name}</p>
        <p className='text-sm font-semibold'>{currency}{price}</p>
      </div>
     </Link>   
    )
}

export default Products