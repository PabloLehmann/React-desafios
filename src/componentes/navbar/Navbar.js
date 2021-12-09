import React from "react";
import "./navbar.css";
import CartWidget from "../cartWidget/CartWidget";

const Navbar =()=>{
    return(
    <div>
        <nav>

            <ul>
                <li><a href="../public/index.html">Obras Originales</a></li>
                <li><a href="../public/index.html">Impresiones</a></li>
                <li><a href="../public/index.html">Sobre el artista</a></li>
                <li><CartWidget/></li>

            </ul>
            
        </nav>
    </div>
    );
}
export default Navbar;