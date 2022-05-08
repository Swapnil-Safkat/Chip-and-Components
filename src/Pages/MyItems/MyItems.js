import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import serverLink from '../../serverLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import ProductDetails from '../Home/ProductDetails/ProductDetails';


const MyItems = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    const url = `${serverLink()}product`;
    fetch(url).then(res => res.json()).then(data => {
      const userItems = data.filter(i => i.email === user.email);
      console.log(userItems);
      setProducts(userItems)
    })
  }, [])

  const handleDeleteItem = (id, name) => {
    const proceed = window.confirm(`Want to remove item ${name}`);
    if (proceed) {
      toast('Removed Item');
      fetch(`${serverLink()}item/${id}`, {
        method: 'DELETE'
      }).then(res => res.json)
        .then(data => {
          const remaining = products.filter(u => u._id !== id);
          setProducts(remaining);
        })
    } };
  return (
    <div className='h-full w-full p-2 sm:p-6 flex justify-center items-center'>
    <div className='bg-inventory p-2 sm:p-4 lg:p-12 rounded-3xl shadow-xl  shadow-gray-600 w-full h-full flex flex-col justify-start items-center'>
      <h1 className='w-full text-center font-semibold text-lg sm:text-3xl text-gray-100 mt-8 sm:mt-3'>My Items</h1>
      <div className='w-full  flex justify-end'>
        <button onClick={() => { navigate('/add-items') }
        } className='bg-violet-800 hover:text-blue-900 font-bold shadow-lg rounded-lg my-4 p-1 px-6 text-gray-100 hover:bg-gray-100 hover:cursor-pointer'>Add Items</button>
      </div>
      <div className='w-full mt-6 flex flex-wrap justify-around'>
        {
          products.map(product => <ProductDetails key={product._id} product={product} handleDeleteItem={handleDeleteItem}></ProductDetails>)
        }
      </div>
      <ToastContainer />
    </div>
  </div>
  );
};

export default MyItems;