import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Hackathon from './Pages/Hackathon'
import Resources from './Pages/Resources'
import Registration from './Pages/Registration'
import Authentication from './Pages/Authentication'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
const App = () => {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/hackathon' element={<Hackathon/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/auth/:authId' element={<Authentication/>}/>
          <Route path='/profile/:userId' element={<Profile/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
    </>
  )
}

export default App