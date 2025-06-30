// src/components/HeroBanner.jsx
import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-6 px-8">
      {/* Breadcrumb */}
      {/* <div className="text-sm text-gray-500 flex items-center gap-1 mb-3">
        <span>Home</span>
        <IoIosArrowForward className="text-gray-400" />
        <span className="text-blue-500 font-medium">SSC CGL</span>
      </div> */}

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left Side */}
        <div className="flex items-start gap-4">
          {/* Logo */}
          <img
            src="https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png"
            alt="SSC Logo"
            className="w-16 h-16 object-contain"
          />

          {/* Text Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
              SSC CGL Notification 2025 Out, 14582 Vacancies, <br />
              Application Form, Exam Date
            </h1>

            <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
              <FaUserGraduate />
              <span>7829.9k+ Students Enrolled</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded">
                Get started for free!
              </button>
              <button className="flex items-center gap-2 border border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-5 py-2 rounded font-medium">
                <FiDownload />
                Download as PDF
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <img
          src="https://testbook.com/assets/img/banner-bg/bottom-banner-preparation.svg"
          alt="Education illustration"
          className="w-52 object-contain hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
