import ItemList from "../itemList/ItemList";
import { useState, useEffect } from "react";


const productos = ()=>{
    
    return new Promise ((resolve, reject)=>{
        setTimeout(
            ()=> resolve( [
                {id:"1", nombre: "cuadro 1", precio:"$1000", medidas: "50x50", href: "/obrasOriginales/1",img:"https://drive.google.com/uc?export=view&id=1BQZgdDB_2SwtsOA6B0bLY5fipw6WNWPg"},
                {id:"2", nombre: "cuadro 2", precio:"$3000", medidas: "80x50", href: "/obrasOriginales/2",img:"https://drive.google.com/uc?export=view&id=1BQZgdDB_2SwtsOA6B0bLY5fipw6WNWPg"},
                {id:"3", nombre: "cuadro 3", precio:"$2000", medidas: "70x50", href: "/obrasOriginales/3",img:"https://drive.google.com/uc?export=view&id=1BQZgdDB_2SwtsOA6B0bLY5fipw6WNWPg"},
                {id:"4", nombre: "cuadro 4", precio:"$16000", medidas: "100x50", href: "/obrasOriginales/4",img:"https://drive.google.com/uc?export=view&id=1BQZgdDB_2SwtsOA6B0bLY5fipw6WNWPg"},
            ]),3000

       )
        
    })
}

const ItemListContainer = ({nombre}) =>{
    const [cuadros, setCuadros] = useState([])
    useEffect(() => {
        productos().then((data)=>{
            setCuadros(data)


        })
        
    }, [])
    
    
   
    return(
          <>

                <div>
                    <h2>Bienvenido {nombre} a nuentra galeria. </h2>
                </div>
                
                <div>
                    <ItemList cuadros={cuadros}/>
                </div>
          
        </>  
    )
}

export default ItemListContainer;