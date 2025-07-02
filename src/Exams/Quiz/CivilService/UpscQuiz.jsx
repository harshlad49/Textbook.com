import React, { useState } from 'react';
import QuizModule from './QuizModule';

const UpscQuiz = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      {/* Modal Popup for Quiz */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-xl w-full">
            <button
              onClick={() => setShowQuiz(false)}
              className="absolute top-2 right-3 text-red-500 hover:text-red-700 text-2xl font-bold"
            >
              &times;
            </button>
            <QuizModule />
          </div>
        </div>
      )}

      {/* 👇 UI and Info Section */}
      <div className="p-6 sm:p-10 font-sans bg-white space-y-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          <span className="text-black">Home</span> &gt;{' '}
          <span className="text-sky-600 font-medium">UPPSC RO ARO</span>
        </div>

        {/* Header Box */}
        <div className="bg-[#f3fbfd] rounded-lg shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.testbook.com/resources/productionimages/UPPSC%20UPTET_All_1612212156.png"
              alt="UPPSC Logo"
              className="w-14 h-auto"
            />
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900 max-w-xl">
              UPPSC RO ARO Exam Date 2025 Out, Exam Schedule and Shift Timings
            </h1>
          </div>
          <button className="text-sky-600 border border-sky-400 px-4 py-2 rounded hover:bg-sky-50 transition text-sm font-medium">
            &#x1F4BE; Download As PDF
          </button>
        </div>

        {/* Free Test Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">UPPSC RO ARO Free Test</h2>

          <div className="grid gap-6">
            {/* Test 1 */}
            <div className="border rounded-lg p-4 shadow-sm">
              <div className="text-green-600 text-xs font-bold border border-green-600 inline-block px-2 py-1 rounded mb-2">
                FREE
              </div>
              <h3 className="text-lg font-medium">UPPSC RO ARO Prelims General Studies Full Test 2</h3>
              <p className="text-sm text-gray-600 mt-1">⚡ 12.8k Users</p>
              <div className="text-sm text-gray-700 mt-2 space-x-4">
                <span>📄 200 Questions</span>
                <span>📝 200 Marks</span>
                <span>⏱ 180 Mins</span>
              </div>
              <div className="mt-2 text-blue-500 text-sm">Syllabus • English, Hindi</div>
              <button
                onClick={() => setShowQuiz(true)}
                className="mt-3 bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2 rounded"
              >
                Start Now
              </button>
            </div>

            {/* Test 2 */}
            <div className="border rounded-lg p-4 shadow-sm">
              <div className="text-green-600 text-xs font-bold border border-green-600 inline-block px-2 py-1 rounded mb-2">
                FREE
              </div>
              <h3 className="text-lg font-medium">UKPSC RO/ARO Prelims 2025 Booster Mini Live Test: UK Specific</h3>
              <p className="text-sm text-gray-600 mt-1">⚡ 1.6k Users</p>
              <div className="text-sm text-gray-700 mt-2 space-x-4">
                <span>📄 30 Questions</span>
                <span>📝 30 Marks</span>
                <span>⏱ 25 Mins</span>
              </div>
              <div className="mt-2 text-blue-500 text-sm">Syllabus • English, Hindi</div>
              <button
                onClick={() => setShowQuiz(true)}
                className="mt-3 bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2 rounded"
              >
                Start Now
              </button>
            </div>
          </div>
        </div>

        {/* Recruitment Overview Section */}
        <div className="space-y-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            UPPSC has released Typing Test Font Notice... [rest of paragraph unchanged]
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Recruitment Overview */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">UPPSC RO ARO Recruitment 2024 Overview</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {/* ...data items */}
              </div>
              <div className="mt-4 flex gap-4">
                <button className="bg-pink-500 text-white text-sm px-3 py-2 rounded">Download Pdf</button>
                <button className="bg-pink-500 text-white text-sm px-3 py-2 rounded">Apply Now</button>
              </div>
            </div>

            {/* Latest Updates */}
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">UPPSC RO ARO Latest Updates</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-orange-100 px-3 py-2 rounded">Syllabus and Exam Pattern</li>
                <li className="bg-orange-100 px-3 py-2 rounded">Admit Card</li>
                <li className="bg-orange-100 px-3 py-2 rounded">Eligibility Criteria</li>
                <li className="bg-orange-100 px-3 py-2 rounded">Salary and Job Profile</li>
                <li className="text-blue-600 underline">Report An Error</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpscQuiz;
