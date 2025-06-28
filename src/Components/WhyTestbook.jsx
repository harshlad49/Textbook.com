import React from "react";

const WhyTestbook = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-8 py-16 bg-white">
    
      <div className="max-w-md">
        <div className="mb-4">
          <img
            src="/imgi_127_loader.gif"
            alt="Testbook Logo"
            className="w-150 h-50"
          />
        </div>
        <h2 className="text-4xl font-semibold text-black mb-4">Why Testbook?</h2>
        <p className="text-gray-700 text-lg mb-6">
          With <strong>1.8+ Crore Students</strong> and <strong>One of the best Selection rate in India</strong> amongst online learning platforms, you can surely rely on us to excel.
        </p>
        <button className="bg-green-500 text-white font-medium px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
          Get Started For Free
        </button>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 md:mt-0">
     
        <div className="bg-green-100 rounded-xl p-6 shadow-sm">
          <div className="bg-green-400 w-12 h-12 rounded-md mb-4 flex items-center justify-center text-white text-2xl">
            📝
          </div>
          <h3 className="text-lg font-semibold mb-2">Learn from the Best</h3>
          <p className="text-sm text-gray-600">
            Learn from the masters of the subject, in the most engaging yet simplified ways
          </p>
        </div>

       
        <div className="bg-pink-100 rounded-xl p-6 shadow-sm">
          <div className="bg-pink-400 w-12 h-12 rounded-md mb-4 flex items-center justify-center text-white text-2xl">
            📻
          </div>
          <h3 className="text-lg font-semibold mb-2">Live Tests for Real Exam Experience</h3>
          <p className="text-sm text-gray-600">
            Feel the thrill of a real exam. Improve your time & pressure management skills
          </p>
        </div>

    
        <div className="bg-yellow-100 rounded-xl p-6 shadow-sm">
          <div className="bg-yellow-400 w-12 h-12 rounded-md mb-4 flex items-center justify-center text-white text-2xl">
            📊
          </div>
          <h3 className="text-lg font-semibold mb-2">Detailed Score Analysis</h3>
          <p className="text-sm text-gray-600">
            Get a detailed breakdown of your strengths & weaknesses and discover insights to improve your score
          </p>
        </div>

      
        <div className="bg-purple-100 rounded-xl p-6 shadow-sm">
          <div className="bg-purple-400 w-12 h-12 rounded-md mb-4 flex items-center justify-center text-white text-2xl">
            🌐
          </div>
          <h3 className="text-lg font-semibold mb-2">Multilingual: 8 Languages</h3>
          <p className="text-sm text-gray-600">
            Learn in the language you are most comfortable with. Choose from any of our 8 languages
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyTestbook;