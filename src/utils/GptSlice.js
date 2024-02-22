import { createSlice } from "@reduxjs/toolkit";
import GptSearch from "../components/GptSearchPage";

const GptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
})


export const {toggleGptSearchView} = GptSlice.actions

export default GptSlice.reducer