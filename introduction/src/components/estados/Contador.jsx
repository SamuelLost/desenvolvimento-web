import { useState } from "react";

export const Contador = () => {
    const [contador, setContador] = useState(0)
    const [helder, setHelder] = useState(false)
    const contar = () => {
        // setContador(prev => prev +1)
        // setContador(prev => prev + 1)
        setContador(contador + 1)
    }

    const renderizarHelder = () => {
        if(helder) {
            return (
                <>
                    <br />
                    <img src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/Francisco-Helder-C%C3%A2ndido-dos-Snatos-Filho1-225x300.png" alt="Italian Trulli"/>
                </>
            )
        }
        return null
    }

    const modificarHelder = () => {
        setHelder(!helder)
    }
    return (
        <div >
            <h2>Contador: {contador} </h2>
            <button onClick={() => contar()}>Acrescentar</button>
            <button onClick={() => modificarHelder()}>{(!helder) ? "Mostrar Heldinho" : "Esconder Heldinho"}</button>
            {
                renderizarHelder()
            }
        </div>
    )
}
