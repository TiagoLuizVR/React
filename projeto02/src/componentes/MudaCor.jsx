import { useState } from 'react'
import Bola from './Bola'

export default function MudaCor() {

    const [cor, setCor] = useState("black")
    const [input, setInput] = useState()

    return (
        <div>
            <Bola corBola={cor}></Bola>

            <div>
                <label htmlFor="campocor">Insira uma cor: </label>
                <input type="text" id='campocor' onChange={(e) => setInput(e.target.value)} />
            </div>
            <div>
                <button onClick={() => setCor(input)}>Confirmar</button>
                <button>Limpar</button>
            </div>
        </div>
    )
}