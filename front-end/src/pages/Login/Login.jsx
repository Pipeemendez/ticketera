import './Login.css';
import Footer from '../../components/Footer/Footer';
import NavbarLogo from '../../components/Navbar/NavbarLogo/NavbarLogo';
import LoginForm from './LoginForm/LoginForm';

function Login() {
    return (
        <>
        <div className="navbar-login">
            <NavbarLogo />
        </div>
        <LoginForm />
        <Footer />
        </>
    )
}

export default Login;