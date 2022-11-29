import { useState } from "react"
// import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from "../../utils/FirebaseContext"
import { UserService } from "../../services/UserService"

export const SignUpUserPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <SignUpUser firebase={value} />}
        </FirebaseContext.Consumer>
    )
}

const SignUpUser = ({ firebase }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(email)
        // console.log(password)
        UserService.signUp(
            firebase.getAuthentication(),
            email,
            password,
            () => {}
        )
        
    }

    return (
        <div style={{ marginTop: 15 }}>
            <h2>Cadastrar Usuário</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">E-mail: </label>
                    <input type="email"
                        className="form-control"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={
                            (event) => {
                                // console.log(event.target.value)
                                setEmail(event.target.value)
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Senha: </label>
                    <input type="password"
                        className="form-control"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={
                            (event) => {
                                // console.log(event.target.value)
                                setPassword(event.target.value)
                            }
                        }
                    />
                </div>
                <div className="form-group" style={{ marginTop: 15 }}>
                    <input type="submit" value={"Cadastrar"}
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}