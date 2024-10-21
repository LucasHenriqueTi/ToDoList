import './App.css'
import Lixeira from '../../src/assets/lixo.svg'

function Formulario() {
  return (
    <div className='container'>
      <form >
        <h2>ToDo List</h2>
        <input type="text" name="nome" id="nome" placeholder='Nome' /><br />
        <input type="number" name="telefone" id="numero" placeholder='Telefone' /> <br />
        <input type="email" name="e-mail" id="email" placeholder='E-mail' /><br />
      </form>
        <button type='button'>enviar</button>
    </div>
  );
}

function Listausuarios() {
  return (
    <div>
        <div>
        <p>Nome: </p>
        <p>Telefone: </p>
        <p>Email: </p>
      </div>
      <button className='lixeira'>
        <img src={Lixeira} alt="lixeira" />
      </button>
    </div>
    
  );
}

function App() {

  return (
    <>
      <div>
        <Formulario />
      </div>
      <div>
        <Listausuarios/>
      </div>
    </>
    
  );
}

export default App
