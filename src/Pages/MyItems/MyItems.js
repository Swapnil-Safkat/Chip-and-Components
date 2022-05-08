import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import serverLink from '../../serverLink';
import ManageProduct from '../ManageProduct/ManageProduct';

const MyItems = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `${serverLink()}product`;
    fetch(url).then(res => res.json()).then(data => setProducts(data))
  }, []);
  
  return (
    <div className='h-full w-full p-2 sm:p-6 flex justify-center items-center'>
    <div className='bg-inventory p-2 sm:p-4 lg:p-12 rounded-3xl shadow-xl  shadow-gray-600 w-full h-full flex flex-col justify-start items-center'>
      <h1 className='w-full text-center font-semibold text-lg sm:text-3xl text-gray-100 mt-8 sm:mt-3'>Manage Inventory</h1>
      <div className='w-full  flex justify-end'>
        <button onClick={() => { navigate('/add-items') }
        } className='bg-violet-800 hover:text-blue-900 font-bold shadow-lg rounded-lg my-4 p-1 px-6 text-gray-100 hover:bg-gray-100 hover:cursor-pointer'>Add Items</button>
      </div>
      <div className='w-full mt-6 flex flex-col'>
        {
            products.map(product => <ManageProduct  key={product._id} product={product} handleDeleteItem={handleDeleteItem}></ManageProduct>)
        }
      </div>
      <ToastContainer />
    </div>
  </div>
  );
};

export default MyItems;