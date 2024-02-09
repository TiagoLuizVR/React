import Item from './ItemLista.jsx'

export default function Lista() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Renault' anoLancamento={1990}></Item>
                <Item marca='Ford' anoLancamento={2002}></Item>
                <Item anoLancamento={2005}></Item>
                <Item></Item>
            </ul>
        </>
    )
}