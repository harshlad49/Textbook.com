import React from "react";

const features = [
  {
    icon: "imgi_62_Union (1)_All_1662718485.svg",
    title: "Courses by Super Teachers",
  },
  {
    icon: "imgi_62_Union (1)_All_1662718485.svg",
    title: "Daily Live Classes by Experts",
  },
  {
    icon: "imgi_62_Union (1)_All_1662718485.svg",
    title: "Complete Study Material",
  },
  {
    icon: "imgi_62_Union (1)_All_1662718485.svg",
    title: "Practice Questions",
  },
  {
    icon: "imgi_62_Union (1)_All_1662718485.svg",
    title: "Quick Doubt Resolution by Experts",
  },
  {
    icon: "imgi_62_Union (1)_All_1662718485.svg",
    title: "Access to 50,000+ Mock Test",
  },
];

const SupercoachingBanner = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white py-10 px-4">
    
      <div className="bg-[#e6f1ff] rounded-3xl p-4 w-full h-[370px] max-w-6xl shadow-sm flex flex-col items-start">
        <div className="flex flex-col md:flex-row items-center md:space-x-6 text-center md:text-left">
          <img
            src="/imgi_60_super-coaching.svg"
            alt="Supercoaching"
            className="h-9 md:h-14 mb-4 md:mb-0"
          /><br/></div><div>
          <h1 className="text-xl md:text-3xl font-light text-gray-800">
            with India's Super Teachers{" "}
            <span className="font-semibold underline decoration-pink-500 decoration-2">
              Crack any government exam
            </span>
          </h1>
        </div>
      </div>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2 max-w-6xl w-full h-[200px] px-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center bg-[#fff3f0] text-gray-700 rounded-xl p-4 space-x-4 shadow-sm"
          >
            <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
            <p className="text-sm md:text-base">{feature.title}</p>
          </div>
        ))}
      </div>

   
      <button className="mt-10 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-4 rounded-md shadow transition">
        Explore Supercoaching
      </button>
    </div>
  );
};

export default SupercoachingBanner;
