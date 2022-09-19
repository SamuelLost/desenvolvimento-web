// import logo from './logo.svg';
import './App.css';
import { Contador } from './components/estados/Contador';
import { VotaCidades } from './components/estados/VotaCidades';
// import { Pai } from './components/paiFilho/Pai';
// import OlaMundo from './components/OlaMundo';
// import Estudante from './components/Estudante';
// import {Estudante} from './components/Estudante';
// import {Vecna as V, Eleven, Will} from "./components/StrangerThings"
// import * as ST from "./components/StrangerThings"
// import Calculadora from './components/Calculadora';
// import IMC from './components/IMC';
// import { Grupo } from './components/avengers/Grupo';
// import { Heroi } from './components/avengers/Heroi';
// import { Disciplina } from './components/universidade/Disciplina';
// import { Estudante } from './components/universidade/Estudante';
// function App() {
//   return (

//     <div className="App">
//       <h2>Samuel Henrique</h2>
//       {<Estudante
//         nome = 'Samuel Henrique'
//         curso = 'Engenharia de Computação'
//         universidade = 'UFC'
//       />}
//       {/* <OlaMundo/>
//       {<Estudante
//         nome = 'Samuel Henrique'
//         curso = 'Engenharia de Computação'
//         universidade = 'UFC'
//       />}
//       <V/>
//       <Eleven/>
//       <Will/>
//       <ST.Vecna/>
//       <ST.Eleven/>
//       <ST.Will/>
//       <Calculadora op="SOMA" x={10} y={20}/> */}
//       <IMC peso={83} altura={1.73}/>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Grupo titulo='Vingadores de Verdade'>
//         <Heroi nome='Soldier Boy' />
//         <Heroi nome='Homelander' />
//         <Heroi nome='Black Noir' />
//         <h5>Fim do time</h5>
//       </Grupo>
//     </div>
//   );
// }

/*const students = [
  {
    nome: 'Samuel Henrique',
    curso: 'Engenharia de Computação',
    universidade: 'UFC'
  },
  {
    nome: 'Pedro Cornélius',
    curso: 'Engenharia de Computação',
    universidade: 'UFC'
  },
  {
    nome: 'Anssu Paredão',
    curso: 'Engenharia de Computação',
    universidade: 'UFC'
  }
]*/

/*function App() {
  return (
    <div className="App">
      <Disciplina titulo='Web'>
        {
          students.map((estudante) => {
            return <Estudante {...estudante} />
          })
        }
      </Disciplina>
    </div>
  );
}*/

function App() {
  return (
    <div className="App">
      {/* <Pai /> */}
      <Contador/>
      <VotaCidades></VotaCidades>
    </div>
  )
}

export default App;
