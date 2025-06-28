import React from "react";
import { FaGooglePlay, FaApple, FaCheckCircle, FaTrophy, FaClipboardList, FaChalkboardTeacher } from "react-icons/fa";

const ExamPreparation = () => {
  return (
    <div className="text-center px-4 py-12 bg-white">
     
      <h1 className="text-2xl md:text-4xl font-semibold">
        One Destination for <span className="text-black font-bold">Complete Exam Preparation</span>
      </h1>

     
      <p className="mt-2 text-lg text-gray-700">
        Learn <span className="text-green-600">▶</span> Practice <span className="text-green-600">▶</span> Improve <span className="text-green-600">▶</span> Succeed
      </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
  <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600">
    Get Started For Free
  </button>
  <div className="flex gap-3">
    <div className="flex items-center gap-2  px-4  py-2 rounded-md">
      <img src="/imgi_58_playstore.svg" alt="App Store" className="h-[50px] w-[200px]" />
    </div>
    <div className="flex items-center gap-2   px-4 py-2 rounded-md">
      <img src="/imgi_59_appstore.svg"  alt="Play Store" className="h-[50px] w-[200px]" />
    </div>
  </div>
</div>


      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        <div className="bg-green-100 p-6 rounded-lg flex flex-col items-center">
          <FaCheckCircle className="text-green-600 text-3xl mb-2" />
          <p className="text-sm text-gray-700">Registered Students</p>
          <p className="text-lg font-semibold">7.2+ Crore</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg flex flex-col items-center">
          <FaTrophy className="text-yellow-600 text-3xl mb-2" />
          <p className="text-sm text-gray-700">Student Selections</p>
          <p className="text-lg font-semibold">4+ Lacs</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg flex flex-col items-center">
          <FaClipboardList className="text-purple-600 text-3xl mb-2" />
          <p className="text-sm text-gray-700">Tests Attempted</p>
          <p className="text-lg font-semibold">242+ Crore</p>
        </div>
        <div className="bg-pink-100 p-6 rounded-lg flex flex-col items-center">
          <FaChalkboardTeacher className="text-pink-600 text-3xl mb-2" />
          <p className="text-sm text-gray-700">Classes Attended</p>
          <p className="text-lg font-semibold">5.5+ Crore</p>
        </div>
      </div>
    </div>
  );
};

export default ExamPreparation;
