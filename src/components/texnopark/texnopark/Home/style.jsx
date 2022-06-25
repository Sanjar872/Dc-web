import styled from "styled-components";
import Background1 from './images/background.png'
import Background2 from '../Home/images/coworking.png'
import CallIcon from '@mui/icons-material/Call';
import Blur from './images/blurback.png'
import Map from "./Map/Map";

export const Container = styled.div`
    background: url(${Background1});
    height: 100vh;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat; 
    position: absolute;
    top: 0;
    right: 0;
    left: 0;   
    z-index: -1;
    display: flex;
    justify-content: center;
`
export const TEXNOPARK = styled.div`
    width: 100%;
    height: 174px;
    text-align: center;
    font-family: 'Play';
    font-weight: 700;
    font-size: 111px;
    color: #ffffff10;
    position: absolute;
    top: 170px;
    @media only screen and (max-width: 1000px) {
        font-size: 100px;
    }
    @media only screen and (max-width: 730px) {
        font-size: 80px;
        top: 185px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 75px;
        top: 190px;
    }
    @media only screen and (max-width: 520px) {
        font-size: 70px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 60px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 50px;
    }
`
export const TEXNOPARK2 = styled.h1`
    width: 100%;
    height: 32px;
    position: absolute;
    top: 220px;
    font-family: 'Play';
    font-weight: 700;
    font-size: 28px;
    text-align: center;
    color: #fff;
    @media only screen and (max-width: 1000px) {
        font-size: 26px;
    }
    @media only sreen and (max-width: 730px) {
        top: 0px;
        font-size: 10px;
    }
    @media only screen and (max-width: 520px) {
        top: 218px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 22px;
        top: 215px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 19px;
        top: 212px;
    }
`
export const MainText = styled.h1`
    width: 379px;
    height: 32px;
    position: absolute;
    top: 280px;
    font-family: 'Play';
    font-weight: 700;
    font-size: 73px;
    color: #fff;
    text-align: center;
    @media only screen and (max-width: 730px) {
        font-size: 60px;
    }
    @media only screen and (max-width: 520px) {
        font-size: 50px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 40px;
        top: 270px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 35px;
    }
`
export const Text = styled.h1`
    width: 1057px;
    height: 32px;
    position: absolute;
    top: 400px;
    font-family: 'Play';
    font-weight: 400;
    font-size: 58px;
    color: #fff;
    @media only screen and (max-width: 1420px) {
        width: 1000px;
        text-align: center;
    }
    @media only screen and (max-width: 1060px) {
        width: 500px;
        text-align: center;
    }
    @media only screen and (max-width: 730px) {
        font-size: 50px;
        top: 380px;
    }
    @media only screen and (max-width: 520px) {
        width: 400px;
        font-size: 40px;
    }
    @media only screen and (max-width: 480px) {
        width: 200px;
        font-size: 30px;
        top: 360px;
    }
`
// export const Call = styled(CallIcon)`
//     color: white;
//     font-size: 30px !important;
//     position: absolute;
//     left: 85%;
//     top: 88.5vh;
//     @media only screen and (max-width: 1420px) {
//     top: 88.5vh;
//     }
//     @media only screen and (max-width: 1260px) {
//     left: 84%;
//     top: 88.5vh;
//     }
//     @media only screen and (max-width: 850px) {
//         left: 83%;
//     }
//     @media only screen and (max-width: 730px) {
//         left: 82%;
//         display: none;
//     }
//     @media only screen and (max-width: 600px) {
//         display: none;
//     }
// `
export const PhoneNum = styled.h1`
    color: white;
    font-size: 28px;
    font-weight: 300;
    font-family: 'Montserrat';
    position: absolute;
    left: 88%;
    top: 88vh;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`
export const Body = styled.body`
    background: url(${Background2}) fixed center;
    background-image: url(${Background2});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
`
export const BackImg = styled.div`
    width: 100%;
    height: 950vh;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 900px) {
        height: 1500vh;
}
    /* margin-bottom: -230px; */
`
// export const BackImg1 = styled.div`
//     width: 100%;
//     height: 122vh;
//     background: url(${Background2}) fixed center;
//     background-image: url(${Background2});
//     background-attachment: fixed;
//     background-position: center;
//     display: flex;
//     justify-content: center;
// `

