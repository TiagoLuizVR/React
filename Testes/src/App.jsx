import './App.css'

function App() {

  const idades = [10, 43, 23, 1, 33, 27]

  return (
    <>
      {idades.map((ano, i) => {
        return (
          ano == 1 || ano == 23 ? (<p key={i}>Idade é 1, portanto não será imprimido!</p>) : (<p key={i}>A idade do peão é {ano}</p>)
        )
      })}
    </>
  )
}

export default App
