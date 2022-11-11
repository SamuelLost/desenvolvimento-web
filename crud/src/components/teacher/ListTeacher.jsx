import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { TeacherService } from "../../services/TeacherService"
import { FirebaseContext } from "../../utils/FirebaseContext"

export const ListTeacherPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <ListTeacher firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const ListTeacher = ({ firebase }) => {

    const [teachers, setTeachers] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(
        () => {
            TeacherService.list_on_snapshot(
                firebase.getFirestoreDB(),
                (teachers) => {
                    setTeachers(teachers)
                    //console.log(teachers)
                }
            )
        },
        [firebase]
    )

    const deleteTeacher2 = (id) => {
        if (window.confirm('Deseja excluir?')) {
            TeacherService.delete(
                firebase.getFirestoreDB(),
                () => {
                    const newStudents = teachers.filter((estudante) => estudante.id !== id)
                    setTeachers(newStudents)
                },
                id
            )

        }
    }

    const generateTableBody = () => {
        return (
            teachers.map(
                (teacher) => (
                    <tr key={teacher.id}>
                        <td>{teacher.id}</td>
                        <td>{teacher.name}</td>
                        <td>{teacher.course}</td>
                        {/* <td>{"R$ " + teacher.wage}</td> */}
                        <td>
                            {
                                new Intl.NumberFormat('pt-BR',
                                    {
                                        style: 'currency',
                                        currency: 'BRL',
                                        // minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }
                                ).format(teacher.wage)}
                        </td>
                        <td>
                            <Link to={`/editTeacher/${teacher.id}`} className="btn btn-primary">
                                Editar
                            </Link>
                            <button className="btn btn-danger ms-3" onClick={
                                () => deleteTeacher2(teacher.id)
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
        <div style={{ marginTop: 15 }}>
            <h2>Listar Professor</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Salário</th>
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