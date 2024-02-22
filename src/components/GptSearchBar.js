import React from "react";
import {lang} from "../utils/lang";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

    const selectedLang = useSelector((store) => store.config.lang)

  return (
    <div className="w-full flex justify-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg)] pb-40 h-screen">
        <form className="pt-28 w-2/4 grid grid-cols-12 gap-2">
          <input
            className="bg-white rounded-md text-sm col-span-9 py-3 px-4 h-[3rem]"
            type="text"
            placeholder={lang[selectedLang].gptSearchPlaceholder}
          ></input>
          <button className="bg-red-500 text-white font-semibold col-span-3 rounded-md h-[3rem]">
          {lang[selectedLang].search}
          </button>
        </form>
    </div>
  );
};

export default GptSearchBar;
