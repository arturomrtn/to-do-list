import '../styles/TareaForm.css'
import { useState } from 'react';

function TareaForm() {

const [text, setText] = useState("")

const handleInputChange = e => {
    setText(e.target.value)
}

const handleSubmit = e => {
    e.prevent.default();
    console.log('sending form..')
}

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="tarea-input"
                type='text'
                placeholder="Escribe aquí"
                name='text'
                value={text}
                onChange={handleInputChange}
            />
            {console.log(text)}
            <button 
            className="button-tarea"
            >Añadir tarea</button>
            <div>
            </div>
        </form>
        

    );
}

export default TareaForm;