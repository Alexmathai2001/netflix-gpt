import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice"
import { TMDB_OPTIONS } from "../utils/constants"
import { useEffect } from "react"

const usePopularMovies = () => {

  const dispatch = useDispatch()


  const GetPopularMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',TMDB_OPTIONS);
    const data = await response.json()
    dispatch(addPopularMovies(data.results))
  }

  useEffect(() => {

    GetPopularMovies()

  },[])
}

export default usePopularMovies