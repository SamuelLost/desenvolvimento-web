// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Routes, Route, Link } from 'react-router-dom'
import { EditStudent } from './components/students/EditStudent';
import { CreateStudent } from './components/students/CreateStudent';
import { ListStudent } from './components/students/ListStudent';
import { ListTeacher } from './components/teacher/ListTeacher';
import { CreateTeacher } from './components/teacher/CreateTeacher';
import { EditTeacher } from './components/teacher/EditTeacher';
import { Home } from './components/Home';
//localhost:3001/students

// import './App.css';

function App() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container collapse navbar-collapse' id='navbarSupoortedContent'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>CRUD</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/"} className='nav-link'>Home</Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to={"/editStudent"} className='nav-link'>Editar Estudante</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/listStudent"} className='nav-link'>Listar Estudante</Link>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className='nav-item'>
                                    <Link to={"/editStudent"} className='nav-link'>Editar Estudante</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to={"/listStudent"} className='nav-link'>Listar Estudante</Link>
                                </li>
                            </ul>
                        </li> */}

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Estudante
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to={"/createStudent"} className='dropdown-item'>Criar Estudante</Link>
                                </li>
                                <li>
                                    <hr className='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to={"/editStudent"} className='dropdown-item'>Editar Estudante</Link>
                                </li>
                                <li>
                                    <hr className='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to={"/listStudent"} className='dropdown-item'>Listar Estudante</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Professor
                            </a>
                            <ul className="dropdown-menu">
                                <li>

                                    <Link to={"/createTeacher"} className='dropdown-item'>Criar Professor</Link>
                                </li>
                                <li>
                                    <hr className='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to={"/editTeacher"} className='dropdown-item'>Editar Professor</Link>
                                </li>
                                <li>
                                    <hr className='dropdown-divider' />
                                </li>
                                <li>
                                    <Link to={"/listTeacher"} className='dropdown-item'>Listar Professor</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* <Link to={"createStudent"} className="navbar-brand" style={{paddingLeft:10}}>Criar Estudante</Link>
                
                <Link to={"editStudent"} className="navbar-brand" style={{paddingLeft:10}}>Editar Estudante</Link>
                <Link to={"listStudent"} className="navbar-brand" style={{paddingLeft:10}}>Listar Estudante</Link> */}
            </nav>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='createStudent' element={<CreateStudent />} />
                    <Route path='editStudent/:id' element={<EditStudent />} />
                    <Route path='listStudent' element={<ListStudent />} />
                    <Route path='createTeacher' element={<CreateTeacher />} />
                    <Route path='editTeacher' element={<EditTeacher />} />
                    <Route path='listTeacher' element={<ListTeacher />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
