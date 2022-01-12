import React from "react";
import Item from "../item/Item";



const ItemList = ({cuadros}) => {
    
    
    return(
        <div className="container">
            {cuadros.map(item=>(
                <Item key={item.id} nombre={item.nombre} precio={item.precio} href={item.href} img={item.img} categoria={item.categoria}/>
            ))}
        </div>
    );
};
export default ItemList;