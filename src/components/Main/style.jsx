import styled from 'styled-components'
import BackgroundImg from './assets/background.png'
import ExcludeImg from './assets/Images/Exclude.png'

import CloseIcon from '@mui/icons-material/Close';

export const MainWrapper = styled.div` // Main div
    width: 100%;
    // height: 100vh;
    background-image: url(${BackgroundImg});
    background-attachment: fixed;
    // overflow-y: scroll;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

// Font sizes

export const Title = styled.h1`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 28px;
    color: #FFFFFF;
    text-align: center;
    @media (max-width:768px) {
        font-size: 20px;
    }
`

export const MedFont = styled.h1`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 30px;
`

export const Paragraph = styled.p`
    color: #FFFFFF;
    font-weight: 200;
    font-size: 24px;
    max-width: 476px;
    @media (max-width:1030px) {
        font-size: 19px;
    }
    @media (max-width:994px) {
        font-size: 16px;
    }
    @media (max-width:855px) {
        font-size: 10px;
    }
    @media (max-width:768px) {
        font-weight: 100;
        text-align: center;
        font-size: 20px;
        margin-bottom: 20px;
        margin-left: 0;
    }
`
//

// Div for primary button

export const ButtonDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: start;
    align-items: center;
    @media (max-width:768px) {
        justify-content: center;
    }
`
//

// Primary button

export const Button = styled.button`
    font-weight: 400;
    font-size: 14.9787px;
    text-align: center;
    margin-left: 80px;
    text-transform: capitalize;
    color: #FFFFFF;
    padding: 7px 15px;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid white;
    background-color: #ffffff11;
    @media (max-width:768px) {
        margin-left: 0;
    }
`
//

// mini div for titles

export const MiniDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

// Big blur title

export const BlurTitle = styled.h1`
    position: absolute;
    text-transform: uppercase;
    font-size: 111px;
    font-weight: 700;
    color: rgba(255,255,255,0.04);
    @media (max-width:830px) {
        font-size: 80px;
    }
    @media (max-width:768px) {
        font-size: 60px;
    }
    @media (max-width:480px) {
        font-size: 30px;
    }

`

// Entery section

export const Entery = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto; 
    @media (max-width:768px) {
        height: 800px;
        flex-direction: column;
        justify-content: space-around;
    }
`

export const EnteryTexts = styled.div`
    width: 600px;
    height: 400px;
    margin-left: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    @media (max-width:1000px) {
        margin-left: 0px;
        transform: scale(0.8);
    }
    @media (max-width:768px) {
        width: 100%;
        align-items: center;
        height: 300px;
    }
    @media (max-width:580px) {
        width: 100%;
    }
` 

export const EnteryTitle = styled.h1`
    font-weight: 700;
    font-size: 100px;
    line-height: 142px;
    text-transform: uppercase;
    color: #FFFFFF;
    @media (max-width:768px) {
        font-size:60px;
    }
`

export const EnteryVideo = styled.div`
    width: 500px;
    height: 400px;
    margin-right: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    background-color: #ffffff32;
    backdrop-filter: blur(10px);
    transition: all ease 0.5s;
    @media (max-width:1000px) {
        transform: scale(0.8);
    }
    @media (max-width:768px) {
        width: 100%;
        margin-right: 0px;
        height: 300px;
    }
    @media (max-width:580px) {
        width: 100%;
    }
    
`

export const ModalWr = styled.div` // Modal for video
    width: 100%;
    height: 100vh;
    margin-right: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    display: none;
    position: fixed;
    top: 0;
    z-index: 999;
    transition: all ease 0.5s;
`

export const ModalVideo = styled.video`
    width: 80%;
    height: auto;

`

export const ModalClose = styled(CloseIcon)` // MOdal close icon
    width: 45px !important;
    height: 45px !important;
    object-fit: contain !important;
    color: white !important;
    position: absolute !important;
    right: 20px !important;
    top: 20px !important;
    cursor: pointer !important;

`

export const EnteryVidIc = styled.img`
    width: 146px;
    height: 146px;
    object-fit: contain;
    cursor: pointer;
    transition: all ease 0.5s;
    border-radius: 50%;
    &:hover{
        box-shadow: 0px 0px 30px 21px rgba(40, 139, 216, 0.48);
        transition: all ease 0.5s;
    }
`

export const EnteryTel = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:768px) {
        display: none;
    }
`

export const TelIc = styled.img`
    width: 16.8px;
    height: 24px;
    object-fit: contain;
`

export const TelText = styled.p`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 28.8px;
`

// TechnoPark section

export const TechPark = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (max-width:768px) {
        height: 1300px;
    }
`

export const TechMain = styled.div`
    width: 900px;
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width:995px) {
        width: 100%;
        transform: scale(0.9);
    }
    @media (max-width:768px) {
        height: 900px;
        justify-content: space-around;
    }
`

export const TechCard = styled.div`
    width: 230px;
    height: 140px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    transition: all ease 0.5s;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        transition: all ease 0.5s;
    }
    @media (max-width:768px) {
        justify-content: center;
        &:hover{
            transform: none;
        }
    }

