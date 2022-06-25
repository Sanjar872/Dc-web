import styled from "styled-components"
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    transition: all ease 0.5s;
    max-width: 1440px;
`

export const Logo = styled.img`
    width: 128px;
    height: 46px;
    object-fit: contain;
    margin-left: 35px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover{
        transition: all ease 0.5s;
        opacity: 0.6;
    }
`

export const LinkDiv = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    @media (max-width:768px) {
        display: none;
    }
`

export const Link = styled.h3`
    color: #FFFFFF;
    font-weight: 400 ;
    font-size: 16px ;
    cursor: pointer;
    line-height: 19px ;
    text-transform: uppercase ;
    transition: all ease 0.3s;
    margin: 10px;
    &:hover{
        transition: all ease 0.5s;
        opacity: 0.6;
    }    
    @media (max-width:900px) {
        font-size: 10px;
    }
`

export const Select = styled.select`
    background-color: #00000030;
    width: 70px;
    height: 30px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 5px;
    color: white;
    cursor: pointer; 
    outline: none;
    transition: all ease 0.5s;
    margin-right: 30px;
    @media (max-width:768px) {
        margin-right: 0px;
        display: none;
    }
`

export const Option = styled.option`
    width: 90px;
    height: 40px;
    background-color: #00000030;
    color: #494949;
    transition: all ease 0.5s;
`





