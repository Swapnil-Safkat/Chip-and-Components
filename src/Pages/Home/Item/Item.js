import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import serverLink from '../../../serverLink'
const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { name, details, img, price, amount } = item;
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    fetch(`${serverLink()}inventory/${id}`).then(res => res.json()).then(data => {
      setItem(data);
      setItemCount(data.amount);
    });
  }, [id, item.amount]);

  const handleDelivered = (i) => {
    if (amount > 0) {
      const amount = parseInt(item.amount) + i;
      const updatedItem = { amount }
      fetch(`${serverLink()}item/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      }).then(res => res.json()).then(data => {
        item.amount = updatedItem;
        setItemCount(amount);
        setItem(item);
        toast('One Item Delivered')
      })
    } else {
      toast('Item out of stock, Can not be delivered')
    }
  };
  const handleRestock = (event) => {
    event.preventDefault();
    const amount = parseInt(item.amount) + parseInt(event.target.restock.value);
    const updatedItem = { amount }
    fetch(`${serverLink()}item/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    }).then(res => res.json()).then(data => {
      item.amount = updatedItem;
      setItemCount(amount);
      setItem(item);
      toast(`${event.target.restock.value} Item Restocked`)
    })
    
  };

  const loading = false;
  const inputClass = 'bg-gray-700 rounded-lg font-semibold text-gray-200 text-sm w-1/2 my-2 p-2 py-3 pl-5 w-1/2';
  return (
    <div className='h-full w-full p-2 sm:p-6 flex justify-center items-center tracking-wide'>
      <div className='bg-inventory p-2 sm:p-4 lg:p-12 rounded-3xl shadow-xl  shadow-gray-600 w-full h-full flex flex-col lg:flex-row justify-around items-center'>
        <div className='w-full lg:w-1/3 my-4 rounded-3xl overflow-hidden'>
          <img className='w-full h-full  hover:scale-105  rounded-3xl' src={img} alt="" />
        </div>
        <div className='bg-violet-500/80 w-full lg:w-1/2 p-6 h-full rounded-3xl  text-gray-100 border-2'>
          <div className='h-1/3'>
            <h1 className=' text-center font-mono font-semibold text-xl sm:text-3xl mt-2'>{name}</h1>
            <h1 className=' text-start font-thin text-sm mt-4'>Model: {id}</h1>
            <h1 className=' text-start font-semibold text-lg sm:text-xl  mt-2'>Price: <span className='text-white'>{price}</span>TK</h1>
            <h1 className=' text-start font-thin text-sm mt-6'>
              Available:  <span className='text-white font-bold'>{itemCount}</span> items
              <span className='rounded-full bg-yellow-300 px-3 text-black text-xs h-full font-semibold ml-2'>{itemCount > 0 ? 'In Stock' : 'Out of Stock'}</span>
            </h1>
          </div>
          <div className='h-1/6 w-full pt-2 flex flex-col justify-start'>
            <button onClick={() => handleDelivered(-1)} className='bg-violet-800 hover:text-blue-900 font-bold shadow-lg rounded-full h-1/2 p-1 w-full lg:w-1/2 text-gray-300 hover:bg-gray-100 hover:cursor-pointer'>Deliver</button>
            <div className='w-full'>
              <form onSubmit={handleRestock} id='Form1' className='sm:pb-6 mx-2 w-full flex flex-row justify-center items-center' >
                <input
                  className={inputClass}
                  type="number"
                  name='restock'
                  placeholder='Restock'
                  defaultValue={0}
                  required /><br />
                <input
                  className='bg-violet-800 hover:text-blue-900 font-bold shadow-lg rounded-full p-1 h-1/2 mx-2 w-1/2 text-gray-300 hover:bg-gray-100 hover:cursor-pointer'
                  type="submit"
                  value={loading ? "loading..." : "Restock"} />
              </form>
            </div>
          </div>
          <div className='h-1/2 overflow-auto'>
            <h1 className=' text-start font-thin text-sm mt-4'>Description:</h1>
            <h1 className=' text-start font-thin text-sm mt-4'>{details}</h1>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Item;