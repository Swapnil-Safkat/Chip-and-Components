import React from 'react';

const CommingProduct = ({ product }) => {
  const { _id, name, img, release, price, author } = product;
  return (
    <div className='w-full md:w-1/3 lg:w-1/4 bg-white  flex flex-col my-8 mx-2 justify-between items-start rounded-lg shadow-lg shadow-gray-600 text-gray-700'>
      <div className=' bg-white rounded-lg flex flex-col '>
        <img className='h-full w-full rounded-lg p-2' src={img} alt="" />
        <h1 className='text-2xl text-center font-mono  font-semibold'>{name}</h1>
      </div>
      <div className='px-4 py-2 mt-0 w-full flex flex-col justify-between'>
        <h1 className='text-sm font-semibold tracking-wide my-1'>Release: <span className='text-red-600'>{release}</span></h1>
        <h1 className='text-sm font-semibold tracking-wide my-1'>Author: <span className='text-blue-900'>{author}</span></h1>
        <h1 className='text-sm font-semibold tracking-wide my-1'>Price Per Piece: <span className='text-blue-900'>{price} Tk</span></h1>
      </div>
    </div>
  );
};

export default CommingProduct;