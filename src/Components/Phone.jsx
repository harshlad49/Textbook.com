import React, { useState } from 'react';
import {FaCaretRight}  from "react-icons/fa";
import Login from './pages/Login';
const Phone = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    <div className="w-full bg-white py-20 px-4 md:px-16 flex justify-center relative overflow-hidden">
      
    
      <div className="w-full h-[500px] max-w-7xl bg-gradient-to-br from-[#0263E0] to-[#1975f4] rounded-3xl py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative shadow-xl">
        
        
        <div className="text-white text-center md:text-left md:w-1/2 space-y-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start your learning journey now!
          </h2>
          <p className="text-base md:text-xl font-semibold text-white/90 flex">
            Learn <FaCaretRight className="text-2xl"/> Practice <FaCaretRight className="text-2xl"/> Improve<FaCaretRight className="text-2xl"/> Succeed
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/imgi_59_appstore.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/imgi_58_playstore.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
          </div>

          <button className="mt-6  bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md" onClick={() => setShowLogin(true)}>
            Get Started
          </button>
        </div>

        
        <div className="relative mt-10  md:mt-0 md:w-1/2 flex justify-center items-center z-50">
          <img
            src="/imgi_80_web-phone.png"
            alt="Mobile"
            className="w-full h-[700px] md:w-[600px] drop-shadow-2xl"
          />
        </div>

       
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-400 opacity-30 rounded-full blur-3xl "></div>
      </div>
    </div>
     <Login show={showLogin} onClose={() => setShowLogin(false)} />
     </>
  );
};

export default Phone;
