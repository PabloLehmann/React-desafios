import ItemCount from "../itemCount/ItemCount"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react/cjs/react.development";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";


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


    console.log(cuadro);
    /* if(mostrar){ */
    return (
        <div className="card" key={cuadro.id}>
                <img src={cuadro.img} alt="imagen de cuadro"/>
                
                <p>{cuadro.nombre}</p>
                <p>{cuadro.precio}</p>
                <p>{cuadro.medidas}</p>
                {mostrar ? (
                    <ItemCount stock ={5} inicial = {1} onAdd = {onAdd} borrar={borrar}/>

                        ):(

                <NavLink to="/Carrito"className="carrito"><CartWidget/></NavLink> 
                        )}
                {/* <ItemCount stock ={5} inicial = {1} onAdd = {onAdd} borrar={borrar}/> */}

            
        </div>
    )
/* }else{
    return (
        <div className="card" key={cuadro.id}>
                <img src={cuadro.img} alt="imagen de cuadro"/>
                
                <p>{cuadro.nombre}</p>
                <p>{cuadro.precio}</p>
                <p>{cuadro.medidas}</p>
                <NavLink to="/Carrito" className="carrito"><CartWidget/></NavLink>
        </div>        
    )

}
 */}
export default ItemDetail
