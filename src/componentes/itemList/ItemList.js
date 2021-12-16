import React from "react";
import Item from "../item/Item";
import { useState, useEffect } from "react";


const ItemList = ({productos}) => {
    const [cuadros, setCuadros] = useState([])
    useEffect(() => {
        productos().then((data)=>{
            setCuadros(data)


        })
        
    }, [])
    
    return(
        <div>
            {cuadros.map(item=>(
                <Item id={item.id} nombre={item.nombre} precio={item.precio} medidas={item.medidas}/>
            ))}
        </div>
    );
};
export default ItemList;