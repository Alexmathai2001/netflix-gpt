import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"


const GptMovieSuggestion = () => {


  const {movieResults , movieNames} = useSelector((store) => store.gpt)
  if (!movieNames) return null
  console.log(movieNames);
  console.log(movieResults);
  return (
    <div>
      <div>
        <MovieList title={movieNames?.[0]} movies={movieResults?.[0]}/>
      </div>
    </div>
  )
}

export default GptMovieSuggestion