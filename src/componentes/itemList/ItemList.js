import React from "react";
import Item from "../item/Item";



const ItemList = ({cuadros}) => {
    
    
    return(
        <div className="container">
            {cuadros.map(item=>(
                <Item key={item.id} producto={item}/>
            ))}
        </div>
    );
};
export default ItemList;