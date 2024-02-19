import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"
import { TMDB_OPTIONS } from "../utils/constants"
import { useEffect } from "react"

const useMovieTrailer = (movieId) => {

  const dispatch = useDispatch()

    const getMovieTrailer = async () => {
       const response = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', TMDB_OPTIONS)
       const data = await response.json()
       const filterData = data?.results?.filter((data) => data?.type === "Trailer")
       const trailer = filterData.length ? filterData[0] : data.results[0]
       dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieTrailer()
    },[])
}

export default useMovieTrailer