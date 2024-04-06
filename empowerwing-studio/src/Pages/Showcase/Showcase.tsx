/* import React, { Component, useState } from 'react'; */
import "./Showcase.css";
import supabase from "../../config/supabaseClient"
import { useEffect, useState } from "react";
import Feature from '../../Components/Feature/Feature'

const Showcase = () => {
    console.log(supabase)
    
    return(
        <div className="showcase">
            <header className="showcase-header">

            {/* For each of the features (get from backend), use the Feature Component*/}
            <Feature></Feature>
            </header>
        </div>
    )
};

export default Showcase; 