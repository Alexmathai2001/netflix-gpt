import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [checkSignIn,setcheckSignIn] = useState(true)

  const signInToggle = () => {
    setcheckSignIn(!checkSignIn)
  }

  return (
    <div>
      <Header />
      <div className='w-full pt-40 bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg)] h-screen'>
        <div className=' bg-black text-white w-[450px] h-4/5 mx-auto py-10 px-16'>
          <span className='font-bold text-2xl'>{checkSignIn ? "Sign In" : "Sign Up"}</span>
          <form className='my-6'>
            {!checkSignIn && (
            <input type='text' placeholder='Full Name' className='mb-3 px-2 py-3 bg-black border-[1px] border-gray-500 w-full'/>
            )}
            <input type='text' placeholder='Email or Phone number' className='px-2 py-3 bg-black border-[1px] border-gray-500 w-full'/>
            <input type='password' placeholder='Password' className=' my-3 px-2 py-3 bg-black border-[1px] border-gray-500 w-full'/>
            <button className='w-full bg-red-600 py-3 rounded text-white font-semibold'>{checkSignIn ? "Sign In" : "Sign Up"} </button>
          </form>
          <p className='text-sm text-gray-400'>{checkSignIn ? "New to Netflix," : "Already registered? "} <span onClick={signInToggle} className='text-white font-bold cursor-pointer'>{checkSignIn ? "Sign Up" : "Sign In"}</span> now</p>
        </div>
      </div>



    </div>
  )
}

export default Login