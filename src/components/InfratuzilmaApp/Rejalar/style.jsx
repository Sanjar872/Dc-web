import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    height:auto;
    justify-content:center;

    
`
export const Harakatlar = styled.div`
    width:100%;
    height:400px;
    display:flex;
    text-align:center;
    justify-content:center;
`

export const Harakatdiv = styled.div`
    color:white;
    width:25%;
    height:250px;
    display: flex;
    text-align:center;
    justify-content: center;
    flex-direction: column;

    h1 {&:hover{
          transform:scaleY(1.3);
          /* transform: translate(120px, 50%); */
          transition:1s;
          cursor: pointer;
      }
    }
    h3 {
        &:hover{
          transform:scaleY(1.5);
          /* transform: translate(120px, 50%); */
          transition:1s;
          cursor: pointer;
      }
    
    }
    @media screen and (max-width:1304px) {
            width:80%;
    }

    @media screen and (max-width:600px) {
            width:80%;
            height:400px;
            h1 {
                font-size :25px;
                text-align:center;
            }

            p {
                font-size:14px;
            }
    }

    
    h1{
        width:100%;
        height:70px;
        display:flex;
        justify-content:center

    }
    h3{
        width:100%;
        text-align:center;
        height:100px;
        font-size:18px;
        display:flex;
        justify-content:center;
font-weight: 400;
line-height: 28px;

    }
`

export const Griddiv = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`
export const Cardlar = styled.div`
    display:flex;
    grid-template-columns:1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    justify-content: center;

    gap:40px;
    @media (max-width:600px) {
        font-size:14px;
    }
    div{
        display: flex;
        width:250px;
        justify-content: center;
        align-items: center;
        height:180px;

        p{
        color:white;
font-weight: 200;
font-size: 13px;
line-height: 17px;
text-align: center;
text-transform: uppercase;

        }
    }
`

export const LiniDiv = styled.div`
    width:100%;
    display:flex;
    background-repeat:no-repeat;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:599px) {
     transform:scale(0.9);   
    }
    @media screen and (max-width:530px) {
     transform:scale(0.6); 
     width:100%;
     height:650px;
     font-size:10px;
    }   
    div{
        /* position:relative; */
        z-index:999;
    }
    img{
    }
`

export const IMGG = styled.img`
    @media screen and (max-width:900px) {
        display:none;
    }
`

export const Border = styled.div`
    display:flex;
    padding-left:50px;
    width:100%;
    height:auto;
    margin-top:-135px;
    justify-content:center;
    
    img{
    display:flex;
    justify-content:center;
    right:595px;
    z-index:999;

    }
`
export const Paragraov = styled.div`
    width:20%;
    color:white;
    font-size:13px;
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    
    p{

    }
    
    span {
        &:hover{
          transform:scaleY(1.5);
          /* transform: translate(120px, 50%); */
          transition:1s;
          cursor: pointer;
      }
        @media (max-width:884px){
            width:100%;
            font-size:10px !important;
        }
        @media (max-width:816px){
            width:100% !important;
            font-size:10px !important;
        }
        @media (max-width:530px){
        font-size:10px !important;
        width:120px !important;
        }

        :nth-child(1){
            height: 200px;
            display: flex;
            align-items: flex-end;
        }
        :nth-child(2){
            height: 100px;
            display: flex;
            align-items: center;
            margin-right: -65px;
            padding-top:40px;
            width: 150px;
        }
        
        :nth-child(3){
            height: 125px;
            display: flex;
            align-items: flex-end;
            padding-top:30px;
            padding-left:20px;
        }
        :nth-child(4){
            height: 100px;
            display: flex;
            padding-left:-50px;
            align-items: flex-end;
            margin-right: -78px;
            margin-left:20px;
            width: 170px;


        }
        :nth-child(5){
            height: 140px;
            display: flex;
            padding-left:50px;
            align-items: flex-end;
        }
        :nth-child(6){
            height: 55px;
            display: flex;
            padding-top:80px;
            margin-top:60px;
            padding-top:70px;
            padding-left:270px;
            align-items: flex-end;
        }
        :nth-child(7){
            height: 150px;
            display: flex;
            padding-left:80px;
            align-items: flex-end;
        }
        :nth-child(8){
            height: 90px;
            display: flex;
            margin-top:30px;
            padding-left:20px;
            margin-right:-80px;
            align-items: flex-end;
            width:200px;
        }
        :nth-child(9){
            height: 100px;
            display: flex;
            padding-left:40px;
            margin-top:30px;
            padding-left:20px;
            margin-right:-15px;
            align-items: flex-end;
        }
    }
    
    `
     export const Paragraov2 = styled.div`
     width:20%;
     color:white;
     font-size:14px;
     display:flex;
     flex-direction:column;
     align-items: flex-start;
  
     
      span {
          @media (max-width:884px){
              width:100%;
              font-size:10px !important;
          }
          @media (max-width:816px){
              width:100% !important;
              font-size:10px !important;
          }
          @media (max-width:530px){
          font-size:10px !important;
          width:120px !important;
      }
          :nth-child(1){
              height:100px;
              margin-top:250px;
              width:300px;
              margin-left:-40px;
  
          }
          :nth-child(2){
              height:100px;
              margin-top:20px;
              width:300px;
              padding-top:15px;
              margin-left:-110px;
          }:nth-child(3){
              height:100px;
              margin-top:20px;
              width:300px;
              padding-top:12px;
              margin-left:-45px;
          }:nth-child(4){
              height:100px;
              margin-top:5px;
              width:300px;
              padding-top:10px;
              margin-left:-108px;
          }:nth-child(5){
              height:100px;
              margin-top:105px;
              width:300px;
              padding-top:15px;
              margin-left:-110px;
          }:nth-child(6){
              height:50px;
              margin-top:80px;
              width:300px;
              padding-top:12px;
              font-size:12px;
              margin-left:-60px;
          }:nth-child(7){
              height:80px;
              width:300px;
              margin-top:20px;
              padding-top:15px;
              margin-left:-110px;
          }:nth-child(8){
              height:50px;
              width:300px;
              margin-top:30px;
              padding-top:15px;
              margin-left:-220px;
          }:nth-child(9){
              
          }:nth-child(10){
              
          }
      }
  
     ` 
     export const ItKompaniya = styled.div`
         width:100%;
         display:flex;
         margin-top:150px;
         justify-content:center;
         flex-direction: column;
         h1{
             color:white;
             display:flex;
             justify-content:center;
             width:100%;
         }
         p {
             color:white;
             width:100%;
             display:flex;
             justify-content:center;
             text-align:center;
             font-size:18px;
             font-weight:400;
         }

         @media (max-width:600px) {
            font-size:14px; 
            padding: 0 5%; 

            p {
                font-size:14px;
            }
         }
        
     `
     
