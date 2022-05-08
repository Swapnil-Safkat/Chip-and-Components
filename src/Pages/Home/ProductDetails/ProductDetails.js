import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {
  const { _id, name, img, details, amount, price } = product;
  const navigate = useNavigate();
  const navigateToItem = id => {
    navigate(`/item/${id}`);
  }
  return (
    <div className='w-full md:w-1/3 lg:w-1/4 bg-white  flex flex-col my-8 mx-2 justify-between items-start rounded-lg shadow-lg shadow-gray-600 text-gray-700'>
      <div className=' bg-white rounded-lg flex flex-col '>
        <img className='h-full w-full rounded-lg p-2' src={img} alt="" />
        <h1 className='text-2xl text-center font-mono  font-semibold'>{name}</h1>
      </div>
      <div className='px-4 py-2 mt-0 w-full flex flex-col justify-between'>
        <h1 className='text-sm font-semibold tracking-wide mt-3'>Price Per Piece: <span className='text-blue-900'>{price} Tk</span></h1>
        <h1 className='text-sm font-semibold tracking-wide  my-1'>Stock: <span className='text-blue-900'>{amount} Piece</span></h1>
        <button onClick={() => { navigateToItem(_id) }
        } className=' bg-zinc-500 hover:bg-zinc-800 text-gray-300 hover:text-white text-xs font-bold rounded-lg mt-2 py-1 px-2'>Show Details</button>
      </div>
    </div>
  );
};

export default ProductDetails;