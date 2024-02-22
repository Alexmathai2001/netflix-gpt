import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import gptReducer from "./GptSlice"
import configSlice from "./configSlice";


const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
            movies : movieReducer,
            gpt : gptReducer,
            config : configSlice
        },
    }
)

export default appStore