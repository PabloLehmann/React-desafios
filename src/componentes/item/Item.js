import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({id, nombre, precio, href, img, categoria}) => {
    const boton =()=>{
        console.log("funciono")

    }

   
    return(
        <div className="card" key={id}>
            <img src={img} alt="cuadro"/>

                <h2>{nombre}</h2>
                <h2>{categoria}</h2>
                <p>{precio}</p>
                <button onClick={boton}><Link to={href}>Ver detalle</Link></button>
                
                        
        
        </div>
    );
};

export default Item;
