/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollections = () => {

  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <div className='my-10'>
     <div className='text-center py-10 text-3xl'>
      <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
     </div>
    </div>
  )
}

export default LatestCollections