import React from 'react';
import CommingProduct from '../CommingProduct/CommingProduct';

const CommingSoon = () => {
  const products = [
    {
      _id: 1,
      name: 'WiFi IoT Switch Sonoff 4CH',
      img: 'https://admin.techshopbd.com/uploads/product/WiFiIoTSwitchSonoff4CH.jpg',
      release: 'Release 6th June 2022',
      author: 'TechShop',
      price: 4000,
    },
    {
      _id: 2,
      name: 'Sonoff SI7021 Temperature Humidity Sensor',
      img: 'https://admin.techshopbd.com/uploads/product/SonoffSI7021TemperatureHumiditySensor_1.jpg',
      release: 'Release 22nd June 2022',
      author: 'BD Electronics',
      price: 730,
    },
    {
      _id: 3,
      name: 'Thermistor 10K',
      img: 'https://admin.techshopbd.com/uploads/product/Thermistor-10K.jpg',
      release: 'Release 9th July 2022',
      author: 'Automation Home',
      price: 12,
    },
  ];
  return (
    <div className='w-full p-2 sm:p-6 flex justify-center items-center'>
      <div className='bg-inventory p-2 sm:p-4 lg:p-12 rounded-3xl shadow-xl  shadow-gray-600 w-full h-full flex flex-col justify-start items-center'>
        <h1 className='w-full text-center font-semibold text-lg sm:text-3xl text-gray-100 mt-8 sm:mt-3'>Products Coming Soon</h1>
        <div className='w-full mt-6 flex flex-wrap justify-around'>
          {
            products.map(product => <CommingProduct key={product._id} product={product}></CommingProduct>)
          }
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;