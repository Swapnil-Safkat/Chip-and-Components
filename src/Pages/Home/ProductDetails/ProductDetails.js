import React from 'react';

const ProductDetails = ({ product }) => {
  const { name, img } = product;
  return (
    <div className='w-1/3 p-4 md:p-10'>
      <div className='border-2 flex flex-col items-center rounded-lg'>
        <img className='w-full md:w-3/4' src={img} alt="" />
        <h1 className='text-lg text-center font-semibold px-6'>{name}</h1>
      </div>
    </div>
  );
};

export default ProductDetails;