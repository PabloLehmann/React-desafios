
import { createContext, useContext, useState } from "react"

const contexto = createContext()

export const {Provider} = contexto

export const useContexto = () =>{
    return useContext (contexto)
}


const CustomProvider = ({children}) =>{

    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState ([])
    const [precioTotal, setPrecioTotal] = useState(0)
    
    
///////////////////////////////////

    const agregarAlCarrito = (id, cantidad, producto) =>{
      
      if(isInCarrito(id)){
          const prodEnCarrito = carrito.filter((prod)=> prod.id !==id)
          const prodAAgregar = carrito.find((prod)=> prod.id ===id)
          prodAAgregar.cantidad += cantidad
          let agregarPrecio = producto.precio * cantidad
          prodAAgregar.precioParcial +=(agregarPrecio)
          setCarrito([...prodEnCarrito, prodAAgregar])
          setCantidadTotal(cantidadTotal + cantidad)
          setPrecioTotal(precioTotal + agregarPrecio)
      }else{
          const precioParcial = producto.precio * cantidad
          setCarrito([...carrito, {id, cantidad, producto, precioParcial}])
          setCantidadTotal(cantidadTotal + cantidad)
          setPrecioTotal(precioTotal + precioParcial)
      }

    }
    
    const isInCarrito = (id) =>{

        return carrito.find((prod)=> prod.id===id)
    }
    
//////////////////////////////////////
    const borrarDelCarrito = (id) =>{
        const prodEnCarrito = carrito.filter((prod)=>prod.id!==id)
        const borrarProd = carrito.find((prod)=> prod.id===id)
        setCantidadTotal(cantidadTotal - borrarProd.cantidad)
        setPrecioTotal(precioTotal - borrarProd.precioParcial)
        setCarrito(prodEnCarrito)

        

    }
//////////////////////////////////////
    const limpiarElCarrito = () =>{
        setCarrito([])
        setCantidadTotal(0)
        setPrecioTotal(0)

    }
    /////////////////////////////////////

    

    const valorDelContexto = {
        cantidadTotal,
        carrito,
        precioTotal,
        agregarAlCarrito,
        borrarDelCarrito,
        limpiarElCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}
 export default CustomProvider