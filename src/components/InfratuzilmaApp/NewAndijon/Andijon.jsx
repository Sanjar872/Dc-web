import React, { useEffect, useState } from 'react'
import styles from '../styles/andijon.module.css'
import AndMaps from '../assets/icons/AndMap.png'
import {Grid} from '@mui/material'
import axios from 'axios'

const API = "http://167.99.214.82/get-infrastructure/"

const Andijon = () => {
   const [data, setData] = useState([])

   useEffect(() => {
      axios.get(API).then(res=>{
         setData(res.data[2])
      })
   }, [])
   console.log(data);
   

   return (
      <div className={styles.global}>
         <Grid className={styles.GridContainer} container spacing={0}>
            <Grid className={styles.Grid1} item xs={12} sm={12} md={6} xl={6}>
               <div  data-aos="zoom-in" className={styles.Digital}>
                  <h1>“Digital City” Texnopark</h1>
                  <p>{data.text_uz}</p>
               </div>
            </Grid>

            <Grid className={styles.Grid1} item xs={12} sm={12} md={6} xl={6}>
               <div  data-aos="zoom-in" className={styles.Andmep}>
                  <img src={AndMaps} alt=""/>
               </div>
            </Grid>

         </Grid>
      </div>
   )
}

export default Andijon