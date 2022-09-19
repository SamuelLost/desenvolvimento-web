import React from "react";
import { Filho } from "./Filho";

export const Pai = () => {

    const callBackPai = (msg) => {
        alert("Oi meu filho " + msg)
    } 

    const funcaoSomar = (x,y) => {
        return x+y
    }

    return (
        <div>
            <Filho nomePai='Pai da Silva' callBackPai={callBackPai} funcaoSomar={funcaoSomar}/>
        </div>
    )
}