import styled from "styled-components";
import Menu from './images/menu.png'
import Close from './images/close.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0);
    box-sizing: border-box;
`
export const Navbar = styled.div`
    width: 88%;
    height: 7vh;
    margin: 2% 0 0 0;
    background: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1000;
    @media only screen and (max-width: 730px) {
        display: none;
    }
`
export const Logo = styled.img`
    width: 11.5%;
`
export const NavLink = styled.div`
    width: 75%;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media only screen and (max-width: 1380px){
        font-size: 14px;
    }
`
export const Select = styled.select`
    border-radius: 30px;
    width: 5%;
    height: 50%;
    padding: 0 5px ;
    border: 1px solid white;
    outline: none;
    color: white;
    background: rgba(0, 0, 0, 0);

    @media only screen and (max-width: 1490px){
        font-size: 12px;
    }
    @media only screen and (max-width: 1340px){
        font-size: 10px;
    }
`
export const Option = styled.option`
    background: rgba(0, 0, 0, 0);
    color: black;
`
export const Text = styled.h6`
    color: white;
    font-family: 'Play';
    font-size: 16px;
    font-weight: 400;
`
export const Icons = styled.div`
    width: 3.6%;
    height: 35.2%;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    left: 6%;
    top: 35%;
    justify-content: center;
    align-items: center;
    position: fixed;
    @media only screen and (max-width: 730px) {
        display: none;
    }
`
export const Icon = styled.div`
    width: 55px;
    height: 55px;
    justify-content: space-between;
    background: #ffffff17;
    outline: 0;
    border-radius: 50%;
    margin: 0% 0%  35% 0%;
`
export const IconImg = styled.img`
    width: 50%;
    margin: 20% 20%  6% 25%;
`
export const Toggle = styled.div`
    position: fixed;
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #000 url(${Menu});
    background-size: 30px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 1000;
    display: none;
    @media only screen and (max-width: 730px) {
        display: block;
    }
`
