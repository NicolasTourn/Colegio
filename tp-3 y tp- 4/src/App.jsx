import { useState } from 'react'
import { TextField, Button } from '@mui/material'

function App() {
  const [text, setText] = useState('');
  const vocales = ['a','e','i','o','u']

  function handleChange(event){
    setText(event.target.value);
  }

  function lanzarAlert() {
    alert(contarVocales())
  }

  function contarVocales(){
    let contador = 0;

    for(let i = 0; i < text.length; i++){
      for(let letra of vocales){
        if(text[i] == letra){
          contador++;
        }
      }
    }

    return contador;
  }


  return (
    <div>
      <form >
      <p>Ingrese un texto:</p>
      <TextField id="outline-basic" label="Texto" variant='outlined' onChange={handleChange} />
      <br />
      <br />
      <Button variant="contained" onClick={lanzarAlert} >Mostrar cantidad vocales</Button>
      </form>
    </div>
  );
}
export default App
