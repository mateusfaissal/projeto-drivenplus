import styled from "styled-components"

export const SCHome = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
width:100%;
padding-top:160px;
header {
    position:absolute;
    top:0px;
    left:0px;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
}

header > div {
    box-sizing:border-box;
display:flex;
justify-content:space-between;
padding-left:10%;
padding-top:7%;
width:100%;
padding-right:5%;
}

header img{
    width:75px;
    height:50px;
}
h1{
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
margin-bottom:50px;
}
text-decoration:none;
ion-icon{
    color:white;
    font-size:34px;
}
header div section > :first-child{
    color:#FF4747;
}
footer{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    position:fixed;
    bottom:0px;
    left:0px;
    padding-bottom:12px;
}
 > footer > :first-child{
    background: #FF4791;
border-radius: 8px;
width: 299px;
height: 52px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
text-decoration:none;
 }
 > footer > :last-child{
    margin-top:8px;
    background: #FF4747;
border-radius: 8px;
width: 299px;
height: 52px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
 }
`
export const SCListPerk = styled.ul`
text-decoration:none;
li div{
background: #FF4791;
border-radius: 8px;
width: 299px;
height: 52px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
text-decoration:none;
margin-bottom:8px;
}
`

