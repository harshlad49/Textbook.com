import React from "react";
import { FaCheckCircle, FaSearch } from "react-icons/fa";

const SuperCoaching = () => {
  const menuItems = [
    "Popular SuperCoaching",
    "SSC Exams",
    "State Govt. Exams",
    "Engineering Exams",
    "AE & JE",
    "Teaching Exams",
    "Banking and Insurance",
    "UP Govt. Exams",
    "Maharashtra Govt Exams",
    "Odisha Govt Exams",
    "Railways",
    "Central Govt. Exams",
  ];

  const courses = [
    {
      title: "Nirnay IAS 2026 - Lakshya Batch - 3 (Hinglish)",
      oldPrice: "₹110000",
      newPrice: "₹73333",
      discount: "33% OFF",
      duration: "for 24 Months Nirnay IAS...",
      image: "https://cdn.testbook.com/resources/productionimages/Nirnay%20IAS%202025%20%28Hindi%29%20%E0%A4%B8%E0%A5%81%E0%A4%AA%E0%A4%B0%E0%A4%AE%E0%A5%87%E0%A4%82%E0%A4%9F%E0%A4%B0%20%E0%A4%A6%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%20%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8%20%E0%A4%B8%E0%A4%A4%E0%A5%8D%E0%A4%B0%20%2814%29_All_1749896012.png",
    },
    {
      title: "UGC NET/SET (Hinglish)",
      oldPrice: "₹25999",
      newPrice: "₹8749",
      discount: "66% OFF",
      duration: "for UGC NET/SET",
      saleEnd: "02:39:22",
      image: "https://cdn.testbook.com/resources/productionimages/63fe3ef2288c24496a8ad0f9_oct2024%20%284%29_All_1730887911.png",
    },
    {
      title: "SSC CGL (Guaranteed Selection Program) 2025",
      oldPrice: "₹10999",
      newPrice: "₹1099",
      discount: "90% OFF",
      duration: "for (Tier 1+ Tier 2) SSC CGL...",
      saleEnd: "02:39:22",
      image: "https://cdn.testbook.com/resources/productionimages/goal_images/6690233b5d31ec8fe35471a1_oct2024.png",
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      
      <div className="bg-[#edf0ff] py-16 text-center">
        <div className="text-3xl font-bold text-[#1f1f50] mb-6">
          <span className="text-pink-600">Super</span>coaching
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 px-4">
          Crack your exam with{" "}
          <span className="font-bold text-black">India’s best Teachers & Institutes</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-3 md:space-y-0 md:space-x-6 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span>Courses by Super Teachers</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span>Access to 50,000+ Mock Test</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span>Daily Live Classes by Experts</span>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-semibold mb-3">Find Your Exam</h2>
          <div className="relative w-full max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for Your Goal"
              className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-8">
       
        <div className="w-full md:w-64 p-4 border-r bg-white h-full">
          <ul className="space-y-2 text-sm">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`p-2 rounded-lg cursor-pointer ${
                  index === 0
                    ? "bg-cyan-100 text-cyan-600 font-bold"
                    : "hover:bg-gray-100"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

       
        <div className="flex-1 p-4">
          <h2 className="text-xl font-semibold mb-4">Popular SuperCoaching</h2>
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-4 mb-4 rounded-lg shadow-sm flex gap-4"
            >
              <img
                src={course.image}
                alt="course"
                className="w-32 h-32 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-medium">{course.title}</h3>
                <div className="flex items-center text-sm mt-1 gap-2">
                  <s className="text-gray-500">{course.oldPrice}</s>
                  <span className="text-green-600">{course.discount}</span>
                </div>
                <div className="text-md font-semibold mt-1">
                  {course.newPrice}{" "}
                  <span className="text-gray-600">{course.duration}</span>
                </div>
                {course.saleEnd && (
                  <div className="text-sm text-red-600 bg-red-100 inline-block mt-2 px-2 py-1 rounded">
                    Sale ends in {course.saleEnd}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperCoaching;
