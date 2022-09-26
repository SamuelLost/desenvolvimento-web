import { useState } from "react"
export const CreateStudent = () => {

    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [ira, setIra] = useState(0.0)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        console.log(course)
        console.log(ira)

        setCourse('')
        setName('')
        setIra(0.0)
    }

    return (
        <div style={{marginTop:15}}>
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
                <div className="form-group" style={{marginTop:15}}>
                    <input type="submit" value={"Criar Estudante"}
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}