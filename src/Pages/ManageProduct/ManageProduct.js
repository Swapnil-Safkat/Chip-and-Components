import React from 'react';
import { TrashIcon } from '@heroicons/react/solid';
import serverLink from '../../serverLink';
import { useNavigate } from 'react-router-dom';

const ManageProduct = ({ product, handleDeleteItem }) => {
  const { _id, name, img, amount ,author} = product;
  const navigate = useNavigate();
  return (
    <div className='w-full bg-white rounded-lg lg:h-24 my-2 flex flex-col lg:flex-row items-center'>
      <div onClick={() => { navigate(`/item/${_id}`) }} className='h-full w-full lg:w-2/3 flex flex-col lg:flex-row items-center hover:cursor-pointer'>
        <div className='h-full p-2'>
          <img className='h-full' src={img} alt="" />
        </div>
        <div className='overflow-auto flex flex-col items-start'>
          <h1 className='text-lg text-center text-gray-800 font-mono truncate ... ml-4 font-semibold'>{name}</h1>
          <h1 className='text-sm text-center text-gray-600 font-mono truncate ... ml-4 font-semibold'>{author}</h1>
        </div>
      </div>
      <div className='h-full w-full lg:w-1/3 flex flex-col lg:flex-row justify-between items-center' >
        <h1 className='text-lg text-center font-mono font-semibold'>Stock: {amount} items</h1>
        <button onClick={() => { handleDeleteItem(_id, name) }
        } className='h-full px-6 py-3'><TrashIcon className='w-7 text-blue-800' /></button>
      </div>
    </div>
  );
};

export default ManageProduct;