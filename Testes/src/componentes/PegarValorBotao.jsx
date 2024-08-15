import { useState } from "react"

export default function ValorBotao() {
    
    const [listaValor, setListaValor] = useState([])

    const atualizarDisplay = (valor) => {
        return (
            setListaValor([...listaValor, valor])
        )
    }

    return (
        <>
        <div style={Diisplay}>
            <h1 >{listaValor}</h1>
        </div>
        <div>
            <button onClick={() => atualizarDisplay(10)}>10</button>
        </div>
        </>
    )
}

const Diisplay = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    marginRight: 4,
    height: 40,
    width: 300,
    backgroundColor: 'white'
}