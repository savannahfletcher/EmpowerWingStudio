import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {

  return (
    <div className = "navbar">
        <div className = "links">
            <Link to="/">Artist Showcase</Link>
            <Link to="/apply">Apply</Link>
            <Link to="/about">About Us</Link>
        </div>
    </div>
  )
}

export default Navbar