import './App.css'

function App() {

  return (
    <>
    <form onSubmit={presion}>
      <p>Ingrese primer valor: 
        <input type="number" name='valor1' />
      </p>
      <p>Ingrese segundo valor: 
        <input type="number" name="valor" id="" />
      </p>
      <input type="submit" value="sumar" />
    </form>
    </>
  )
}

function presion(e){
  e.preventDefault();
  const v1 = parseInt(e.target.valor1.value, 10);
  const v2 = parseInt(e.target.valor2.value, 10);
  const suma = v1 + v2;
  alert('La suma es: ' + suma)
}

export default App
