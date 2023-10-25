import './App.css'
import SayMyName from './components/SayMyName.jsx'
import Pessoa from './components/Pessoa.jsx'
import Frase from './components/frase'

function App() {

  const nome = 'Tiago'

  function soma(a, b) {
    return a + b
  }

  return (
    <div className='classequalquer'>
      <h1>Olá {nome}!!</h1>
      <p>Resultado da soma: {soma(1, 5)}</p>
      <SayMyName nome="Tiago"/>
      <SayMyName nome="Lolii"/>
      <Pessoa nome="Totó" 
      foto="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=600" 
      profissao={"Corredor"} 
      idade={"7 anos"}/>

      <Frase/>

    </div>
  )
}

export default App
