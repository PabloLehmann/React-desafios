import { NavLink } from "react-router-dom"
import { useContexto } from "../myContext/MyContext"
import { db } from "../../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from "../formulario/Form";




const Carrito = () => {
    const {carrito, precioTotal, usuario, borrarDelCarrito, limpiarElCarrito} = useContexto()
    
    const finalizarCompra = () =>{
        const ventaCollection = collection(db,"ventas")
        addDoc(ventaCollection,{
            comprador: usuario,
            item: carrito,
            fecha: serverTimestamp(),
            total: precioTotal,
        })
        
        .then((resultado)=>{   

            notify(resultado.id)
        })
        limpiarElCarrito()
    }

    const notify = (ordenId) =>{
        toast("Su codigo de orden es: " + ordenId, {
            closeOnClick:false
        })
    }




    
    return (
    <>
    {carrito.length===0 ?(
        <div>
            <h1>No hay productos en su carrito</h1>
            <NavLink to="/"><button>Ir a Inicio</button></NavLink> 
            <ToastContainer />
        </div>
    ):(
        <div>
            {carrito.map(item=>(
                <div key={item.id} className="card">
                        <img src={item.producto.img} alt="imagen de cuadro"/>
                        <p>Nombre: {item.producto.nombre}</p>
                        <p>Medidas: {item.producto.medidas}cm</p>
                        <p>Precio unitario: ${item.producto.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio total: {item.producto.precio * item.cantidad}</p>

        
                        <button onClick={()=>borrarDelCarrito(item.id)}>Borrar</button>
                </div>
            ))}
            <Form/>
            <h3>total: {precioTotal}</h3>
            <button onClick={()=>finalizarCompra()}>Finalizar compra</button>
            <button onClick={()=>limpiarElCarrito()}>Borrar todo</button>
        </div>
    )
            }
    </>
    )
}

export default Carrito


