import React from 'react';
import Discounts from '../Discounts/Discounts';

const DiscountProduct = () => {
  const products = [
    {
      _id: 1,
      name: 'ESP8266 NodeMCU V2 Development Board with CP2102',
      img: 'https://admin.techshopbd.com/uploads/product/ESP8266NodeMCUV2DevelopmentBoardwithCP2102.jpg',
      discount: 50,
      author: 'TechShop',
      price: 400,
    },
    {
      _id: 2,
      name: 'Sonar Sensor (HC-SR04)',
      img: 'https://admin.techshopbd.com/uploads/product/Sonar-Sensor-(HC-SR04).jpg',
      discount: 25,
      author: 'BD Electronics',
      price: 118,
    },
    {
      _id: 3,
      name: 'LCD Display 16X2 with Header',
      img: 'https://admin.techshopbd.com/uploads/product/LCD-Display-16X2-with-Header.jpg',
      discount: 20,
      author: 'Automation Home',
      price: 230,
    },
  ];
  return (
    <div className='w-full p-2 sm:p-6 flex justify-center items-center'>
    <div className='bg-inventory p-2 sm:p-4 lg:p-12 rounded-3xl shadow-xl  shadow-gray-600 w-full h-full flex flex-col justify-start items-center'>
      <h1 className='w-full text-center font-semibold text-lg sm:text-3xl text-gray-100 mt-8 sm:mt-3'>Discounted Products</h1>
      <div className='w-full mt-6 flex flex-wrap justify-around'>
        {
          products.map(product => <Discounts key={product._id} product={product}></Discounts>)
        }
      </div>
    </div>
  </div>
  );
};

export default DiscountProduct;