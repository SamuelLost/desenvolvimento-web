import React from "react";
import { useState } from "react";

export function Questao02() {
    const [numA, setNumA] = useState(0.0)
    const [numB, setNumB] = useState(0.0)
    const [result, setResult] = useState(0.0)
    const [error, setError] = useState('')
    
    // function handleInput(event) {
    //     event.preventDefault();

    // }

    function soma() {
        setError('');
        setResult(numA + numB);
    }
    function sub() {
        setError('');
        setResult(numA - numB);
    }
    function divi() {
        if(numB === 0) {
            setError('Operação não permitida');
        }
        setResult(numA / numB);
    }
    function mult() {
        setError('');
        setResult(numA * numB);
    }
    return (
        <div className="container-sm" style={{width:400}}>
            <h4 className="mt-4">Calculadora</h4>
            {error && <p style={{color:"red"}}>{error}</p>}
            <input type="number" step="any"
                id="soma"
                placeholder="Digite número A"
                className="form-control border border-dark"
                onChange={
                    (event) => {
                        setNumA(Number(event.target.value))
                    }
                }
            /> <br />
            <input type="number" step="any"
                id="soma"
                className="form-control border border-dark"
                placeholder="Digite número B"
                onChange={
                    (event) => {
                        setNumB(Number(event.target.value))
                    }
                }
            /> <br />
            <button type="button" className="btn btn-outline-dark" onClick={soma}>+</button>
            <button type="button" className="ms-2 btn btn-outline-dark" onClick={sub}>-</button>
            <button type="button" className="ms-2 btn btn-outline-dark" onClick={mult}>*</button>
            <button type="button" className="ms-2 btn btn-outline-dark" onClick={divi}>/</button>
            <h4 className="mt-2">Resultado = <span style={{color:"red"}}>{result}</span></h4>
        </div>
    )
}