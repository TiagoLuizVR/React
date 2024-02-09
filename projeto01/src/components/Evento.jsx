export default function Evento({numero}) {

    function clique() {
        console.log(`Evento ativado ${numero}`)
    }

    return (
        <>
        <h1>Ative o evento abaixo!</h1>
        <button onClick={clique} type="button">Ativar</button>
        </>
    )
}