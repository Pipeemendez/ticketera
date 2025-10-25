import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="navbar">
            <div className='navbar-section-1'> 
                <Link className='link' to="/"> Ticketera </Link> 
            </div>
            <div className='navbar-busqueda'> 
                Búsqueda
            </div>
            <div className='navbar-section-2'>   
                <div>
                    <Link className='link' to="/perfil"> <CgProfile /> </Link>
                </div>
                <div>
                    <FaShoppingCart size={24} color="black" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;