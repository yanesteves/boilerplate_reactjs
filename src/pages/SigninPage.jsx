import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from '../context/AuthContext.jsx'
import { apiLogin } from "../services/api.js"

function SigninPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const { login } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await apiLogin(username, password)
            if (response.success) {
                login(response)
                navigate('/nft-store')
            } else {
                // alert('Usuário ou senha incorretos')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Signin</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default SigninPage