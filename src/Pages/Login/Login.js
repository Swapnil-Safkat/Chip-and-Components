import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import loginAvatar from '../../Images/login/loginAvatar.png';
import welcomeBack from '../../Images/login/welcomeBack.png';
import GoogleLogo from '../../Images/login/google30.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  //navigate user to where he was
  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || '/home';
  const [user] = useAuthState(auth);
  if (user) navigate(from, { replace: true });
  //form submit with email and pass
  const [signInWithEmailAndPassword, userEmail, loading, error] = useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const handleFormSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password).catch(e => console.log(e.message));
  }

  //google sign in
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate(from, { replace: true });
  }

  //navigate to register page
  const navigateRegister = event => {
    event.preventDefault();
    navigate('/register');
  }

  //send password reset email to user
  const resetPassword = async () => {
    toast("Password Reset Email Sent. Please Check Your Email");
    await sendPasswordResetEmail(emailRef.current.value);
  }

  const inputClass = 'text-center bg-transparent rounded-full shadow-xl border-2 border-gray-200 text-white my-3 p-2 w-full';
  const registerClass = 'text-gray-200 text-center text-sm mt-3 font-semibold cursor-pointer hover:underline';
  return (
    <div className=' p-2 sm:p-6 flex justify-center items-center'>
      <div className='bg-login p-0 sm:p-4 lg:p-6 rounded-3xl shadow-xl shadow-gray-600 w-full h-full flex justify-center items-center overflow-auto'>
        <div className='w-full md:w-5/6 flex flex-col md:flex-row items-end md:items-center p-2'>
          <img className='w-full md:w-1/2 shadow-2xl rounded-xl mb-3' src={loginAvatar} alt="" />
          <div className='w-full  md:w-1/2 rounded-r-3xl'>
            <img className='w-1/2  shadow-2xl rounded-r-3xl mb-3' src={welcomeBack} alt="" />
            <div className='flex flex-col justify-center items-center'>
              <div className='w-full'>
                <h1 className='text-gray-100 text-center font-serif tracking-wide text-lg w-3/4 text-left mx-auto mb-3'>Login your account!</h1>
                <button onClick={handleGoogleSignIn}
                  className='flex justify-center items-center w-full sm:w-2/4 py-1  mt-3 mx-auto border-2 bg-gray-100 border-gray-50 rounded-lg shadow-lg'>
                  {
                    loadingGoogle ?
                      <p className='font-bold'>loading...</p> :
                      <div className='flex justify-center items-center'><img src={GoogleLogo}
                        alt="Google Sign In" />
                        <p className='ml-2 font-semibold text-sm'>Google Sign In</p></div>
                  }
                </button>
                <p className='text-red-500 text-center  my-1 text-sm'>{errorGoogle?.message}</p>
                <div className='flex flex-row justify-center items-center mx-auto w-3/4'>
                  <hr className='w-1/2 bg-gray-200 border-0' />
                  <p className='text-gray-200 mx-4 mb-1 py-1'>or</p>
                  <hr className='w-1/2' />
                </div>
              </div>
              <form onSubmit={handleFormSubmit} className='pb-6 mb-6 mx-2'>
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
                  value={loading ? "loading..." : "Log In"} />
              </form>
                <button onClick={navigateRegister} className={registerClass}>Don't have an account?<span className='text-yellow-300'> Please Register</span></button>
                <button onClick={resetPassword} className={registerClass}>Forgot Password?<span className='text-yellow-300'> Reset</span></button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;