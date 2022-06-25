import styled from "styled-components";
import imgae from './images/imga.jpg'
//import Head from '@mui/icons-material/HeadsetMicRounded';
//import Hourglas from '@mui/icons-material/HourglassBottomOutlined';
//import Edit from '@mui/icons-material/EditTwoTone';
import { Button } from "@mui/material";
import Dashboar from '@mui/icons-material/DashboardCustomizeOutlined';
import Clean from '@mui/icons-material/CleanHandsOutlined';
import Rocket from '@mui/icons-material/RocketLaunchOutlined';
import Local from '@mui/icons-material/LocalPhone';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
//import ClearIcon from '@mui/icons-material/Clear';




export const Wrapper = styled.div`
    width: 100%;
    flex-wrap: wrap;
    background-image: url(${imgae});
    background-repeat: no-repeat;
    background-size: cover; 
    background-attachment: fixed;
    font-family: 'Play';
    @media (max-width:360px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
// <<--- 	!BigText! --->
export const BigText = styled.div`
    color: aliceblue;
    width: 70%;
    margin-left: 13%;
    margin-top:-800px;
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;	
    @media screen {
     max-width   :1140px ;
    }
`

export const PhoneNum = styled.div`
	display: flex;
	margin-top: 100px;
    margin-left: 80%;
	//border: 1px solid red;
    justify-content: flex-end;
    align-items: center;
    //text-align: end;
	text-align: center;
	padding: 5px;
	z-index: 9999;
    margin-right:10px;
    width: 140px;
    height: 50px;
    color: white;
    
    @media (max-width:800px){
        width: 20px;
        margin-top: 20px;
        text-align: center;
    }
	
`
export const Number = styled.h1`
	color:white;
	margin-bottom: 7px;
`

export const QandayH3 = styled.h3`
	color: white;
	float: left;
`
// <<--- !TextS! --->
export const TextS = styled.div`
    /* position: relative; */
    width: 100%;
    height: 20%;
    padding-top:50px;
    left:23.5rem;
    margin-bottom: -150px;
    font-weight: 700;
    font-size: 95.724px;
    color: rgba(255, 255, 255, 0.04);
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    @media(max-width: 1500px){
        font-size:80px;
    }
    @media(max-width: 1400px){
        font-size:70px;
    }
    @media(max-width: 1300px){
        font-size:70px;
    }

    @media (max-width:600px) {
        /* display:none; */
    }
`
export const TextB = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 85px;
    width: 100%;
    font-size: 50px;
    font-family: 'Play';
    font-size: 28px;
    line-height: 35px;
    font-weight: 600;
    text-transform: uppercase;
    color: #FFFFFF;
    /* margin-left: -10px; */
    @media(max-width:817px){
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0px;
    }
`
export const Text1 = styled.p`
    font-size: 20px;
    display: flex;
    height:200px;
    align-items: center;
    justify-content: center;
`
// <<---!BioznesTime! --->>

export const BiznesTime = styled.div`
    color: aliceblue;
    width: 70%;
    justify-content: space-evenly;
    align-items: center;
    margin:5%;
    padding: 1%;
    margin-left: 12%;
    margin-bottom:10% ;
    margin: 0 auto;
    max-width: 1140px;
    text-align: center;
    display: flex;
	position: relative;
    //border: 1px solid red;
    @media (max-width:800px){
        flex-direction: column;
    }
    @media (min-width:800px)and(max-width:1041px) {
        text-align: center;
    }
`

    
export const Biznes1 = styled.div`
    margin-right:30px ;
    width: 250px;
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
        margin-left: 30px;
    }
    
`

