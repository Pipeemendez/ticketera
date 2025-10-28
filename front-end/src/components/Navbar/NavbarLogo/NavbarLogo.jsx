import './NavbarLogo.css';
import { Link } from "react-router-dom";

function NavbarLogo () { 
    return (
        <div className='logo'> 
            <Link className='link' to="/inicio"> Ticketera </Link> 
        </div>
    )
}

export default NavbarLogo;