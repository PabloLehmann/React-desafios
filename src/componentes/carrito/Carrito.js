import { useContexto } from "../myContext/MyContext"


const Carrito = () => {
    const {carrito, borrarDelCarrito, limpiarElCarrito} = useContexto()



    console.log(carrito)
    return (
    
        <div>
            {carrito.map(item=>(
                <div key={item.id}>
                        <img src={item.producto.img} alt="imagen de cuadro"/>
                        <p>Nombre: {item.producto.nombre}</p>
                        <p>Medidas: {item.producto.medidas}</p>
                        <p>Precio: ${item.producto.precio}</p>
        
                        <button onClick={()=>borrarDelCarrito(item.id)}>Borrar</button>
                </div>
            ))}
            <button onClick={()=>limpiarElCarrito()}>Borrar todo</button>
        </div>
    )
}

export default Carrito


