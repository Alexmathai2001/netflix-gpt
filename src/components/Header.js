import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute px-32 bg-gradient-to-b from-black w-full flex justify-between items-center'>
      <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' className='w-44'/>
      <button onClick={handleSignOut} className='font-bold text-white py-1 px-2 rounded-lg bg-red-500 h-10'>Sign Out</button>
    </div>
  )
}

export default Header 