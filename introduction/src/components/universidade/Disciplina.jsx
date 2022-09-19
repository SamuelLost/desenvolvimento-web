import React from "react";

export const Disciplina = ({ children, titulo }) => {
    return (
        <div>
            {/* <h1>{titulo}</h1> */}
            {
                React.Children.map(
                    children,
                    (elemento) => {
                        return React.cloneElement(elemento, { disciplina: titulo })
                    }
                )
            }
        </div>
    )
}