import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, inicial, onAdd, borrar, agregarAlCarrito, producto}) =>{
    const [contador, setContador] = useState(inicial);
   
    const sumar = () =>{
        if (contador < stock){
        setContador  (contador + 1)
        }
    }
    const restar = () =>{
        if ( contador > 0){
        setContador (contador - 1)
        } 
        
    }
    
    const agregar = () =>{
        
        setContador (inicial)
        
    
    }
   
    


    return (
        <div>
            <p>Contador : {contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={() => {onAdd( contador); agregar(); borrar(); agregarAlCarrito(producto.id, contador, producto)}}>agregar</button>
            <ToastContainer />
        </div>
    )
}

export default ItemCount