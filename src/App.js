//componentes
import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/inicio/Inicio";
import Artista from "./componentes/artista/Artista";
import Carrito from "./componentes/carrito/Carrito";
import CustomProvider from "./componentes/myContext/MyContext";


const App = () =>{

    

    return(
        <CustomProvider>

        
        <BrowserRouter className="App">
                <Header/>
                <main className="App-header">
                
                    <Routes>
                        <Route path="/" element={<Inicio/>} />
                        <Route path="/:categoria" element={<ItemListContainer nombre={"Alejandro"} />}/>
                        <Route path="/sobreElArtista" element={<Artista/>}/>
                        <Route path="/carrito" element={<Carrito/>} />
                        <Route path="/cuadros/:id" element={<ItemDetailContainer/>} />
                    </Routes>
                
                </main>
        </BrowserRouter>
        
        </CustomProvider>

    );
}
export default App;

