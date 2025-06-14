/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Products from './Products';

const LatestCollections = () => {
  const { products } = useContext(ShopContext); // Get products from context
  console.log(products);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(30, 40)); // Get the latest 10 products
    }
  }, [products]); // Add products as a dependency

  return (
    <div className="my-10">
      <div className="py-10 text-3xl text-center">
       <h1>
        <b>Fabric Fusion</b> is where timeless elegance meets modern flair.
       </h1>
       <br />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Our brand is dedicated to redefining fashion by blending premium fabrics with innovative designs. Each piece
          in our collection is crafted to celebrate individuality and style, ensuring you feel confident and comfortable
          every step of the way. At Fabric Fusion, we believe in creating fashion that not only looks good but feels
          good, offering a perfect fusion of quality, sustainability, and artistry. Discover the future of fashion with
          us.
        </p>
        <br />
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
      </div>
      {/* Render Products from UseContext */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5">
        {
        latestProducts.map((item, index) => (
          <Products
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;

