import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className=' bg-black'>
      <div className=' z-10 relative ps-10 -mt-56'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Upcomming"} movies={movies?.UpcommingMovies}/>
        <MovieList title={"Popular"} movies={movies?.PopularMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer