//componentes
import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/inicio/Inicio";
import Artista from "./componentes/artista/Artista";
import Impresiones from "./componentes/impresiones/Impresiones";
import Carrito from "./componentes/carrito/Carrito";
import CustomProvider from "./componentes/myContext/MyContext";


const App = () =>{

    

    return(
        <CustomProvider>

        
        <BrowserRouter className="App">
            <main className="App-header">
                <Header/>
                
                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/obrasOriginales" element={<ItemListContainer nombre={"Alejandro"} />}/>
                    <Route path="/impresiones" element={<Impresiones/>}/>
                    <Route path="/sobreElArtista" element={<Artista/>}/>
                    <Route path="/carrito" element={<Carrito/>} />
                    <Route path="/obrasOriginales/:id" element={<ItemDetailContainer/>} />
                </Routes>
                

            </main>
        </BrowserRouter>
        
        </CustomProvider>

    );
}
export default App;

