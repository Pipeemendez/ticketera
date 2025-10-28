import "./Boton.css";

function Boton ({info, onClick, className, type}) {
    return (
        <button className={className} onClick={onClick} type={type}>  {info} </button>
    );
}

export default Boton;