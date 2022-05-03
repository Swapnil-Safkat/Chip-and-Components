import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import loginAvatar from '../../Images/login/loginAvatar.png';
import welcomeBack from '../../Images/login/welcomeBack.png';

const Login = () => {
  //form submit with email and pass
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const handleFormSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password).catch(e => console.log(e.message));
  }

  //navigate user to where he was
  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || '/home';
  if (user) navigate(from, { replace: true });

  //navigate to register page
  const navigateRegister = event => {
    event.preventDefault();
    navigate('/register');
  }

  //send password reset email to user
  const resetPassword = async() => {
    await sendPasswordResetEmail(emailRef.current.value);
    alert('Email Sent')
  }

  const inputClass = 'text-center bg-transparent rounded-full shadow-xl border-2 border-gray-200 text-white my-3 p-2 w-full';
  const registerClass = 'text-gray-200 text-center text-sm mt-3 font-semibold cursor-pointer hover:underline';
  return (
    <div className='h-screen p-6'>
      <section className='bg-login p-0 sm:p-4 lg:p-6 rounded-3xl shadow-lg h-full flex justify-center items-center overflow-scroll'>
        <div className='w-full md:w-5/6 flex flex-col md:flex-row items-end md:items-center '>
          <img className='w-3/4 md:w-1/2 shadow-2xl rounded-3xl' src={loginAvatar} alt="" />
          <div className='w-full  md:w-1/2 rounded-r-3xl'>
            <img className='w-1/2 my-6 shadow-2xl rounded-r-3xl' src={welcomeBack} alt="" />
            <div className='flex flex-col justify-center items-center'>
              <form onSubmit={handleFormSubmit} className='py-6 mb-6'>
                <h1 className='text-gray-100 text-center font-serif tracking-wide text-lg w-3/4 text-left mx-auto mb-3'>Login your account!</h1>
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
                  value="Log In" />
                <p onClick={navigateRegister} className={registerClass}>New To Chip & Comps?<span className='text-yellow-300'> Please Register</span></p>
                <p onClick={resetPassword} className={registerClass}>Forgot Password?<span className='text-yellow-300'> Reset</span></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;