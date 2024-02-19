import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute w-screen aspect-video pt-96 ps-14 pb-20 bg-gradient-to-r from-black'>
        <h1 className='font-bold text-white text-5xl py-3'>{title}</h1>
        <p className='w-1/4 text-white font-medium py-3'>{overview}</p>
        <div className='flex'>
            <button className='w-28 bg-white font-bold rounded-lg py-2 hover:opacity-80 mx-1'>▶️ Play</button>
            <button className='w-28 text-white font-bold rounded-lg py-2 bg-gray-500 mx-1'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle