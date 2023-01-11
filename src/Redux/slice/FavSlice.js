import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
    name:'favourite',
    initialState:{
        jokes:[]
    },
    reducers:{
        addFavourite:(state,action)=>{
            state.jokes.push(action.payload)
        },
        deleteFavourite:(state,action)=>{
            state.jokes.splice(state.jokes.findIndex(joke=>joke.value===action.payload),1)
        }
    }
})


export const { addFavourite, deleteFavourite } = FavSlice.actions
export default FavSlice;