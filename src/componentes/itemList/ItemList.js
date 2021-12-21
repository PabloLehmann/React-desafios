import React from "react";
import Item from "../item/Item";



const ItemList = ({cuadros}) => {
    
    
    return(
        <div>
            {cuadros.map(item=>(
                <Item key={item.id} nombre={item.nombre} precio={item.precio}/>
            ))}
        </div>
    );
};
export default ItemList;