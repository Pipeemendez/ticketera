import "./Boton.css";

function Boton ({info, onClick}) {
    return (
        <button className="button" onClick={onClick}> {info} </button>
    );
}

export default Boton;