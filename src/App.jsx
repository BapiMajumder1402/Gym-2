import React from 'react'
import { BrowserRouter, Router,Routes,Route } from 'react-router-dom'
import {Navbar} from './components/navbar/Navbar'
import {Home} from "./pages/home/Home"
import {AboutUs} from "./pages/aboutus/AboutUs";
import {Program} from "./pages/program/Program";
import {Training} from "./pages/training/Training"
import {Pricing} from "./pages/pricing/Pricing"
import {Footer} from "./components/footer/Footer"
import {Login} from './pages/login/Login'
import {Register} from './pages/register/Register'

export function App() {
  return (
    
  <BrowserRouter>
   <Navbar/>
   <Routes>

   <Route path='/' element={<Home/>}/>
   <Route path='/aboutus' element={<AboutUs/>}/>
   <Route path='/program' element={<Program/>}/>
   <Route path='/training' element={<Training/>}/>
   <Route path='/pricing' element={<Pricing/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}
