// import logo from './logo.svg';
import './App.css';
import { Questao01 } from './components/q01/Questao01';
import { Questao01A } from './components/q01/Questao01A';
import { Questao01B } from './components/q01/Questao01B';
import { Questao02 } from './components/q02/Questao02';
import { Questao03 } from './components/q03/Questao03';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Questao04 } from './components/q04/Questao04';
import { Questao05 } from './components/q05/Questao05';
function renderQ1() {
    return (
        <div /*className="App"*/>
            <Questao01>
                <Questao01A />
                <Questao01B />
            </Questao01>
        </div>
    );
}
function renderQ2() {
    return (
        <div>
            <Questao02 />
        </div>
    )
}
function renderQ3() {
    return (
        <div>
            <Questao03 />
        </div>
    )
}
function renderQ4() {
    return (
        <div>
            <Questao04 />
        </div>
    )
}
function renderQ5() {
    return (
        <div className='text-center'>
            <Questao05 />
        </div>
    )
}
function App() {
    //Para alternar entre as questões, modifique a variável questão
    //entre os valores 1-5
    let questao = 1;
    switch (questao) {
        case 1:
            return renderQ1();
        case 2:
            return renderQ2();
        case 3:
            return renderQ3();
        case 4:
            return renderQ4();
        case 5:
            return renderQ5();
        default:
            break;
    }
}

export default App;
