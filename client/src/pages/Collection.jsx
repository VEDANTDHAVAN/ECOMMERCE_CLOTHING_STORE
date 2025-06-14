/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import Products from '../components/Products';
import { use } from 'react';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filter, setFilter] = useState(false);
  const [filterProducts, setFilterProducts]= useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const toggleCategory = (e) => {
     if(category.includes(e.target.value)){
       setCategory(prev => prev.filter(item => item !==e.target.value))
     }else{
      setCategory(prev => [...prev, e.target.value])
     }
  }

  useEffect(()=> {
    console.log(category)
  }, [category])

  const toggleSubCategory = (e) => {
   if(subCategory.includes(e.target.value)){
    setSubCategory(prev => prev.filter(item => item!== e.target.value))
   }else{
    setSubCategory(prev => [...prev, e.target.value])
   }
  }

  useEffect(()=> {
    console.log(subCategory)
  },[subCategory])

  const applyFilter = () => {
   let productsCopy = products.slice();

   if(showSearch && search){
    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
   }
   if(category.length > 0){
    productsCopy = productsCopy.filter(item => category.includes(item.category));
   }

   if(subCategory.length > 0){
    productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
   }
   setFilterProducts(productsCopy)
  }

  useEffect(()=> {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  const sortProducts = () => {
    let filterProductsCopy = filterProducts.slice();
    switch(sortType){
      case 'low-high': 
       setFilterProducts(filterProductsCopy.sort((a,b)=> (a.price - b.price)));
       break;
      case 'high-low':
        setFilterProducts(filterProductsCopy.sort((a, b)=>(b.price - a.price)));
        break;
      default: 
        applyFilter();
        break;
    }
  }

  useEffect(()=> {
    sortProducts()
  }, [sortType])

  return (
    <>
    <div className='flex lg:flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
       <p onClick={()=> setFilter(!filter)} className='text-cyan-900 border pl-6 w-40 bg-cyan-200 hover:bg-purple-500 hover:text-white rounded-lg text-center font-extrabold my-2 text-2xl flex items-center cursor-pointer gap-3'>FILTERS</p>
      {/* Category Filter */}
       <div className={`border bg-cyan-100 border-gray-700 pl-6 py-4 mt-6 ${filter ? '': 'hidden'} sm:block` }>
        <p className='mb-3 text-sm font-medium text-cyan-800'>CATEGORIES</p>
         <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${filter ? 'rotate-90': ''} `} alt="" />
         <div className='flex flex-col gap-2 text-sm font-bold text-cyan-700'>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/>Men
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/>Women
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/>Kids
          </p>
         </div>
       </div>
       {/* SubCategory Filter */}
       <div className={`border bg-yellow-100 border-gray-700 pl-6 py-4 mt-6 ${filter ? '': 'hidden'} sm:block` }>
        <p className='mb-3 text-sm font-medium text-cyan-800'>TYPES</p>
         <div className='flex flex-col gap-2 text-sm font-bold text-cyan-700'>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory}/>Top Wear
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/>Bottom Wear
          </p>
          <p className='flex gap-2'>
            <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory}/>Winter Wear
          </p>
         </div>
       </div>
      </div>
    </div>
     {/* Right Side Images*/}
     <div className='flex-1'>
       <div className='flex justify-between text-base sm:text-3xl mb-4'>
        <Title text1={'ALL'} text2={'COLLECTIONS'}/>
        {/* Sort Products */}
         <select onChange={(e)=>setSortType(e.target.value)} className='border-2 hover:bg-yellow-100 bg-cyan-100 text-sm px-3'>
          <option value="relevant">Sort by: Relevance</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
         </select>
       </div>
       {/* Map the Prodducts */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5'>
         {
           filterProducts.map((item, index)=>(
            <Products
             key={index}
             name={item.name}
             id={item._id}
             price={item.price}
             image={item.image}
            />
           ))
         }
        </div>
      </div>
    </>
  )
}

export default Collection