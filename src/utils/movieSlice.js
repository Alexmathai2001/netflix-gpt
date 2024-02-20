import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name : "movies",
        initialState : {
            nowPlayingMovies : null,
            PopularMovies : null,
            UpcommingMovies : null,
            trailerVideo : null
        },
        reducers : {
            addNowPlayingMovies : (state,action) => {
                state.nowPlayingMovies = action.payload
            },
            addPopularMovies : (state,action) => {
                state.PopularMovies = action.payload
            },
            addUpcommingMovies : (state,action) => {
                state.UpcommingMovies = action.payload
            },
            addTrailerVideo : (state,action) => {
                state.trailerVideo = action.payload
            }
        }
    }
)

export const {addNowPlayingMovies,addTrailerVideo ,addPopularMovies ,addUpcommingMovies} = movieSlice.actions

export default movieSlice.reducer