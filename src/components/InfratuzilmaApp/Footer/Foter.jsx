import React, { useEffect, useState } from 'react'
import { Container, BredRasmlar, BoX, BredRasmlar5, PANd, Kompaniya, Brendlar, BredRasmlar6 } from './style'
import styles from '../styles/foter.module.css'

import rasm1 from '../assets/FoterImg/1rasm.png'
import rasm2 from '../assets/FoterImg/2rasm.png'
import rasm3 from '../assets/FoterImg/3rasm.png'
import rasm4 from '../assets/FoterImg/4rasm.png'
import rasm5 from '../assets/FoterImg/5rasm.png'


import Uztelecom from '../assets/FoterImg/Uzonline.png'
import Mobiuz from '../assets/FoterImg/Mobiuz.png'
import Beeline from '../assets/FoterImg/Beeline.png'
import Perfectum from '../assets/FoterImg/Pefectom.png'
import Uccell from '../assets/FoterImg/Uceel.png'

import Evo from '../assets/FoterImg/Evo.png'
import Tps from '../assets/FoterImg/Tps.png'
import axios from 'axios'

const API = "http://167.99.214.82/get-postalservices/"

const API2 = 'http://167.99.214.82/get-mobileoperators/'

const API3 = 'http://167.99.214.82/get-internetproviders/'

const Foter = () => {

    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])


    useEffect(() => {
        axios.get(API)
        .then(res=>{
            setData(res.data)
        })

        axios.get(API2)
        .then(res=>{
            setData2(res.data)
        })

        
        axios.get(API3)
        .then(res=>{
            setData3(res.data)
        })

    }, [])
    console.log(data3);

    console.log(data2);

    console.log(data);
    
    return (
        <Container>
            <Brendlar>
                <div className={styles.div1}> <h1 data-aos="zoom-in">Andijona Pochta Xizmatlari</h1></div>
                <div class={styles.parent}>
                    {data?.map((el, index)=> {
                      return(
                        <div data-aos="zoom-in"  className={styles.div2}><BredRasmlar src={`http://167.99.214.82${el.logo}`} alt="" /></div>
                      )

                    })}


                    {/* <div className={styles.div2}><BredRasmlar src={rasm2} alt="" /> </div>
                    <div className={styles.div2}><BredRasmlar src={rasm3} alt="" /></div>
                    <div className={styles.div2}><BredRasmlar5 src={rasm4} alt="" /> </div>
                    <div className={styles.div2}><BredRasmlar6 src={rasm5} alt="" /></div>
                    <img src={``} alt="" /> */}
                </div>
        
            </Brendlar>

            <BoX data-aos="fade-up">
                <div>



                    {data2?.map((el, index)=> {
                        return(
                            <Kompaniya src={`http://167.99.214.82${el.logo}`} alt="" />
                        )
                    })}
                    {/* <Kompaniya src={Mobiuz} alt="" />
                    <Kompaniya src={Beeline} alt="" />
                    <Kompaniya src={Perfectum} alt="" />
                    <Kompaniya src={Uccell} alt="" /> */}
                </div>

                <PANd>Andijonda Mobil Operatorlari, uyali telefon kompaniyalar</PANd>

            </BoX>
            <div data-aos="fade-up"  className={styles.Pasqism}>
                <h1>Andijonda Internet
                    Provayderlar</h1>

                    {data3?.map((el,index)=>{
                        return(
                            <div><img src={`http://167.99.214.82${el.logo}`} alt="" /></div>

                        )
                    })}
                    {/* <div><img src={Tps} alt="" /></div>
                    <div><img src={Uztelecom} alt="" /></div> */}

            </div>
        </Container>
    )
}

export default Foter