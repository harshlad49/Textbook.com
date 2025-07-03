import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const TestSeries = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);

  const testSeriesData = [
    {
      title: "SSC CGL (Tier I & Tier II) Mock Test 2025 (New)",
      totalTests: 1861,
      freeTests: 6,
      languages: "English,Hindi",
      highlights: [
        "1 🔴 Ultimate Live Test",
        "428 All SSC Exam Basic PYQs",
        "315 All SSC Exam Advanced PYQs",
        "+1117 more tests",
      ],
      users: "1279.0k",
      logo: "https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png",
    },
    {
      title: "SSC MTS & Havaldar Mock Test Series 2025",
      totalTests: 1048,
      freeTests: 2,
      languages: "English,Hindi + 6 More",
      highlights: [
        "317 Previous Year Paper",
        "291 All SSC Exam Basic PYQs",
        "198 All SSC Exam Advanced PYQs",
        "+242 more tests",
      ],
      users: "58.4k",
      logo: "https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png",
    },
    {
      title: "SSC CHSL (Tier I & Tier II) Mock Test Series 2025",
      totalTests: 1464,
      freeTests: 1,
      languages: "English,Hindi",
      highlights: [
        "1 Live Test",
        "19 Current Affairs",
        "428 All SSC Exam Basic PYQs",
        "+1016 more tests",
      ],
      users: "443.6k",
      logo: "https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png",
    },
    {
      title: "Agniveer Army GD Mock Test Series 2025",
      totalTests: 472,
      freeTests: 18,
      languages: "English,Hindi + 6 More",
      highlights: [
        "6 🔴 Ultimate Live Test",
        "48 PYP/MBT Subject Test",
        "24 🪖 Mission फौजी Revision Series",
        "+394 more tests",
      ],
      users: "393.6k",
      logo: "https://cdn.testbook.com/resources/productionimages/SSC_All_1594144442.png",
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fa]">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full min-h-[calc(100vh-80px)] items-center bg-white px-6 md:px-16">
        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1e293b] leading-tight">
            India's Structured Online <br className="hidden md:block" />
            Test Series Platform
          </h1>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Boost your exam preparation with Test Series for Banking,
            <br className="hidden md:block" />
            SSC, RRB & All other Govt. Exams
          </p>
          <p className="text-md mt-6 text-gray-800 font-medium">
            814+ exams covered. Which exam are you preparing for?
          </p>
          {/* <div className="mt-4 relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for your Exam"
              className="w-full px-5 py-3 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          </div> */}
        </div>
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <img
            src="https://testbook.com/assets/img/test-series/test-series-banner.svg"
            alt="Test Series Visual"
            className="w-full max-w-[550px] object-contain"
          />
        </div>
      </div>

      {/* Popular Test Series Section */}
      <div className="px-6 md:px-20 py-10 bg-[#f7f9fa]">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Popular Test Series
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testSeriesData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-100 to-white rounded-xl shadow-sm p-4 border hover:shadow-md transition-all flex flex-col justify-between h-full"
            >
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                    ⚡ {item.users} Users
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">{item.totalTests}</span> Total Tests | <span className="text-green-600 font-medium">{item.freeTests} Free Tests</span>
                </p>
                <p className="text-blue-600 text-sm mb-2">📘 {item.languages}</p>
                <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1 mb-4">
                  {item.highlights.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </div>
              <button
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded font-medium transition mt-auto"
                onClick={() => setSelectedSeries(item)}
              >
                View Test Series
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedSeries && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-4xl rounded-xl p-6 shadow-lg relative flex flex-col md:flex-row">
            <button
              onClick={() => setSelectedSeries(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              ✕
            </button>
            <div className="flex-1 pr-4 border-r border-gray-200">
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={selectedSeries.logo}
                  alt="logo"
                  className="w-12 h-12 rounded-full object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                  {selectedSeries.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Total Tests:</strong> {selectedSeries.totalTests} | <strong>Free Tests:</strong> {selectedSeries.freeTests}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Languages:</strong> {selectedSeries.languages}
              </p>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                {selectedSeries.highlights.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </div>
            <div className="flex-1 mt-6 md:mt-0 md:pl-6 flex flex-col justify-center items-center">
              <h4 className="text-lg font-semibold text-center text-gray-800 mb-2">
                Sign up To Test Your Exam Knowledge Now!
              </h4>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mb-3"
              />
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold transition">
                Signup & Take Free Tests
              </button>
              <p className="text-xs text-gray-500 mt-2">
                {selectedSeries.users}+ Enrolled this test series
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestSeries;