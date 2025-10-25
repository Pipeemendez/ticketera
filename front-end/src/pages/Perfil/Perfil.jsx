import './Perfil.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Perfil () {
    return (
        <>
        <Navbar />

        <main className='perfil'>
            <h2 className='perfil-title'>Mi Perfil</h2>
            <div className='perfil-info'>
                <p><strong>Nombre:</strong> Juan Pérez</p>
                <p><strong>Email:</strong> </p>
            </div>
        </main>

        <Footer />
        </>
        
    )
}

export default Perfil;