import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskList() {

    const [tasks, setTasks] = useState([])

    const addTask = task => {
        const updatedTasks = [task, ...tasks];
        setTasks(updatedTasks);
    } 

    return (
        <>
            <TaskForm addTask={addTask} />
            <div className="task-list-container">
                <h1>Tasks lists</h1>
                {
                    tasks.map((task) => <Task
                        text={task.text}
                    />)
                }
            </div>

        </>

    )
}

export default TaskList;