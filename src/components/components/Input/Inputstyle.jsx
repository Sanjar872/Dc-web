import styled from 'styled-components';
import InpImg from '../Input/Inpimg/input1.png'


// InpDiv Image

export const InpDiv = styled.div`
background: url(${InpImg}) fixed  center;
background-color: #405c74;
background-position: center center;
background-size: cover;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
`

// All Div

export const AllDiv = styled.div`
width: 40%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transform: rotateY(150deg);


@media (max-width: 630px) {
width: 100%;
}

`

// Biz Bilan Bog’laning
export const CallTg = styled.h3`
margin-top: 10px;
color: white;
text-transform: uppercase;
font-size: 22px;
font-weight: 200;

@media (max-width: 630px) {
font-size: 20px;
}
@media (max-width: 430px) {
font-size: 18px;
}
@media (max-width: 400px) {
font-size: 16px;
}
@media (max-width: 330px) {
font-size: 14px;
}
`


// Input Div
export const LoginDiv = styled.div`
@media (max-width: 430px) {
width: 90%;
}
`
export const LoginTg = styled.h3`
color: white;
font-size: 16px;
font-weight: 100;
line-height: 33px;
margin-top: 30px;

@media (max-width: 630px) {
font-size: 13px;
}
@media (max-width: 430px) {

}
`
export const LoginInp1 = styled.input`
background-color: rgba(22, 22, 30, 1);
border: 0.5px solid #FFFFFF;
border-radius: 10px;
width: 400px;
height: 50px;
outline: none;
margin-top: 5px;
padding-left: 20px;

font-size: 21px;
color: white;


@media (max-width: 630px) {
width: 400px;
height: 40px;
font-size: 18px;

}
@media (max-width: 430px) {
width: 100%;
height: 35px;
font-size: 15px;

}
`
export const LoginInp4 = styled.textarea`
background-color: rgba(22, 22, 30, 1);
border: 0.5px solid #FFFFFF;
border-radius: 10px;
width: 400px;
height: 179px;
outline: none;
padding: 20px;
font-size: 21px;
color: white;

@media (max-width: 630px) {
width: 400px;
height: 140px;
font-size: 18px;

}
@media (max-width: 430px) {
width: 100%;
height: 120px;
font-size: 15px;

}
`


// Button
export const ArizaBtn = styled.button`
width: 268px;
height: 49px;
margin-top: 50px;
border-radius: 50px;
background-color: #8882fd;
color: white;
font-size: 16px;
border: none;
cursor: pointer;

&:hover{
background-color: rgba(108, 99, 255, 1);
}

@media (max-width: 430px) {

width: 60%;
height: 40px;
font-size: 14px;

}
`

