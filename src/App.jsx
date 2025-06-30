import React from 'react'
import './App.css'
import Navbar1 from './Components/Navbar1'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Route, Routes } from "react-router-dom";
import  Search  from './Components/pages/Search'
import ArmyGdAgniveer from './Exams/armyGdAgniveer';
import SuperCoaching from './Components/SuperCoaching';
import TestSeries from './Components/TestSeries';
import SkillAcademy from './Components/SkillAcademy';




function App() {
 

  return (
    <>

      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/exams/army-gd-agniveer" element={<ArmyGdAgniveer />} />
        <Route path="/Components/SuperCoaching" element={<SuperCoaching />} />
        <Route path="/Components/TestSeries" element={<TestSeries />} />
        <Route path="/Components/SkillAcademy" element={<SkillAcademy />} />




      </Routes>
      <Footer />
    </>
  )
}

export default App
