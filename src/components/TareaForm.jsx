import '../styles/TareaForm.css'

function TareaForm() {
    return (
        <form className="form">
            <input
                className="tarea-input"
                type='text'
                placeholder="Escribe aquí"
                name='texto'
            />
            <button className="button-tarea">Añadir tarea</button>
        </form>

    );
}

export default TareaForm;