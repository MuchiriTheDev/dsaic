import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Hackathon from './Pages/Hackathon'
import Resources from './Pages/Resources'
import Registration from './Pages/Registration'
import Authentication from './Pages/Authentication'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/hackathon' element={<Hackathon/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/auth/:authId' element={<Authentication/>}/>
          <Route path='/profile/:userId' element={<Profile/>}/>
        </Routes>
      <Footer/>
    </>
  )
}

export default App