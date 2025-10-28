import "./Evento.css";
import Boton from "../../Boton/Boton.jsx";
import { useState } from "react";

function Evento ({evento}) {

    const [infoEvento, setInfoEvento] = useState(false);

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
                    <p className="cartelera-details"> Entradas Disponibles {evento.entradasDisponibles} </p>
                    <Boton info = "Comprar" className = "button button-comprar"/>
                    <Boton info = "Cerrar" className = "button" onClick={() => {
                        setInfoEvento(false);
                    }}/>
                </div>
            )}
        </li>   
    );
}

export default Evento;