import styled from 'styled-components';

import BgImg from '../Biznes/BgImage/cw.png'
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
height: 200vh;
box-sizing: border-box;
`

//_____________________


// BoxAll

export const BoxAll = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
position: absolute;
margin-top: 125px;
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

// Max-width 1100

@media (max-width:1170px) {
font-size: 97px;
}
@media (max-width:1020px) {
font-size: 90px;
}
@media (max-width:940px) {
font-size: 83px;
}
@media (max-width:870px) {
font-size: 76px;
}
@media (max-width:800px) {
font-size: 65px;
}
@media (max-width:715px) {
font-size: 60px;
}
@media (max-width:600px) {
font-size: 45px;
}
@media (max-width:455px) {
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

@media (max-width:1170px) {
font-size: 25px;
}
@media (max-width:1020px) {
font-size: 23px;
}
@media (max-width:940px) {
font-size: 21px;
}
@media (max-width:850px) {
}
@media (max-width:870px) {
font-size: 19px;
}
@media (max-width:800px) {
font-size: 16px;
}
@media (max-width:715px) {
font-size: 15px;
}
@media (max-width:600px) {
font-size: 11.3px;
}
@media (max-width:455px) {
font-size: 9px;
}
@media (max-width:360px) {
font-size: 7.5px;
}
`


//_____________________


// AboutImgDiv
export const AboutImgDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 50px !important;
margin-top: 90px;

@media (max-width:1100px) {
display: flex;
flex-direction: column;
}
`
export const DescDiv = styled.h1`
display: flex;
text-align: center;
font-size: 24px;
color: white;
font-weight: 200;

// Max-width 1110px
@media (max-width:1170px) {
font-size: 21px;
} 
@media (max-width:1020px) {
font-size: 19.5px;
}
@media (max-width:940px) {
font-size: 18px;
}
@media (max-width:870px) {
font-size: 16.5px;
}
@media (max-width:800px) {
font-size: 14.5px;
}
@media (max-width:715px) {
font-size: 13.5px;
}

`


export const AllIconsDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 150px;

`


export const IconsTextDiv = styled.div`
display: flex;
align-items: center;
/* flex-direction: column; */
justify-content: space-between;
width: 1150px;

border: 1px solid red;


// Max-width 1669px
@media (max-width:1669px) {
width: 1030px !important;
}
@media (max-width:1170px) {
width: 950px !important;
} 
@media (max-width:1100px) {
width: 950px !important;
}
@media (max-width:1020px) {
width: 900px !important;
}
@media (max-width:940px) {
width: 850px !important;
}
@media (max-width:870px) {
width: 800px !important;
}
@media (max-width:800px) {
width: 700px !important;
}
@media (max-width:715px) {
display: flex;
flex-direction: column;
}

`


export const TimeDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 255px;
margin-top: 15px;

`
export const TimeImg = styled.img`
width: 43px;
margin-left: 100px;


@media (max-width:940px) {
width: 40px !important;
}
@media (max-width:800px) {
width: 25px !important;
}
@media (max-width:715px) {
    margin-left: 112px;

}
`


export const EditDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 255px;
margin-top: 15px;
`
export const EditImg = styled.img`
width: 51px;
margin-left: 100px;


@media (max-width:940px) {
width: 45px !important;
}
@media (max-width:800px) {
width: 35px !important;
}
@media (max-width:715px) {
    margin-left: 110px;

}
`


export const EarphoneDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 255px;
margin-top: 15px;
`
export const EarphonImg = styled.img`
width: 51px;
margin-left: 100px;

@media (max-width:940px) {
width: 45px !important;
}
@media (max-width:800px) {
width: 35px !important;
}
@media (max-width:715px) {
margin-left: 110px;
}
`

export const P = styled.p`
font-size: 18px;
color: white;
margin-top: 10px;
text-align: center;

@media (max-width:1170px) {
font-size: 16px;
}
@media (max-width:940px) {
font-size: 15px;
}
@media (max-width:800px) {
font-size: 13px;
}
`

export const About = styled.p`
font-size: 18px;
color: white;
text-align: center;
margin-top: 15px;

@media (max-width:1170px) {
font-size: 16px;
}
@media (max-width:940px) {
font-size: 15px;
}
@media (max-width:800px) {
font-size: 13px;
}
`


//_____________________


// CallDiv
export const CallDiv = styled.div`
width: 100%;
display: flex;
flex-direction:row-reverse ;
position: absolute;
margin-top: 720px;
@media (max-width:715px) {
position: absolute;
margin-top: 950px;

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