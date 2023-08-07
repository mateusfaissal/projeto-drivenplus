import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import InfosUserContext from '../assets/contexts/InfosUserContext';

export default function PlansPage() {

    const { infosUser } = useContext(InfosUserContext);

    const config = {
        headers: { Authorization: `Bearer ${infosUser.token}` }
    };

    const [plans, setPlans] = useState([]);

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
            .then(response => {
                setPlans(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar planos:", error);
            });
    }, []);

    return (
        <SCPlans>
            <h3>Escolha seu Plano</h3>
            {plans.map((plan, index) => (
                <Link to={`/subscriptions/${plan.id}`} key={index}>
                    <li>
                        <img src={plan.image} alt={`Plano ${plan.id}`} />
                        <h4>R$ {plan.price}</h4>
                    </li>
                </Link>
            ))}
        </SCPlans>
    );
}

const SCPlans = styled.ul`
display: flex;
flex-direction:column;
align-items:center;
li img {
    height:95px;
    width:140px;
}
li{
    justify-content:space-around;
    text-decoration:none;
    align-items:center;
    display:flex;
    height:180px;
    width:290px;
    background: #0E0E13;
border: 3px solid #7E7E7E;
border-radius: 12px;
margin-bottom:10px;
}
h4{
    text-decoration:none;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
}
h3{
    margin-top:29px;
    text-decoration:none;
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
margin-bottom:24px;
}


`