export const Biznes2 = styled.div`
    width: 250px;
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
    }
`
export const Biznes3 = styled.div`
    //border: 1px solid red;
    width: 250px;
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
    }
`
// <<--- !MyIcon! --->
export const MyIcon = styled.div`
    width: 3%;
    height: 25%;
    color: white;
    margin-top: 8%;
    columns: inherit;
    position: absolute;
    margin-left: 1%;
    margin-top: -2%;
    padding: 15px;
    @media(max-width: 618px){
        display: none;
    }
`
export const DashboarIcon = styled(Dashboar)`
    background-color: #90900920 !important;
    padding: 7px !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    margin: 15px !important;
`
export const CleanIcon = styled(Clean)`
    background-color: #90900920 !important;
    padding: 7px !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    margin: 15px !important;
`
export const RocketIcon = styled(Rocket)`
    background-color: #90900920 !important;
    padding: 7px !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    margin: 15px !important;
`
export const LocalIcon = styled(Local)`
    background-color: #90900920 !important;
    padding: 7px !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    margin: 15px !important;
`


export const H = styled.h2`
    margin-left: 3%;
`
// <<--- !Compony! --->
export const Company = styled.div`
    width: 90%;
    height:500 ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    //border: 1px solid white;
    @media (max-width:1309px){
        flex-direction: column;
        margin-top: 40px;
        margin-bottom: 100px;
        display:flex;
        align-items: center;
        text-align: center;
        margin-left: 5%;
        height: auto;
    }
    padding: 10px;
    margin-top: 15px;
    button{
        
    }
`
export const Btn1 = styled.div`
    width: 100%;
    height:200px;
    //border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:32%){

    }
    button{
    background: #6C63ff !important;
    border: 1px solid #6C63ff !important;
    color: #fff !important;
    border-radius: 50px !important;
    font-size: 15px !important;
    border:1px solid white  !important;
    @media (max-width:890){
        margin-top: 200px;
    }
    }
`
export const Person = styled.img`
    width: 35%;
    height: 50%;
    //border: 1px solid red;
    @media(max-width: 500px){
        
    }
`
export const Text = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;
    height: 430px;
    color: #fff;
    flex-wrap: wrap;
    align-items: center;
    //border:1px solid blue;
    @media (max-width:700px){
        width:100%;
    }
    
    
`
export const Text01 = styled.div`
    width:45% ;
    height:27.5%;
    text-align: center;
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
    }
`
export const Text02 = styled.div`
    width:45% ;
    height:27.5%;
    text-align: center;
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
    }
`
export const Text03 = styled.div`
    width:45% ;
    height:27.5%;
    text-align: center;
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
    }
`
export const Text04 = styled.div`
    width:45% ;
    height:30%;
    text-align: center;
    @media (max-width:888px){
        width:100%;
        margin-top:20px;
    }
`

// <<--- !Price! --->
export const Price = styled.div`
    width: 90%;
    /* height: 70%; */
    /* left: 0; */
    /* top: 1762px; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 6%;
    font-weight: 400;
    //border: 2px solid blue;
    margin-top: 15px;
    margin-top: 100px;
    @media (max-width:1190px){
        flex-direction: column;
        height: auto;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const Prices = styled.div`
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    height: 5%;
    //border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:750px){
        width:100%;
        margin-top:20px;
    }
`
export const Consultatsion = styled.div`
    width: 350px;
    height: 436px;
    border-radius: 20px;
    padding: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    margin-bottom:15px;
    h2{
        font-size: 20px;
    }
    h3{
        font-size:15px;
    }
    @media (max-width:360px){
        width: 300px;
        margin-right: 5px;
    }
`
export const Whatch = styled.h3`
    
`
export const Price1 = styled.h2`
    /* position: absolute; */
    padding-bottom:15px;
    color:#fff;
`
export const Button1 = styled(Button)`

    background: #6C63ff !important;
    border: 1px solid #6C63ff !important;
    color: #fff !important;
    border-radius: 50px !important;
    font-size: 15px !important;
    /* margin-bottom: -60px !important; */
    @media (max-width:1030){
        margin-bottom:60px ;
    }
