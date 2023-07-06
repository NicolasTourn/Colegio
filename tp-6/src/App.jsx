import { useState } from 'react'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleInputChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const aniadirTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { tarea: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const cambiarEstado = (index) => {
    const actualizarTareas = [...tareas];
    actualizarTareas[index].completada = !actualizarTareas[index].completada;
    setTareas(actualizarTareas);
  };

  return (
    <div>
      <h1>Lista de Tareas Pendientes</h1>
      <div className='tarea-container'>
      <input
        type="text"
        value={nuevaTarea}
        onChange={handleInputChange}
        placeholder="Ingrese una nueva tarea"
      />
      <button onClick={aniadirTarea}>Agregar tarea</button>
      </div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <input  
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={()=> cambiarEstado(index)}
            />
            <span
                  style={{
                    textDecoration: tarea.completada ? 'line-through' : 'none',
                  }}
            >
            {tarea.tarea}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
