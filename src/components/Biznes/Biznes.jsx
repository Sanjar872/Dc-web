import React, { useEffect, useState } from 'react'
import {
 BigText, Biznes1, Biznes2,Big,EditIcon,HeadIcon, Biznes3,TextS, BiznesTime,H, MyIcon, Text1,
TextB, Wrapper, Company, Person, Text, Text01, Text02, Text03, Text04, Price, Consultatsion,
  Prices, HourglasIcon, Whatch, Price1,Button1,DashboarIcon,CleanIcon,
RocketIcon,LocalIcon,  Main,Container, Form, Item, Item1,QandayH3,PhoneNum, Btn1,Number
} from './style'
import { Button } from '@mui/material'; 
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';

//API vatq
const APIvaqt = 'http://167.99.214.82/get-section/11/';

const APIroyhat = 'http://167.99.214.82/get-section/12/';

const APIkonsul = 'http://167.99.214.82/get-section/13/';

const APIilova = 'http://167.99.214.82/get-section/14/';

const APIhujjat = 'http://167.99.214.82/get-section/15/';

const APIroyhat2 = 'http://167.99.214.82/get-section/16/';

const APIroyhat3 = 'http://167.99.214.82/get-section/17/';

const Xizmatturi = 'http://167.99.214.82/get-xizmatlar/';

const Ariza = 'http://167.99.214.82/get-application';


