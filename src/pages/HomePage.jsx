import { SCHome, SCListPerk } from "../assets/style/StyledHomePage"
import { Link, useNavigate } from "react-router-dom"
import InfosUserContext from "../assets/contexts/InfosUserContext"
import axios from "axios"
import { useContext } from "react"



export default function HomePage() {

    const { infosUser } = useContext(InfosUserContext);

    const navigate = useNavigate();


    function removePlan() {
        const config = {
            headers: { Authorization: `Bearer ${infosUser.token}` }
        };

        axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config)
            .then(() => {
                navigate(`/subscriptions`);
            })
            .catch(error => {
                console.error("Erro ao excluir plano:");
                console.error(error);
            });
    }


    return (
        <SCHome>
            <header>
                <div>
                    <img src={infosUser?.membership.image}></img>
                </div>
                <h1>Olá, {infosUser.name}</h1>
            </header>
            <SCListPerk>
                {infosUser?.membership.perks.map((perk, index) => (<li key={index}><a href={perk.link}>
                    <div>{perk.title}</div>
                </a></li>))}
            </SCListPerk>
            <footer>
                <Link to={`/subscriptions`}><div>Mudar plano</div></Link>
                <div onClick={() => { removePlan() }}>Cancelar plano</div>
            </footer>
        </SCHome>
    )
}

