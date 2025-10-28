import './LoginForm.css';
import { Link } from "react-router-dom";
import Boton from '../../../components/Boton/Boton.jsx';

function LoginForm() {
    return (
        <div className="login-container">
            <form className="login-form">
                <div>
                    <label for="username">Nombre de usuario:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <Link className='link' to="/inicio">
                        <Boton info="Iniciar sesión" className="button" type="submit" />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;