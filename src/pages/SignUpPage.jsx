import { useState } from 'react';
import { SCSignUp } from '../assets/style/StyledSignUpPage';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
    const [request, setRequest] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const navigate = useNavigate();


    function handleSignUp(e) {
        e.preventDefault();
        setRequest(true);

        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", {
            email,
            name,
            cpf,
            password
        })
            .then(() => {
                setRequest(false);
                navigate(`/`);
            })
            .catch(error => {
                setRequest(false);
                alert(error.response.data.message);
            });
    }

    if (request === true) {
        return (
            <h1>LOADING...</h1>
        )
    }

    return (
        <SCSignUp>
            <input placeholder='Nome' required value={name} onChange={(e) => setName(e.target.value)}>
            </input>
            <input placeholder='CPF' required value={cpf} onChange={(e) => setCpf(e.target.value)}>
            </input>
            <input placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}>
            </input>
            <input placeholder='Senha' type="password" required value={password} onChange={(e) => setPassword(e.target.value)}>
            </input>
            <button type='submit' onClick={(e) => { handleSignUp(e) }}>CADASTRAR</button>
            <Link to={"/"}>
                <p>Já tem uma conta? Entre!</p>
            </Link>
        </SCSignUp>
    )
}

