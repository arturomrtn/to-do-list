import '../styles/Tarea.css'

function Tarea ({ texto }) {
    return (
        <div className="tarea-contenedor">
            <div className="tarea-texto">
                {texto}
            </div>
        </div>
    );
}

export default Tarea;