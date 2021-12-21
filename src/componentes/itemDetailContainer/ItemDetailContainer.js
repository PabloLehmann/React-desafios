import { useState, useEffect } from "react";
import ItemDetail from "../itemdetail/ItemDetail";

const cuadroInicial = ()=>{
    
    return new Promise ((resolve, reject)=>{
        setTimeout(
            ()=> resolve( 
                {id:"1", nombre: "cuadro 1", precio:1000, medidas: "50x50", img:"https://drive.google.com/uc?export=view&id=1BQZgdDB_2SwtsOA6B0bLY5fipw6WNWPg"}
            
            ),3000

       )
        
    })
}


function ItemDetailContainer() {
    const [cuadro,setCuadro] = useState({})
    useEffect(() => {
            cuadroInicial().then((data) =>{
                setCuadro(data)
            })
        
    }, [])
    return (
        <div>
            <ItemDetail cuadro={cuadro}/>
        </div>
    )
}

export default ItemDetailContainer
