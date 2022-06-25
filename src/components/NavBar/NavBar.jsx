import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

// import './style'
import { Container, Link, LinkDiv, Logo, Option, Select } from './style'
import Drawer from './drawer/drawer'
import  './Navbar.css'

import LogoImg from '../NavBar/images/Logo.png'

const NavBar = (props) => {
    const [scroll, setScroll] = useState(false)

  const changeColor = ()=>{
    if(window.scrollY >= 50){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',changeColor, true)
    return ()=>{
      window.removeEventListener('scroll',changeColor)
    }
  }, [])

  const navigation = useNavigate()

    return (


        <div className={scroll ? 'Main2' : 'Main1'}>

        <Container>
                <Logo src={LogoImg} />
                <LinkDiv>
                    <Link onClick={()=>{navigation('/')}} >asosiy</Link>
                    <Link onClick={()=>{navigation('/texnopark')}} >texnopark</Link>
                    <Link onClick={()=>{navigation('/ittalim')}} >it ta'lim </Link>
                    <Link onClick={()=>{navigation('/startaplar')}} >startaplar</Link>
                    <Link onClick={()=>{navigation('/raqamlashtirish')}} >raqamlashtirish</Link>
                    <Link onClick={()=>{navigation('/business')}} >biznes</Link>
                    <Link onClick={()=>{navigation('/infratuzilma')}} >infratuzilma</Link>
                </LinkDiv>
                <Select>
                    <Option value="0">Uzb</Option>
                    <Option value="1">Ru</Option>
                    <Option value="2">Eng</Option>
                </Select>

                 <Drawer/>

        </Container>
        
        </div>
    )
}


export default NavBar