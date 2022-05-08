import React, { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import serverLink from '../../../serverLink'
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `${serverLink()}products`;
    fetch(url).then(res => res.json()).then(data => setProducts(data))
  }, [])

  return (
    <div className='h-full w-full p-2 sm:p-6 flex justify-center items-center'>
      <div className='bg-inventory p-2 sm:p-4 lg:p-12 rounded-3xl shadow-xl  shadow-gray-600 w-full h-full flex flex-col justify-start items-center'>
        <h1 className='w-full text-center font-semibold text-lg sm:text-3xl text-gray-100 mt-8 sm:mt-3'>Check Our Products</h1>
        <div className='w-full mt-6 flex flex-wrap justify-around'>
          {
            products.map(product => <ProductDetails key={product._id} product={product}></ProductDetails>)
          }
        </div>
        <div className='w-full  flex justify-end'>
          <button onClick={() => { navigate('/manage-inventory') }
          } className='bg-violet-800 hover:text-blue-900 font-bold shadow-lg rounded-lg my-4 p-1 px-6 text-gray-100 hover:bg-gray-100 hover:cursor-pointer'>Manage Inventory</button>
        </div>  </div>
    </div>
  );
};

export default Inventory;