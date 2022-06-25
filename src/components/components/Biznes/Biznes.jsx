import React from 'react'

import {    
BigDiv,Main,
BoxAll,Name1,BigRqm,InRqm,  
AboutImgDiv,DescDiv,
AllIconsDiv,IconsTextDiv,
CallDiv,CallCenter,Call,Nmb,
TimeDiv,EditDiv,EarphoneDiv,
TimeImg,EditImg,EarphonImg,
P,About,
} from './biznesstyle'

import TimePng from '../Biznes/Icons/time1.svg'
import EditPng from '../Biznes/Icons/pencil1.svg'
import EearPhonePng from '../Biznes/Icons/earphone1.svg'

const Home = () => {
return (
    
<BigDiv>

<Main>

<BoxAll>

<Name1>
<BigRqm>RAQAMLASHTIRISH</BigRqm>
<InRqm>RAQAMLASHTIRISH</InRqm>
</Name1>

<AboutImgDiv>
<DescDiv>Biz sizga biznes ochishingizda va tadbirkorlikni to‘g‘ri va xatosiz boshlashingizda yordam beramiz, soliqlar <br /> bo‘yicha maslahat beramiz va barcha kerakli hujjatlarni rasmiylashtiramiz.</DescDiv>
</AboutImgDiv>

<AllIconsDiv>

<IconsTextDiv>

<TimeDiv>
<TimeImg src={TimePng}/>
<P>Vaqtni Tejash</P>
<About>Kompaniyani ro‘yxatdan <br /> o‘tkazish uchun kamida sizning <br /> ishtirokingiz talab qilinadi</About>
</TimeDiv>

<EditDiv>
<EditImg src={EditPng} />
<P>Ro’yxatdan O’tish</P>
<About>Ro‘yxatdan o‘tganimizdan <br />
keyin barcha davlat organlarida <br /> ro‘yxatdan o‘tamiz</About>

</EditDiv>


<EarphoneDiv>
<EarphonImg src={EearPhonePng} />
<P>Konsultasiya</P>
<About>Ro‘yxatga olishdan oldin <br /> hujjatlar, soliqlar bo‘yicha <br /> maslahatlashamiz</About>

</EarphoneDiv>

</IconsTextDiv>

</AllIconsDiv>


</BoxAll>

<CallDiv>
<CallCenter>
<Call/>
<Nmb>1227</Nmb>
</CallCenter>
</CallDiv>

</Main>





</BigDiv>

)}

export default Home