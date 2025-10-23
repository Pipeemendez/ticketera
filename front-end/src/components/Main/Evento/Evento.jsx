import "./Evento.css";
import Boton from "../../Boton/Boton.jsx";

function Evento ({evento}) {
    return (
        <li className="cartelera-item">
            <h4 className="cartelera-name"> {evento.nombre} </h4>
            <p className="cartelera-details"> {evento.fecha} | Lugar: {evento.lugar} | Precio: ${evento.precio} </p>
            <Boton info = "Ver más información" />
        </li>   
    );
}

export default Evento;