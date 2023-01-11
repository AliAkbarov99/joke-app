import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Components/Navbar/Index'
import { deleteFavourite } from '../Redux/slice/FavSlice'


const Favourites = () => {
  const dispatch = useDispatch()
  let value = useSelector(state=>state.favourite.jokes)
  return (
    <>
    <Navbar/>
    {value.map(joke=>{
      return <li>{joke} <button onClick={()=>{
        dispatch(deleteFavourite(joke))
      }}>delete</button></li>
    })}
    </>
  )
}

export default Favourites