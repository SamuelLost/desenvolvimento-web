import React from "react";

// const Estudante = (props) => 
//     <div>
//         Nome: {props.nome}<br />
//         Curso: {props.curso}<br />
//         Universidade: {props.universidade}<br />
//     </div>

// const Estudante = (props) => {
//     const {nome, curso, universidade} = props
//     return (
//         <div>
//             Nome: {nome}<br />
//             Curso: {curso}<br />
//             Universidade: {universidade}<br />
//         </div>
//     );
// }

export const Estudante = ({nome, curso, universidade}) => {
    return (
        <div>
            Nome: {nome}<br />
            Curso: {curso}<br />
            Universidade: {universidade}<br />
        </div>
    );
}

// export default Estudante