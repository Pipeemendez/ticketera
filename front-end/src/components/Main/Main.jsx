import "./Main.css";
import eventos from "../../data/cartelera"; "./../../data/cartelera.js";
import Evento from "./Evento/Evento.jsx";

function Main () {
    return (
        <main className="main">
            <h2 className="main-title">Bienvenid@ a Ticketera</h2>
            <p className="main-description">Tu solución integral para la venta de entradas para eventos.</p>

            <div className="cartelera">
                <h3 className="cartelera-title">Próximos Eventos</h3>

            <ul className="cartelera-list">
                {
                eventos.map(evento => (
                    <Evento  key={evento.id} evento={evento}/>    
                ))
                }
            </ul> 
                
            </div>
        </main>
    )
}

export default Main;