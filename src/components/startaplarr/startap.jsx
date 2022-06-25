import React, { useEffect, useState } from 'react'


//imgs
import Raketa from './images/raketa.png'
// import Ico1 from '../../Components/Startaplar/images/icon1.png'
// import ico2 from '../../Components/Startaplar/images/icon2.png'
// import ico3 from '../../Components/Startaplar/images/icon3.png'
// import ico4 from '../../Components/Startaplar/images/icon4.png'
// import ico5 from '../../Components/Startaplar/images/icon5.png'
// import ico6 from '../../Components/Startaplar/images/icon6.png'
// import Logo1 from '../../Components/Startaplar/images/logo1.png'
// import Logoo2 from '../../Components/Startaplar/images/logo2.png'
// import Logo3 from '../../Components/Startaplar/images/logo3.png'
// import Logo4 from '../../Components/Startaplar/images/logo4.png'
// import MikroSxema from '../../Components/Startaplar/images/binolar.png'
import Ok from './images/ok.png' 

import {  Container, Goya, UnBigStart, StartOne, Goya_div, Goya_h, Goya_p, Goya_img,  Direction, Directionh1, Logolar, Logo2, Iconlar, Iconlarr, Textt, Inkubatsiya, Inkb,  TalimMarkazlari, Logotiplar, Logoh5, Dastur,  DaturDiv, Dastur_Img, Div_img, Qulayliklar, Qulayliklar_div1, Qulayliklar_divlar, Qulayliklar_div2,  Qulaylikalr_h,  BigLogo, BckImg, BackImg, BackImg2, LogoImg, CardWrap, BigCard, Imglar } from './style';
import axios from 'axios'


//Data
const Startaplar = 'http://167.99.214.82/get-section/21/'
const StartupIcons = 'http://167.99.214.82/get-startupdirections/'
const InkubatsiyaIcons = 'http://167.99.214.82/get-incubationcenters/'




