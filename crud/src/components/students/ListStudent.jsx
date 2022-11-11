import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// import { students } from "./data"
import axios from "axios"
import { FirebaseContext } from "../../utils/FirebaseContext"
import { StudentService } from "../../services/StudentService"

export const ListStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <ListStudent firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const ListStudent = ({ firebase }) => {

    const [estudantes, setEstudantes] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(
        () => {
            // axios.get("http://localhost:3001/estudantes")
            //     .then(
            //         (response) => {
            //             // console.log(response.data)
            //             setEstudantes(response.data)
            //         }
            //     )
            //     .catch(
            //         (error) => {
            //             console.log(error)
            //         }
            //     )
            StudentService.list_on_snapshot(
                firebase.getFirestoreDB(),
                (students) => {
                    setEstudantes(students)
                    console.log(students)
                }
            )
            // setEstudantes(students);
        },
        [firebase]
    )

    //Não cria um novo array, apenas atualiza o array existente
    function deleteStudentV2(id) { 
        if(window.confirm("Deseja realmente excluir o estudante?")) {
            StudentService.delete(
                firebase.getFirestoreDB(),
                () => {
                    let studentsTemp = estudantes
                    for(let i = 0; i < studentsTemp.length; i++) {
                        if(studentsTemp[i].id === id) {
                            studentsTemp.splice(i, 1)
                            break
                        }
                    }
                    setEstudantes(studentsTemp)
                    setReload(!reload)
                },
                id
            )
        }
    }

    //Cria um novo array
    function deleteStudent(id) {
        if (window.confirm('Deseja excluir?')) {
            /* axios.delete(`http://localhost:3001/estudantes/${id}`)
                .then(
                    () => {
                        console.log("OK")
                        const newStudents = estudantes.filter(estudante => estudante.id !== id)
                        setEstudantes(newStudents)

                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                ) */
            StudentService.delete(
                firebase.getFirestoreDB(),
                () => {
                    const newStudents = estudantes.filter((estudante) => estudante.id !== id)
                    setEstudantes(newStudents)
                },
                id
            )

        }
    }

    const generateTableBody = () => {
        return (
            estudantes.map(
                (element) => (
                    <tr key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.ira}</td>
                        <td>
                            {/* <Link to={'editStudent/'+element.id} className="btn btn-primary"> */}
                            <Link to={`/editStudent/${element.id}`} className="btn btn-primary">
                                Editar
                            </Link>

                            <button className="btn btn-danger ms-3" onClick={
                                () => deleteStudentV2(element.id)
                            }>
                                Excluir
                            </button>
                        </td>
                    </tr>
                )
            )
        )
    }

    return (
        <div>
            <h1>Listar Estudante</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                        {/* <th colSpan={2}>Ações</th> */}
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
    )
}