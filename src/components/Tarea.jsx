import '../styles/Tarea.css'

function Tarea ({ texto }) {
    return (
        <div className="tarea-contenedor">
                <h1>soy una tarea: {texto}</h1>
        </div>
    );
}

export default Tarea;