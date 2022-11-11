import { FirebaseContext } from "../../utils/FirebaseContext"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { TeacherService } from "../../services/TeacherService"
export const EditTeacherPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <EditTeacher firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const EditTeacher = ({ firebase }) => {

    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [wage, setWage] = useState('')
    const navigate = useNavigate()
    const params = useParams()


    useEffect(
        () => {
            TeacherService.retrieve(

                firebase.getFirestoreDB(),
                (teacher) => {
                    setName(teacher.name)
                    setCourse(teacher.course)
                    setWage(teacher.wage)
                },
                params.id
            )
        }, [params.id, firebase]
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        const teacherUpdated = { name, course, wage }
        TeacherService.update(
            firebase.getFirestoreDB(),
            (result) => {
                // result ? navigate('/listStudent') : alert('Erro ao atualizar')
                result ? navigate('/listTeacher') : navigate('/error')
            },
            params.id,
            teacherUpdated
        )
    }
    return (
        <div style={{ marginTop: 15 }}>
            <h2>Editar Professor</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Nome: </label>
                    <input type="text"
                        className="form-control"
                        placeholder="Digite seu nome"
                        value={(name === null || name === undefined) ? '' : name}
                        onChange={
                            (event) => {
                                // console.log(event.target.value)
                                setName(event.target.value)
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Curso: </label>
                    <input type="text"
                        className="form-control"
                        placeholder="Digite seu curso"
                        //operador de coalescência nula
                        value={course ?? ''}
                        //value={course}
                        onChange={
                            (event) => {
                                // console.log(event.target.value)
                                setCourse(event.target.value)
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Salário: </label>
                    <input type="number" step="any"
                        className="form-control"
                        placeholder="Digite seu salário"
                        // value={ira}
                        value={wage ?? 0.0}
                        onChange={
                            (event) => {
                                // console.log(event.target.value)
                                setWage(event.target.value)
                            }
                        }
                    />
                </div>
                <div className="form-group" style={{ marginTop: 15 }}>
                    <input type="submit" value={"Editar Professor"}
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}