import { useContexto } from "../myContext/MyContext";

const CartWidget = () =>{

    const{cantidadTotal} = useContexto()
    return(
        <>
            <span className="material-icons">
                shopping_cart   
            </span>
            {cantidadTotal}
        </>
        
    );
}
export default CartWidget;