import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Content from './components/Content'
import Footer from './components/Footer'
import Premium from './components/Premium'
import Support from './components/Support'
import Download from './components/Download'
import Sign from './components/Sign'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

export default function App(props) {
  return (
   
    <div className='bg-black'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Navbar/>
          <Home />
        </>}/>
     
        <Route path="/support" element={<Support/>}></Route>
        <Route path="/premium" element={<Premium/>}></Route>
        <Route path='/download' element={<Download/>}></Route>
        <Route path='/signup' element={<Sign/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>

   
   
      
    </div>
  )
}
