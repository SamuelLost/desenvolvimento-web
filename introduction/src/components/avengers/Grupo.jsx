import React from "react";
// import { Heroi } from "./Heroi";
// export const Grupo = ({titulo}) => {
//     return (
//         <div>
//             <h1>{titulo}</h1>
//             <Heroi nome='Soldier Boy' />
//             <Heroi nome='Homelander' />
//             <Heroi nome='Black Noir' />
//         </div>
//     )
// }

// export const Grupo = (props) => {
//     return (
//         <div>
//             <h1>{props.titulo}</h1>
//             {props.children}
//         </div>
//     )
// }
export const Grupo = ({children, titulo}) => {
    return (
        <div>
            <h1>{titulo}</h1>
            {
                React.Children.map(
                    children, 
                    (elemento) => {
                        return React.cloneElement(elemento, {titulo})
                    }
                )
            }
        </div>
    )
}