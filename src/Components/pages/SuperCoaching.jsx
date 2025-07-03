import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const SuperCoaching = () => {
  const menuItems = [
    "Popular SuperCoaching",
    "SSC Exams",
    "State Govt. Exams",
    "Engineering Exams",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    // Popular
    {
      title: "Nirnay IAS 2026 - Lakshya Batch - 3 (Hinglish)",
      category: "Popular SuperCoaching",
      oldPrice: "₹110000",
      newPrice: "₹73333",
      discount: "33% OFF",
      duration: "for 24 Months Nirnay IAS...",
      image:
        "https://cdn.testbook.com/resources/productionimages/Nirnay%20IAS%202025%20%28Hindi%29%20%E0%A4%B8%E0%A5%81%E0%A4%AA%E0%A4%B0%E0%A4%AE%E0%A5%87%E0%A4%82%E0%A4%9F%E0%A4%B0%20%E0%A4%A6%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B0%20%E0%A4%AE%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8%20%E0%A4%B8%E0%A4%A4%E0%A5%8D%E0%A4%B0%20%2814%29_All_1749896012.png",
      description:
        "Full preparation course for UPSC with live classes, test series, and expert guidance.",
    },
    {
      title: "Super Combo Pack - UPSC + SSC",
      category: "Popular SuperCoaching",
      oldPrice: "₹60000",
      newPrice: "₹29999",
      discount: "50% OFF",
      duration: "1 year complete access",
      image: "https://cdn.testbook.com/resources/productionimages/ias-upsc_All_1623789780.png",
      description: "Best combo pack for dual preparation of UPSC and SSC exams with full syllabus.",
    },

    // SSC
    {
      title: "SSC CGL (Guaranteed Selection Program) 2025",
      category: "SSC Exams",
      oldPrice: "₹10999",
      newPrice: "₹1099",
      discount: "90% OFF",
      duration: "for (Tier 1 + Tier 2) SSC CGL...",
      image:
        "https://cdn.testbook.com/resources/productionimages/goal_images/6690233b5d31ec8fe35471a1_oct2024.png",
      description: "Complete SSC CGL package with full test series, practice sets, and video lectures.",
    },
    {
      title: "SSC CHSL 2025 Super Batch",
      category: "SSC Exams",
      oldPrice: "₹7999",
      newPrice: "₹1299",
      discount: "84% OFF",
      duration: "CHSL Tier 1 + Tier 2",
      image:
        "https://cdn.testbook.com/resources/productionimages/sscchsl-batch_All_161887.png",
      description: "SSC CHSL course with live classes and updated syllabus tests.",
    },

    // State Govt.
    {
      title: "UGC NET/SET (Hinglish)",
      category: "State Govt. Exams",
      oldPrice: "₹25999",
      newPrice: "₹8749",
      discount: "66% OFF",
      duration: "for UGC NET/SET",
      image:
        "https://cdn.testbook.com/resources/productionimages/63fe3ef2288c24496a8ad0f9_oct2024%20%284%29_All_1730887911.png",
      description: "Target UGC NET/SET with structured notes, mock tests, and live mentorship.",
    },
    {
      title: "MPSC Prelims + Mains Super Combo",
      category: "State Govt. Exams",
      oldPrice: "₹19999",
      newPrice: "₹4999",
      discount: "75% OFF",
      duration: "1 Year Full Access",
      image:
        "https://cdn.testbook.com/resources/productionimages/mpsc-course_All_161098.png",
      description: "Comprehensive course for MPSC prelims and mains preparation.",
    },

    // Engineering
    {
      title: "GATE Mechanical 2025 Full Prep",
      category: "Engineering Exams",
      oldPrice: "₹20999",
      newPrice: "₹9999",
      discount: "52% OFF",
      duration: "Till GATE Exam 2025",
      image:
        "https://cdn.testbook.com/resources/productionimages/gate-mech_All_1632839123.png",
      description: "Prepare for GATE ME 2025 with top faculties, test series, and PYQs.",
    },
    {
      title: "RRB JE Technical Batch",
      category: "Engineering Exams",
      oldPrice: "₹15999",
      newPrice: "₹3499",
      discount: "78% OFF",
      duration: "All Streams Covered",
      image:
        "https://cdn.testbook.com/resources/productionimages/rrbje-course_All_164989.png",
      description: "All-in-one course for RRB JE with live classes, topic tests, and study materials.",
    },
  ];

  const filteredCourses =
    menuItems[activeIndex] === "Popular SuperCoaching"
      ? courses
      : courses.filter(
        (course) => course.category === menuItems[activeIndex]
      );

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      
      <div className="bg-[#edf0ff] py-16 text-center">
        <div className="text-3xl font-bold text-[#1f1f50] mb-6">
          <span className="text-pink-600">Super</span>coaching
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 px-4">
          Crack your exam with{" "}
          <span className="font-bold text-black">
            India’s best Teachers & Institutes
          </span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-3 md:space-y-0 md:space-x-6 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span>Courses by Super Teachers</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span>Access to 50,000+ Mock Tests</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span>Daily Live Classes by Experts</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-8">
       
        <div className="w-full md:w-64 p-4 border-r bg-white h-full">
          <ul className="space-y-2 text-sm">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-2 rounded-lg cursor-pointer transition ${activeIndex === index
                      ? "bg-cyan-100 text-cyan-600 font-bold"
                      : "hover:bg-gray-100"
                    }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="flex-1 p-4">
          <h2 className="text-xl font-semibold mb-4">
            {menuItems[activeIndex]}
          </h2>

          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div
                key={index}
                onClick={() => setSelectedCourse(course)}
                className="bg-white p-4 mb-4 rounded-lg shadow-sm flex gap-4 cursor-pointer hover:shadow-md transition"
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
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-600">No courses found.</div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md mx-4 rounded-lg p-6 relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setSelectedCourse(null)}
            >
              &times;
            </button>
            <img
              src={selectedCourse.image}
              alt="Course"
              className="w-full h-48 object-contain bg-white rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{selectedCourse.title}</h3>
            <p className="text-gray-700 mb-3">{selectedCourse.description}</p>
            <div className="text-sm text-gray-600 space-y-1">
              <div>
                <strong>Old Price:</strong>{" "}
                <s>{selectedCourse.oldPrice}</s>
              </div>
              <div>
                <strong>New Price:</strong>{" "}
                <span className="text-green-600 font-semibold">
                  {selectedCourse.newPrice}
                </span>
              </div>
              <div>
                <strong>Duration:</strong> {selectedCourse.duration}
              </div>
              {selectedCourse.saleEnd && (
                <div>
                  <strong>Sale Ends In:</strong> {selectedCourse.saleEnd}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* ➤ New Info Section Here */}
      <div className="max-w-4xl mx-auto p-6 mt-1 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">
          Supercoaching: Best Online Coaching For Government Exams in India
        </h2>
        <p className="mb-4">
          Testbook has launched an online coaching module "Supercoaching" to prepare for various government exams where we have collaborated with some peak institutes all across the country. We have brought in some of the best super teachers under one umbrella, a single platform to prepare aspirants for Government exams. Supercoaching provides online coaching preparation for different exams with profound analysis of subject courses and notes with exhaustive test series and multiple revisions.
        </p>
        <p className="mb-4">
          Testbook Supercoaching currently covers more than 30+ exams with live sessions, recorded video sessions and many more giveaways. We have bifurcated every course with respect to the syllabus and provided an in-depth explanation for the same at cost effective rates. We have tried to help students with all major exams which are covered under UPSC, SSC, BPSC etc.
        </p>
        <p className="mb-4">
          For all the aspirants these government exams do hold a lot of value with the increasing competition and few vacancies and to crack these exams it is equally important to study from the right resources and provide correct guidance.
        </p>
        <p>
          To ensure that the candidates can beat the rising competition we at super coaching provide a platform for our aspirants to help them clear their respective government exams and provide guidance and mentorship with our super teachers, cost effective courses, live and pre recorded video lectures, personalized doubt solving with profound analysis for the subject of their choice.
        </p>
      </div>
    </div>
  );
};

export default SuperCoaching;
