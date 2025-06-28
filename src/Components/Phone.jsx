import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full bg-[#0263E0] py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center relative overflow-hidden">
      
      <div className="text-white text-center md:text-left md:w-1/2 space-y-5 z-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Start your learning journey now!
        </h2>
        <p className="text-base md:text-lg font-medium">
          Learn &nbsp; ► &nbsp; Practice &nbsp;  &nbsp; Improve &nbsp; ► &nbsp; Succeed
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

        <button className="mt-5 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg">
          Get Started
        </button>
      </div>

      {/* Right Side - Phone Mockup */}
      <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/your-phone-ui.png" 
          alt="Mobile App Preview"
          className="w-[300px] md:w-[360px] drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
