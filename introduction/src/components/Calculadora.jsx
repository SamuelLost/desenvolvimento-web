import React from "react";

function calculadora({op, x, y}) {
    
    function soma() {
        return x+y;
    }

    function subtracao() {
        return x-y;
    }

    // function multiplicacao() {
    //     return x-y;
    // }

    // function divisao() {
    //     return x-y;
    // }
    if(op === "SOMA")
        return (
            <div>
                A soma é: {soma()}
            </div>
        )
    return (
        <div>
            A diferença é: {subtracao()}
        </div>
    )
}

export default calculadora;