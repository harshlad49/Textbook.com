import React, { useState } from 'react';
import QuizModule from './QuizModule';
import { Link } from "react-router-dom";  

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
        {/* <div className="text-sm text-gray-600 mb-4">
          <span className="text-black">Home</span> &gt;{' '}
          <span className="text-sky-600 font-medium">UPPSC RO ARO</span>
        </div> */}

        {/* Header Box */}
        {/* <div className="bg-[#f3fbfd] rounded-lg shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
        </div> */}

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
        {/* <div className="space-y-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            UPPSC has released Typing Test Font Notice... [rest of paragraph unchanged]
          </p>


        </div> */}
      </div>
    </>
  );
};

export default UpscQuiz;
