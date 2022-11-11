import { FirebaseContext } from "../../utils/FirebaseContext"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { TeacherService } from "../../services/TeacherService"

export const CreateTeacherPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <CreateTeacher firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const CreateTeacher = ({firebase}) => {

    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [wage, setWage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTeacher = { name, course, wage }
        TeacherService.add(
            firebase.getFirestoreDB(),
            (id) => {
                alert(`Professor ${id} adicionado`)
                navigate('/listTeacher')
            },
            newTeacher
        )
    }
    return (
        <div style={{marginTop: 15}}>
            <h2>Criar Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Nome: </label>
                    <input type="text"
                        className="form-control"
                        placeholder="Digite seu nome"
                        value={name}
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
                        value={course}
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
                        value={wage}
                        onChange={
                            (event) => {
                                // console.log(event.target.value)
                                setWage(event.target.value)
                            }
                        }
                    />
                </div>
                <div className="form-group" style={{ marginTop: 15 }}>
                    <input type="submit" value={"Criar Professor"}
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}