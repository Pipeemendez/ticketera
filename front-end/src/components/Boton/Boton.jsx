import "./Boton.css";

function Boton ({info, onClick, className}) {
    return (
        <button className={className} onClick={onClick}> {info} </button>
    );
}

export default Boton;