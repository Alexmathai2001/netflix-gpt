import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({posterInfo}) => {
  return (
    <div className='mx-1'>
        <img className='max-w-40' alt='movie-poster' src={POSTER_URL+posterInfo}></img>
    </div>
  )
}

export default MovieCard