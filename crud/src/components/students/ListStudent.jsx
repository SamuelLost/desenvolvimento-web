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
            StudentService.list(
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
    function deleteStudent(id) {
        if (window.confirm('Deseja excluir?')) {
            axios.delete(`http://localhost:3001/estudantes/${id}`)
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
                                () => deleteStudent(element.id)
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