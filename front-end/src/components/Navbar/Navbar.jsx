import './Navbar.css';
import NavbarLogo from './NavbarLogo/NavbarLogo.jsx';
import NavbarBusqueda from './NavbarBusqueda/NavbarBusqueda.jsx';
import NavbarActions from './NavbarActions/NavbarActions.jsx';

function Navbar () {
    return (
        <nav className="navbar">
            <NavbarLogo />
            <NavbarBusqueda />
            <NavbarActions />
        </nav>
    )
}

export default Navbar;