`

export const TCardIc = styled.img`
    width: 65px;
    height: 65px;
    object-fit: contain;
    margin: 0 15px 15px 0;
`

export const TCardWr = styled.div`
    position: relative;
    max-width: 100px;
`

// Info section

export const InfoWrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`

export const InfoCard = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width:1115px) {
        transform: scale(0.8);
    }
    @media (max-width:991px) {
        height: 500px;
        font-size: 10px;
        transform: scale(0.7);
    }
    @media (max-width:768px) {
        margin-bottom: 100px;
        height: 700px;
    }
    @media (max-width:410px) {
        transform: scale(0.6);
        height: 300px;
    }
`

export const Infos = styled.div`
    width: 100%;
    height: 620px;  
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:994px) {
        align-items: center;
    }
    @media (max-width:768px) {
        flex-direction: column;
        justify-content: center;
        height: 750px;
    }
    @media (max-width:400px) {
        height: 900px;
    }
`

export const InfoTexts = styled.div`
    max-width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    @media (max-width:768px) {
        align-items: center;
        width: 100%;
        max-width: 100%;
    }
`

export const InfoImg = styled.img`
    width: 470px;
    height: 470px;
    object-fit: contain;
    margin-right: 50px;
    transition: all ease 0.5s;
    cursor: pointer;
    &:hover{
        transition: all ease 0.5s;
        transform: scale(1.1);
    }
    @media (max-width:830px) {
        width: 440px;
        height: 440px;
    }
    @media (max-width:768px) {
        width: 300px;
        height: 300px;
        &:hover{
            transform: none;
        }
    }
`

// Info chart div

export const InfoChart = styled.div`
    width: 535px;
    height: 407px;
    background-image: url(${ExcludeImg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    margin-left: 80px;
    transition: all ease 0.5s;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        transition: all ease 0.5s;
    }
    @media (max-width:1050px) {
        transform: scale(0.9);
    }
    @media (max-width:768px) {
        transform: scale(0.7);
        height: 450px;
        &:hover{
            transform: scale(0.7);
        }
    }
`

export const ChartTexts1 = styled.div`
    position: absolute;
    max-width: 100px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    top: 16%;
    left: 8%;
    @media (max-width:900px) {
        transform: scale(0.8);
        top: 18%;
        left: 6%;
    }
    @media (max-width:768px) {
        top: 5%;
        left: 17%;
    }
`

export const ChartTexts2 = styled.div`
    position: absolute;
    max-width: 100px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    top: 16%;
    right: 25%;
    @media (max-width:900px) {
        transform: scale(0.8);
        top: 18%;
        right: 23%;    
    }
    @media (max-width:768px) {
        top: 5%;
        right: 28%;
    }
`

export const ChartTexts3 = styled.div`
    position: absolute;
    max-width: 100px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    bottom: 19%;
    left: 29%;
    @media (max-width:900px) {
        transform: scale(0.8);
        bottom: 21%;
        left: 27%;
    }
    @media (max-width:768px) {
        bottom: 8%;
        left: 33%;
    }
`

export const ChartTexts4 = styled.div`
    position: absolute;
    max-width: 100px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    bottom:15%; 
    right: 2.60%;
    @media (max-width:900px) {
        transform: scale(0.8);
        bottom: 17%;
        right: 2%;
    }
    @media (max-width:768px) {
        bottom: 5%;
        right: 12%;
    }
`

// Slider wrapper

export const SliderWr = styled.div`
    width: 100%;
`

// Aloqa section

export const Aloqa = styled.div`
    width: 100%;
    height: auto;
    max-width: 1440px;
    margin: 0 auto;
`

export const AloqaForm = styled.div`
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:768px) {
        flex-direction: column;
        height: 800px;
        justify-content: space-between;
    }
`

export const FormTexts = styled.div`
    width: 350px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (max-width:993px) {
        transform: scale(0.8);
    }
    @media (max-width:900px) {
        width: 290px;
    }
    @media (max-width:768px) {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
    /* @media (max-width:604px) {
        transform: scale(1.1);
    } */
`

export const FormCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    transition: all ease 0.5s;
    &:hover{
        transform: scale(1.1);
        transition: all ease 0.5s;
    }
    @media (max-width:768px) {
        width: 100%;
        &:hover{
            transform: none;
        }
    }
`

export const FormIcon = styled.img`
    width: 35px;
    height: 35px;
    object-fit: contain;
    margin-right: 25px;
`

export const FormTextDiv = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    @media (max-width:768px) {
        width: 400px;
    }
`

export const FormInputs = styled.div`
    width: 450px;
    height: 483px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    @media (max-width:768px) {
        width: 100%;
        border-radius: 0px;
    }
`

export const PrimaryInp = styled.input`
    width: 300px;
    height: 50px;
    color: #CCCCCC;
    outline: none;
    border: none;
    border-radius: 5px 5px 0 0 ;
    padding-left: 15px;
    border-bottom: 2px solid #cccccc;
    background-color: #00000018;
    @media (max-width:400px) {
        width: 75%;
    }
`





