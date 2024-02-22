import React from "react";
import {useRef} from "react"
import {lang} from "../utils/lang";
import { useSelector,useDispatch } from "react-redux";
import openai from "../utils/openAI.js"
import { TMDB_OPTIONS } from "../utils/constants"
import {addGptMovies} from "../utils/GptSlice.js"

const GptSearchBar = () => {

    const selectedLang = useSelector((store) => store.config.lang)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    const movieSearch = async (movie) =>{
      const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', TMDB_OPTIONS)

      const data = await response.json()
      
      return data;

    }


    const handleSearchButton = async () => {


      const gptQuery = "act as a movie recommendation system and suggest some movies for the query "+ searchText.current.value + ".only give me a list of five movies,comma seperated and like the  example given here eg:sample1,sample2,sample3,sample4,sample5"

      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      const movieList = chatCompletion?.choices[0]?.message?.content.split(",").map(movie => movie.trim());


      const promisearray = movieList?.map((movie) => movieSearch(movie))
      const tmdbResults = await Promise.all(promisearray)

      dispatch(addGptMovies({movieNames : movieList,movieResults : tmdbResults}))

    }

  return (
    <div className="w-full flex justify-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg)] pb-40 h-screen">
        <form className="pt-28 w-2/4 grid grid-cols-12 gap-2" onSubmit={(e) => {e.preventDefault()}}>
          <input
          ref={searchText}
            className="bg-white rounded-md text-sm col-span-9 py-3 px-4 h-[3rem]"
            type="text"
            placeholder={lang[selectedLang].gptSearchPlaceholder}
          ></input>
          <button onClick={handleSearchButton} className="bg-red-500 text-white font-semibold col-span-3 rounded-md h-[3rem]">
          {lang[selectedLang].search}
          </button>
        </form>
    </div>
  );
};

export default GptSearchBar;
