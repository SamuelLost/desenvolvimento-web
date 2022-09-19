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

export const Estudante = ({ nome, curso, universidade, disciplina }) => {
    return (
        <div>
            <h4>Nome: {nome}<br /></h4>
            <h4>Curso: {curso}<br /></h4>
            <h4>Universidade: {universidade}<br /></h4>
            <h4>Disciplina: {disciplina}</h4>
            <hr />
        </div>
    );
}

// export default Estudante