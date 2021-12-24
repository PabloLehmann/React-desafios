import "./navbar.css";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink } from "react-router-dom";
const Navbar =()=>{
    const links =[
        {href:"/obrasOriginales", categoria:"Obras originales", id:1},
        {href:"/impresiones", categoria:"Impresiones", id:2},
        {href:"/sobreElArtista", categoria:"Sobre el artista", id:3},
        
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