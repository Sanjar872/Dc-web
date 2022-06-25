import React, {useEffect,useState}from 'react'

import {
  
  BigSquare,SquareBoxes,
  TextDiv,InDiv,SquareImg,AboutDiv,Div,
  
} from './squarestyle'



import axios from 'axios'

const ApirCard = 'http://167.99.214.82/get-raqamlashtirishxizmatlari/'


const Square = () => {

const [data, setData ] = useState([])

useEffect(() => {


axios.get(ApirCard)
.then(res=>{
setData(res.data)
console.log(res.data);

})
}, [])


return (


<BigSquare>


<SquareBoxes >
  {
      data?.map((item,index)=>{
      return(
<Div data-aos="zoom-in-down" key={index}>

<InDiv>{item.text_uz}</InDiv>
<SquareImg  src={`http://167.99.214.82${item.image}`}/>
<AboutDiv>{item.name_uz}</AboutDiv>

</Div>

)
})

}

</SquareBoxes>

</BigSquare>

  )
}

export default Square