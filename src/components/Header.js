import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { GIT_PROFILE_PHOTO, NETFLIX_LOGO } from '../utils/constants';

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    //unsubscribe when the component unmounts
    return () => unsubscribe()
  },[])

  return (
    <div className='absolute px-32 bg-gradient-to-b from-black w-full flex justify-between items-center'>
      <img src = {NETFLIX_LOGO} alt='logo' className='w-44 z-10'/>
      { user && <div className='flex'>
      <img src= {GIT_PROFILE_PHOTO} className='h-10 w-10 rounded-full'/>
        <button onClick={handleSignOut} className='ms-5 font-bold text-white py-1 px-2 rounded-lg bg-red-500 h-10'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header 