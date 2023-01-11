import { createSlice } from "@reduxjs/toolkit";

const jokeSlice = createSlice({
    name:'joke',
    initialState:{
        joke:''
    },
    reducers:{
        changeJoke:(state,action)=>{
            state.joke = action.payload
        },
    }
})


export const { changeJoke } = jokeSlice.actions
export default jokeSlice;