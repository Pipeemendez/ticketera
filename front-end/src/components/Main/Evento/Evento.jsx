import "./Evento.css";
import Boton from "../../Boton/Boton.jsx";
import { useState } from "react";

function Evento ({evento}) {

    const [infoEvento, setInfoEvento] = useState(false);

    return (
        <li className="cartelera-item">
            <h4 className="cartelera-name"> {evento.nombre} </h4>
            <p className="cartelera-details"> {evento.fecha} | Lugar: {evento.lugar} | Precio: ${evento.precio} </p>
            <Boton info = "Ver más información" onClick={() => {
                setInfoEvento(true);
            }}/>
            {infoEvento && (
                <div className="cartelera-info-visible">
                    <h4 className="cartelera-name"> {evento.nombre} </h4>
                    <p className="cartelera-details"> {evento.fecha} | Lugar: {evento.lugar} | Precio: ${evento.precio} </p>
                    <Boton info = "Cerrar" onClick={() => {
                        setInfoEvento(false);
                    }}/>
                </div>
            )}
        </li>   
    );
}

export default Evento;