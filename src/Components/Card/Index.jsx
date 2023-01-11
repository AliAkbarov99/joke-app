import React from 'react'
import './Index.css'
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite } from '../../Redux/slice/FavSlice'
import { changeJoke } from '../../Redux/slice/jokeSlice'
import axios from 'axios'
const Index = () => {

  const dispatch = useDispatch()


  let joke = useSelector(state=>state.joke.joke)
  return (
    <div id='card'>
      <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="" />
      <p>{joke}</p>
      <div className='card__buttons'>
      <button onClick={()=>{
        
          axios.get("https://api.chucknorris.io/jokes/random").then(res=>{
            dispatch(changeJoke(res.data.value))
          })
        
      }}>X</button>

      
      <button onClick={()=>{
        dispatch(addFavourite(joke))
        axios.get("https://api.chucknorris.io/jokes/random").then(res=>{
            dispatch(changeJoke(res.data.value))
          })
      }}>✓</button>
      </div>
    </div>
  )
}

export default Index