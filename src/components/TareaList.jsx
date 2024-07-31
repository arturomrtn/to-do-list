 import { useState } from "react";
import Tarea from "./Tarea";
import TareaForm from "./TareaForm";

function TareaList() {

    const [tareas, setTareas] = useState([])

    return (
        <>
            <TareaForm />
            <div className="tarea-list-container">
                <h1>Esta es la lista de tareas</h1>
                { tareas.map((tarea) => <Tarea />) }
            </div>
            
        </>

    )
}

export default TareaList;