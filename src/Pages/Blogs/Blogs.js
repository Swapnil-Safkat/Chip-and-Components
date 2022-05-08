import React from 'react';
import Blog from '../../Blog/Blog';

const Blogs = () => {
  const blogs = [
    {
      key: 1,
      ques: '1. Difference between JavaScript and Nodejs?',
      ans: 'JavaScript: It is a normal programming language which one have the ability to runs in any web browser JS engine. We can call it as a heartbeat of any web application. JavaScript is mainly used for the client side activities. JavaScript can run in any engine like spider monkey of Firefox, V8 of Google Chrome, JavaScript Core of Safari. JavaScript basically follow the standard programming language.Nodejs We can call nodejs is an interpreter or running environment for a JS programming language can able to hold many excesses. It have libraries can make the JavaScript programming better use. The purpose of using NodeJS for the server side and operating system activities. NodeJS only support the V8 engine of Google Chrome. NodeJS is written by a famous programming language C++.'
    },
    {key:2,
      ques: '2. Difference between SQL and NoSQL Database?',
      ans: 'SQL: SQL databases are scalable in vertically. SQL databases are table-based database. SQL databases are relational. We can use PHPMyAdmin to make SQL databases. NoSQL: NoSQL databases are scalable in horizontally. NoSQL databases are mainly document typed or key-value typed. NoSQL databases are non-relational. We can use famous MongoDB to make NoSQL databases.'
    },
    {
      key:3,
      ques: '3. What is the purpose of JWT and how does it work?',
      ans: 'JWT (JSON Web Token) is an open standard that allows two parties: a client and a server: to communicate security information. JSON items, containing a set of claims, are encoded in each JWT. JWT use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.'
    },
  ]
  return (
    <div className='h-full w-full p-2 sm:p-6 flex flex-col justify-center items-center'>
      {
        blogs.map(blog => <Blog key={blog.key} blog={blog}></Blog>)
      }
    </div>
  );
};

export default Blogs;