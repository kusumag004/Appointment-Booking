import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Navbar from './components/Navbar';
import Myprofile from './pages/MyProfile';
import  Login  from './pages/Login'; // Named import
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
<Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<Myprofile />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
       



      </Routes>
    
    
      
    </div>
  )
}

export default App
