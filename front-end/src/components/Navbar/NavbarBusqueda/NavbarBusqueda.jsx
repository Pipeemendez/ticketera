import './NavbarBusqueda.css';
import Boton from '../../Boton/Boton';

function NavbarBusqueda () {
    return (
        <div className='busqueda'> 
            <form className='search-form'>
                <input type="text" placeholder="Buscar..." id="search-input" />
                <Boton info="Buscar" className="button search-button" type="submit"/>
            </form>
        </div>
    )
}

export default NavbarBusqueda;