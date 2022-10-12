import React from "react";

export function Questao01B() {
    let disciplinas = [
        'Sinais e Sistemas',
        'Cálculo III',
        'EDO',
        'ARQ II',
        'POO',
        'Eletrônica II',
        'TPSE1',
        'TPSE2'
    ]

    return (
        <>
            <h4>Disciplinas:</h4>
            <ul style={{width:"100%"}}>
                {disciplinas.map(disciplina => <h5><li>{disciplina}</li></h5>)}
            </ul>
        </>
    )
}