import '../styles/TaskForm.css'
import { useState } from 'react';

function TaskForm( {addTask}) {

const [input, setInput] = useState("")

const handleInputChange = e => {
    setInput(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault();

    const newTask = {
        text: input
    }

    addTask(newTask); 

}

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="task-input"
                type='text'
                placeholder="Write here"
                name='text'
                onChange={handleInputChange}
            />
            <button 
            className="button-tarea"
            >Add task</button>
            <div>
            </div>
        </form>
        

    );
}

export default TaskForm;