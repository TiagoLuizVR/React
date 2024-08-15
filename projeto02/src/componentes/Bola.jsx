export default function Bola({corBola}) {

    const estilo = {
        borderRadius: "50%",
        backgroundColor: `${corBola}`,
        height: "150px",
        width: "150px"
    }

    return (
        <div style={estilo}>
        </div>
    )
}