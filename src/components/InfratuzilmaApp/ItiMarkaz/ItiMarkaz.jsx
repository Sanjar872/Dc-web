import React, { useEffect, useState } from 'react'
import style from '../styles/markaz.module.css'
import Yilrasm from '../assets/icons/Exclude.svg'
import { Grid } from '@mui/material'

import axios from 'axios'
const API = 'http://167.99.214.82/get-infrastructure/'


const ItiMarkaz = () => {

    const [data, setData] = useState([])
    useEffect(() => {
    axios.get(API)
    .then(res=>{
        setData(res.data[1])
    })
   
    }, [])
 // data-aos="flip-up"
    console.log(data);

    return (
        <div className={style.container}>
            <Grid className={style.ItimGrid} container spacing={5}>

                <Grid className={style.Grid1} item xs={12} sm={12} md={6} xl={6}>
   
                    <div  className={style.RasmYil}>
                        <div className={style.Img}>

                        <img className={style.YilrasmMEdi} src={`http://167.99.214.82${data.image}`} alt="" />
                        {/* <div className={style.Yil1}>
                            <span>2022</span>
                            <p>37Та</p>
                        </div>
                        <div className={style.Yil2}>
                            <span>2021</span>
                            <p>21Та</p>
                        </div>
                        <div className={style.Yil3}>
                            <span>2020</span>
                            <p>8Та</p>
                        </div>
                        <div className={style.Yil4}>
                            <span>2020</span>
                            <p>8Та</p>
                        </div> */}
                        </div>
                    </div>
                </Grid>
                <Grid className={style.Grid1} item xs={12} sm={12} md={6} xl={6}>

                    <div data-aos="flip-up" className={style.Matn}>
                        <h3 >Andijon viloyatida IT markazlar </h3>
                        <p>{data.text_uz}</p>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default ItiMarkaz