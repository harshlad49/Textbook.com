import React from 'react'
import Slider from './Slider'
import ExamPreparation from './ExamPreparation'
import PopularExams from './PopularExam'

const Home = () => {
  return (
    <div>
      <Slider/>
      <ExamPreparation/>
      <PopularExams/>
    </div>
  )
}

export default Home
