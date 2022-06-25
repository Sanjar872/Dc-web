import  React, { useEffect, useState } from 'react'
import style from '../styles/infrotuzilma.module.css'
import { Grid } from '@mui/material'
import Uzbekistan from "./Uzbekistan";

import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
const API = "http://167.99.214.82/get-infrastructure/"




const Infratuzilma = () => {
   const [data, setData] = useState([])

   useEffect(() => {
     axios.get(API)
     .then(res=>{
      setData(res.data[0])
   })
   // data-aos="fade-up"
}, [])
// console.log(data);
   

  return (
    <div className={style.containerr}>
          <div  className={style.infra}>
            <p className={style.Inf}>INFRATUZILMA</p>
         </div>
         <div className={style.main}>
            <Grid container spacing={5}>
               <Grid item xs={12} sm={12} md={6} xl={6}>
                  <div data-aos="fade-up" className={style.itemContainer}>
                     <h3>Oʻzbekistondagi IT markazlar</h3>
                     <p>
                       {data.text_uz}
                     </p>
                  </div>
               </Grid>
               <Grid item xs={12} sm={12} md={6} xl={6}>
                  <div className={style.itemContainer}>
                     <Uzbekistan />
                  </div>
               </Grid>
            </Grid>
         </div>
    </div>
  )
}

export default Infratuzilma