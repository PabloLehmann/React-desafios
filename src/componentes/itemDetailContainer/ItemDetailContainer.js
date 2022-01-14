import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemdetail/ItemDetail";

const cuadroInicial = ()=>{
    
    return new Promise ((resolve, reject)=>{
        setTimeout(
            ()=> resolve( [
                
                {id:"1", nombre: "cuadro 1", categoria: "impresiones",precio:1000, medidas: "50x50", href: "/obrasOriginales/1",img:"https://drive.google.com/uc?export=view&id=1BQZgdDB_2SwtsOA6B0bLY5fipw6WNWPg"},
                {id:"2", nombre: "cuadro 2", categoria: "impresiones",precio:3000, medidas: "80x50", href: "/obrasOriginales/2",img:"https://drive.google.com/uc?export=view&id=1BQZgdDB_2SwtsOA6B0bLY5fipw6WNWPg"},
                {id:"3", nombre: "cuadro 3", categoria: "original",precio:2000, medidas: "70x50", href: "/obrasOriginales/3",img:"https://drive.google.com/uc?export=view&id=1BQZgdDB_2SwtsOA6B0bLY5fipw6WNWPg"},
                {id:"4", nombre: "cuadro 4", categoria: "original",precio:16000, medidas: "100x50", href: "/obrasOriginales/4",img:"https://drive.google.com/uc?export=view&id=1BQZgdDB_2SwtsOA6B0bLY5fipw6WNWPg"},

            ]),3000

       )
        
    })
}


function ItemDetailContainer() {
    const [cuadro,setCuadro] = useState({})
    const {id}=useParams()

   

    useEffect(() => {
            cuadroInicial().then((data) =>{
                const resultado = data.find( (cuadro) => 
                cuadro.id === id
                )
                setCuadro(resultado)
            })
        
    }, [id])
    
    
    return (
        <div>
            <ItemDetail cuadro={cuadro}/>
        </div>
    )
}


export default ItemDetailContainer
