// import logo from './logo.svg';
import './App.css';
import { mapImg } from "./images/imgs"
import { Arena } from './components/questao1/Arena';
import { Arena as Arena2 } from './components/questao2/Arena';
import { Arena as Arena3 } from './components/questao3/Arena';
import { World } from './components/questao3/World';
import { World as WorldV4 } from './components/questao4/World';
import { Arena as Arena4 } from './components/questao4/Arena'; 
import { Hero as Hero4 } from './components/questao4/Hero';
import { Enemy as Enemy4 } from './components/questao4/Enemy';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function renderQ1() {
    return (
        <div className='App'>
            <Arena />
        </div>
    )
}
function renderQ2() {
    return (
        <div className='App'>
            <Arena2 />
        </div>
    )
}

function renderQ3() {
    return (
        <div className='App text-success'>
            <World>
                <Arena3></Arena3>
                <Arena3></Arena3>
                <Arena3></Arena3>
            </World>
        </div>
    )
}

function renderQ4() {
    return (
        <div className='App text-info bg-dark'>
            <WorldV4>
                <Arena4 name="Castelão">
                    <Enemy4 name="Madara" img={mapImg.Madara}  />       
                    <Hero4 name="Naruto" img={mapImg.Naruto} />          
                </Arena4>
                <Arena4 name="Fonte Nova">
                    <Enemy4 name="Madara" img={mapImg.Madara}  />       
                    <Hero4 name="Naruto" img={mapImg.Naruto} />          
                </Arena4>
                <Arena4 name="Maracanã">
                    <Enemy4 name="Madara" img={mapImg.Madara}  />       
                    <Hero4 name="Naruto" img={mapImg.Naruto} />          
                </Arena4>

            </WorldV4>
        </div>
    )
}
function App() {
    let questao = 4;
    switch (questao) {
        case 1:
            return renderQ1();
        case 2:
            return renderQ2();
        case 3:
            return renderQ3();
        case 4:
            return renderQ4();
        default:
            break;
    }
}

export default App;
