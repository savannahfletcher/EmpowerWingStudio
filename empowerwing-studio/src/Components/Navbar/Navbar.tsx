import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {

  return (
    <div className = "navbar">
        <div className = "links">
            <Link to="/">
                <button className="button-74" role="button">Artist Showcase</button>
            </Link>
        </div>
        <div className = "links">
            <Link to="/apply">
                <button className="button-74" role="button">Apply</button>
            </Link>
        </div>
        <div className = "links">
            <Link to="/about">
                <button className="button-74" role="button">About Us</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar