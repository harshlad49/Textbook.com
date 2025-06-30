import React from "react";
import { FaSearch } from "react-icons/fa";

const TestSeries = () => {
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
    <div className="w-full min-h-screen bg-[#f7f9fa]">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-start px-6 md:px-20 py-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            India's Structured Online Test <br /> series platform
          </h1>
          <p className="text-lg text-gray-500 mt-4">
            Boost your exam preparation with Test Series for Banking,
            <br />
            SSC, RRB & All other Govt. Exams
          </p>
          <p className="text-md mt-6 text-gray-800">
            814+ exams covered. Which exam are you preparing for?
          </p>
          <div className="mt-4 relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for your Exam"
              className="w-full px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center p-6 md:p-12">
          <img
            src="https://testbook.com/assets/img/test-series/test-series-banner.svg"
            alt="Test Series Visual"
            className="w-full h-auto max-w-[550px] object-contain"
          />
        </div>
      </div>

      {/* Popular Test Series Section */}
      <div className="px-6 md:px-20 py-10 bg-[#f7f9fa]">
        <h2 className="text-2xl font-bold mb-6">Popular Test Series</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testSeriesData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-100 to-white rounded-xl shadow-sm p-4 border"
            >
              {/* Logo and Users */}
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

              {/* Title */}
              <h3 className="font-semibold text-sm text-gray-900 mb-1">
                {item.title}
              </h3>

              {/* Tests Info */}
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">{item.totalTests}</span> Total
                Tests |{" "}
                <span className="text-green-600 font-medium">
                  {item.freeTests} Free Tests
                </span>
              </p>

              {/* Languages */}
              <p className="text-blue-600 text-sm mb-2">
                📘 {item.languages}
              </p>

              <ul className="text-sm text-gray-700 list-disc pl-4 space-y-1 mb-4">
                {item.highlights.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>

              {/* Button */}
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded font-medium transition">
                View Test Series
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestSeries;
