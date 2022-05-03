import React from 'react';
import loginAvatar from '../../Images/login/loginAvatar.png';
const Register = () => {
  const inputClass = 'text-center bg-transparent rounded-full shadow-xl border-2 border-gray-200 text-white my-3 p-2 w-full';
  const registerClass = 'text-gray-200 text-center text-sm mt-2 font-semibold cursor-pointer hover:underline';

  return (
    <div className='h-screen p-6'>
      <section className='bg-login p-0 sm:p-4 lg:p-6 rounded-3xl shadow-lg h-full flex justify-center items-center'>
        <div className='w-full md:w-5/6 flex flex-col md:flex-row items-end md:items-center'>
          <img className='w-3/4 md:w-1/2 shadow-2xl' src={loginAvatar} alt="" />
          <div className='w-full  md:w-1/2 rounded-r-3xl'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-gray-100 text-center font-mono tracking-wide text-4xl w-3/4 text-left mx-auto mb-3'>Welcome</h1>
              <form className='py-6 mb-6'>
                <h1 className='text-gray-100 text-center font-serif tracking-wide text-lg w-3/4 text-left mx-auto mb-3'>Register your account!</h1>
                <input
                  className={inputClass}
                  type="name"
                  placeholder='Enter your name'
                  required /><br />
                <input
                  className={inputClass}
                  type="email"
                  placeholder='Enter your email'
                  required /><br />
                <input
                  className={inputClass}
                  type="password"
                  placeholder='Enter your password'
                  required /><br />
                <input
                  className='bg-violet-600 hover:text-blue-900 font-bold shadow-lg rounded-xl p-2 mt-3 mb-6 w-full text-gray-300 hover:bg-gray-100 hover:cursor-pointer'
                  type="submit"
                  value="Log In" />
                <p className={registerClass}>New To Tutor Service Pro?<span className='text-black'> Please Register</span></p>
                <p className={registerClass}>Forgot Password?<span className='text-black'> Reset</span></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;