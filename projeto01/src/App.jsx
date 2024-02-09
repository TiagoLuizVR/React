import './App.css'
import OutraLista from './components/OutraLista'

function App() {

  const meusItens = ['Vue', 'React', 'Angular']

  return (
    <div className='classequalquer'>
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}></OutraLista>
      <OutraLista itens={[]}></OutraLista>


    </div>
  )
}

export default App
