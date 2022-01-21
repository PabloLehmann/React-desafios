import { NavLink } from "react-router-dom"
import { useContexto } from "../myContext/MyContext"
import { db } from "../../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Carrito = () => {
    const {carrito, precioTotal, borrarDelCarrito, limpiarElCarrito} = useContexto()
    const finalizarCompra = () =>{
        limpiarElCarrito()
    }
    const ventaCollection =collection(db,"ventas")
    addDoc(ventaCollection,{
        comprador:{
            nombre: "Jose",
            apellido: "Guerra",
            email: "joseguerra@mail"
        },
        item: carrito,
        fecha: serverTimestamp(),
        total: precioTotal,
    })
    
    .then((resultado)=>{
        
        console.log(resultado);
        notify(resultado.id)
    })

    const notify = (ordenId) =>{
        toast("Su codigo de orden es: "+ ordenId)
    }




    console.log(carrito)
    return (
    <>
    {carrito.length===0 ?(
        <div>
            <ToastContainer />
            <h1>No hay productos en su carrito</h1>
            <NavLink to="/"><button>Ir a Inicio</button></NavLink> 
        </div>
    ):(
        <div>
            {carrito.map(item=>(
                <div key={item.id} className="card">
                        <img src={item.producto.img} alt="imagen de cuadro"/>
                        <p>Nombre: {item.producto.nombre}</p>
                        <p>Medidas: {item.producto.medidas}</p>
                        <p>Precio unitario: ${item.producto.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio total: {item.producto.precio * item.cantidad}</p>

        
                        <button onClick={()=>borrarDelCarrito(item.id)}>Borrar</button>
                        <button onClick={()=>finalizarCompra()}>Finalizar compra</button>
                </div>
            ))}
            <p>total: {precioTotal}</p>
            <button onClick={()=>limpiarElCarrito()}>Borrar todo</button>
        </div>
    )
            }
    </>
    )
}

export default Carrito


