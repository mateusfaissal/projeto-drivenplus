import styled  from "styled-components";

export const SCSignUp = styled.form`
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