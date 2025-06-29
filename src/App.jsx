import React from 'react'
import './App.css'
import Navbar1 from './Components/Navbar1'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Route, Routes } from "react-router-dom";
import  Search  from './Components/pages/Search'
function App() {
 

  return (
    <>

      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