const Startap = () => {
  const [startaplar, setStartaplar] = useState({})
  const [finTech, setFinTech] = useState({})
  const [medtech, setMedtech] = useState({})
  const [agrotech, setAgrotech] = useState({})
  const [commerse, setCommerse] = useState({})
  const [education, setEducation] = useState({})
  const [gov, setGov] = useState({})

  const [adu, setAdu] = useState({})
  const [mashinasozlik, setMashinasozlik] = useState({})
  const [adti, setAdti] = useState({})
  const [qishloXojaligi, setQishloXojaligi] = useState({})
  const [dastur, setDastur] = useState({})
  useEffect(()=>{

    axios.get(Startaplar).then((res)=>{
      setStartaplar(res.data) 
    })
    console.log(startaplar);

    axios.get(StartupIcons).then((res)=>{
      setFinTech(res.data[0]) 
    })
    axios.get(StartupIcons).then((res)=>{
      setMedtech(res.data[1])
    })
    axios.get(StartupIcons).then((res)=>{
      setAgrotech(res.data[2])
    })
    axios.get(StartupIcons).then((res)=>{
      setCommerse(res.data[3])
    })
    axios.get(StartupIcons).then((res)=>{
      setEducation(res.data[4])
    })
    axios.get(StartupIcons).then((res)=>{
      setGov(res.data[5])
    })


    axios.get(InkubatsiyaIcons).then((res)=>{
      setAdu(res.data[0])
    })
    axios.get(InkubatsiyaIcons).then((res)=>{
      setMashinasozlik(res.data[1])
    })
    axios.get(InkubatsiyaIcons).then((res)=>{
      setAdti(res.data[2])
    })
    axios.get(InkubatsiyaIcons).then((res)=>{
      setQishloXojaligi(res.data[3])
    })


    axios.get(InkubatsiyaIcons).then((res)=>{
      setDastur(res.data[4])
    })

  },[])


  return (
    <>
     <Container>
       <StartOne>
         <UnBigStart>{startaplar.name_uz}</UnBigStart>
       </StartOne>
       <Goya>
         <Goya_div>
           <Goya_h>Sizda goya bormi? </Goya_h>
           <Goya_p>{startaplar.text_uz} </Goya_p>
        </Goya_div>
          <Goya_img src={Raketa} alt="" />
       </Goya>
       
         <Direction>
           <Directionh1>YO'NALISHLAR</Directionh1>
         </Direction>
      
        <CardWrap>
         <BigLogo>
           <Iconlar>
             <Imglar src={`http://167.99.214.82${finTech.icon}`} alt="" />
             <Textt>{finTech.name_uz}</Textt>
           </Iconlar> 
           <Iconlar>
             <Imglar src={`http://167.99.214.82${medtech.icon}`} alt="" />
             <Textt>{medtech.name_uz}</Textt>
           </Iconlar>
           <Iconlar>
             <Imglar src={`http://167.99.214.82${agrotech.icon}`} alt="" />
             <Textt>{agrotech.name_uz}</Textt>
           </Iconlar>
           <Iconlarr>
             <Imglar src={`http://167.99.214.82${commerse.icon}`} alt="" />
             <Textt>{commerse.name_uz}</Textt>
           </Iconlarr>
           <Iconlarr>
             <Imglar src={`http://167.99.214.82${education.icon}`} alt="" />
             <Textt>{education.name_uz}</Textt>
           </Iconlarr>
           <Iconlarr>
             <Imglar src={`http://167.99.214.82${gov.icon}`} alt="" />
             <Textt>{gov.name_uz}</Textt>
           </Iconlarr>
         </BigLogo>
         </CardWrap>

       <Inkubatsiya>
         <Inkb>
           <Directionh1>INKUBATISYA MARKAZLARI</Directionh1>
         </Inkb>
         <TalimMarkazlari>
           <Logotiplar>
             <LogoImg src={`http://167.99.214.82${adu.icon}`} alt="" />
             <Logoh5>{adu.text_uz}</Logoh5>
           </Logotiplar>
           <Logotiplar>
             <LogoImg src={`http://167.99.214.82${mashinasozlik.icon}`} alt="" />
             <Logoh5>{mashinasozlik.text_uz}</Logoh5>
           </Logotiplar>
           <Logotiplar>
             <LogoImg src={`http://167.99.214.82${adti.icon}`} alt="" />
             <Logoh5>{adti.text_uz}</Logoh5>
           </Logotiplar>
           <Logotiplar>
             <LogoImg src={`http://167.99.214.82${qishloXojaligi.icon}`} alt="" />
             <Logoh5>{qishloXojaligi.text_uz}</Logoh5>
           </Logotiplar>
         </TalimMarkazlari>
           <Dastur>
            <DaturDiv>
              <Goya_h>Inkubatsiya Dasturi</Goya_h>
              <Goya_p>{dastur.text_uz} </Goya_p>
            </DaturDiv>
            <Div_img>
            <Dastur_Img src={`http://167.99.214.82${dastur.icon}`} alt="" />
            </Div_img>
           </Dastur>

        <BigCard>
         <Qulayliklar>
            <Qulayliklar_divlar>
              <img src={Ok} alt="" />
              <Qulaylikalr_h>Qulay ofis.</Qulaylikalr_h>
            </Qulayliklar_divlar>
            <Qulayliklar_divlar>
              <img src={Ok} alt="" />
              <Qulaylikalr_h>Proffesional murabbiylar blan ishlash.</Qulaylikalr_h>
            </Qulayliklar_divlar>
            <Qulayliklar_divlar>
              <img src={Ok} alt="" />
              <Qulaylikalr_h>Muvaffaqiyatli tadbirkorlar blan aloqa.</Qulaylikalr_h>
            </Qulayliklar_divlar>
            <Qulayliklar_divlar>
              <img src={Ok} alt="" />
              <Qulaylikalr_h>Yuridik maslahat.</Qulaylikalr_h>
            </Qulayliklar_divlar>
            <Qulayliklar_divlar>
              <img src={Ok} alt="" />
              <Qulaylikalr_h>Buxgalteriya yordami.</Qulaylikalr_h>
            </Qulayliklar_divlar>
            <Qulayliklar_divlar>
              <img src={Ok} alt="" />
              <Qulaylikalr_h>Biznes tadbirlariga cheklanmagan kirish imkoniyati.</Qulaylikalr_h>
            </Qulayliklar_divlar>
         </Qulayliklar>
        </BigCard>

       </Inkubatsiya>
     </Container>
     </>
  )
}

export default Startap;