import React from 'react'
import './Index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='navbar'>
            <div className='navbar__logo'>
                <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="" />
            </div>
            <div className='navbar__links'>
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </div>
        </div>
    )
}



export default Navbar