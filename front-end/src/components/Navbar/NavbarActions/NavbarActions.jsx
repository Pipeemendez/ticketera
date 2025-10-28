import './NavbarActions.css'
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function NavbarActions () {
    return (
        <div className='navbar-actions'>   
            <div>
                <Link className='link' to="/perfil"> <CgProfile /> </Link>
            </div>
            <div>
                <FaShoppingCart size={24} color="black" />
            </div>
        </div>
    )
}

export default NavbarActions;