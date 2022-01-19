import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = (props) => {
    const boton =()=>{
        console.log("funciono")

    }

   
    return(
        <div className="card" key={props.producto.id}>
            <img src={props.producto.img} alt="cuadro"/>

                <h2>{props.producto.nombre}</h2>
                <h2>{props.producto.categoria}</h2>
                <p>{props.producto.precio}</p>
                <button onClick={boton}><Link to={`/cuadros/${props.producto.id}`}>Ver detalle</Link></button>
                
                        
        
        </div>
    );
};

export default Item;
