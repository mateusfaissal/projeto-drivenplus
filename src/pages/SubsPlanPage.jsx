import { SCPlanStyle, SCForm, SCInfos, ConfirmBox } from "../assets/style/StyledSubsPlanPage"
import axios from "axios"
import { useState, useContext, useEffect } from "react"
import { useNavigate, Link, useParams, } from "react-router-dom"
import InfosUserContext from "../assets/contexts/InfosUserContext"

export default function SubsPlanPage() {

    const { setInfosUser } = useContext(InfosUserContext);

    const [request, setRequest] = useState(true);

    const [cardName, setCardName] = useState()

    const [cardNumber, setCardNumber] = useState()

    const [securityNumber, setSecurityNumber] = useState()

    const [expirationDate, setExpirationDate] = useState()

    const { infosUser } = useContext(InfosUserContext);

    const { idPlan } = useParams();

    const [infosPlan, setInfosPlan] = useState([])

    const [confirmBox, setConfirmBox] = useState(false);

    const config = {
        headers: { Authorization: `Bearer ${infosUser.token}` }
    }

    const navigate = useNavigate();

    useEffect(() => {
        const planPromise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlan}`, config);

        planPromise.then(response => {
            setInfosPlan(response.data);
            setRequest(false);
        }).catch(error => {
            console.error("Erro nas assinaturas:");
            console.error(error);
        });
    }, []);


    function postCardInfos() {

        const subscriptionPromise = axios.post(
            `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`,
            {
                membershipId: idPlan,
                cardName: cardName,
                cardNumber: cardNumber,
                securityNumber: securityNumber,
                expirationDate: expirationDate
            },
            config
        );

        subscriptionPromise.then(response => {
            const tempInfosUser = { ...infosUser };
            tempInfosUser.membership = response.data.membership;

            console.log("Temp user info:");
            console.log(tempInfosUser);

            localStorage.setItem("infosUser", JSON.stringify(tempInfosUser));
            setInfosUser(tempInfosUser);
            navigate(`/home`);
        }).catch(error => {
            console.error(error);
        });
    }


    function handleConfirmation(e) {

        e.preventDefault();
        setConfirmBox(!confirmBox)
    }

    if (request) {
        return (
            <h1>LOADING...</h1>
        )
    }
    return (
        <SCPlanStyle confirmBox={confirmBox}>
            <header>
                <Link to={'/subscriptions'}>
                    <ion-icon name="arrow-back"></ion-icon></Link>

            </header>
            <SCInfos>
                <img src={infosPlan.image} ></img>
                <h2>{infosPlan.name}</h2>
                <h3><ion-icon name="id-card"></ion-icon> Benefícios:</h3>
                <ul>
                    {infosPlan?.perks.map((perk, index) => (
                        <li key={index}>
                            <h4>{`${perk.id}. ${perk.title}`}</h4>
                        </li>

                    ))}
                </ul>
                <h3><ion-icon name="cash"></ion-icon> Preço:</h3>
                <h4>{infosPlan.price} cobrados mensalmente</h4>
            </SCInfos>
            <SCForm>
                <input type="text" placeholder='Nome impresso no cartão' value={cardName} onChange={(e) => setCardName(e.target.value)}></input>
                <input type="text" placeholder='Dígitos do cartão' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}></input>
                <input type="text" placeholder='Código de segurança' value={securityNumber} onChange={(e) => setSecurityNumber(e.target.value)}></input>
                <input type="text" placeholder='Validade' value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)}></input>
                <button type='submit' onClick={(e) => handleConfirmation(e)}>Assinar</button>
            </SCForm >
            <ConfirmBox confirmBox={confirmBox}>
                <h2>Tem certeza que deseja <br /> assinar o plano <br /> {infosPlan.name} {`(R$${infosPlan.price})?`}</h2>
                <button onClick={(e) => handleConfirmation(e)}>Não</button>
                <button onClick={() => postCardInfos()}>Sim</button>
            </ConfirmBox>
            <div className='background'></div>
        </SCPlanStyle>
    )
}

