import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"


const GptMovieSuggestion = () => {


  const {movieResults , movieNames} = useSelector((store) => store.gpt)
  if (!movieNames) return null
  return (
    <div>
      <div className='bg-black -mt-96 opacity-85'>
        {movieResults.map((movie,index) =><MovieList title={movieNames[index]} movies={movieResults[index].results}/>)}
      </div>
    </div>
  )
}

export default GptMovieSuggestion