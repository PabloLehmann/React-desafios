import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemdetail/ItemDetail";
import { db } from "../../firebase";
import {getDoc, doc, collection} from "firebase/firestore"



function ItemDetailContainer() {

    const [cuadro,setCuadro] = useState({})
    const {id}=useParams()

   

    useEffect(() => {
        const coleccion = collection(db, "productos")
        const queryId = doc(coleccion, id)
        getDoc(queryId)
        .then((resultado)=>{
                setCuadro({id: id, ...resultado.data()})            
        })
        .catch((error)=>{
            console.log("error")
        })        
    }, [id])
    
    
    return (
        <div>
            <ItemDetail cuadro={cuadro}/>
        </div>
    )
}


export default ItemDetailContainer
