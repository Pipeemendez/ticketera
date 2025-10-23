import "./Evento.css";

function Evento ({evento}) {
    return (
        <li className="cartelera-item">
            <h4 className="cartelera-name"> {evento.nombre} </h4>
            <p className="cartelera-details"> {evento.fecha} | Lugar: {evento.lugar} | Precio: ${evento.precio} </p>
            <button className="cartelera-button"> Ver más información </button>
        </li>   
    );
}

export default Evento;