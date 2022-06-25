import styled from 'styled-components';

import BgImg from '../Home/img/main.png'
import CallIcon from '@mui/icons-material/Call';

// BigDiv
export const BigDiv = styled.div`
width: 100%;
height: auto;
box-sizing: border-box;
`

// Main
export const Main = styled.div`
background: url(${BgImg}) fixed  center;
background-position: center center;
background-size: cover;
width: 100%;
height: 210vh;
/* height: 1800px; */
box-sizing: border-box;

`

//_____________________


// BoxAll
export const BoxAll = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
`

export const All = styled.div`
width: 100%;
height: 595px;
`

// Name1
export const Name1 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const BigRqm = styled.h1`
font-size: 111px;
color: rgba(255, 255, 255, 0.04);
z-index: 0;
position: relative;


@media (max-width:1100px) {
    font-size: 93px;
}
@media (max-width:940px) {
    font-size: 75px;
}
@media (max-width:750px) {
    font-size: 70px;
}
@media (max-width:700px) {
    font-size: 60px;
}
@media (max-width:605px) {
    font-size: 55px;
}
@media (max-width:560px) {
    font-size: 45px;
}
@media (max-width:460px) {
    font-size: 35px;
}
@media (max-width:360px) {
    font-size: 30px;
}
`
export const InRqm = styled.h1`
font-size: 28px;
color: white;
z-index: 1;
position: absolute;


@media (max-width:1100px) {
    font-size: 23px;
}
@media (max-width:940px) {
    font-size: 20px;
}
@media (max-width:750px) {
    font-size: 18px;
}
@media (max-width:700px) {
    font-size: 16px;
}
@media (max-width:605px) {
    font-size: 14px;
}
@media (max-width:560px) {
    font-size: 12px;
}
@media (max-width:460px) {
    font-size: 10px;
}
@media (max-width:360px) {
    font-size: 8px;
}
`


//_____________________


export const TextImgDiv = styled.div`
width: 70%;

display: flex;
justify-content: space-around;
align-items: center;


@media (max-width:1100px) {
display: flex;
flex-direction: column;
}
`


// AboutImgDiv
export const AboutImgDiv = styled.div`

width: 100%;
display: flex;
justify-content: space-around;
align-items: center;


@media (max-width:1100px) {
display: flex;
flex-direction: column;
}
margin-top: 90px;
`

export const DescDiv = styled.h1`
font-size: 24px;
color: white;
font-weight: 200;




@media (max-width:1100px) {
text-align: center;
}
@media (max-width:560px) {
    font-size: 18px;

}
@media (max-width:460px) {
    font-size: 15px;
}
@media (max-width:415px) {
    width: 300px;
}
@media (max-width:360px) {
    font-size: 12px;
}
`
export const CompImg = styled.img`
width: 429px;
height: 307px;


@media (max-width:460px) {
width: 330px;
height: 250px;
}
@media (max-width:360px) {
width: 300px;
height: 230px;
}
@media (max-width:340px) {
width: 270px;
height: 220px;
}
`


//_____________________


// CallDiv
export const CallDiv = styled.div`
width: 100%;
display: flex;
flex-direction:row-reverse ;
position: absolute;
margin-top: 450px;

@media (max-width:414px) {
margin-right: 80px;
}
@media (max-width:360px) {
margin-right: 50px;
}
`
export const CallCenter = styled.div`
display: flex;
justify-content: space-between;
width: 100px;
align-items: center;
cursor: pointer;
margin-right: 110px;
`
export const Call = styled(CallIcon)`
font-size: 28px !important;
color: white;
`
export const Nmb = styled.h3`
font-size: 28px;
font-weight: 100;
color: #FFFFFF;
`