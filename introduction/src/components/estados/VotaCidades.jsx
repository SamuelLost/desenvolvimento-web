import { useState } from "react"

export const VotaCidades = () => {
    const [qxd, setQxd] = useState(0)
    const [lim, setLim] = useState(0)
    const [crateus, setCrateus] = useState(0)

    const reset = () => {
        setCrateus(0);
        setLim(0);
        setQxd(0);
    }
    const fim = () => {
        let aux = Math.max(qxd, lim, crateus)
        if((aux === qxd && aux === lim) || (aux === crateus && aux === lim) || (aux === crateus && aux === qxd)) {
            alert("Houve empate")
        } else if(aux === lim) {
            alert("Limoeiro venceu")
        } else if(aux === crateus) {
            alert("Crateús venceu")
        } else {
            alert("Quixadá venceu")
        }
    }
    return (
        <div>
            <div>
                <h2>Quixadá: {qxd}</h2>
                <h2>Limoeiro do Norte: {lim}</h2>
                <h2>Crateús: {crateus}</h2>
            </div>
            <button onClick={() => setQxd(ant => ant +1)}>Votar Quixadá</button>
            <button onClick={() => setLim(ant => ant +1)}>Votar Limoeiro do Norte</button>
            <button onClick={() => setCrateus(ant => ant +1)}>Votar Crateús</button>
            <button onClick={() => reset()}>Resetar</button>
            <button onClick={() => fim()}>Fim da votação</button>
        </div>
    )
}