import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('');

  function handleChange(event){
    setText(event.target.value);
  }

  function lanzarAlert() {
    alert(text)
  }


  return (
    <div>
      <form >
      <p>Ingrese un texto:</p>
      <input type="text" name='texto' onChange={handleChange} />
      <input type="button" value="mostrar texto" onClick={lanzarAlert} />
      </form>
    </div>
  );
}

export default App
