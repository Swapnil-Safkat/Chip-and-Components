import React, { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products').then(res => res.json()).then(data => setProducts(data))
  }, [])

  return (
    <div className='p-6'>
      <div className='bg-white p-10 rounded-3xl shadow-xl shadow-gray-700 h-full'>
        <h1 className='w-full text-center font-semibold text-3xl text-blue-900'>Check Our Products</h1>
        <div className='flex flex-wrap mt-6'>
          {
            products.map(product => <ProductDetails key={product._id} product={product}></ProductDetails>)
          }
        </div>
      </div>
    </div>
  );
};

export default Inventory;