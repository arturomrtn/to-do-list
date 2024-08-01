import { useState } from "react";
import Tarea from "./Tarea";
import TareaForm from "./TareaForm";

function TareaList() {

    const [tareas, setTareas] = useState([])

    const addTarea = tarea => {
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
    } 

    return (
        <>
            <TareaForm onSubmit={addTarea} />
            <div className="tarea-list-container">
                <h1>Esta es la lista de tareas</h1>
                {
                    tareas.map((tarea) => <Tarea
                        texto={tarea.texto}
                    />)
                }
            </div>

        </>

    )
}

export default TareaList;