/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
   const {productId} = useParams();
   console.log(productId);
   const {products, currency, addToCart} = useContext(ShopContext);
   const [productData, setProductData] = useState(false);
   const [image, setImage] = useState('');
   const [size, setSize] = useState('');

   const fetchProductData = async () => {
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        console.log(item);
        setImage(item.image[0]);
        return null;
      }
    })
   }

   useEffect(()=> {
    fetchProductData();
   }, [productId])
 
  return productData ? (
    <div className='border-t-4 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
         {/* Product Images */}
         <div className='flex flex-1 flex-col-reverse gap-4 sm:flex-row'>
          <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[20%] w-full'>
           {
            productData.image.map((item, index)=>(
              <img src={item} onClick={()=> setImage(item)} key={index} className='cursor-pointer p-2' alt="" />
            ))
           }
          </div>
          <div className='w-full  sm:w-[80%]'>
           <img src={image} className='w-full h-auto' alt="" />
          </div>
         </div>
          {/* Product Info */}
         <div className='flex-1 '>
           <h1 className='font-bold text-2xl mt-2'>{productData.name}</h1>
           <div className='flex items-center gap-1 mt-3'>
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5'/>
            <img src={assets.star_icon} alt="" className='w-3.5'/>
            <img src={assets.star_icon} alt="" className='w-3.5'/>
            <img src={assets.star_dull_icon} alt="" className='w-3.5'/>
            <p className='pl-2'>(343)</p>
           </div>
           <p className='mt-5 text-3xl flex font-bold text-cyan-500'>{currency}{productData.price}</p>
           <p className='mt-5 text-cyan-900 w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-5 my-6'>
           <p className='font-bold text-2xl sm:text-1xl text-cyan-900'>Select Size</p>
           <div className='flex gap-4'>
            {productData.sizes.map((item, index)=> (
              <button className={`border py-3 px-4 hover:bg-green-700 hover:text-white bg-yellow-200 ${item === size ? 'border-purple-900 border-2' : ''}`} onClick={()=> setSize(item)} key={index}>{item}</button>
            ))}
           </div>
          </div>
          <button onClick={()=> addToCart(productData._id, size)} className='bg-cyan-950 text-white px-6 py-3 text-sm active:bg-cyan-400'>ADD TO CART</button>
          <hr  className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-cyan-900 mt-5 flex flex-col gap-1'>
           <p>100% Original Product.</p>
           <p>Cash On Delivery is available on this Product.</p>
           <p>Easy Return and Exchange Policy within 7 days.</p>
          </div>
         </div>
      </div>
      {/* Description and Review */}
      
      <div className='mt-20'>
        <div className='flex'>
         <p className='border-2 px-5 py-3 text-sm text-black font-bold'>Description</p>
         <p className='border-2 px-5 py-3 text-sm text-black font-bold'>Reviews (233)</p>
        </div>
        <div className='flex flex-col gap-5 border px-5 py-5 text-sm text-cyan-900 font-semibold'>
          <p>Discover classic styles reimagined with a modern touch. These pieces are perfect for every occasion, offering a blend of sophistication and comfort that transcends trends. <br />Experience the luxury of high-quality materials that feel as good as they look. Each product is crafted with care, ensuring durability and lasting elegance.
           <br />Step into the future of fashion with cutting-edge designs that celebrate individuality and style. From bold patterns to subtle details, every piece tells a story.
          </p>
        </div>
      </div>
      {/* Related Products Displayed */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product