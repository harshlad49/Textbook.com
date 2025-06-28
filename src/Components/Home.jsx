import React from 'react'
import Slider from './Slider'
import ExamPreparation from './ExamPreparation'
import PopularExams from './PopularExam'
import Footer from './Footer'
import Phone from './Phone'
import WhyTestbook from './WhyTestbook'
const Home = () => {
  return (
    <div>
      <Slider/>
      <ExamPreparation/>
      <PopularExams/>
      <WhyTestbook/>
      <Phone/>
      
      <Footer/>
    </div>
  )
}

export default Home
