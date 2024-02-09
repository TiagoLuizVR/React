import { useState } from "react"

export default function Form() {

    function cadastro(e) {
        e.preventDefault()
        console.log(`Usuário ${nome} com a senha ${senha} foi cadastrado!`)
    }

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()


    return (
        <form onSubmit={cadastro}>
            <h1>Cadastre-se</h1>

            <label htmlFor="nome">Nome: </label>
            <input type="text" id="nome" placeholder="Insira seu nome aqui!" onChange={(e) => setNome(e.target.value)} />

            <label htmlFor="senha">Senha: </label>
            <input type="password" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)}/><br />

            <button type="submit">Enviar</button>
        </form>
    )
}