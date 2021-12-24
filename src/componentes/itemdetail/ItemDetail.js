import ItemCount from "../itemCount/ItemCount"
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function ItemDetail({cuadro}) {
    const onAdd = (contador) =>{
        if ( contador > 0){
        toast("Agregado: " + contador + " obras")
        }
    
        
    }
    console.log(cuadro);
    return (
        <div className="card" key={cuadro.id}>
                <img src={cuadro.img} alt="imagen de cuadro"/>
                
                <p>{cuadro.nombre}</p>
                <p>{cuadro.precio}</p>
                <p>{cuadro.medidas}</p>
                {<ItemCount stock ={5} inicial = {1} onAdd = {onAdd}/>}

            
        </div>
    )
}

export default ItemDetail
