import ItemList from "../itemList/ItemList";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import {getDocs, collection, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom";






const ItemListContainer = ({nombre}) =>{
    const [cuadros, setCuadros] = useState([])
    const {categoria} = useParams()
    useEffect(() => {
        const coleccion = collection(db, "productos")

        if(categoria){
            const queryCategoria= query(coleccion, where("categoria", "==", categoria))
            getDocs(queryCategoria)
            .then( ({docs})=>{setCuadros(docs.map((doc)=>({id: doc.id, ...doc.data()})))
            })
            .catch((error)=>{
                console.log(error);

            })
        }else{
            getDocs(coleccion)
            .then( ({docs})=>{setCuadros(docs.map((doc)=>({id: doc.id, ...doc.data()})))
            })
            .catch((error)=>{
                console.log(error);

            })
        }        
    }, [categoria])
    
    
   
    return(
          <>

                <div>
                    <h1>Bienvenido {nombre} a nuentra galeria. </h1>
                </div>
                
                <div>
                    <ItemList cuadros={cuadros}/>
                </div>
          
        </>  
    )
}

export default ItemListContainer;