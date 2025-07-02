import React from "react";

const testSeries = [
  {
    id: 1,
    title: "SSC CGL (Tier I & Tier II) Mock Test 2025 (New)",
    totalTests: 1861,
    freeTests: 6,
    users: "1279.0k",
    img: "/imgi_5_SSC_All_1594144442.png",
    features: [
      "1 🔴 Ultimate Live Test",
      "428 All SSC Exam Basic PYQs",
      "315 All SSC Exam Advanced PYQs",
      "+1117 more tests",
    ],
  },
  {
    id: 2,
    title: "SSC MTS & Havaldar Mock Test Series 2025",
    totalTests: 1048,
    freeTests: 2,
    users: "58.4k",
    img: "/imgi_5_SSC_All_1594144442.png",
    features: [
      "317 Previous Year Paper",
      "291 All SSC Exam Basic PYQs",
      "198 All SSC Exam Advanced PYQs",
      "+242 more tests",
    ],
  },
  {
    id: 3,
    title: "SSC CHSL (Tier I & Tier II) Mock Test Series 2025",
    totalTests: 1464,
    freeTests: 1,
    users: "443.6k",
    img: "/imgi_5_SSC_All_1594144442.png",
    features: [
      "1 Live Test",
      "19 Current Affairs",
      "428 All SSC Exam Basic PYQs",
      "+1016 more tests",
    ],
  },
  {
    id: 4,
    title: "Agniveer Army GD Mock Test Series 2025",
    totalTests: 472,
    freeTests: 18,
    users: "393.6k",
    img: "/imgi_8_Delhi Police_All_1594144704.png",
    features: [
      "6 🔴 Ultimate Live Test",
      "48 PYP/MBT Subject Test",
      "24 🗣️ Mission फौजी Revision Series",
      "+394 more tests",
    ],
  },
];

const PopularTestSeries = () => {
  return (
    <div className="bg-[#f5f8ff] py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-start md:pl-24">
        Popular Test Series
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {testSeries.map((series) => (
          <div
            key={series.id}
            className="bg-gradient-to-b from-purple-100 to-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <img src={series.img} alt="logo" className="w-11 h-11" />
                <span className="text-sm text-gray-600 bg-white px-2 py-0.5 rounded-full">
                  ⚡ {series.users} Users
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-start">
                {series.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2 text-start">
                <strong>{series.totalTests} Total Tests</strong> |{" "}
                <span className="text-green-600 text-start">
                  {series.freeTests} Free Tests
                </span>
              </p>

              <ul className="text-sm text-left text-gray-700 mb-4 list-disc list-inside space-y-1">
                {series.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600 transition mt-auto">
              View Test Series
            </button>
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-2 border border-sky-500 text-sky-500 rounded hover:bg-sky-600 hover:text-white transition">
        Explore All Test Series
      </button>
    </div>
  );
};

export default PopularTestSeries;
