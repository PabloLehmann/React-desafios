import ItemCount from "../itemCount/ItemCount"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react/cjs/react.development";
import { NavLink } from "react-router-dom";
import { useContexto } from "../myContext/MyContext";


function ItemDetail({cuadro}) {
    const onAdd = (contador) =>{
        if ( contador > 0){
        toast("Agregado: " + contador + " obras")
        }
    
        
    }
    const [mostrar, setMostrar] = useState(true)

    const borrar = ()=>{
        setMostrar(!mostrar)
    }
    
    
    const {agregarAlCarrito} = useContexto() 
 
    return (
        <div className="card" key={cuadro.id}>
                <img src={cuadro.img} alt="imagen de cuadro"/>
                
                <p>{cuadro.nombre}</p>
                <p>Categoria:{cuadro.categoria}</p>
                <p>${cuadro.precio}</p>
                <p>{cuadro.medidas}cm</p>
                {mostrar ? (
                    <ItemCount stock ={5} inicial = {1} onAdd = {onAdd} borrar={borrar} agregarAlCarrito={agregarAlCarrito} producto={cuadro} />

                        ):(

                <NavLink to="/Carrito"className="carrito">Carrito</NavLink> 
                        )}
                

            
        </div>
    )
}
export default ItemDetail
