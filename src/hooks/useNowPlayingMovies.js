import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { TMDB_OPTIONS } from "../utils/constants"
import { useEffect } from "react"

const useNowPlayingMovies = () => {

  const dispatch = useDispatch()


  const GetNowPlayingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_OPTIONS)
    const data = await response.json()
    dispatch(addNowPlayingMovies(data.results))
  }

  useEffect(() => {

    GetNowPlayingMovies()

  },[])
}

export default useNowPlayingMovies