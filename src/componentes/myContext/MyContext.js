
import { createContext, useContext, useState } from "react"

const contexto = createContext()

export const {Provider} = contexto

export const useContexto = () =>{
    return useContext (contexto)
}


const CustomProvider = ({children}) =>{

    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [carrito, setCarrito] = useState ([])
    
    
///////////////////////////////////

    const agregarAlCarrito = (id, cantidad, producto) =>{
      
      if(isInCarrito(id)){
          const prodEnCarrito = carrito.filter((prod)=> prod.id !==id)
          const prodAAgregar = carrito.find((prod)=> prod.id ===id)
          prodAAgregar.cantidad += cantidad
          setCarrito([...prodEnCarrito, prodAAgregar])
          setCantidadTotal(cantidadTotal + cantidad)
      }else{
          setCarrito([...carrito, {id, cantidad, producto}])
          setCantidadTotal(cantidadTotal + cantidad)
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
        setCarrito(prodEnCarrito)

        

    }
//////////////////////////////////////
    const limpiarElCarrito = () =>{
        setCarrito([])
        setCantidadTotal(0)

    }
    /////////////////////////////////////

    

    const valorDelContexto = {
        cantidadTotal,
        carrito,
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