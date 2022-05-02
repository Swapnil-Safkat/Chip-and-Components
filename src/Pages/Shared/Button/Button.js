import React from 'react';

const Button = ({data}) => {
  return (
    <div className='w-full flex justify-center'>
      <button onClick={data.do} className=' bg-zinc-500 hover:bg-zinc-800 text-gray-200 hover:text-white w-2/3 md:w-1/4 rounded-full py-2'>{data.text}</button>  
    </div>
  );
};

export default Button;