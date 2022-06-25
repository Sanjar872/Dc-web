import {React,useState,useEffect,useRef} from 'react'
import axios from 'axios'

import VidSlider from './vidSlider/Slider'
import Sliders from './slider/Slider'
import { Aloqa, AloqaForm, Button, ButtonDiv, BlurTitle, ChartTexts1, ChartTexts2, ChartTexts3, ChartTexts4, Entery, EnteryTel, EnteryTexts, EnteryTitle, EnteryVideo, EnteryVidIc, FormCard, FormIcon, FormInputs, FormTextDiv, FormTexts, InfoCard, InfoChart, InfoImg, Infos, InfoTexts, InfoWrapper, MainWrapper, MedFont, MiniDiv, Paragraph, PrimaryInp, SliderWr, TCardIc, TCardWr, TechCard, TechMain, TechPark, TelIc, TelText, Title, ModalWr, ModalVid, ModalClose } from './style'

// Asosiy section icons

import VideoIc from './assets/video.svg'
import TelIcon from './assets/telephone.svg'
import CloseIcon from '@mui/icons-material/Close';

// Tech icons

import Add from './assets/Icons1/add.svg'
import Bag from './assets/Icons1/bag.svg'
import Comp from './assets/Icons1/comp.svg'
import Person from './assets/Icons1/person.svg'
import Radio from './assets/Icons1/radio.svg'
import Rocket from './assets/Icons1/rocket.svg'
import Vector from './assets/Icons1/vector.svg'

// Info images

import CompImg from './assets/Images/comp.png'
import RocketImg from './assets/Images/rocket.png'
import GameImg from './assets/Images/joystick.png'
import DigitalImg from './assets/Images/digital.png'
import BusinessImg from './assets/Images/business.png'

// For slider

// eslint-disable-next-line
import "swiper/css/bundle";

// Aloqa images

import Location from './assets/Aloqa/location.svg'
import Mail from './assets/Aloqa/mail.svg'
import Phone from './assets/Aloqa/phone.svg'

// data
const Api_entery = 'http://167.99.214.82/get-slider/'
const Api_technopark = 'http://167.99.214.82/get-technopark/'
const Api_ittalim = 'http://167.99.214.82/get-section/1/'
const Api_startaplar = 'http://167.99.214.82/get-section/21/'
const Api_slider = 'http://167.99.214.82/get-projects/'
const Api_cybersport = 'http://167.99.214.82/get-section/3/'
const Api_digital = 'http://167.99.214.82/get-section/4/'
const Api_business = 'http://167.99.214.82/get-section/5/'
const Api_infrastructure = 'http://167.99.214.82/get-section/6/'
const Api_informations = 'http://167.99.214.82/get-info/'

// const Api_contact = ''

