import React from 'react'
import './ittalim.css'
import Rasm2 from './images/rasm2.png'
import Rasm3 from './images/rasm3.png'
import Rasm4 from './images/rasm4.png'
import Rasm5 from './images/rasm5.png'
import Rasm6 from './images/rasm6.png'
import Rasm7 from './images/rasm7.png'
import Icon1 from './images/icon1.png'
import Icon2 from './images/icon2.png'
import Icon3 from './images/icon3.png'
import Icon4 from './images/icon4.png'
import Html from './images/Html.png'
import Robot from './images/Robot.png'
import Interior from './images/Interior.png'
import Design from './images/Design.png'
import Coding from './images/Coding.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

 const APItalim = "http://167.99.214.82/get-studydirections/"
 const talimApi = "http://167.99.214.82/get-itacademy/"
 
function Talim() {
    useEffect(()=>{
    Aos.init();
    Aos.refresh();
  })
     
  const [data, setData] = useState({})
  const [data1, setData1] = useState({})
  const [data2, setData2] = useState({})
  const [data3, setData3] = useState({})
  const [data4, setData4] = useState({})

  const [data5, setData5] = useState({})
  const [data6, setData6] = useState({})
  const [data7, setData7] = useState({})
  const [data8, setData8] = useState({})
  const [data9, setData9] = useState({})

 
  useEffect(()=>{
        axios.get(talimApi)
        .then(res=>{
          setData(res.data[0])
        })

        axios.get(talimApi)
        .then(res=>{
          setData1(res.data[1])
        })

        axios.get(talimApi)
        .then(res=>{
          setData2(res.data[2])
        })

        axios.get(talimApi)
        .then(res=>{
          setData3(res.data[3])
        })

        axios.get(talimApi)
        .then(res=>{
          setData4(res.data[4])
        })


        axios.get(APItalim)
        .then(res=>{
          setData5(res.data[0])
        })
        axios.get(APItalim)
        .then(res=>{
          setData6(res.data[1])
        })
        axios.get(APItalim)
        .then(res=>{
          setData7(res.data[2])
        })
        axios.get(APItalim)
        .then(res=>{
          setData8(res.data[3])
        })
        axios.get(APItalim)
        .then(res=>{
          setData9(res.data[4])
        })

  })






    return (
      <div className="Talim">
          <h1 className="talim-text1">IT TA'LIM</h1>
        <div className="talim-main">
            <div className="talim-main-chap">
                <div className="talim-icon">
                    {/* <img src={Icon1} alt="" className="talim-icons" />
                    <img src={Icon2} alt="" className="talim-icons" />
                    <img src={Icon3} alt="" className="talim-icons" />
                    <img src={Icon4} alt="" className="talim-icons" /> */}
                </div>
            </div>
            <div className="talim-main-orta">
                    <img src={Rasm2} alt="" className='talim-main-img' />
            </div>
            <div className="talim-main-ong">
                    <img src={Icon3} alt="" /> <h3>1227</h3>
            </div>
        </div>
        <h2 className="talim-text1">
          {data5.tittle_uz}
        </h2>

        <div className="talim-main2">
          <div className="talim-main2-top">
                 <div className="talim-main2-images" data-aos="zoom-out">
                       <img src={Rasm3} alt="" />
                       <p>{data5.text_uz}</p>
                 </div>
                 <div className="talim-main2-images" data-aos="zoom-out">
                        <img src={Rasm4} alt="" />
                        <p>{data6.text_uz}</p>
                 </div>
          </div>
          <div className="talim-main2-buttom">
                <div className="talim-main2-images" data-aos="zoom-out">
                <img src={Rasm5} alt="" />
                <p>{data7.text_uz}</p>
                </div>
              <div className="talim-main2-images" data-aos="zoom-out">
              <img src={Rasm6} alt="" />
              <p>{data8.text_uz}</p>
                 </div>
                  <div className="talim-main2-images" data-aos="zoom-out">
                  <img src={Rasm7} alt="" />
                  <p>{data9.text_uz}</p>
                </div>
          </div>
        </div>

        <div className="talim-text3">
          <h1 data-aos="zoom-in">iT AKADEMIYA</h1>
          <p data-aos="zoom-in">Bu yerda IT taʼlimning barcha <br /> yoʻnalishlari keltirilgan</p>
        </div>

        <div className="itakademiya">
          <div className="itakademiya-chap">

            <div className="itakademiya-blocks itakademiya-blocks1" data-aos="fade-up">
               <div className="block-text">
                   <h1>{data.name_uz}</h1>
                   <p> {data.texnologies}</p>
                   <p> Бошланиш {data.start}</p>
                   <p> Давомийлиги {data.duration}</p>

                   <button>Йозилиш</button>
               </div>
               <div className="block-image">
                 <img src={Html} alt="" />
               </div>
            </div>
            <div className="itakademiya-blocks itakademiya-blocks2" data-aos="fade-up">
               <div className="block-text">
               <h1>{data1.name_uz}</h1>
                   <p> {data1.texnologies}</p>
                   <p> Бошланиш {data1.start}</p>
                   <p> Давомийлиги {data1.duration}</p>
                   <button>Йозилиш</button>
               </div>
               <div className="block-image">
                 <img src={Robot} alt="" />
               </div>
            </div>
            <div className="itakademiya-blocks itakademiya-blocks3" data-aos="fade-up"> 
               <div className="block-text">
               <h1>{data2.name_uz}</h1>
                   <p> {data2.texnologies}</p>
                   <p> Бошланиш {data2.start}</p>
                   <p> Давомийлиги {data2.duration}</p>
                   <button>Йозилиш</button>
               </div>
               <div className="block-image">
                 <img src={Interior} alt="" />
               </div>
            </div>
            
            
          </div>
          <div className="itakademiya-ong">
          <div className="itakademiya-blocks itakademiya-blocks4" data-aos="fade-up">
               <div className="block-text">
               <h1>{data3.name_uz}</h1>
                   <p> {data3.texnologies}</p>
                   <p> Бошланиш {data3.start}</p>
                   <p> Давомийлиги {data3.duration}</p>
                   <button>Йозилиш</button>
               </div>
               <div className="block-image">
                 <img src={Design} alt="" />
               </div>
            </div>
            <div className="itakademiya-blocks itakademiya-blocks5" data-aos="fade-up">
               <div className="block-text">
               <h1>{data4.name_uz}</h1>
                   <p> {data4.texnologies}</p>
                   <p> Бошланиш {data4.start}</p>
                   <p> Давомийлиги {data4.duration}</p>
                   <button>Йозилиш</button>
               </div>
               <div className="block-image">
                 <img src={Coding} alt="" />
               </div>
            </div>
          </div>
        </div>
        </div>
    );
  }

  
  export default Talim;
  