export const Mission = styled.h1`

    color: white;
    font-family: 'Play';
    font-weight: 700;
    font-size: 24px;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 800px) {
        font-size: 23px;
    }
    @media only screen and (max-width: 700px) {
        font-size: 22px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 21px;
    }
    @media only screen and (max-width: 500px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 15px;
    }
`
export const MainDiv = styled.div`
    width: 100%;
    height: 50vh;

`
export const Paragraph = styled.p`
    color: white;
    width: 100%;
    height: 105px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Play';
    font-weight: 400;
    font-size: 22px;
    text-align: center;
    padding: 5% 20% 0 20%;
    @media only screen and (max-width: 900px) {
        padding: 15% 20% 0 20%;
    }
    @media only screen and (max-width: 800px) {
        padding: 15% 10% 0 10%;
        font-size: 20px;
    }
    @media only screen and (max-width: 700px) {
        padding: 15% 7% 0 7%;
        font-size: 18px;
    }
    @media only screen and (max-width: 600px) {
        padding: 15% 5% 0 5%;
        font-size: 16px;
    }
    @media only screen and (max-width: 500px) {
        padding: 15% 4% 0 5%;
        font-size: 14px;
    }
    @media only screen and (max-width: 400px) {
        padding: 15% 3% 0 3%;
        font-size: 12px;
    } 
`
export const OurAuditory = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center ;
    color: white;
    font-family: 'Play';
    font-weight: 700;
    font-size: 24px;
    margin-top: 7%;
    @media only screen and (max-width: 900px) {
        margin-top: 17%;
    }
    @media only screen and (max-width: 800px) {
        font-size: 23px;
    }
    @media only screen and (max-width: 700px) {
        font-size: 22px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 21px;
    }
    @media only screen and (max-width: 500px) {
        font-size: 20px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 15px;
    }
`
export const PurpleBox = styled.div`
    width: 50%;
    height: 30vh;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 1200px;
    @media only screen and (max-width: 1245px) {
        top: 1200px;
    }
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        height: 90vh;
        align-items: center;
    }
    @media only screen and (max-width: 800px) {
        height: 87.5vh;
    }
    @media only screen and (max-width: 700px) {
        height: 85vh;
    }
    @media only screen and (max-width: 600px) {
        height: 82.5vh;
    }
    @media only screen and (max-width: 500px) {
        height: 80vh;
    }
    @media only screen and (max-width: 400px) {
        height: 77.5vh;
    }
`
export const PurpleDiv = styled.div`
    width: 291px;
    height: 252px;
    background: rgba(108, 99, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 15.1339px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1245px) {
        width: 250px;
        height: 210px;
    }
    @media only screen and (max-width: 1180px) {
        width: 200px;
        height: 200px;
    }
    @media only screen and (max-width: 900px) {
        width: 291px;
        height: 252px;
    }
    @media only screen and (max-width: 800px) {
    width: 281px;
    height: 240px;
}
@media only screen and (max-width: 700px) {
    width: 270px;
    height: 230px;
}
@media only screen and (max-width: 600px) {
    width: 260px;
    height: 220px;
}
@media only screen and (max-width: 500px) {
    width: 250px;
    height: 210px;
}
@media only screen and (max-width: 400px) {
    width: 240px;
    height: 200px;
}
`
export const DivIcon = styled.img`
    position: absolute;
    top: -20%;
    @media only screen and (max-width: 1245px) {
        top: -26%;
    }
    @media only screen and (max-width: 1180px) {
        
    }
    @media only screen and (max-width: 900px) {
        top: -20%;
        width: 130px;
    }
    @media only screen and (max-width: 800px) {
    
}
@media only screen and (max-width: 700px) {
    width: 120px;
}
@media only screen and (max-width: 600px) {
    width: 110px;
}
@media only screen and (max-width: 500px) {
    width: 100px;
}
@media only screen and (max-width: 400px) {
    width: 90px;
}
`
export const DivText = styled.h1`
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    position: absolute;
    top: 25%;
    @media only screen and (max-width: 1245px) {
        top: 35%;
        font-size: 14px;
    }
    @media only screen and (max-width: 1180px) {
        font-size: 13px;
        top: 37%;
    }
    @media only screen and (max-width: 900px) {
        font-family: 'Play';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #FFFFFF;
        position: absolute;
        top: 35%;
    }
`

export const DivPar1 = styled.p`
    position: absolute;
    width: 218.68px;
    height: 105.94px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    top: 50%;
    @media only screen and (max-width: 1245px) {
        font-size: 13px;
    }
    @media only screen and (max-width: 1180px) {
        font-size: 9px;
        top: 55%;
    }
    @media only screen and (max-width: 900px) {
        font-family: 'Play';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 160%;
        text-align: center;
        text-transform: capitalize;
        olor: #FFFFFF;
        top: 50%;
    }
`
export const DivPar2 = styled.p`
position: absolute;
width: 218.68px;
height: 105.94px;
font-family: 'Play';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 17px;
text-align: center;
text-transform: capitalize;
color: #FFFFFF;
top: 52.5%;
    @media only screen and (max-width: 1245px) {
        font-size: 13px;
    }
    @media only screen and (max-width: 1180px) {
        font-size: 9px;
        top: 57%;
    }
    @media only screen and (max-width: 900px) {
        font-family: 'Play';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 160%;
        text-align: center;
        text-transform: capitalize;
        olor: #FFFFFF;
        top: 50%;
    }
