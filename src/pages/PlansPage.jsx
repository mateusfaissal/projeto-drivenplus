import { SCPlans } from '../assets/style/StyledPlansPage';
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



