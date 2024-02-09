import Button  from "./evento/Button"

export default function Evento({numero}) {

    function clique() {
        console.log('Primeiro Evento Ativado!')
    }

    function clique2() {
        console.log('Segundo Evento Ativado!')
    }

    return (
        <>
        <h1>Ative o evento abaixo!</h1>
        <Button event={clique} text='Primeiro Evento'></Button>
        <Button event={clique2} text='Segundo Evento'></Button>
        </>
    )
}