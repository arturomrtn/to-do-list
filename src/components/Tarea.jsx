import '../styles/Tarea.css'

function Tarea ({ text }) {
    return (
        <div className="tarea-contenedor">
                <h1>soy una tarea: {text}</h1>
        </div>
    );
}

export default Tarea;