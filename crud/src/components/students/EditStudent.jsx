import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

import { FirebaseContext } from "../../utils/FirebaseContext"
import { StudentService } from "../../services/StudentService"


export const EditStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <EditStudent firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const EditStudent = ({ firebase }) => {

    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [ira, setIra] = useState('')
    const navigate = useNavigate()
    const params = useParams()

    useEffect(

        () => {
            //     axios.get(`http://localhost:3001/estudantes/${params.id}`)
            //     .then(
            //         (response) => {
            //             setName(response.data.name)
            //             setCourse(response.data.course)
            //             setIra(response.data.ira)
            //         }
            //     )
            //     .catch(
            //         (error) => {
            //             console.log(error)
            //         }
            //     )
            // }, [params.id]
            StudentService.retrieve(
                firebase.getFirestoreDB(),
                (student) => {
                    setName(student.name)
                    setCourse(student.course)
                    setIra(student.ira)
                },
                params.id
            )
        }, [params.id, firebase]
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        // const baseURI = `http://localhost:3001/estudantes/${params.id}`
        // //axios put
        const studentUpdated = { name, course, ira }
        // axios.put(baseURI, studentUpdated)
        //     .then(
        //         (response) => {
        //             navigate('/listStudent')
        //         }
        //     )
        StudentService.update(
            firebase.getFirestoreDB(),
            (result) => {
                // result ? navigate('/listStudent') : alert('Erro ao atualizar')
                result ? navigate('/listStudent') : navigate('/error')
                // if (result)
                //     navigate('/listStudent')
                // else
                //     navigate('/error')
            },
            params.id,
            studentUpdated
        )
    }

    return (
        <div style={{ marginTop: 15 }}>
            <h2>Editar Estudante</h2>

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
                    <label htmlFor="">IRA: </label>
                    <input type="number" step="any"
                        className="form-control"
                        placeholder="Digite seu IRA"
                        // value={ira}
                        value={ira ?? 0.0}
                        onChange={
                            (event) => {
                                // console.log(event.target.value)
                                setIra(event.target.value)
                            }
                        }
                    />
                </div>
                <div className="form-group" style={{ marginTop: 15 }}>
                    <input type="submit" value={"Editar Estudante"}
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}