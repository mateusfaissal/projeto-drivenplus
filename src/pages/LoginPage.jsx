import { SCLogin } from "../assets/style/StyledLoginPage";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import logo from '../assets/images/logo-home.png';
import InfosUserContext from '../assets/contexts/InfosUserContext';


export default function LoginPage() {

    const { setInfosUser } = useContext(InfosUserContext);

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        const localInfos = JSON.parse(localStorage.getItem('infosUser'));

        if (localInfos != null) {
            const userData = {
                email: localInfos.email,
                id: localInfos.id,
                cpf: localInfos.cpf,
                name: localInfos.name,
                password: localInfos.password,
                membership: localInfos.membership,
                token: localInfos.token
            };

            setInfosUser(userData);

            if (localInfos.membership === null) {
                navigate(`/subscriptions`);
            } else {
                navigate(`/home`);
            }
        }
    }, []);

    function handleRequest(e) {
        e.preventDefault();

        axios.post(
            "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login",
            {
                email: email,
                password: password
            }
        )
            .then(handleResponse)
            .catch(error => {
                alert(error.response.data.message);
            });

    }

    function handleResponse(response) {
        const userData = {
            email: response.data.email,
            id: response.data.id,
            cpf: response.data.cpf,
            name: response.data.name,
            password: response.data.password,
            membership: response.data.membership,
            token: response.data.token
        };

        setInfosUser(userData);

        localStorage.setItem("infosUser", JSON.stringify(userData));

        if (response.data.membership === null) {
            navigate(`/subscriptions`);
        } else {
            navigate(`/home`);
        }
    }

    return (
        <SCLogin>
            <img src={logo}></img>
            <input placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}>
            </input>
            <input placeholder='Senha' type="password" required value={password} onChange={(e) => setPassword(e.target.value)}>
            </input>
            <button type='submit' onClick={(e) => { handleRequest(e) }}>ENTRAR</button>

            <Link to={`/sign-up`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </SCLogin>
    )
}

