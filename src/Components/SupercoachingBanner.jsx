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
    <div className="w-full flex flex-col items-center bg-white py-8 px-4">
      
      {/* Top Banner */}
      <div className="bg-[#e6f1ff] rounded-2xl p-4 w-full max-w-6xl shadow-sm flex flex-col items-center md:items-start text-center md:text-left">
        <img
          src="/imgi_60_super-coaching.svg"
          alt="Supercoaching"
          className="h-10 md:h-14 mb-4"
        />
        <h1 className="text-lg sm:text-xl md:text-3xl font-light text-gray-800">
          with India's Super Teachers{" "}
          <span className="font-semibold underline decoration-pink-500 decoration-2">
            Crack any government exam
          </span>
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 max-w-6xl w-full px-1 sm:px-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center bg-[#fff3f0] text-gray-700 rounded-xl p-3 space-x-3 shadow-sm"
          >
            <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
            <p className="text-sm">{feature.title}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-8 sm:mt-10 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-6 rounded-md shadow transition">
        Explore Supercoaching
      </button>
    </div>
  );
};

export default SupercoachingBanner;
