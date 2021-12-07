import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css"

const Header = ()=>{
    return(
        <div className="header">
                <div className ="nombre-artista">

                    <h3>Galeria virtual</h3>
                    <h1>Pablo Lehmann</h1>
            
                
                </div>
            <div>
                <Navbar/>
            </div>
        </div>
    );
};
export default Header;