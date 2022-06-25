import React from 'react'

import {
    Main,ModalDiv,
    AllDiv,
    Div1,Div2,Div3,Div4,
    Tg,CloseDiv,Inp1,Inp2,ArizaBtn,

} from './Modalsstyle'

const Modal = () => {
  return (
    <Main>


<ModalDiv>

<CloseDiv/>

<AllDiv>
<Div1>
<Tg>Ism-sharf</Tg>
<Inp1 />
</Div1>
<Div2>
<Tg>Telefon</Tg>
<Inp1 />
</Div2>
<Div3>
<Tg>E-mail</Tg>
<Inp1 />
</Div3>
<Div4>
<Tg>Izoh</Tg>
<Inp2 />
</Div4>
   
<ArizaBtn >Arizangizni Yuboring</ArizaBtn>
</AllDiv>
    

</ModalDiv>


    </Main>
  )
}

export default Modal