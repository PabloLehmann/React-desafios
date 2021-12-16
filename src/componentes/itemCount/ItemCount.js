import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, inicial, onAdd}) =>{
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
   
    const notify = () => toast("Agregado" + contador);


    return (
        <div>
            <p>Contador : {contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={() => {onAdd( setContador); notify()}}>agregar</button>
            <ToastContainer />
        </div>
    )
}

export default ItemCount