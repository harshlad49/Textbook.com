import React from 'react'
import './App.css'
import Navbar1 from './Components/Navbar1'
import Home from './Components/pages/Home'
import Footer from './Components/Footer'
import { Route, Routes } from "react-router-dom";
import  Search  from './Components/pages/Search'
import ArmyGdAgniveer from './Exams/armyGdAgniveer';
import SuperCoaching from './Components/pages/SuperCoaching';
import TestSeries from './Components/pages/TestSeries';
import SkillAcademy from './Components/pages/SkillAcademy';




function App() {
 

  return (
    <>

      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/exams/army-gd-agniveer" element={<ArmyGdAgniveer />} />
        <Route path="/Components/pages/SuperCoaching" element={<SuperCoaching />} />
        <Route path="/Components/pages/TestSeries" element={<TestSeries />} />
        <Route path="/Components/pages/SkillAcademy" element={<SkillAcademy />} />




      </Routes>
      <Footer />
    </>
  )
}

export default App
