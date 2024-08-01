import '../styles/TareaForm.css'
import { useState } from 'react';

function TareaForm(props) {

const [input, setInput] = useState("")

const handleInputChange = e => {
    setInput(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault();

    const tareaNueva = {
        texto: input
    }

    props.onSubmit(tareaNueva); 

}

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="tarea-input"
                type='text'
                placeholder="Escribe aquí"
                name='texto'
                onChange={handleInputChange}
            />
            <button 
            className="button-tarea"
            >Añadir tarea</button>
            <div>
            </div>
        </form>
        

    );
}

export default TareaForm;