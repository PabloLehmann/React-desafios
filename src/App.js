//componentes
import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
const App = () =>{
    return(
        <div className="App">
            <div className="App-header">
                <Header/>
                <ItemListContainer nombre={"Alejandro"} />
                <ItemDetailContainer/>

            </div>
        </div>

    );
}
export default App;

