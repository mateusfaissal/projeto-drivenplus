import { useState} from 'react';
import styled from 'styled-components';
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

    if(request === true){
        return(
            <h1>LOADING...</h1>
        )
    }

    return (
        <SCSignUp>
            <input placeholder='Nome' required value={name} onChange={(e)=>setName(e.target.value)}>
            </input>
            <input placeholder='CPF' required value={cpf} onChange={(e)=>setCpf(e.target.value)}>
            </input>
            <input placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}>
            </input>
            <input placeholder='Senha' type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}>
            </input>
            <button type='submit' onClick={(e)=>{handleSignUp(e)}}>CADASTRAR</button>
            <Link to={"/"}>
            <p>Já tem uma conta? Entre!</p>
            </Link>
        </SCSignUp>
    )
}

const SCSignUp = styled.form`
padding-top:147px;
min-height:100%;
background: #0E0E13;
img{
    height:180px;
    width:180px;
    margin-top:70px;
    margin-bottom:32px;
}
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
input{
    box-sizing: border-box;
    width: 303px;
height: 45px;
margin-bottom:6px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 8px;
padding-left:11px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #7E7E7E;
margin-bottom:16px;
}
button{
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 122px;
gap: 10px;
width: 299px;
height: 52px;
background: #FF4791;
border-radius: 8px;
border-width:0px;
margin-top:8px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
margin-bottom:24px;
}

p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-decoration-line: underline;
color: #FFFFFF;
}
button:hover{
    cursor:pointer;
}
p:hover{
    cursor:pointer;
}
`