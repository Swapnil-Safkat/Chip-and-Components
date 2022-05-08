import React from 'react';

const Blog = ({ blog }) => {
  const {ques,ans} =blog ;
  return (
    <div className='my-4 p-4 lg:p-12 border-2 bg-violet-200 rounded-3xl shadow-xl  shadow-gray-600 w-full h-full flex flex-col justify-start items-center'>
      <h1 className='text-start w-full text-xl font-semibold text-gray-800'>{ ques}</h1>
      <h1 className='text-start w-full text-gray-700 mt-2'>{ ans}</h1>
    </div>
  );
};

export default Blog;