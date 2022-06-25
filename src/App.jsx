import {React , useState , useEffect} from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AOS from 'aos'

import './App.css'

// components
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import SideNav from './components/SideNav/Side'
import Texnopark from './components/texnopark/texnopark/Home/Home'
import Startaplar from './components/startaplarr/startap'
import ItTalim from './components/ittalimComponent/ittalim'
import Raqamlashtirish from './components/components/Home/Home'
import Business from './components/Biznes/Biznes'
import Infratuzilma from './components/InfratuzilmaApp/Project'


const App = () => {

  useEffect(() => {
    AOS.init(
      // offset: 120,
      // delay: 0,
      // duration: 400,
    );
    AOS.refresh();
    
  }, [])

  return (
    <> 
        <NavBar />
        <SideNav/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/ittalim' element={<ItTalim/>} />
          <Route path='/texnopark' element={<Texnopark/>} />
          <Route path='/startaplar' element={<Startaplar/>} />
          <Route path='raqamlashtirish' element={<Raqamlashtirish/>} />
          <Route path='/business' element={<Business/>} />
          <Route path='/infratuzilma' element={<Infratuzilma/>} />
        </Routes> 
    </>
  )
}

export default App