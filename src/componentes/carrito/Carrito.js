import { NavLink } from "react-router-dom"
import { useContexto } from "../myContext/MyContext"


const Carrito = () => {
    const {carrito, precioTotal, borrarDelCarrito, limpiarElCarrito} = useContexto()



    console.log(carrito)
    return (
    <>
    {carrito.length===0 ?(
        <div>
            <h2>No hay productos en su carrito</h2>
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


