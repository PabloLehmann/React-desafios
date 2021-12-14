import ItemCount from "../itemCount/ItemCount";


const ItemListContainer = ({nombre}) =>{
    
    const onAdd = (setContador) =>{
        setContador (1)
        
    }
    return(
          <div>

                <div>
                    <h2>Bienvenido {nombre} a nuentra galeria. </h2>
                </div>

                <div>
                    <ItemCount stock ={5} inicial = {1} onAdd = {onAdd} />
                    
                </div>
          </div>  
    )
}
export default ItemListContainer;