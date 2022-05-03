import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import {
  HomeIcon,
  ChipIcon,
  CollectionIcon,
  ViewGridAddIcon,
  DocumentAddIcon,
  ServerIcon,
  SwitchHorizontalIcon,
  LoginIcon,
  UserAddIcon,
  LogoutIcon,
  UserCircleIcon
} from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth);
    navigate('/login')
  };
  //const user = true;
  const navLinkClass = 'text-xs sm:text-sm md:text-base py-1 px-3 mx-3 my-3 font-semibold text-gray-500 flex items-center hover:text-blue-900 hover:bg-blue-200/50 hover:rounded-full';
  const menuTextClass = 'ml-4 hidden sm:block'
  return (
    <div className='flex flex-col justify-between menu-logo-size bg-white shadow-lg h-screen sticky top-0 left-0 '>
      <div>
        <div className='flex justify-center items-center my-6 px-6'>
          <div className='mr-2 hidden sm:block'><img src={logo} alt="" /></div>
          <h1 className='text-sm sm:text-lg md:text-xl font-bold font-serif text-blue-900  hidden sm:block'>Chip & Comps</h1>
          <h1 className='text-xs font-bold font-mono text-blue-900 sm:hidden block'>C<br />&<br />C</h1>
        </div>
        <div>
          <hr className='mb-6' />
          <Link className={navLinkClass} to={'/home'}><HomeIcon className='w-5 ' /><span className={menuTextClass}>Home</span></Link>
          <NavLink className={navLinkClass} to={'/home#inventory'}><ChipIcon className='w-5 ' /><span className={menuTextClass}>Inventory</span></NavLink>
          <NavLink className={navLinkClass} to={'/manage-inventory'}><CollectionIcon className='w-5 ' /><span className={menuTextClass}>Manage</span></NavLink>
          <NavLink className={navLinkClass} to={'/'}><ViewGridAddIcon className='w-5 ' /><span className={menuTextClass}>Add New Item</span></NavLink>
          {user &&
            <div className='my-6'>
              <hr />
              <p className='text-gray-400 text-xs font-semibold pl-6 pt-4'>User<span className='hidden sm:inline'> section</span></p>
              <NavLink className={navLinkClass} to={'/manage-items'}><SwitchHorizontalIcon className='w-5 ' /><span className={menuTextClass}>Manage items</span></NavLink>
              <NavLink className={navLinkClass} to={'/add-items'}><DocumentAddIcon className='w-5 ' /><span className={menuTextClass}>Add items</span></NavLink>
              <NavLink className={navLinkClass} to={'/my-items'}><ServerIcon className='w-5 ' /><span className={menuTextClass}>My items</span></NavLink>
            </div>
          }
          {user ?
            <div className='my-6'>
              <hr />
              <p className='text-gray-400 text-xs font-semibold pl-6 pt-4'>Authentication</p>
              <button onClick={handleSignOut} className={navLinkClass}><LogoutIcon className='w-5 ' /><span className={menuTextClass}>Sign Out</span></button>
            </div>
            :
            <div className='my-6'>
              <hr />
              <p className='text-gray-400 text-xs font-semibold pl-6 pt-4'>Please login</p>
              <NavLink className={navLinkClass} to={'/login'}><LoginIcon className='w-5 ' /><span className={menuTextClass}>Sign In</span></NavLink>
              <NavLink className={navLinkClass} to={'/register'}><UserAddIcon className='w-5 ' /><span className={menuTextClass}>Register</span></NavLink>
            </div>
          }
        </div>
      </div>
      <div>
        {
          user &&
          <div className='hidden sm:block'>
              <Link className='text-xs sm:text-sm md:text-base py-1 px-3 mx-3 my-3 font-semibold flex items-center hover:text-blue-900 hover:bg-blue-200/50 hover:rounded-full' to={'/login'}><UserCircleIcon className='w-8 mr-2' /><span className=''>{ user?.displayName}</span></Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Header;