
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearchPage'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcommingMovies from '../hooks/useUpcommingMovies'
import { useSelector } from 'react-redux'


const Browse = () => {

  const gptSearchStatus = useSelector((store) => store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useUpcommingMovies()
  
  return (
    <div className='w-full'>
      <Header />
      {
        gptSearchStatus ? (<GptSearch />)  :
        (
          <>
      <MainContainer />
      <SecondaryContainer />
      </>
      )
      }
      
    </div>
  )
}

export default Browse