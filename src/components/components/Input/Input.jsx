import React, {useState,useRef} from 'react'

import Modal1 from '../Snackbar/Snackbar'
import Modal2 from '../Succes/Succes'


import {

  InpDiv,
  AllDiv,LoginDiv,CallTg,
  LoginTg,LoginInp1,LoginInp4,ArizaBtn,

}from './Inputstyle'



import axios from 'axios'
const Api = 'http://167.99.214.82/post-contact/'


const Input = () => {








const [open, setOpen] = React.useState(false);





const [Name, setName] = useState('');
const [Phone, setPhone] = useState('');    
const [Email, setEmail] = useState('');    
const [Coment, setComent] = useState(''); 
const [isActive, setActive] = useState(false);   

const [show, setshow] = useState(false);
    const ref = useRef()
    // const ref1 = useRef()


let formData = new FormData()
formData.append('fullname',Name)
formData.append('phone',Phone)
formData.append('email',Email)
formData.append('text',Coment)



const handleOpen = () => setOpen2(true);
const [open2, setOpen2] = React.useState(false);


const handleOpen1 = () => setOpen3(true);
const [open3, setOpen3] = React.useState(false);


const SendBtn = ()=>{
  
  
  
  if(Name==='' || Phone=='' || Email==''){
      setshow(true)
      console.log(ref.current.focus());
      handleOpen()
  }else{
    try {
      axios.post(Api,formData)
    .then((res)=>{
      console.log(res);
      setOpen(true)
      if(res){
        setName('');
        setPhone('');
        setEmail('');
        setComent('');
        setshow(false);
        handleOpen1()
      }else{
        console.log('inputga mos qiymat yozing');
      }
    })
    } catch (error) {
      setshow(true)
      console.log(ref.current.focus());
      handleOpen()
    }
    


  
    
  }

  
  
}


  return (
    
<InpDiv>
<Modal1 open2={open2} setOpen2={setOpen2}/>
<Modal2 open3={open3} setOpen3={setOpen3}/>




<AllDiv data-aos="zoom-in">

<CallTg>Biz Bilan Bog’laning</CallTg>

<LoginDiv>
    <LoginTg>Тўлиқ исми шариф</LoginTg>
    <LoginInp1 ref={ref} className={show ? 'error' : ''} value={Name}  onChange={(e)=>setName(e.target.value)}/>
    <LoginTg>Телефон</LoginTg>
    <LoginInp1 ref={ref} className={show ? 'error' : ''} value={Phone} onChange={(e)=>setPhone(e.target.value)}/>
    <LoginTg>Электрон почта</LoginTg>
    <LoginInp1 ref={ref} className={show ? 'error' : ''} value={Email} onChange={(e)=>setEmail(e.target.value)}/>
    <LoginTg>Изох</LoginTg>
    <LoginInp4  value={Coment} onChange={(e)=>setComent(e.target.value)}/>
</LoginDiv>

<ArizaBtn onClick={SendBtn}>Ариза юбориш</ArizaBtn>

</AllDiv>


</InpDiv>



  )
}

export default Input