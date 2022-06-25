import React, {useEffect,useState} from 'react'

import {    
BigDiv,Main,
BoxAll,All,Name1,BigRqm,InRqm,  
AboutImgDiv,TextImgDiv,DescDiv,CompImg,
CallDiv,CallCenter,Call,Nmb,
} from './style'

import ComImg from '../Home/img/comp.png'

import Grid from '../Square/Square'
import Input1 from '../Input/Input'







import axios from 'axios'
const Api = 'http://167.99.214.82/get-section/7/'



const Home = () => {

const [data, setData] = useState({})    

useEffect(() => {
 
axios.get(Api)
.then(res=>{
setData(res.data)    
})

}, [])



return (
    
<BigDiv>

<Main>

<BoxAll>

<All>
<Name1>
<BigRqm data-aos="zoom-out-down" >{data.name_uz}</BigRqm>
<InRqm data-aos="zoom-out-down" >{data.name_uz}</InRqm>
</Name1>

<AboutImgDiv>

<TextImgDiv>

<DescDiv data-aos="zoom-in-up" >{data.text_uz}</DescDiv>
<CompImg data-aos="zoom-in-up" src={`http://167.99.214.82${data.image}`}/>



</TextImgDiv>



<CallDiv >
<CallCenter>
<Call/>
<Nmb>1227</Nmb>
</CallCenter>
</CallDiv>

</AboutImgDiv>

<Grid/>

</All>



</BoxAll>


</Main>
<Input1/>




</BigDiv>

)}

export default Home