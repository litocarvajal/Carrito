import './menu.css';
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div className='nav'>
            <div className="menu">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
        </div>
        <CartWidget />
        </div>
    )
}

export default NavBar;