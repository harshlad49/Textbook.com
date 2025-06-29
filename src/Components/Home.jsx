import React from 'react'
import Slider from './Slider'
import ExamPreparation from './ExamPreparation'
import PopularExams from './PopularExam'
import Phone from './Phone'
import WhyTestbook from './WhyTestbook'
import SupercoachingBanner from './SupercoachingBanner'
import PopularTestSeries from './PopularTestSeries'
import LiveClasses from './LiveClasses'
const Home = () => {
  return (
    <div>
      <Slider/>
      <ExamPreparation/>
      <PopularExams/>
      <SupercoachingBanner/>
     <LiveClasses/>
      <PopularTestSeries/>
      <WhyTestbook/>
      <Phone/>
    </div>
  )
}

export default Home
