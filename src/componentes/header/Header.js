import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./header.css"

const Header = ()=>{
    
    return(
        <div className="header">
                <div className ="nombre-artista">

                    <h3>Galeria virtual</h3>
                    <NavLink to="/"><h1>Pablo Lehmann</h1></NavLink>
                    
            
                
                </div>
            <div>
                <Navbar/>
            </div>
        </div>
    );
};
export default Header;