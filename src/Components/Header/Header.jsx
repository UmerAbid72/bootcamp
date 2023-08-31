import React from 'react'
import logo from "../../Mainpagelogo.png"
import { Link } from 'react-router-dom'
import {FaSearch} from "react-icons/fa"

const Header = () => {
   
  return (
    <nav className="header">
   <img src={logo} alt="" />     

   <div className="links">
   <Link to="/home">All</Link>
    <Link to="/TvShows">TV Shows</Link>
    <Link to="/movies">Movies</Link>
    <Link to="/toprated">Top Rated</Link>
    <Link to="">My List </Link>
    <button>
    <Link to="/">Logout</Link>
    </button>
   </div>
  
   <FaSearch/>
    </nav>
  )
}

export default Header
