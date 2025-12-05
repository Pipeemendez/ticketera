import "./EventoCard.css";
import Boton from "../../Boton/Boton.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EventoCard ({evento}) {

    const [infoEvento, setInfoEvento] = useState(false);

    const navigate = useNavigate();
    const irAEvento = () => {
        navigate(`/evento/${evento.id}`);
    };

    return (
        <li className="cartelera-item">
            <h4 className="cartelera-name"> {evento.nombre} </h4>
            <div className="cartelera-details">
                <p> Fecha: {evento.fecha} </p>
                <p> Lugar: {evento.lugar} </p>
                <p> Precio: ${evento.precio}</p>
            </div>
            
            <Boton info = "Ver más información" className = "button" onClick={() => {
                setInfoEvento(true);
            }}/>
            {infoEvento && (
                <div className="cartelera-info-visible">
                    <h4 className="cartelera-name"> {evento.nombre} </h4>

                    <Boton info = "Comprar" onClick={irAEvento} className = "button button-comprar"/> 

                    <Boton info = "Cerrar" className = "button" onClick={() => {
                        setInfoEvento(false);
                    }}/>
                </div>
            )}
        </li>   
    );
}

export default EventoCard;