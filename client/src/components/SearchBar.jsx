/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(()=> {
     console.log(location);
      if(location.pathname.includes('/collection')){
        setVisible(true);
      }else {
        setVisible(false);
      }
    }, [location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-cyan-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-950 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
       <input type="text" placeholder='Search' value={search} onChange={(e)=> setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-lg'/>
       <img src={assets.search_icon} className='w-10 sm:w-5' alt="" />
      </div>
      <img onClick={()=> setShowSearch(false)} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt="" />
    </div>
  ) : null
}

export default SearchBar