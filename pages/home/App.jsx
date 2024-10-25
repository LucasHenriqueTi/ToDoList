import './App.css'
import Lixeira from '../../src/assets/lixo.svg';
import { usuarios } from '../../services/dados.js'


function Formulario() {
  return (
    <div className='form'>
      <form >
        <h2>Cadastro de Clientes</h2>
        <input type="text" name="nome" id="nome" placeholder='Nome' /><br />
        <input type="number" name="idade" id="numero" placeholder='Idade' /> <br />
        <input type="email" name="e-mail" id="email" placeholder='E-mail' /><br />
        <button type='button'>enviar</button>
      </form>
    </div>
  );
}

function Listausuarios() {
  return (
    <div>
      {usuarios.map(user =>
        <div key={user.id} className='user'>
          <div>
            <p>Nome:<span>{user.name} </span> </p>
            <p>Idade:<span>{user.idade}</span> </p>
            <p>Email:<span>{user.email}</span> </p>
          </div>
          <button className='lixeira' id='lixeira'>
            <img src={Lixeira} alt="lixeira" />
          </button>
          <button className='editar' id='editar'>
            <img src={Lixeira} alt="editar" />
          </button>
        </div>)}
    </div>
  );
}

function App() {

  return (
    <div className='container'>
      <div>
        <Formulario />
      </div>
      <div>
        <Listausuarios />
      </div>
    </div>

  );
}

export default App
