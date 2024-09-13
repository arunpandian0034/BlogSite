
import React from 'react'
import Navbar1 from './assets/Component/Navbar1'

import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Home from './assets/Component/Home'
// import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Admin from './assets/Component/Admin'
import Bookcard from './assets/Component/Bookcard'
import Bloger from './assets/Component/Bloger'
import Bookcardadd from './assets/Component/Bookcardadd'
import Contact from './assets/Component/Contact'
import About from './assets/Component/About'
import Navbar2 from './assets/Component/Navbar2'
import Admin1 from './assets/Component/Admin1'

const App = () => {
  return (
    
    <div>
      
      <BrowserRouter>
      <Navbar1/>
      <Navbar2/>
       <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin1" element={<Admin1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/product/:id' element = {<Bookcardadd />}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