const Biznes = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //postBackend
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Comment, setComment] = useState('');


    let formData = new FormData()
    formData.append('fullname' , Name)
    formData.append('phone' , Phone)
    formData.append('email' , Email)
    formData.append('text' , Comment)
    formData.append('xizmat',1)

    const SendBtn = ()=>{
        axios.post(Ariza,formData)
        .then((res)=>{
        console.log(res);
    })
    }
    ////


    //Apivaqt
    const [data, setData] = useState({})
    //APIroyhat
    const [data2, setData2] = useState({})
    //APIkonsul
    const [data3, setData3] = useState({})
    //APIilova
    const [data4, setData4] = useState({})
    //APIhujjat
    const [data5, setdata5] = useState({})
    //APIroyhat2
    const [data6, setData6] = useState({})
    //APIroyhat3
    const [data7, setdata7] = useState({})
    //Xizmat
    const [xizmat, setXizmat] = useState([])

    useEffect(() => {
      axios.get(APIvaqt)
      .then(res=>{
          setData(res.data)
        //   console.log(res.data);
      })
      
      axios.get(APIroyhat)
        .then(res=>{
            setData2(res.data)
            // console.log(res.data);
        })

        axios.get(APIkonsul )
        .then(res=>{
            setData3(res.data)
            // console.log(res.data);
        })

        axios.get(APIilova)
        .then(res=>{
            setData4(res.data)
            // console.log(res.data);
        })

        axios.get(APIhujjat)
        .then(res=>{
            setdata5(res.data)
            // console.log(res.data);
        })

        axios.get(APIroyhat2)
        .then(res=>{
            setData6(res.data)
            // console.log(res.data)
        })

        axios.get(APIroyhat3)
        .then(res=>{
            setdata7(res.data)
            // console.log(res.data)
        })
        axios.get(Xizmatturi)
        .then(res=>{
            setXizmat(res.data)
            // console.log(res.data)
        })
    }, [])

    
  return (
    <Wrapper>
           <TextS>
                    BIZNES OCHISH
            </TextS>
        <BigText>
            <TextB>
                Biznesni ro'yhatdan otkazish
            </TextB>
            <Text1>
                Biz sizga biznes ochishingizda va tadbirkorlikni to‘g‘ri va xatosiz boshlashingizda yordam beramiz,
                soliqlar bo‘yicha maslahat beramiz va barcha kerakli hujjatlarni rasmiylashtiramiz.
            </Text1> 
        </BigText>
        {/* <MyIcon>
            <DashboarIcon/>
            <CleanIcon />
            <RocketIcon/>
            <LocalIcon/>
        </MyIcon> */}
        {/* //////////// */}
        <BiznesTime>
            <Biznes1>
                <HourglasIcon src={`http://167.99.214.82${data.image}`} />
                <H>{data.name_uz}</H>
            
                {data.text_uz}
            </Biznes1>
                <Biznes2>
                    <EditIcon src={`http://167.99.214.82${data2.image}`} /> 
                <H>{data2.name_uz}</H>
                {data2.text_uz}
            </Biznes2>
            <Biznes3>
                    <HeadIcon src={`http://167.99.214.82${data3.image}`}/>
                    <H>{data3.name_uz}</H>
                    {data3.text_uz}
             
            </Biznes3>
        </BiznesTime>
        {/* /////// */}
            <PhoneNum>
                <LocalIcon/>
				<Number>1227</Number>
			</PhoneNum>
            <Company>
                    <Person src={`http://167.99.214.82${data7.image}`}/>
                <Text>
					<QandayH3>Qanday qilib kompaniyani to'g'ri ochish kerak:</QandayH3>
                    <Text01>
                        <h1 style={{color: 'rgba(108, 99, 255, 0.4)'}}>01</h1>
                        <h4>{data4.name_uz}</h4>
                        {data4.text_uz}
                    </Text01>
                    <Text02>
                        <h1 style={{color: 'rgba(108, 99, 255, 0.4)'}}>02</h1>
                        <h4>{data5.name_uz}</h4>
                        {data5.text_uz}
                    </Text02>
                    <Text03>
                        <h1 style={{color: 'rgba(108, 99, 255, 0.4)'}}>03</h1>
                        <h4>{data6.name_uz}</h4>
                        {data6.text_uz}
                    </Text03>
                    <Text04>
                        <h1 style={{color: 'rgba(108, 99, 255, 0.4)'}}>04</h1>
                        <h4>{data7.name_uz}</h4>
                        {data7.text_uz}
                    </Text04>  
                </Text>
                
            </Company>
            <Btn1>
                <Button onClick={handleOpen} >Arizangizni qoldiring</Button>
            </Btn1>
                
                
        <Big>
            <Prices>
                Xizmat Narxi
            </Prices>
            <Price>
                {
                    xizmat?.map((item,index)=>{
                        return(
                            <Consultatsion key={index}>
                                <h2>{item.text_uz}</h2>
                                <Whatch>{item.name_uz}</Whatch>
                                <div>
                                    <Price1>{item.price}</Price1>
                                    <Button1  onClick={handleOpen}>Arizangizni qoldiring</Button1>
                                </div>
                            </Consultatsion>
                        )
                    })
                }
            </Price> 
        </Big>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                 >
        
                <Box sx={style}>
   
                    <Main>
      
                        <Container>          
          <Form>
            <Item>
              <label htmlfor='Ism-sharif'>Ism-sharif</label>
              <input onChange={(e)=>setName(e.target.value)} type='text' name='name' />
            </Item>
            <Item>
              <label htmlfor='Telefon'>Telefon</label>
              <input onChange={(e)=>setPhone(e.target.value)} type="number" name='Telefon' />
            </Item>
             <Item>
              <label htmlfor='Email'>Email</label>
              <input  onClick={(e)=>setEmail(e.target.value)} type="email" name='Email' />
            </Item>
            <Item1>
              <label htmlfor='Izoh'>Izoh</label>
              <textarea onChange={(e)=>setComment(e.target.value)} type='text' name="" id="" cols="59" rows="10"></textarea>
            </Item1>
            <Button1 onClick={SendBtn} variant="contained">Arizangizni Yuboring</Button1>
          </Form>
      </Container>
</Main>
        </Box>
      </Modal>
    </Wrapper>
    )
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    
    boxShadow: 24,
    p: 4,
  };

export default Biznes;