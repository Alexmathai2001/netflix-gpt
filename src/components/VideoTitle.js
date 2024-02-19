import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-60 ps-14 pb-20 '>
        <h1 className='font-bold text-3xl py-3'>{title}</h1>
        <p className='w-1/4 text-sm font-medium py-3'>{overview}</p>
        <div className='flex'>
            <button className='w-28 text-white font-bold rounded-lg py-2 bg-black mx-1'>▶️ Play</button>
            <button className='w-28 text-white font-bold rounded-lg py-2 bg-black mx-1'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle