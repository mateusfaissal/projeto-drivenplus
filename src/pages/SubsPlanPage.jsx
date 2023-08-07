import styled from "styled-components"
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

const SCPlanStyle = styled.div`
position:relative;
.background{
    display:${(props) => props.confirmBox == true ? "flex" : "none"};
    background-color:black;
    position:fixed;
    height:100%;
    width:100%;
    z-index:5;
    opacity:70%;
}
display:flex;
flex-direction:column;
align-items:center;
header{
    width:100%;
    padding-top:24px;
    padding-left:3%;
}
header ion-icon{
color: #FFFFFF;
font-size:28px;
}

`
const SCInfos = styled.div`
ion-icon{
    color: #FF4791;

}
img{
    width:140px;
    height:95px;
}
>:nth-child(3){
    margin-bottom:6px;
}
h2{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
margin-bottom:22px;
}
h3{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
}
h4{
    margin-top:4px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
}
`
const SCForm = styled.form`
margin-top:34px;
width:310px;
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;

> :nth-child(1), > :nth-child(2){
    background: #FFFFFF;
border-radius: 8px;
border-width:0px;
    width:300px;
    height:52px;
    margin-bottom: 8px;
    padding-left:7px;
    box-sizing:border-box;
}
> :nth-child(3), > :nth-child(4){
    background: #FFFFFF;
border-radius: 8px;
border-width:0px;
    width:145px;
    height:52px;
    padding-left:7px;
    box-sizing:border-box;
}
> button {

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
    display: flex;
justify-content: center;
align-items: center;
padding: 18px 122px;
    width: 300px;
height: 52px;
background: #FF4791;
border-radius: 8px;
border-width:0px;
margin-top:12px;
&:hover {
    cursor: pointer;
}
}
`

const ConfirmBox = styled.div`
position:absolute;
z-index:10;
box-sizing:border-box;
justify-content:space-evenly;
display:${(props) => props.confirmBox == true ? "flex" : "none"};
flex-wrap:wrap;
align-items:space-between;
margin-top:-105px;
margin-left:-124px;
top:50%;
left:50%;
width: 248px;
height: 210px;
background: #FFFFFF;
border-radius: 12px;
padding-top:33px;
h2{
    width:100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
}
> :nth-child(2){
    width: 95px;
height: 52px;

background: #CECECE;
border-radius: 8px;
border-width:0px;
display: flex;
justify-content: center;
align-items: center;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
&:hover {
    cursor: pointer;
}
}
> :nth-child(3){
    width: 95px;
height: 52px;
display: flex;
justify-content: center;
align-items: center;
background: #FF4791;
border-radius: 8px;
border-width:0px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
&:hover {
    cursor: pointer;
}
}
`