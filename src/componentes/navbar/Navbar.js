import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "../style/style.css";
const Navbar =()=>{
    const links =[
        {href:"/original", categoria:"Obras Originales", id:"1"},
        {href:"/impresiones", categoria:"Impresiones", id:"2"},
        {href:"/sobreElArtista", categoria:"Sobre el artista", id:"3"},
        
    ]
    return(
    <>
        <nav>

            <ul>{
            links.map((element)=> {
                return <li><NavLink key={element.id} to={element.href}>{element.categoria}</NavLink></li>
            })
            }
            
                <li><NavLink to="/Carrito"><CartWidget/></NavLink></li>
            

            </ul>
            
        </nav>
    </>
    );
}
export default Navbar;