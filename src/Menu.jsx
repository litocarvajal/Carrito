import './menu.css';


const Menu = () => {
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
            <div className='carrito'>
                <i class="bi bi-cart2"></i>
            </div>
        </div>
    )
}

export default Menu;