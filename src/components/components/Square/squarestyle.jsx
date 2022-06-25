import styled from 'styled-components';


export const BigSquare = styled.div`
display: flex;
margin-top: 245px;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
`


export const SquareBoxes = styled.div`
width: 1000px;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;

@media (max-width:1100px) {
margin-bottom: 90px;
}
@media (max-width:1000px) {
width: 750px;
height: 70vh;
}
@media (max-width: 536px) {
height: 50vh;
}
@media (max-width: 439px) {
height: 80vh;
}

/* @media (max-width: 375px) {
margin-bottom: 310px;
} */
@media (max-width: 375px) {
margin-bottom: 300px;
}
`
// export const TextDiv = styled.div`

// `
export const Div = styled.div`
margin: 10px;
width: 405px;
height: 290px;
justify-content: center;
align-items: center;
text-align: center;
background-color: white;
transform: rotateY(150deg);


@media (max-width:1000px) {
width: 280px;
height: 190px;
}

@media (max-width: 660px) {
width: 240px;
height: 170px; 
}

@media (max-width: 536px) {
width: 200px;
height: 120px;
}

@media (max-width: 439px) {
width: 240px;
height: 160px;
}


`
export const InDiv = styled.div`
position: absolute;
background: #6C63FF;
width: 156px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 16px;
color: white;
font-weight: 600;

@media (max-width:1000px) {
width: 120px;
height: 20px;
font-size: 12px;
}

@media (max-width: 536px) {
width: 90px;
height: 20px;
font-size: 10px;
}

`
export const SquareImg = styled.img`
width: 400px;
height: 260px;
margin-top: 15px;


@media (max-width:1000px) {
width: 250px;
height: 160px;
}

@media (max-width: 660px) {
width: 220px;
height: 140px;
}

@media (max-width: 536px) {
width: 250px;
height: 130px;
}

@media (max-width: 536px) {
width: 180px;
height: 100px;
}

@media (max-width: 439px) {
width: 200px;
height: 140px;
}
`
export const AboutDiv = styled.div`
margin-top: 20px;
color: white;
font-size: 20px;
text-transform: capitalize;
font-weight: 100;

@media (max-width:1000px) {
font-size: 16px;
margin-top: 17px;
}
@media (max-width: 660px) {
font-size: 13px;
}
@media (max-width: 536px) {
font-size: 10px;
margin-top: 7px;
}
@media (max-width: 456px) {
margin-top: 5px;
}
`

