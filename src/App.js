//componentes
import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer"

const App = () =>{
    return(
        <div className="App">
            <div className="App-header">
                <Header/>
                <ItemListContainer nombre={"Alejandro"} />
            </div>
        </div>

    );
}
export default App;