const Main = () => {

  // API links
  const [entery, setEntery] = useState({})
  const [texno, setTexno] = useState([])
  const [ittalim, setIttalim] = useState({})
  const [startap, setStartap] = useState({})
  const [slider, setSlider] = useState([])
  const [kiber, setKiber] = useState({})
  const [digital, setDigital] = useState({})
  const [business, setBusiness] = useState({})
  const [infrastructure, setInfrastructure] = useState({})
  const [information, setInformation] = useState({})
  
  useEffect(()=>{

    axios.get(Api_entery).then((res)=>{
      setEntery(res.data[1])
    })

    axios.get(Api_technopark).then((res)=>{
      setTexno(res.data)
    })

    axios.get(Api_ittalim).then((res)=>{
      setIttalim(res.data);
    })

    axios.get(Api_startaplar).then((res)=>{
      setStartap(res.data);
    })

    axios.get(Api_slider).then((res)=>{
      setSlider(res.data)
    })

    axios.get(Api_cybersport).then((res)=>{
      setKiber(res.data);
    })

    axios.get(Api_digital).then((res)=>{
      setDigital(res.data);
    })

    axios.get(Api_business).then((res)=>{
      setBusiness(res.data);
    })

    axios.get(Api_infrastructure).then((res)=>{
      setInfrastructure(res.data)
    })

    axios.get(Api_informations).then((res)=>{
      setInformation(res.data)
      console.log(res.data);
    })


  },[])

  // Open/Close slider function
  const mVideo = useRef()
  const openSlider = ()=>{
    mVideo.current.style.display = "flex"
  }

  const closeSlider = ()=>{
    mVideo.current.style.display = 'none'
  }
  
  return (

    
    <MainWrapper>

      {/* Entery section */}

      <Entery>
        <EnteryTexts>
          <EnteryTitle>{entery.title_uz}</EnteryTitle>
          <Button style={{marginLeft:'0px'}}>Infrotuzilma</Button>
        </EnteryTexts>
        <EnteryVideo>
          <EnteryVidIc onClick={openSlider} src={VideoIc} />
          <EnteryTel>
            <TelIc src={TelIcon} />
            <TelText>1227</TelText>
          </EnteryTel>
        </EnteryVideo> 
      </Entery>

      <ModalWr ref={mVideo}>
          <ModalClose onClick={closeSlider} src={<CloseIcon/>} />
          <VidSlider/>
      </ModalWr>

      {/* TechnoPark section */}

      <TechPark>
        <MiniDiv>
          <BlurTitle>TEXNOPARK</BlurTitle>
          <Title>TEXNOPARK</Title>
        </MiniDiv>
        <TechMain>

          {texno?.map((item,index)=>{
            return(
              <TechCard key={index}>
                <TCardIc src={`http://167.99.214.82${item.icon}`}/>
                <MedFont>+{item.number}</MedFont>
                <Paragraph>{item.text_uz}</Paragraph>
              </TechCard>
            )
          })
          
          }

        </TechMain>
        <ButtonDiv>
          <Button>Batafsil</Button>
        </ButtonDiv>
      </TechPark>

      {/* Info section */}

      <InfoWrapper>

      <InfoCard>
        <MiniDiv>
          <BlurTitle>IT TALIM</BlurTitle>
          <Title>IT TALIM</Title>
        </MiniDiv>
        <Infos>
          <InfoTexts>
            <Paragraph >{ittalim.text_uz}</Paragraph>
            <Button style={{marginLeft:'0'}}>Batafsil</Button>
          </InfoTexts>
          <InfoImg src={`http://167.99.214.82/${ittalim.image}`} />
        </Infos>
      </InfoCard>

      <InfoCard>
        <MiniDiv>
          <BlurTitle>STARTAPLAR</BlurTitle>
          <Title>STARTAPLAR</Title>
        </MiniDiv>
        <Infos>
          <InfoImg src={`http://167.99.214.82/${startap.image}`} />
          <InfoTexts>
            <Paragraph>{startap.text_uz}</Paragraph>
            <Button style={{marginLeft:'0'}}>Batafsil</Button>
          </InfoTexts>
        </Infos>
      </InfoCard>

        <SliderWr>
          <MiniDiv>
            <BlurTitle>Loyhalarimiz</BlurTitle>
            <Title>Loyhalarimiz</Title>
          </MiniDiv>
          
          <Sliders malumot={slider} />  {/* Slider */} 

        </SliderWr>

      <InfoCard>
        <MiniDiv>
          <BlurTitle>KIBERSPORT</BlurTitle>
          <Title>KIBERSPORT</Title>
        </MiniDiv>
        <Infos>
          <InfoTexts>
            <Paragraph>{kiber.text_uz}</Paragraph>
            <Button style={{marginLeft:'0'}}>Batafsil</Button>
          </InfoTexts>
          <InfoImg src={`http://167.99.214.82/${kiber.image}`} />
        </Infos>
      </InfoCard>

      <InfoCard>
        <MiniDiv>
          <BlurTitle>RAQAMLASHTIRISH</BlurTitle>
          <Title>RAQAMLASHTIRISH</Title>
        </MiniDiv>
        <Infos>
          <InfoImg src={`http://167.99.214.82/${digital.image}`} />
          <InfoTexts>
            <Paragraph>{digital.text_uz}</Paragraph>
            <Button style={{marginLeft:'0'}}>Batafsil</Button>
          </InfoTexts>
        </Infos>
      </InfoCard>

      <InfoCard>
        <MiniDiv>
          <BlurTitle>BUSINESS</BlurTitle>
          <Title>Biznesni ro‘yxatdan o‘tkazish</Title>
        </MiniDiv>
        <Infos>
          <InfoTexts>
            <Paragraph>{business.text_uz}</Paragraph>
            <Button style={{marginLeft:'0'}}>Batafsil</Button>
          </InfoTexts>
          <InfoImg src={`http://167.99.214.82/${business.image}`} />
        </Infos>
      </InfoCard>

      <InfoCard>
        <MiniDiv>
          <BlurTitle>RAQAMLASHTIRISH</BlurTitle>
          <Title>RAQAMLASHTIRISH</Title>
        </MiniDiv>
        <Infos>
          <InfoImg src={`http://167.99.214.82/${infrastructure.image}`} />
          <InfoTexts>
            <Paragraph>{infrastructure.text_uz}</Paragraph>
            <Button style={{marginLeft:'0'}}>Batafsil</Button>
          </InfoTexts>
        </Infos>
      </InfoCard>

      </InfoWrapper>

      {/* Aloqa section */}

      <Aloqa>
        <MiniDiv>
          <BlurTitle>aloqa</BlurTitle>
          <Title>aloqa</Title>
        </MiniDiv>
        <AloqaForm>
          <FormTexts>
            <FormCard>
              <FormIcon src={Location}/>
              <FormTextDiv>
                <MedFont>Manzil</MedFont>
                <Paragraph>{information.address_uz}</Paragraph>
              </FormTextDiv>
            </FormCard>
            <FormCard>
              <FormIcon src={Mail}/>
              <FormTextDiv>
                <MedFont>Telefon Raqam</MedFont>
                <Paragraph>+{information.phone}</Paragraph>
              </FormTextDiv>
            </FormCard>
            <FormCard>
              <FormIcon src={Phone}/>
              <FormTextDiv>
                <MedFont>E-mail</MedFont>
                <Paragraph>{information.email}</Paragraph>
              </FormTextDiv>
            </FormCard>
          </FormTexts>
          <FormInputs>
            <Title>BOG'LANISH</Title>
            <PrimaryInp placeholder="Ism-sharif" variant='standard'/>
            <PrimaryInp placeholder="Telefon raqam" variant='standard'/>
            <PrimaryInp  placeholder="Murojaat mavzusi" variant='standard'/>
            <Button style={{marginLeft:'0',padding:'10px 60px'}}>JO'NATISH</Button>
          </FormInputs>
        </AloqaForm>
      </Aloqa>

    </MainWrapper>
  )
}

export default Main