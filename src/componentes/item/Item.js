import React from "react";
import ItemCount from "../itemCount/ItemCount";
import "./item.css";

const Item = ({id, nombre, precio, medidas}) => {
    const onAdd = (setContador) =>{
        setContador (1)
        
    }
    return(
        <div className="card" key={id}>
            

                <p>{nombre}</p>
                <p>{precio}</p>
                <p>{medidas}</p>
                <ItemCount stock ={5} inicial = {1} onAdd = {onAdd}/>
            
        
        </div>
    );
};

export default Item;