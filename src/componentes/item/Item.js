import React from "react";
import "./item.css";

const Item = ({id, nombre, precio}) => {
   
    return(
        <div className="card" key={id}>
            

                <p>{nombre}</p>
                <p>{precio}</p>
                <p>Ver detalle</p>
                        
        
        </div>
    );
};

export default Item;