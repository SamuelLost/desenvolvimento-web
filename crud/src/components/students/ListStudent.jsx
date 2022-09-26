import { useState } from "react"
import { students } from "./data"

export const ListStudent = () => {

    const [estudantes, setEstudantes] = useState(students)

    const generateTableBody = () => {
        return (
            estudantes.map(
                (element) => (
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.ira}</td>
                    </tr>
                )
            )
        )
    }

    return (
        <div>
            <h1>Listar Estudante</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
                    </tr>
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
    )
}