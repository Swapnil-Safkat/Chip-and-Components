import React, { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products').then(res => res.json()).then(data => setProducts(data))
  }, [])

  return (
    <div className='h-full w-full p-2 sm:p-6 flex justify-center items-center'>
      <div className='bg-inventory p-2 sm:p-4 lg:p-12 rounded-3xl shadow-xl  shadow-gray-600 w-full h-full flex flex-col justify-start items-center'>
        <h1 className='w-full text-center font-semibold text-lg sm:text-3xl text-gray-100 mt-8 sm:mt-3'>Check Our Products</h1>
        <div className='w-full mt-6'>
          {
            products.map(product => <ProductDetails key={product._id} product={product}></ProductDetails>)
          }
        </div>
      </div>
    </div>
  );
};

export default Inventory;