`
export const Entrepreneur = styled.div`
    width: 350px;
    height: 436px;
    border-radius: 20px;
    padding: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    margin-bottom:15px;
    h2{
        font-size: 20px;
    }
    h3{
        font-size: 15px;
    }
    @media (max-width:360px){
        width: 300px;
        margin-right: 5px;
    }
`
export const Watch = styled.h3`
    font-size: 20px;
    
`
export const Price2 = styled.h2`
    color: #fff;
    position: absolute;
    margin-top: 330px;
`
export const Society = styled.div`
    width: 350px;
    height: 436px;
    border-radius: 20px;
    padding: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    margin-bottom:15px;
    h2{
        font-size: 20px;
    }
    h3{
        font-size: 15px;
    }
    @media (max-width:360px){
        width: 300px;
        margin-right: 5px;
    }
`
export const Big = styled.div`
    width: 100%;
    height: 100vh;
    //border: 1px solid red;
    @media (max-width:888px){
        margin-top: 200px;
    }
    @media (max-width:360px){
        width: 318px;
    }
`


export const H1main = styled.h2`
    
`

export const HourglasIcon = styled.img`
    margin-left:8px!important;
    width:43px!important;
    height:43px!important;
    color:blue!important;
`
export const EditIcon = styled.img`
    margin-left:8px !important;
    /* border:3px solid white !important; */
    border-radius:50% !important;
    width:51px !important;
    height:51px !important;
    color:blue !important;
`
export const HeadIcon = styled.img`
    margin-left:8px !important;
    width:51px !important;
    height:51px !important;
`
export const Btn = styled.button`
    width: 230px;
    height: 50px;
    border-radius: 50px;
    font-size: 20px;
    font-family: Play;
    background-color: #6C63ff;
    color: white;
    transition: 0.2s;
`





export const ModalDiv = styled(Modal)`
    /* border: 5px solid red !important; */
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
`
export const BoxDiv = styled(Box)`
    /* border: 5px solid yellow !important; */
/* width: 70% !important;  */
`
export const Main = styled.div`
    font-family: Play;
    /* border: 3px solid red ; */
    /* width: 80%; */
    /* margin-left: 80px; */
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
`
//forum:

export const Container = styled.div`
    width: 50%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: Play;
   
    
`
export const Form = styled.div `
    width: 800px;
    height: 750px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 20px;
    backdrop-filter: blur(6px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 50px 0px;
    transform: scale(.9);
`
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    color:white;
    @media (max-width:477px){
        width: 315px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
    }
    input {
        outline: none;
        border: none;
        width: 454px;
        height: 57px;
        text-align: start;
        padding: 0px 5px ;
        border-radius: 10px;
        font-size: 25px;
        background-color: rgba(255,255,255,0.35);
        color: #fff;
        margin: 10px;
        padding: 10px;
        font-size: 20px;
        @media (max-width:477px){
        width: 315px;
        transform: scale(1);
    }

        }
    label{
        height: 30px;
        widows: 30px;
        margin-left:10px;
    }
    
    h1{
        position: absolute;
        top: 5px;
        right: 15px;
        
    }     
         
`
export const Item1 = styled.div`
    display: flex;
    flex-direction: column;
    color:white;
    textarea{
        outline: none;
        border: none;
        width: 454px;
        height: 150px;
        padding: 0px 5px ;
        border-radius: 10px;
        background-color: rgba(255,255,255,0.35);
        color: aliceblue;
        margin: 10px;
        padding: 10px;
        text-align: start;
        font-size: 20px;
        max-width: 454px;
        min-width: 454px;
        min-height: 150px;
        max-height: 300px;
        @media (max-width:477px){
        width: 315px;
        min-width: 315px;
    }
        }
    label{
        height: 30px;
        widows: 30px;
        margin-left:10px;
        @media (max-width:477px){
            text-align: center;
        }
        
    }     
`

// export const ClearIc = styled(ClearIcon)`
//     margin-left:200px !important;
// `