/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Products from './Products';

const BestSeller = () => {
  const { products } = useContext(ShopContext); // Access products from context
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
      const bestProduct = products.filter((item) => (item.bestseller)); // Filter best sellers
      if (products && products.length > 0) {
        setBestSeller(bestProduct.slice(0,5));                          
      }
  }, [products])

  return (
    <div className="my-10">
      <div className="text-center text-4xl py-10">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-800">
          Discover the favorites our customers can&apos;t stop talking about! Our Best Sellers collection showcases the
          most loved and sought-after pieces from Fabric Fusion. Designed with impeccable craftsmanship and premium-quality
          fabrics, these styles have earned their spot at the top. From timeless classics to trendsetting designs, these
          bestsellers are a testament to our commitment to elegance and comfort. Elevate your wardrobe with the pieces
          everyone adores and see why they&apos;re the talk of the fashion world!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4">
        {/* Render Best Sellers */}
        {bestSeller.map((item,index)=> ( 
          <Products 
            key={index} 
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
         />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
