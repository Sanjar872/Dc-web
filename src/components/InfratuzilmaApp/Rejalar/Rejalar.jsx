import React from 'react'
// import styles from '../styles/rejalar.module.css'
// import zmeyka from '../assets/icons/zmeyka.svg';
// import { style } from '@mui/system';

import {Container,Harakatlar,Harakatdiv,Griddiv,Cardlar,LiniDiv,IMGG,BoderLIni,Border,Paragraov,BoderRasm,Paragraov2,ItKompaniya} from './style'
import BorderLIni from '../assets/icons/Borderlin.png'
import Zmeykarasm from '../assets/icons/RasmPage.png'


const Rejalar = () => {
   return (
      <Container>
         
      <Harakatlar>
        <Harakatdiv data="zoom-in-down">
          <h1>Harakatlar Strategiyasi</h1>
          <p>Axborot texnologiyalari va kommunikasiyalarini rivojlantirish vazirligining 2017 yilda amalga oshiradigan CHORA-TADBIRLAR DASTURI</p>
        </Harakatdiv>

      </Harakatlar>
      <Griddiv>
        <Cardlar data-aos="zoom-out-down">
          <div><p>iQtisodiyotni rivojlantirish va liberallashtirish : iQtisodiyot, ijtimoiy soxa, boshQaruv tizimiga axborot-kommunikatsion texnologiyalarni joriy etish. kichik biznes va xususiy tadbirkorlikni rivojlantirish rag’batlantirish</p></div>
          <div><p>iQtisodiyotni rivojlantirish va liberallashtirish : iQtisodiyot, ijtimoiy soxa, boshQaruv tizimiga axborot-kommunikatsion texnologiyalarni joriy etish. kichik biznes va xususiy tadbirkorlikni rivojlantirish rag’batlantirish</p></div>
          <div><p>xavsizlik, diniy bag’rikenglik va millitlar aro totuvlikni taminlash</p></div>
          <div><p>QONUN USTUVORLIGINI TA’MINLASH, SUD-HUQUQ TIZIMINI ISLOH QILISH</p></div>

        </Cardlar>
      </Griddiv>
      <LiniDiv>

        <div >
          <IMGG src={BorderLIni} alt="" />
        </div>
        <Border>
          <Paragraov>
            <span>
              <p>O’ZBEKISTON RESPUBLIKASI VAZIRLAR MAHKAMASINING “YAGONA INTERAKTIV DAVLAT XIZMATLARI PORTALI ORQALI ELEKTRON DAVLAT XIZMATLARINI TAKOMILLASHTIRISH CHORA-TADBIRLARI TO’G’RISIDA”GI QARORI LOYIHASI</p>
            </span>
            <span>
              <p>FAOLIYATNING 40 TURI BO’YICHA ELEKTRON LITSENZIYALASH PORTALINI YO’LGA QO’YISH</p>
            </span>
            <span>
              <p>“YAGONA DARCHA” MARKAZLARIDA AVTOMATLASHTIRILGAN AXBOROT VA DAVLAT XIZMATLARI UCHUN TO’LOVLARNING BILLING TIZIMINI YARATISH</p>
            </span>
            <span>
              <p>HUDUDLARDA “YAGONA DARCHA” MARKAZLARI VA “O’ZBEKISTON POCHTASI” AJ BO’LINMALARIDA 250 TA INFOKIOSKANI O’RNATISH</p>
            </span>
            <span>
              <p>RESPUBLIKA HUDUDLARIDA 66 TA YUQORI QUVVATLI VA 328 TA KAM QUVVATLI RAQAMLI TELEVIDENIE UZATKICHLARINI O’RNATISH VA ISHGA TUSHIRISH </p>
            </span>
            <span>
              <p>RESPUBLIKA HUDUDLARIDA MOBIL ALOQA OPERATORLARNING 1843 TA BAZA STANSIYALARINI O’RNATISH </p>
            </span>  <span>
              <p>RESPUBLIKA HUDUDLARIDA 2300 KM OPTIK TOLALI ALOQA LINIYALARINI QUIRSH</p>
            </span>  <span>
              <p>YOSHLARNING BO’SH VAQTDAN OQILONA FOYDALANISHLARI VA ULARNING IMKONIYATLARINI OSHIRISH UCHUN O’YINLAR - MILLIY MOBIL INTERNETNI TASHKIL ETISH</p>
            </span>  <span>
              <p>RESPUBLIKA HUDUDLARIDA AHOLI VA TADBIRKORLIK SUB’EKTLARI UCHUN INTERNET ORQALI DAVLAT XIZMATLARIDAN FOYDALANISHNI O’RGATISH BO’YICHA KOMPYUTER SAVODXONLIGI VA MALAKALARNI OSHIRISH </p>
            </span>


          </Paragraov>
          <img src={Zmeykarasm} alt="" />

          <Paragraov2>
            <span>
              <p>RESPUBLIKA HUDUDLARIDA AHOLI VA TADBIRKORLIK SUB’EKTLARI UCHUN INTERNET ORQALI DAVLAT XIZMATLARIDAN FOYDALANISHNI O’RGATISH BO’YICHA KOMPYUTER SAVODXONLIGI VA MALAKALARNI OSHIRISH </p>
            </span>
            <span>
              <p>DASTURIY MAHSULOTLARNI ISHLAB CHIQARISHNI RAG’BATLANTIRISH UCHUN INNOVATSIYALAR MARKAZINI BUNYOD ETISH </p>
            </span>
            <span>
              <p>“ELEKTRON HUKUMAT” DOIRASIDA AXBOROT XAVFSIZLIGI TIZIMINING MONITORINGI</p>
            </span>
            <span>
              <p>DAVLAT ORGANLARIDA KADRLAR POTENSIALI HISOBINI YURITISH UCHUN YAGONA IDORALARARO “KADRLAR” TIZIMINI JORIY ETISH </p>
            </span>
            <span>
              <p>IMS TEXNOLOGIYALARI NEGIZIDA KOMMUTATSIYA MARKAZLARINI ZAMONAVIYLASHTIRISH </p>
            </span>
            <span>
              <p>KIBERXAVFSIZLIK SOHASIDA QONUNCHILIK BAZASINI TAKOMILLASHTIRISH</p>
            </span>
            <span>
              <p>YOSHLAR UCHUN TA’LIM VA MAORIF SOHASIDA ZAMONAVIY AXBOROT IMKONIYATLARI HAMDA, MULTIMEDIA MAHSULOTLARINI YARATISH. MILLIY KONTENTNI RIVOJLANTIRISH VA TAG’RIB QILISH</p>
            </span>
            <span>
              <p>ELEKTRON SUD PROTSESSI IJRONI AMALGA OSHIRISHNING ZAMONAVIY SHAKLLARI HAMDA USULLARINI JORIY ETISH</p>
            </span>
          </Paragraov2>

        </Border>
      </LiniDiv>
      <ItKompaniya data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

        <h1>IT Kompaniyalar</h1>
        <br />
        <p> 5.Xozrida Andijonda ko'plab IT kompaniyalar turli yo'nalishlarda o'z ish faoliyatini olib bormoqdalar: <br /> pochta, aloqa va internet xizmatlari bilan xalq turmush darajasining yaxshilanishiga, ijtimoiy <br /> extiyojlarning qondirilishiga, iqtisodning o'sishi hamda fan-texnika taraqqiyotining jadallashishiga <br /> xizmat qilishmoqda.</p>

      </ItKompaniya>
      </Container>
   )
}

export default Rejalar


