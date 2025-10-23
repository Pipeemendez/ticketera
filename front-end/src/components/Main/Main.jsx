import "./Main.css";
import eventos from "../../data/cartelera"; "./../../data/cartelera.js";
import Evento from "./Evento/Evento.jsx";

function Main () {
    return (
        <main className="main">
            <h2 className="main-title">Welcome to Ticketera</h2>
            <p className="main-description">Your one-stop solution for event ticketing.</p>

            <div className="cartelera">
                <h3 className="cartelera-title">Upcoming Events</h3>

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