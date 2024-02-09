import { useState } from "react"

export default function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviar(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <form onSubmit={enviar}>
                <h2>Cadastre seu email aqui!</h2>
                <input type="text" placeholder="contoso@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
            {userEmail && (
                <div><p>O email cadastrado é: {userEmail}</p><button onClick={limparEmail}>Limpar Email</button></div>
            )}
        </div>
    )
}