import './App.css'
import Tarea from './components/Tarea'
import TareaForm from './components/TareaForm'

function App() {

  return (
    <>
      <div>
        <TareaForm />
       <h1>Lista de tareas</h1>
       <div>
        <Tarea texto={'Soy una tarea'} ></Tarea>
       </div>
      </div>
    </>
  )
}
export default App
