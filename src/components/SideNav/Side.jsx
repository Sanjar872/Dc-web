import React from 'react'
import { Clean, Dashboard, Local, MyIcon, Rocket } from './style'

const Side = () => {
  return (
    <MyIcon>
      <Dashboard/>
      <Clean/>
      <Rocket/>
      <Local/>
    </MyIcon>
  )
}

export default Side