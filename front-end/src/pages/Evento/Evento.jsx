import './Evento.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { useParams } from 'react-router-dom';
import eventos from "../../data/cartelera.js";

function Evento () {

    const { id } = useParams();

    const evento = eventos.find(evento => evento.id.toString() === id);

    return (
        <>
        <Navbar />

        <div className="evento-container">
            <h2 className="evento-title">{evento.nombre}</h2>
            <p className="evento-detail">Fecha: {evento.fecha}</p>
            <p className="evento-detail">Lugar: {evento.lugar}</p>
            <p className="evento-detail">Precio: ${evento.precio}</p>
            <p className="evento-description">{evento.descripcion}</p>
        </div>
        
        </>
    );
}

export default Evento;