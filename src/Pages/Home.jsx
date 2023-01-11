import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Index'
import Card from '../Components/Card/Index'
import axios from 'axios'
import { changeJoke } from '../Redux/slice/jokeSlice'
import { useDispatch } from 'react-redux'

const Home = () => {
  const cardDivStyle ={
    marginTop:"50px",
    display:"flex",
    justifyContent:"center"
  }

  const dispatch = useDispatch()

 

  useEffect(()=>{
    axios.get("https://api.chucknorris.io/jokes/random").then(response=>{
      dispatch(changeJoke(response.data.value))
    })
  },[])


  return (
    <>
    <Navbar/>
    <div>Home</div>
    <div style={cardDivStyle}>
    <Card/>
    </div>
    </>
    
  )
}

export default Home