import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const NotFound = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate('/home');
  };
  const data = {
    do: backToHome,
    text:'back to home'
  } ;
  const imgURL = 'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1649068037~exp=1649068637~hmac=322c307d60eebf2173a6a3b271ce4eb9855c103f0fa2a819366b6c52a4022191';
  return (
    <div className='flex flex-col items-center bg-white h-screen m-6 pt-16 rounded-3xl shadow-lg'>
      <div className='w-2/3 md:w-1/3'><img className='' src={imgURL} alt="" /></div>
      <Button data={data}></Button> 
    </div>
  );
};

export default NotFound;