import ItemCount from "../itemCount/ItemCount";
import ItemList from "../itemList/ItemList";

const productos = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(
            ()=> resolve( [
                {id:"1", nombre: "cuadro 1", precio:1000, medidas: "50x50"},
                {id:"2", nombre: "cuadro 2", precio:3000, medidas: "80x50"},
                {id:"3", nombre: "cuadro 3", precio:2000, medidas: "70x50"},
                {id:"4", nombre: "cuadro 4", precio:16000, medidas: "100x50"},
            ]),3000

       )
        
    })
}

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
                
                <div>
                    <ItemList productos={productos}/>
                </div>
          </div>  
    )
}
export default ItemListContainer;