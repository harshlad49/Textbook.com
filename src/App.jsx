import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar1 from './Components/Navbar1';
import Footer from './Components/Footer';

import Home from './Components/pages/Home';
import Search from './Components/pages/Search';
import SuperCoaching from './Components/pages/SuperCoaching';
import TestSeries from './Components/pages/TestSeries';
import SkillAcademy from './Components/pages/SkillAcademy';

import ArmyGdAgniveer from './Exams/ArmyGdAgniveer';
import UpscCapfAc from './Exams/UpscCapfAc';
import Crpfconstable from './Exams/Crpfconstable';
import TerritorialArmy from './Exams/TerritorialArmy';

import UpscQuiz from './Exams/Quiz/CivilService/UpscQuiz';


function App() {
  return (
    <>
      <Navbar1 />

      <Routes>
        {/* General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/supercoaching" element={<SuperCoaching />} />
        <Route path="/test-series" element={<TestSeries />} />
        <Route path="/skill-academy" element={<SkillAcademy />} />

        {/* Exams */}
        <Route path="/exams/ArmyGdAgniveer" element={<ArmyGdAgniveer />} />
        <Route path="/exams/UpscCapfAc" element={<UpscCapfAc />} />
        <Route path="/exams/Crpfconstable" element={<Crpfconstable />} />
        <Route path="/exams/TerritorialArmy" element={<TerritorialArmy />} />

        {/* Quiz Section */}
        <Route path="/quiz/civilservice/upsc-quiz" element={<UpscQuiz />} />
        <Route path="/uppsc-quiz" element={<UpscQuiz />} /> 
      
      </Routes>

      <Footer />
    </>
  );
}

export default App;
