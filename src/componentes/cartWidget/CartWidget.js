import { useContexto } from "../myContext/MyContext";

const CartWidget = () =>{

    const{cantidadTotal} = useContexto()
    return(
        <>
        {cantidadTotal !== 0 ? (
            <>
            <span className="material-icons">
                shopping_cart   
            </span>
            {cantidadTotal}
            </>
        ):(<div></div>)

        }
        </>
        
    );
}
export default CartWidget;