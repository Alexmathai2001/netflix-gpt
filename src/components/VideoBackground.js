import React, { useEffect } from 'react'
import { TMDB_OPTIONS } from '../utils/constants'

const VideoBackground = ({id}) => {

    const getMovieTrailer = async () => {
       const response = await fetch('https://api.themoviedb.org/3/movie/933131/videos?language=en-US', TMDB_OPTIONS)
       const data = await response.json()
       const trailer = data.results.filter((data) => data.type === "Trailer")
       console.log(trailer);
    }

    useEffect(() => {
        getMovieTrailer()
    },[])

  return (
    <div>{id}</div>
  )
}

export default VideoBackground