import React from 'react';

const Phone = () => {
  return (
    <div className="w-full bg-white py-20 px-4 md:px-16 flex justify-center relative overflow-hidden">
      
      {/* Blue Background Container */}
      <div className="w-full max-w-7xl bg-gradient-to-br from-[#0263E0] to-[#1975f4] rounded-3xl py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative shadow-xl">
        
        {/* Text Section */}
        <div className="text-white text-center md:text-left md:w-1/2 space-y-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start your learning journey now!
          </h2>
          <p className="text-base md:text-lg font-medium text-white/90">
            Learn ► Practice ► Improve ► Succeed
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
          </div>

          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
            Get Started
          </button>
        </div>

        {/* Phone Image Section */}
        <div className="relative mt-10 h-[500px] md:mt-0 md:w-1/2 flex justify-center items-center z-100">
          <img
            src="/imgi_80_web-phone.png"
            alt="Mobile App Preview"
            className="w-[320px] md:w-[360px] drop-shadow-2xl"
          />
        </div>

        {/* Optional Shape Blur */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-400 opacity-30 rounded-full blur-3xl z-0"></div>
      </div>
    </div>
  );
};

export default Phone;
