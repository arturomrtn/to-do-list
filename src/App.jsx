import './App.css'
import Tarea from './components/Tarea'
import TareaForm from './components/TareaForm'

function App() {

  return (
    <>
      <div>
        <TareaForm />
      </div>
      <h1>Mis tareas</h1>
      <Tarea texto={'Soy una tarea'}></Tarea>
    </>
  )
}
export default App