`
export const PurpleBox2 = styled.div`
    width: 80%;
    height: 20vh;
    display: flex;
    justify-content:space-between;
    position: absolute;
    top: 225vh;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        height: 160vh;
        align-items: center;
        top: 280vh;
    }
    @media only screen and (max-width: 800px) {
        height: 155vh;
        top: 280vh;
    }
    @media only screen and (max-width: 700px) {
        height: 150vh;
    }
    @media only screen and (max-width: 600px) {
        height: 145vh;
        top: 265vh;
    }
    @media only screen and (max-width: 500px) {
        height: 140vh;
    }
    @media only screen and (max-width: 400px) {
        height: 135vh;
    }
`
export const DivText1 = styled.h1`
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    position: absolute;
    width: 100%;
    height: 30%;
    justify-content: center;
    text-align: center;
    top: 25%;
    @media only screen and (max-width: 1245px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 1180px) {
        font-size: 10px;
        top: 30%;
    }
    @media only screen and (max-width: 900px) {
        font-size: 15px;
    }
`
export const DivPar3 = styled.p`
position: absolute;
width: 218.68px;
height: 49.94px;
font-family: 'Play';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 17px;
text-align: center;
text-transform: capitalize;
color: #FFFFFF;
top: 52.5%;
    @media only screen and (max-width: 1180px) {
        width: 195px;
        font-size: 11px;
        top: 54%;
    }
    @media only screen and (max-width: 900px) {
        width: 220px;
        font-size: 15px;
    }
`
export const DivPar4 = styled.p`
position: absolute;
width: 248.68px;
height: 105.94px;
font-family: 'Play';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 17px;
text-align: center;
text-transform: capitalize;
color: #FFFFFF;
top: 50.5%;
@media only screen and (max-width: 1243px) {
        font-size: 13px;
    }
    @media only screen and (max-width: 1180px) {
        font-size: 11px;
        width: 185px;
    }
    @media only screen and (max-width: 900px) {
        width: 200px;
        font-size: 15px;
    }
`
export const DivPar5 = styled.p`
position: absolute;
width: 272.68px;
height: 105.94px;
font-family: 'Play';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 17px;
text-align: center;
text-transform: capitalize;
color: #FFFFFF;
top: 46.5%;
@media only screen and (max-width: 1243px) {
        font-size: 12px;
        top: 44%;
        width: 230px;
    }
    @media only screen and (max-width: 1180px) {
        font-size: 10px;
        width: 185px;
    }
    @media only screen and (max-width: 900px) {
        width: 220px;
        font-size: 15px;
    }
`
export const Rezident = styled.div`
    width: 72%;
    height: 40%;
    position: absolute;
    top: 285vh;
    text-align: end;
    @media only screen and (max-width: 900px) {
        top: 475vh;
    }
    @media only screen and (max-width: 700px) {
        justify-content: center;
    }
`
export const RezidentImg = styled.img`
    width: 250px;
    @media only screen and (max-width: 800px) {
        width: 230px;
    }
    @media only screen and (max-width: 700px) {
        width: 260px;
        position: absolute;
        left: 20%;
        top: 0vh;
    }
    @media only screen and (max-width: 600px) {
        width: 220px;
        left: 25%;
    }
    @media only screen and (max-width: 500px) {
        width: 200px;
    }
    @media only screen and (max-width: 450px) {
        left: 22.5%;
    }
    @media only screen and (max-width: 400px) {
        width: 180px;
    }
    @media only screen and (max-width: 350px) {
        left: 17%;
    }
    @media only screen and (max-width: 330px) {
        left: 12%;
    }
`
export const RezidentText = styled.h1`
    width: 20%;
    height: 37px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 155.52%;
    color: #FFFFFF;
    position: absolute;
    top: 20%;
    @media only screen and (max-width: 1420px) {
        top: 12%;
    }
    @media only screen and (max-width: 900px) {
        top: 0%;
}
@media only screen and (max-width: 800px) {
    width: 38.8%;
    display: flex;
    }
    @media only screen and (max-width: 700px) {
    width: 33%;
    top: -40vh;
    left: 33%;
    }
    @media only screen and (max-width: 600px) {
    
    }
    @media only screen and (max-width: 550px) {
        left: 31%;
    }
    @media only screen and (max-width: 500px) {
        left: 29%;
    }
    @media only screen and (max-width: 450px) {
        left: 27%;
    }
    @media only screen and (max-width: 400px) {
        top: -44vh;
        left: 23.5%;
    }
    @media only screen and (max-width: 350px) {
        left: 20%;
    }
    @media only screen and (max-width: 340px) {
        left: 18%;
    }
    @media only screen and (max-width: 330px) {
        left: 15%;
    }
