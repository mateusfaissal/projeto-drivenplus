import styled  from "styled-components";

export const SCPlanStyle = styled.div`
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
export const SCInfos = styled.div`
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
export const SCForm = styled.form`
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

export const ConfirmBox = styled.div`
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