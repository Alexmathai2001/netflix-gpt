import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store  => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect( () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName } = user;
        dispatch(addUser({
          uid : uid,
          email : email,
          displayName : displayName
        }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
  },[])

  return (
    <div className='absolute px-32 bg-gradient-to-b from-black w-full flex justify-between items-center'>
      <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' className='w-44'/>
      { user && <div className='flex'>
        <img src='https://avatars.githubusercontent.com/u/69806852?v=4' className='h-10 w-10 rounded-full'/>
        <button onClick={handleSignOut} className='ms-5 font-bold text-white py-1 px-2 rounded-lg bg-red-500 h-10'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header 