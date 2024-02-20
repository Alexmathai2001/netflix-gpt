import { useDispatch } from "react-redux"
import { addUpcommingMovies } from "../utils/movieSlice"
import { TMDB_OPTIONS } from "../utils/constants"
import { useEffect } from "react"

const useUpcommingMovies = () => {

  const dispatch = useDispatch()


  const GetUpcommingMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',TMDB_OPTIONS);
    const data = await response.json()
    dispatch(addUpcommingMovies(data.results))
  }

  useEffect(() => {

    GetUpcommingMovies()

  },[])
}

export default useUpcommingMovies