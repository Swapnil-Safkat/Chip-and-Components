import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {
  const { _id, name, img, details, amount, price } = product;
  const navigate =useNavigate() ;
  const navigateToItem = id => {
    navigate(`/item/${id}`);
  }
  return (
    <div className='w-full bg-white  flex flex-col md:flex-row mt-4 items-start rounded-lg shadow-lg shadow-gray-600 text-gray-700'>
      <div className='md:h-full bg-white w-full md:w-1/4 lg:w-1/5 rounded-lg flex flex-col '>
        <img className='h-full w-full rounded-lg p-2' src={img} alt="" />
      </div>
      <div className='h-full w-full md:w-3/4 lg:w-4/5 px-4 py-2 mt-0 flex flex-col justify-between'>
        <div className='h-full w-full overflow-hidden'>
          <h1 className='text-2xl text-start truncate ... font-mono  font-semibold'>{name}</h1>
          <h1 className='text-sm font-serif tracking-wide my-1 text-clip' title={details}>{details}</h1>
        </div>
        <div>
          <h1 className='text-sm font-semibold tracking-wide mt-3'>Price Per Piece: <span className='text-blue-900'>{ price} Tk</span></h1>
          <h1 className='text-sm font-semibold tracking-wide  my-1'>Stock: <span className='text-blue-900'>{ amount} Piece</span></h1>
          <button onClick={()=>{navigateToItem(_id)}
          } className=' bg-zinc-500 hover:bg-zinc-800 text-gray-300 hover:text-white text-xs font-bold rounded-lg mt-2 py-1 px-2'>Show Details</button>  
        </div> 
      </div>
    </div>
  );
};

export default ProductDetails;