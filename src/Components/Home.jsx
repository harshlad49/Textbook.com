import React from 'react'
import Slider from './Slider'
import ExamPreparation from './ExamPreparation'
import PopularExams from './PopularExam'
import Footer from './Footer'
import Phone from './Phone'
const Home = () => {
  return (
    <div>
      <Slider/>
      <ExamPreparation/>
      <PopularExams/>
      <Phone/>
      <Footer/>
    </div>
  )
}

export default Home
