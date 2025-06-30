// src/components/PopularCourses.jsx
import React from "react";

const courses = [
  {
    title: "Nirnay IAS 2026 - Lakshya Batch - 3 (Hinglish)",
    oldPrice: "₹110000",
    newPrice: "₹73333",
    discount: "33% OFF",
    duration: "for 24 Months Nirnay IAS...",
    image: "/nirnay.png",
  },
  {
    title: "UGC NET/SET (Hinglish)",
    oldPrice: "₹25999",
    newPrice: "₹8749",
    discount: "66% OFF",
    duration: "for UGC NET/SET",
    saleEnd: "02:39:22",
    image: "/ugcnet.png",
  },
  {
    title: "SSC CGL (Guaranteed Selection Program) 2025",
    oldPrice: "₹10999",
    newPrice: "₹1099",
    discount: "90% OFF",
    duration: "for (Tier 1+ Tier 2) SSC CGL...",
    saleEnd: "02:39:22",
    image: "/ssc.png",
  },
];

const PopularCourses = () => {
  return (
    <div className="flex-1 p-4">
      <h2 className="text-xl font-semibold mb-4">Popular SuperCoaching</h2>
      {courses.map((course, index) => (
        <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-sm flex gap-4">
          <img src={course.image} alt="course" className="w-32 h-32 object-cover rounded" />
          <div>
            <h3 className="text-lg font-medium">{course.title}</h3>
            <div className="flex items-center text-sm mt-1 gap-2">
              <s className="text-gray-500">{course.oldPrice}</s>
              <span className="text-green-600">{course.discount}</span>
            </div>
            <div className="text-md font-semibold mt-1">{course.newPrice} <span className="text-gray-600">{course.duration}</span></div>
            {course.saleEnd && (
              <div className="text-sm text-red-600 bg-red-100 inline-block mt-2 px-2 py-1 rounded">
                Sale ends in {course.saleEnd}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCourses;
