import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`).then(res => res.json()).then(data => setItem(data));
  }, []);
  return (
    <div className='h-full w-full p-2 sm:p-6 flex justify-center items-center'>
      <div className='bg-inventory p-2 sm:p-4 lg:p-12 rounded-3xl shadow-xl  shadow-gray-600 w-full h-full flex flex-col justify-start items-center'>
        <h1 className='text-3xl text-white'>{id}</h1>
        <h1 className='text-3xl text-white'>{ item.name}</h1>
      </div>
    </div>
  );
};

export default Item;