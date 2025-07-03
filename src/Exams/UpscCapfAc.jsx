import React from 'react';
import { FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiDownload } from "react-icons/fi";

const UpscCapfAc = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-6 px-8">
  
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
       
        <div className="flex items-start gap-4">
       
          <img
            src="https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png"
            alt="SSC Logo"
            className="w-16 h-16 object-contain"
          />

        
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
              SSC CGL Notification 2025 Out, 14582 Vacancies, <br />
              Application Form, Exam Date
            </h1>

            <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
              <FaUserGraduate />
              <span>7829.9k+ Students Enrolled</span>
            </div>

         
            <div className="flex gap-4 mt-4 flex-wrap">
              <Link to="/uppsc-quiz">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                  Get started for free!
                </button>
              </Link>

              <Link to="/quiz/Ssc/ArmyGdQuiz">
                <button className="flex items-center gap-2 border border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-5 py-2 rounded font-medium">
                  <FiDownload />
                  Download as PDF
                </button>
              </Link>
             <Link to="/quiz/civilservice/upsc-quiz">
  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded">
    Start Now
  </button>
</Link>


            </div>
          </div>
        </div>

       
        <img
          src="https://testbook.com/assets/img/banner-bg/bottom-banner-preparation.svg"
          alt="Education illustration"
          className="w-52 object-contain hidden lg:block"
        />
      </div>
    </div>
  );
};

export default UpscCapfAc;
