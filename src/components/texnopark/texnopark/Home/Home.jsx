import React, { useState, useEffect} from 'react'
import './style'
import NavBar from './../NavBar/NavBar'
import { BackImg, BackImg1, Body, Building,  Circles, Container, DigitalCityBox, DigitalCityBox1, DigitalCityImage, DIgitalCityMiniBox, DigitalCityTxt, DivIcon,  DivPar1, DivPar2, DivPar3, DivPar4, DivPar5, DivText, DivText1, GoogleMap, GoogleMap1, Icon2, Images, Infratuzilma, InsideCircle, InsideDegree, InsideDegreeBox, InsidePar, InsidePar1, InsidePar2, InsidePar3, InsidePar4, KiberBox, KiberButton, KiberHeader, KiberImage, KiberText, Kovorking, KovorkingBox, KovorkingImg, KovorkingImg2, KovorkingText, KovorkingText2, MainDiv, MainText, Manzil, Mission, MissionDiv, OfficeRent, OurAuditory, OurSpec, Paragraph, PhoneNum, PurpleBox, PurpleBox2, PurpleBox3, PurpleBox4, PurpleDiv, Rezident, RezidentBox, RezidentImg, RezidentPar, RezidentText, Team, TeamBox, TeamImg, TeamImgDiv, TeamText, TEXNOPARK, TEXNOPARK2, Text } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Map from './Map/Map'
import { Base_Url } from './API/Api' 
import { Rezident_Url } from './API/Api'
import { Team_Url } from './API/Api'
import { Coworking_Url } from './API/Api'
import axios from 'axios';

import RezidentImage from './images/rezident.png'
import Circle1 from './images/circles1.png'
import Circle2 from './images/circles2.png'
import Team1 from './images/team.png'
import Cyber from './images/cybersport.png'
import Coworking from './images/coworkingimg.png'
import Coworking2 from './images/coworkingimg2.png'
import DigitalCity1 from './images/digitalcity1.png'
import DigitalCity2 from './images/digitalcity2.png'
import DigitalCity3 from './images/digitalcity3.png'
import DigitalCity4 from './images/digitalcity4.png'
import DigitalCity5 from './images/digitalcity5.png'
import DigitalCity6 from './images/digitalcity6.png'




