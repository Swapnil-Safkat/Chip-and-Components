import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import loginAvatar from '../../Images/login/loginAvatar.png';
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/home';

  //create user with email and password
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const handleFormSubmit = async event => {
    event.preventDefault();
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    navigate(from, { replace: true });
  }

  //navigate user
  if (user) navigate(from, { replace: true });
  const navigateLogin = event => {
    event.preventDefault();
    navigate('/login');
  }
  const inputClass = 'text-center bg-transparent rounded-full shadow-xl border-2 border-gray-200 text-white my-3 p-2 w-full';
  const registerClass = 'text-gray-200 text-center text-sm mt-2 font-semibold cursor-pointer hover:underline';
  return (
    <div className='h-screen p-6'>
      <section className='bg-login p-0 sm:p-4 lg:p-6 rounded-3xl shadow-lg h-full flex justify-center items-center'>
        <div className='w-full md:w-5/6 flex flex-col md:flex-row items-end md:items-center'>
          <img className='w-full md:w-1/2 shadow-2xl rounded-xl mb-3' src={loginAvatar} alt="" />
          <div className='w-full  md:w-1/2 rounded-r-3xl'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-gray-100 text-center font-mono tracking-wide text-4xl w-3/4 text-left mx-auto mb-3'>Welcome</h1>
              <form onSubmit={handleFormSubmit} className='py-6 mb-6 mx-2'>
                <h1 className='text-gray-100 text-center font-serif tracking-wide text-lg w-3/4 text-left mx-auto mb-3'>Register account!</h1>
                <input
                  className={inputClass}
                  type="name"
                  ref={nameRef}
                  placeholder='Enter your name'
                  required /><br />
                <input
                  className={inputClass}
                  type="email"
                  ref={emailRef}
                  placeholder='Enter your email'
                  required /><br />
                <input
                  className={inputClass}
                  type="password"
                  ref={passwordRef}
                  placeholder='Enter your password'
                  required /><br />
               <p className='text-red-500 text-right  my-1 text-sm'>{error?.message}</p>
                <input
                  className='bg-violet-600 hover:text-blue-900 font-bold shadow-lg rounded-xl p-2  mb-6 w-full text-gray-300 hover:bg-gray-100 hover:cursor-pointer'
                  type="submit"
                  value={loading? 'loading...':'Register'} />
                <p onClick={navigateLogin} className={registerClass}>Already Have an Account?<span className='text-yellow-300'> Please Login</span></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;