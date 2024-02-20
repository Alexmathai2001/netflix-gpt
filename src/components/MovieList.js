import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

    console.log(movies?.[0]);
    console.log(title);
  return (
    <div className=''>
        <div className='px-2 py-1'>
            <h1 className='font-bold text-xl py-2 text-white'>{title}</h1>
        </div>
        <div className='flex overflow-x-scroll'>
            {movies?.map(movies => <MovieCard posterInfo={movies?.poster_path}/>)}
        </div>
    </div>
  )
}

export default MovieList