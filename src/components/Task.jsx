import '../styles/Task.css'

function Task ({ text }) {
    return (
        <div className="task-container">
                <h1>I'm a task: {text}</h1>
        </div>
    );
}

export default Task;