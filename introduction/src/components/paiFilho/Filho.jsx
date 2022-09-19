import React from "react";

export const Filho = ({nomePai, callBackPai, funcaoSomar}) => {

    const acaoBotao = () => {
        alert("Eu sou a ação do botão")
        console.log(funcaoSomar(3,2))
    }
    return (
        <div>
            <button onClick={() => callBackPai("Filho da Silva")}>
                Oi {nomePai}!
            </button>
            <button onClick={acaoBotao}>
                Oi {nomePai}!
            </button>
            {/* <button onClick={() => acaoBotao()}>
                Oi {nomePai}!
            </button> */}
        </div>
    )
}