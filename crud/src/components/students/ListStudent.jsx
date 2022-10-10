import { useState, useEffect } from "react"
// import { students } from "./data"
import axios from "axios"

export const ListStudent = () => {

    const [estudantes, setEstudantes] = useState([])

    useEffect(
        () => {
            axios.get("http://localhost:3001/estudantes")
            .then(
                (response) => {
                    // console.log(response.data)
                    setEstudantes(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
        },
        []
    )

    const generateTableBody = () => {
        return (
            estudantes.map(
                (element) => (
                    <tr key={element.id}>
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