import { useState } from "react"
// import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from "../../utils/FirebaseContext"
import { StudentService } from "../../services/StudentService"

export const CreateStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <CreateStudent firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const CreateStudent = ({ firebase }) => {

    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [ira, setIra] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const newStudent = { name, course, ira }
        StudentService.add(
            firebase.getFirestoreDB(),
            (id) => {
                alert(`Estudante ${id} adicionado`)
                navigate('/listStudent')
            },
            newStudent
        )
    }

    return (
        <div style={{ marginTop: 15 }}>
            <h2>Criar Estudante</h2>

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
                    <label htmlFor="">IRA: </label>
                    <input type="number" step="any"
                        className="form-control"
                        placeholder="Digite seu IRA"
                        value={ira}
                        onChange={
                            (event) => {
                                // console.log(event.target.value)
                                setIra(event.target.value)
                            }
                        }
                    />
                </div>
                <div className="form-group" style={{ marginTop: 15 }}>
                    <input type="submit" value={"Criar Estudante"}
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}