const Home = () => {

    const [data, setdata] = useState([])
    const [data2, setdata2] = useState([])
    const [data3, setdata3] = useState([])
    const [data4, setdata4] = useState([])
    const [data5, setdata5] = useState([])
    const [resident, setresident] = useState([])
    const [team, setteam] = useState([])
    const [cowork, setcowork] = useState([])
    const [cowork1, setcowork1] = useState([])

    useEffect(()=>{
        axios.get(Base_Url)
        .then(res=>{
            setdata(res.data[0])
        })
        axios.get(Base_Url)
        .then(res=>{
            setdata2(res.data[1])
        })
        axios.get(Base_Url)
        .then(res=>{
            setdata3(res.data[2])
        })
        axios.get(Base_Url)
        .then(res=>{
            setdata4(res.data[3])
        })
        axios.get(Base_Url)
        .then(res=>{
            setdata5(res.data[4])
        })
        axios.get(Rezident_Url)
        .then(res=>{
            setresident(res.data[0])
        })
        axios.get(Team_Url)
        .then(res=>{
            setteam(res.data[0])
        })
        axios.get(Coworking_Url)
        .then(res=>{
            setcowork(res.data[0])
        })
        axios.get(Coworking_Url)
        .then(res=>{
            setcowork1(res.data[1])
        })
    }, [])
    return (
        <>
        <NavBar />
        <Body>

        <Container>
            <TEXNOPARK>TEXNOPARK</TEXNOPARK>
            <TEXNOPARK2>TEXNOPARK</TEXNOPARK2>
            <MainText>Digital city</MainText>
            <Text>Innovatsiyalarga bir qadam yaqinlashing</Text>
            <PhoneNum>1227</PhoneNum>
        </Container>
        <BackImg>
            
            <MainDiv>
            <Mission>BIZNING MISSIYAMIZ </Mission>
            <Paragraph>Digital city - missiyasi innovatsion loyihalarni ishlab chiqaruvchi yetakchi markazlardan biriga aylanish, ilg'or IT kompaniyalarni ishga tushirish va butun dunyodan yosh va iqtidorli IT mutaxassislarning ahamiyatli massasini jalb qilish o'chog'iga aylanishdir.</Paragraph>
            <OurAuditory>BIZNING AUDITORIYAMIZ</OurAuditory>
            
            </MainDiv>
            <PurpleBox>

                
            <PurpleDiv>
                <DivIcon src={`http://167.99.214.82${data.image}`}/>
                <DivText>{data.name_uz}</DivText>
                <DivPar1>{data.text_uz}</DivPar1>
            </PurpleDiv>
            <PurpleDiv>
                <DivIcon src={`http://167.99.214.82${data2.image}`} />
                <DivText>{data2.name_uz}</DivText>
                <DivPar2>{data2.text_uz}</DivPar2>
            </PurpleDiv>
            </PurpleBox>


            <PurpleBox2>
                <PurpleDiv>
                    <DivIcon src={`http://167.99.214.82${data3.image}`} />
                    <DivText1>{data3.name_uz}</DivText1>
                    <DivPar3>{data3.text_uz}</DivPar3>
                </PurpleDiv>
                <PurpleDiv>
                    <DivIcon src={`http://167.99.214.82${data4.image}`} />
                    <DivText1>{data4.name_uz}</DivText1>
                    <DivPar4>{data4.text_uz}</DivPar4>
                </PurpleDiv>
                <PurpleDiv>
                    <DivIcon src={`http://167.99.214.82${data5.image}`} />
                    <DivText1>{data.name_uz}</DivText1>
                    <DivPar5>{data.text_uz}</DivPar5>
                </PurpleDiv>
            </PurpleBox2>

            {/* Rezident  */}
            <Rezident>
                <RezidentImg src={`http://167.99.214.82${resident.image}`} />
                <RezidentText>REZIDENTLAR</RezidentText>
                <RezidentPar>{resident.name_uz}</RezidentPar>
            </Rezident>

            {/* Circles  */}
            <Circles>
                <InsideCircle src={Circle1} />
                <InsideCircle src={Circle2} />
                
                <InsideDegree>7.5%</InsideDegree>
                <InsideDegree>0%</InsideDegree>
                <InsideDegree>0%</InsideDegree>
                <InsideDegree>Yoq</InsideDegree>
                

                <InsidePar1>Daromad solig'i</InsidePar1>
                <InsidePar2>Korporativ soliqlar</InsidePar2>
                <InsidePar3>Yagona ijtimoiy to'lov</InsidePar3>
                <InsidePar4>O'z ehtiyojlari uchun tovarlarni olib kirishda bojxona to'lovlari</InsidePar4>
            </Circles>

            {/* Purple block */}
            <PurpleBox3>
            <RezidentBox>

            </RezidentBox>
            <RezidentBox>
                
            </RezidentBox> 

            </PurpleBox3>

            <PurpleBox4>
                <RezidentBox>

                </RezidentBox>
                <RezidentBox>
                    
                </RezidentBox>
                <RezidentBox>
                    
                </RezidentBox>
            </PurpleBox4>

            {/* Team */}

            <Team>JAMOA</Team>
            <OurSpec>Bizning Asosiy Qadriyatimiz</OurSpec>
            <TeamBox>
            <TeamText>{team.text_uz}</TeamText>
            <TeamImgDiv>
            <TeamImg src={Team1} />
            </TeamImgDiv>
            </TeamBox>
            
            {/* Kibersport  */}
            <KiberBox>
                <KiberHeader>KIBERSPORT</KiberHeader>
                <KiberImage src={Cyber} />
                <KiberText>
                Kibersport yo‘nalishida professional jamoalar tuzishda xizmat ko’rsatish uchun va musoboqalar o’tkazish uchun eng zamonaviy kompyuterlar va qulayliklarga egamiz va kibersport rivojlanishida xizmat ko’rsatamiz.
                </KiberText>
                <KiberButton>Batafsil</KiberButton>
            </KiberBox>

            {/* Kovorking  */}
        <Kovorking>KOVORKING</Kovorking>
        <OfficeRent>IT tadbirkorlarga qulay va arzon ijara ofis o'rinlarini taqdim etamiz.</OfficeRent>
        <KovorkingBox>
            <KovorkingText>{cowork.text_uz}</KovorkingText>
            <KovorkingImg src={Coworking} />
            <KovorkingImg2 src={Coworking2} />
            <KovorkingText2>{cowork1.text_uz}</KovorkingText2>
        </KovorkingBox>


        {/* INFRATUZILMA  */}
        <Infratuzilma>INFRATUZILMA</Infratuzilma>
        <Building>Bino 4 qavatdan iborat. Umumiy quvvati 200 dan ortiq ish o'rinlari. 86 ta taqdimot xonalari. 24 soatlik xavfsizlik.</Building>
        <DigitalCityBox>
            <DigitalCityImage src={DigitalCity1} />
            <DigitalCityBox1>
                <DigitalCityTxt>Ta'kidlash lozimki, axborot texnologiyalari va innovatsion loyihalarni qo'llab-quvvatlash, dasturiy mahsulotlar eksportini yo'lga qo'yish maqsadida ishlab chiqilgan Digital City loyihasi mohiyatiga ko'ra, Toshkentdagi IT-parkdan so'ng tashkil etilgan ikkinchi, viloyatlar miqyosida esa birinchidir.</DigitalCityTxt>
            </DigitalCityBox1>
            <DIgitalCityMiniBox>
                <Images src={DigitalCity2} />
                <Images src={DigitalCity3} />
                <Images src={DigitalCity4} />
                <Images src={DigitalCity5} />
                <Images src={DigitalCity6} />
            </DIgitalCityMiniBox>
        </DigitalCityBox>

        {/* Manzil  */}
        <Manzil>MANZIL</Manzil>
        <GoogleMap />
        </BackImg>
        </Body>
        {/* <BackImg1>

        </BackImg1> */}
        </>
    )
}

export default Home