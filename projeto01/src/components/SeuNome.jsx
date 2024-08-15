export default function SeuNome( {setNome} ) {
    return (
        <>
        <div>
            <label htmlFor="inome">Insira seu nome: </label>
            <input onChange={(e) => setNome(e.target.value)} type="text" id="inome" placeholder="Nome..." />
        </div>
        </>
    )
}