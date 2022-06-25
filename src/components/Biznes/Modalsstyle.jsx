import styled from 'styled-components';



import CloseIcon from '@mui/icons-material/Close';



export const Main = styled.div`
background-color: green;
/* filter: blur(2.5px); */
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const ModalDiv = styled.div`
margin-top: 80px;
width: 640px;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: rgba(255, 255, 255, 0.2);
border: 1px solid #FFFFFF;
backdrop-filter: blur(20px);
border-radius: 20px;

@media (max-width: 1024px) {
height: 80vh;
}

@media (max-width: 690px) {
width: 500px;
}
@media (max-width: 530px) {
width: 400px;
}
@media (max-width: 420px) {
width: 350px;
}
@media (max-width: 370px) {
width: 300px;
}
`

export const CloseDiv = styled(CloseIcon)`

width: 35px !important;
height: 35px !important;
font-weight: 600 !important;
color: white;
margin-left: 590px;
margin-top: -40px;

@media (max-width: 1024px) {
margin-left: 580px;
margin-bottom: -15px;
}
@media (max-width: 912px) {
margin-left: 570px;
}
@media (max-width: 690px) {
margin-left: 450px;
}
@media (max-width: 540px) {
margin-left: 450px;
margin-bottom: -12px;
}
@media (max-width: 530px) {
margin-left: 350px;
margin-bottom: -12px;
}
@media (max-width: 420px) {
margin-left: 300px;
}
@media (max-width: 370px) {
margin-left: 250px;
}
`

export const AllDiv = styled.div`
width: 70%;
height: 70vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

@media (max-width: 530px) {
width: 80%;
}
@media (max-width: 370px) {
width: 85%;
}
`
export const Div1 = styled.div`
width: 90%;
`
export const Div2 = styled.div`
width: 90%;
`
export const Div3 = styled.div`
width: 90%;
`
export const Div4 = styled.div`
width: 90%;
`

export const Tg = styled.h4`
font-size: 16px;
color: white;
font-weight: 100;

@media (max-width: 690px) {
font-size: 16px;
}
@media (max-width: 530px) {
font-size: 14px;
}
@media (max-width: 420px) {
font-size: 13px;
}
@media (max-width: 370px) {
font-size: 12px;
}
`
export const Inp1 = styled.input`
background: rgba(255, 255, 255, 0.35);
width: 100%;
height: 50px;
margin-top: 10px;
border-radius: 10px;
border: none;
outline: none;
padding-left: 20px;
font-size: 21px;
color: white;


@media (max-width: 690px) {
height: 40px;
font-size: 17px;
}
@media (max-width: 530px) {

   


}
`
export const Inp2 = styled.input`
background: rgba(255, 255, 255, 0.35);
width: 100%;
height: 179px;
margin-top: 10px;
border-radius: 10px;
border: none;
outline: none;
padding-left: 20px;
font-size: 21px;
color: white;

@media (max-width: 690px) {
height: 159px;

font-size: 17px;

}
`
export const ArizaBtn = styled.button`
width: 90%;
height: 46px;
border-radius: 50px;
margin-top: 20px;
font-size: 16px;
background-color: rgba(108, 99, 255, 1);
color: white;
border: none;
cursor: pointer;

@media (max-width: 690px) {
height: 36px;
font-size: 15px;

}
@media (max-width: 530px) {
font-size: 13px;
}
@media (max-width: 370px) {
font-size: 12px;
}
`






