import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";

function Navbar () {
    return (
        <nav className="navbar">
            <div className='navbar-elemento'> 
                Ticketera </div>
            <div className='navbar-elemento'> 
                Búsqueda </div>
            <div className='navbar-elemento'>
                <FaShoppingCart size={24} color="black" />
            </div>
        </nav>
    )
}

export default Navbar;