`
export const RezidentPar = styled.p`
    width: 491px;
    height: 148px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 155.52%;
    color: #FFFFFF;
    text-align: start;
    position: absolute;
    top: 40%;
    @media only screen and (max-width: 1420px) {
        top: 30%;
    }
    @media only screen and (max-width: 900px) {
    width: 300px;
    font-size: 22px;
    }
    @media only screen and (max-width: 920px) {
        width: 290px;
    }
    @media only screen and (max-width: 800px) {
        width: 280px;
        font-size: 20px;
    }
    @media only screen and (max-width: 700px) {
        width: 260px;
        font-size: 18px;
        text-align: center;
        top: -32vh;
        left: 25%;
    }
    @media only screen and (max-width: 740px) {
        width: 240px;
    }

    @media only screen and (max-width: 600px) {
        width: 220px;
        font-size: 18px;
    }
    @media only screen and (max-width: 550px) {
        left: 23%;
    }
    @media only screen and (max-width: 500px) {
        width: 220px;
        font-size: 14px;
        left: 21%;
    }
    @media only screen and (max-width: 450px) {
        left: 18%;
    }
    @media only screen and (max-width: 400px) {
        width: 220px;
        font-size: 14px;
        left: 13%;
    }
    @media only screen and (max-width: 350px) {
        left: 10%;
    }
    @media only screen and (max-width: 340px) {
        left: 6%;
    }
    @media only screen and (max-width: 330px) {
        left: 2%;
    }
`
export const Circles = styled.div`
    width: 72%;
    height: 36%;
    position: absolute;
    top: 350vh;
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: space-around;
        top: 535vh;
        height: 770px;
        align-items: center;
}
`
export const InsideCircle = styled.img`
    width: 100%;
    position: absolute;
    @media only screen and (max-width: 900px) {
        width: 800px;
        top: 270px;
        /* left: -78px; */
        transform: rotate(90deg);

}
`
export const InsideDegree = styled.h1`
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 58px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF; 
    position: relative;
    top: 20%;
    @media only screen and (max-width: 900px) {
        height: 80%;
        font-size: 45px;
        top: 5%;
        left: 0px;
        /* top: 12%;
        left: 0.5%; */
        
}
`
export const InsidePar1 = styled.p`
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    position: absolute;
    left: 7%;
    top: 50%;
    @media only screen and (max-width: 900px) {
        font-size: 17px;
        top: 15%;
        left: 41%;
}
@media only screen and (max-width: 840px) {
    left: 40%;
}
@media only screen and (max-width: 800px) {
    left: 39.5%;
}
@media only screen and (max-width: 750px) {
    left: 38.75%;
}
@media only screen and (max-width: 700px) {
    left: 38%;
}
@media only screen and (max-width: 650px) {
    left: 37.25%;
}
@media only screen and (max-width: 600px) {
    left: 36%;
}
@media only screen and (max-width: 550px) {
    left: 35%;
}
@media only screen and (max-width: 500px) {
    left: 34%;
}
@media only screen and (max-width: 450px) {
    left: 32%;
}
@media only screen and (max-width: 400px) {
    left: 29%;
}
@media only screen and (max-width: 350px) {
    left: 27%;
}
@media only screen and (max-width: 300px) {
    left: 25%;
}
`
export const InsidePar2 = styled.p`
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    position: absolute;
    left: 30%;
    top: 50%;
    @media only screen and (max-width: 900px) {
        font-size: 16px;
        top: 40%;
        left: 39%;
}
@media only screen and (max-width: 840px) {
    left: 38.5%;
}
@media only screen and (max-width: 750px) {
    left: 37.25%;
}
@media only screen and (max-width: 700px) {
    left: 36%;
}
@media only screen and (max-width: 650px) {
    left: 35%;
}
@media only screen and (max-width: 600px) {
    left: 34%;
}
@media only screen and (max-width: 550px) {
    left: 32%;
}
@media only screen and (max-width: 500px) {
    left: 30%;
}
@media only screen and (max-width: 450px) {
    left: 28%;
}
@media only screen and (max-width: 400px) {
    left: 26%;
}
@media only screen and (max-width: 350px) {
    left: 23%;
}
@media only screen and (max-width: 300px) {
    left: 21%;
}
`
export const InsidePar3 = styled.p`
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    position: absolute;
    left: 53%;
    top: 50%;
    @media only screen and (max-width: 900px) {
        width: 120px;
        font-size: 16px;
        top: 65%;
        left: 41%;
}
@media only screen and (max-width: 840px) {
    left: 40.5%;
}
@media only screen and (max-width: 750px) {
    left: 39.75%;
}
@media only screen and (max-width: 700px) {
    left: 38%;
}
@media only screen and (max-width: 650px) {
    left: 37.25%;
}
@media only screen and (max-width: 600px) {
    left: 36%;
}
@media only screen and (max-width: 550px) {
    left: 35%;
}
@media only screen and (max-width: 500px) {
    left: 34%;
}
@media only screen and (max-width: 450px) {
    left: 32%;
}
@media only screen and (max-width: 400px) {
    left: 29%;
}
@media only screen and (max-width: 350px) {
    left: 27%;
}
@media only screen and (max-width: 300px) {
    left: 25%;
}
`
export const InsidePar4 = styled.p`
    font-family: 'Play';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    position: absolute;
    left: 74%;
    top: 50%;
    @media only screen and (max-width: 900px) {
        width: 150px;
        font-size: 13px;
        top: 88%;
        left: 38.5%;
}
@media only screen and (max-width: 840px) {
    left: 37%;
}
@media only screen and (max-width: 800px) {
    left: 36%;
}
@media only screen and (max-width: 750px) {
    left: 36.75%;
}
@media only screen and (max-width: 700px) {
    left: 35.5%;
}
@media only screen and (max-width: 650px) {
    left: 34%;
}
@media only screen and (max-width: 600px) {
    left: 32.7%;
}
@media only screen and (max-width: 550px) {
    left: 31.3%;
}
@media only screen and (max-width: 500px) {
    left: 29%;
}
@media only screen and (max-width: 450px) {
    left: 27%;
}
@media only screen and (max-width: 400px) {
    left: 24%;
}
@media only screen and (max-width: 350px) {
    left: 20.5%;
}
@media only screen and (max-width: 300px) {
    left: 23%;
}
`
export const RezidentBox = styled.div`
    width: 335px;
    height: 168px;
    background: rgba(108, 99, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    @media only screen and (max-width: 900px) {
    
}
    @media only screen and (max-width: 800px) {

    }
    @media only screen and (max-width: 700px) {
    width: 300px;
    height: 160px;
    }
    @media only screen and (max-width: 600px) {
    width: 280px;
    height: 145px;
    }   
    @media only screen and (max-width: 550px) {
    width: 265px;
    height: 130px;
    }
    @media only screen and (max-width: 500px) {
    width: 250px;
    height: 115px;
    }
    @media only screen and (max-width: 450px) {

    }
    @media only screen and (max-width: 400px) {
        
    }
    @media only screen and (max-width: 350px) {
    width: 220px;
    height: 110px;
    }
    @media only screen and (max-width: 340px) {

    }
    @media only screen and (max-width: 330px) {

    }
`
export const PurpleBox3 = styled.div`
    width: 53%;
    height: 20vh;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 420vh;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        height: 65vh;
        align-items: center;
        top: 670vh;
    }
`
export const PurpleBox4 = styled.div`
    width: 80%;
    height: 20vh;
    display: flex;
    justify-content:space-between;
    position: absolute;
    top: 450vh;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        height: 120vh;
        align-items: center;
        top: 760vh; 
    }
`
export const Team = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Play';
    font-weight: 700;
    font-size: 24px;
    position: absolute;
    top: 495vh;
    @media only screen and (max-width: 900px) {
        top: 900vh;
    }
`
export const OurSpec = styled.p`
    color: white;
    width: 100;
    height: 105px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Play';
    font-weight: 400;
    font-size: 22px;
    position: absolute;
    top: 498vh;
    text-align: center;
    @media only screen and (max-width: 900px) {
    top: 903vh;
}
`
export const TeamBox = styled.div`
    width: 72%;
    height: 40%;
    position: absolute;
    top: 515vh;
    text-align: end;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 900px) {
        height: 70%;
        display: flex;
        flex-direction: column;
        top: 920vh;
    }
`
export const TeamText = styled.p`
    width: 572px;
    height: 252px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 155.52%;
    color: #FFFFFF;
    text-align: start;
    position: absolute;
    @media only screen and (max-width: 900px) {
        text-align: center;
        top: -3vh;
}
`
export const TeamImgDiv = styled.div`
    @media only screen and (max-width: 900px) {
        width: 78.5%;
        height: 320px;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 38vh;
    }
    @media only screen and (max-width: 890px) {
    width: 77.5%;
    }
    @media only screen and (max-width: 880px) {
    width: 76.5%;
    }
    @media only screen and (max-width: 870px) {
    width: 75.5%;
    }
    @media only screen and (max-width: 860px) {
    width: 74.5%;
    }
    @media only screen and (max-width: 850px) {
    width: 73.5%;
    }
    @media only screen and (max-width: 840px) {
    width: 72.5%;
    }
    @media only screen and (max-width: 830px) {
    width: 71.5%;
    }
    @media only screen and (max-width: 820px) {
    width: 70.5%;
    }
    @media only screen and (max-width: 810px) {
    width: 69.5%;
    }
    @media only screen and (max-width: 800px) {
    width: 68.5%;
    }
    @media only screen and (max-width: 790px) {
    width: 67.5%;
    }
    @media only screen and (max-width: 780px) {
    width: 66.5%;
    }
    @media only screen and (max-width: 770px) {
    width: 65.5%;
    }
    @media only screen and (max-width: 760px) {
    width: 64.5%;
    }
    @media only screen and (max-width: 750px) {
    width: 63.5%;
    }
    @media only screen and (max-width: 740px) {
    width: 62.5%;
    }
    @media only screen and (max-width: 730px) {
    width: 61.5%;
    }
    @media only screen and (max-width: 720px) {
    width: 60.5%;
    }
    @media only screen and (max-width: 710px) {
    width: 59.5%;
    }
    @media only screen and (max-width: 700px) {
    width: 58.5%;
    }
    @media only screen and (max-width: 690px) {
    width: 57.5%;
    }
    @media only screen and (max-width: 680px) {
    width: 56.5%;
    }
    @media only screen and (max-width: 670px) {
    width: 55.5%;
    }
    @media only screen and (max-width: 660px) {
    width: 54.5%;
    }
    @media only screen and (max-width: 650px) {
    width: 53.5%;
    }
    @media only screen and (max-width: 640px) {
    width: 52.5%;
    }
    @media only screen and (max-width: 630px) {
    width: 51.5%;
    }
    @media only screen and (max-width: 620px) {
    width: 50.5%;
    }
    @media only screen and (max-width: 610px) {
    width: 49.5%;
    }
    @media only screen and (max-width: 600px) {
    width: 48.5%;
    }
    @media only screen and (max-width: 590px) {
    width: 47.5%;
    }
    @media only screen and (max-width: 580px) {
    width: 46.5%;
    }
    @media only screen and (max-width: 570px) {
    width: 45.5%;
    }
    @media only screen and (max-width: 560px) {
    width: 44.5%;
    }
    @media only screen and (max-width: 550px) {
    width: 43.5%;
    }
    @media only screen and (max-width: 540px) {
    width: 42.5%;
    }
    @media only screen and (max-width: 530px) {
    width: 41.5%;
    }
    @media only screen and (max-width: 520px) {
    width: 40.5%;
    }
    @media only screen and (max-width: 510px) {
    width: 39.5%;
    }
    @media only screen and (max-width: 500px) {
    width: 38.5%;
    }
    @media only screen and (max-width: 490px) {
    width: 37.5%;
    }
    @media only screen and (max-width: 480px) {
    width: 36.5%;
    }
    @media only screen and (max-width: 470px) {
    width: 35.5%;
    }
    @media only screen and (max-width: 460px) {
    width: 34.5%;
    }
    @media only screen and (max-width: 450px) {
    width: 33.5%;
    }
    @media only screen and (max-width: 440px) {
    width: 32.5%;
    }
    @media only screen and (max-width: 430px) {
    width: 31.5%;
    }
    @media only screen and (max-width: 420px) {
    width: 30.5%;
    }
    @media only screen and (max-width: 410px) {
    width: 29.5%;
    }
    @media only screen and (max-width: 400px) {
    width: 28.5%;
    }
    @media only screen and (max-width: 390px) {
    width: 27.5%;
    }
    @media only screen and (max-width: 380px) {
    width: 26.5%;
    }
    @media only screen and (max-width: 370px) {
    width: 25.5%;
    }
    @media only screen and (max-width: 360px) {
    width: 24.5%;
    }
    @media only screen and (max-width: 350px) {
    width: 23.5%;
    }
    @media only screen and (max-width: 340px) {
    width: 22.5%;
    }
    @media only screen and (max-width: 330px) {
    width: 21.5%;
    }
    @media only screen and (max-width: 320px) {
    width: 20.5%;
    }
    @media only screen and (max-width: 310px) {
    width: 19.5%;
    }
    @media only screen and (max-width: 300px) {
    width: 18.5%;
    }
`
export const TeamImg = styled.img`
    position: absolute;
    width: 505px;
    border-radius: 10px;
    left: 55%;
    top: 0vh;
    @media only screen and (max-width: 900px) {
    width: 504px;
    left: 0;
    }
    @media only screen and (max-width: 890px) {
    width: 500px;
    }
    @media only screen and (max-width: 880px) {
    width: 495px;
    }
    @media only screen and (max-width: 870px) {
    width: 490px;
    }
    @media only screen and (max-width: 860px) {
    width: 485px;
    }
    @media only screen and (max-width: 850px) {
    width: 480px;
    }
    @media only screen and (max-width: 840px) {
    width: 475px;
    }
    @media only screen and (max-width: 830px) {
    width: 470px;
    }
    @media only screen and (max-width: 820px) {
    width: 465px;
    }
    @media only screen and (max-width: 810px) {
    width: 460px;
    }
    @media only screen and (max-width: 800px) {
    width: 455px;
    }
    @media only screen and (max-width: 790px) {
    width: 450px;
    }
    @media only screen and (max-width: 780px) {
    width: 445px;
    }
    @media only screen and (max-width: 770px) {
    width: 440px;
    }
    @media only screen and (max-width: 760px) {
    width: 435px;
    }
    @media only screen and (max-width: 750px) {
    width: 430px;
    }
    @media only screen and (max-width: 740px) {
    width: 425px;
    }
    @media only screen and (max-width: 730px) {
    width: 420px;
    }
    @media only screen and (max-width: 720px) {
    width: 415px;
    }
    @media only screen and (max-width: 710px) {
    width: 410px;
    }
    @media only screen and (max-width: 700px) {
    width: 405px;
    }
    @media only screen and (max-width: 690px) {
    width: 400px;
    }
    @media only screen and (max-width: 680px) {
    width: 395px;
    }
    @media only screen and (max-width: 670px) {
    width: 390px;
    }
    @media only screen and (max-width: 660px) {
    width: 385px;
    }
    @media only screen and (max-width: 650px) {
    width: 380px;
    }
    @media only screen and (max-width: 640px) {
    width: 375px;
    }
    @media only screen and (max-width: 630px) {
    width: 370px;
    }
    @media only screen and (max-width: 620px) {
    width: 365px;
    }
    @media only screen and (max-width: 610px) {
    width: 360px;
    }
    @media only screen and (max-width: 600px) {
    width: 355px;
    }
    @media only screen and (max-width: 590px) {
    width: 350px;
    }
    @media only screen and (max-width: 580px) {
    width: 345px;
    }
    @media only screen and (max-width: 570px) {
    width: 340px;
    }
    @media only screen and (max-width: 560px) {
    width: 335px;
    }
    @media only screen and (max-width: 550px) {
    width: 330px;
    }
    @media only screen and (max-width: 540px) {
    width: 325px;
    }
    @media only screen and (max-width: 530px) {
    width: 320px;
    }
    @media only screen and (max-width: 520px) {
    width: 315px;
    }
    @media only screen and (max-width: 510px) {
    width: 310px;
    }
    @media only screen and (max-width: 500px) {
    width: 305px;
    }
    @media only screen and (max-width: 490px) {
    width: 300px;
    }
    @media only screen and (max-width: 480px) {
    width: 295px;
    }
    @media only screen and (max-width: 470px) {
    width: 290px;
    }
    @media only screen and (max-width: 460px) {
    width: 285px;
    }
    @media only screen and (max-width: 450px) {
    width: 280px;
    }
    @media only screen and (max-width: 440px) {
    width: 275px;
    }
    @media only screen and (max-width: 430px) {
    width: 270px;
    }
    @media only screen and (max-width: 420px) {
    width: 265px;
    }
    @media only screen and (max-width: 410px) {
    width: 255px;
    }
    @media only screen and (max-width: 400px) {
    width: 250px;
    }
    @media only screen and (max-width: 390px) {
    width: 245px;
    }
    @media only screen and (max-width: 380px) {
    width: 240px;
    }
    @media only screen and (max-width: 370px) {
    width: 235px;
    }
    @media only screen and (max-width: 360px) {
    width: 230px;
    }
    @media only screen and (max-width: 350px) {
    width: 225px;
    }
    @media only screen and (max-width: 340px) {
    width: 220px;
    }
    @media only screen and (max-width: 330px) {
    width: 215px;
    }
    @media only screen and (max-width: 320px) {
    width: 210px;
    }
    @media only screen and (max-width: 310px) {
    width: 205px;
    }
    @media only screen and (max-width: 300px) {
    width: 200px;
    }
`


export const KiberBox = styled.div`
    width: 85%;
    height: 60%;
    position: absolute;
    top: 580vh;
    text-align: end;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    top: 1020vh;
}
`
export const KiberHeader = styled.h1`
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Play';
    font-weight: 700;
    font-size: 24px;
    position: absolute;
    top: 13vh;
    left: 62.2%;
    @media only screen and (max-width: 900px) {
        left: 0;
    top: -3vh;
        width: 100%;
        text-align: center;
}
`
export const KiberText = styled.p`
    width: 801px;
    height: 111px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 155.52%;
    color: #FFFFFF;
    text-align: center;
    position: absolute;
    left: 39%;
    @media only screen and (max-width: 900px) {
    width: 100%;
    left: 0;
    padding: 5vh;
}
`
export const KiberImage = styled.img`
    position: absolute;
    left: -3.5%;
    @media only screen and (max-width: 900px) {
    width: 45%;
        top: 30vh;
    left: 15%;
}
`
export const KiberButton = styled.button`
    width: 110px;
    height: 45px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 14.9787px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    background: #ffffff01;
    border: 1px solid white;
    border-radius:  30px;
    position: absolute;
    left: 91.5%;
    top: 40vh;
    cursor: pointer;
    @media only screen and (max-width: 900px) {
        left: 70%;
        top: 53vh;
}
`
export const Kovorking = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Play';
    font-weight: 700;
    font-size: 24px;
    position: absolute;
    top: 666vh;
    @media only screen and (max-width: 900px) {

    top: 1120vh;
}
`
export const OfficeRent = styled.p`
    color: white;
    width: 417px;
    height: 156px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Play';
    font-weight: 400;
    font-size: 22px;
    position: absolute;
    top: 667.5vh;
    text-align: center;
    @media only screen and (max-width: 900px) {
    top: 1122vh;
}
`
export const KovorkingBox = styled.div`
    width: 72%;
    height: 100%;
    position: absolute;
    top: 690vh;
    text-align: end;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 900px) {
    height: 80%;
    justify-content: space-between;
    flex-direction: column;
    top: 1143vh;
}
`
export const KovorkingText = styled.p`
    width: 470px;
    height: 224px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 155.52%;
    color: #FFFFFF;
    text-align: start;
    position: absolute;
    top: 0;
    @media only screen and (max-width: 900px) {
        width: 550px;
        text-align: center;
}
`
export const KovorkingImg = styled.img`
    position: absolute;
    width: 505px;
    border-radius: 10px;
    left: 50%;
    top: 0vh;
    @media only screen and (max-width: 900px) {
    left: 10%;
    top: 40vh;
}
`
export const KovorkingImg2 = styled.img`
    position: absolute;
    width: 505px;
    border-radius: 10px;
    left: 0;
    top: 63%;
    @media only screen and (max-width: 900px) {
        position: absolute;
        top: 95vh;
        left: 9%;
}
`
export const KovorkingText2 = styled.p`
    width: 438px;
    height: 224px;
    font-family: 'Play';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 155.52%;
    color: #FFFFFF;
    text-align: start;
    position: absolute;
    top: 63%;
    left: 60%;
    @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 0 5vh;
    left: 0;
    top: 150vh;
    text-align: center;

}
`
export const Infratuzilma = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Play';
    font-weight: 700;
    font-size: 24px;
    position: absolute;
    top: 820vh;
    @media only screen and (max-width: 900px) {
        position: absolute;
        top: 1340vh;
    }
`
export const Building = styled.p`
    color: white;
    width: 670px;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Play';
    font-weight: 400;
    font-size: 22px;
    position: absolute;
    top: 826vh;
    text-align: center;
    @media only screen and (max-width: 900px) {
    position: absolute  ;
    top: 1347.5vh;
}
` 
export const DigitalCityBox = styled.div`
    width: 80%;
    height: 80vh;
    position: absolute;
    top: 845vh;
    display: flex;
    @media only screen and (max-width: 900px) {
    top: 1360vh;
    justify-content: center;
}
`
export const DigitalCityBox1 = styled.div`
    width: 50%;
    height: 64%;
    background: #6b63ff4e;
    filter: blur(-100px);
    -webkit-filter: blur(-2px);
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 900px) {
    position: absolute;
    width: 70%;
    top: 56vh;
}
`
export const DigitalCityImage = styled.img`
    width: 50%;
    height: 64%;
    @media only screen and (max-width: 900px) {
    position: absolute;
    top: 5vh;
    width: 70%;
}
`

export const DigitalCityTxt = styled.p`
    width: 549px;
    height: 228px;
    color: #fff;
    font-size: 24px;
    line-height: 160%;
    font-weight: 400;
    text-align: center;
    font-family: 'Play';
    @media only screen and (max-width: 900px) {
        position: absolute;
        width: 450px;
        text-align: center;
        top: 2vh;
}
`
export const DIgitalCityMiniBox = styled.div`
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 49vh ;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media only screen and (max-width: 900px) {
        height: 64%;
        top: 5vh;
        display: flex;
        position: absolute;
        flex-direction: column;
        justify-content: space-between;

}
`
export const Images = styled.img`
    width: 18%;
    @media only screen and (max-width: 900px) {
    width: 12%;
}
`
export const Manzil = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Play';
    font-weight: 700;
    font-size: 24px;
    position: absolute;
    top: 950vh;
    @media only screen and (max-width: 900px) {
    position: absolute;
    top: 1485vh;
}
`
export const Mapdiv = styled.div`
    width: 100%;
    height: 500px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 900px) {
        /* transform: scale(0.9); */
}
`
export const GoogleMap = styled(Map)`
    width: 1000px;
    height: 600px;
@media only screen and (max-width: 900px) {
    width: 400px;
    height: 250px;
}
`