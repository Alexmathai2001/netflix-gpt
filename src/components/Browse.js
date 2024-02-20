
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcommingMovies from '../hooks/useUpcommingMovies'


const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcommingMovies()
  
  return (
    <div className='w-full'>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse