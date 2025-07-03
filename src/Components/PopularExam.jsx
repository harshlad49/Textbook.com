import React, { useState, useRef } from 'react';
import { FaChevronRight, FaAngleLeft } from 'react-icons/fa';

const tabs = [
  'SSC Exams',
  'Banking Exams',
  'Teaching Exams',
  'Civil Services Exam',
  'Railways Exams',
  'Engineering Recruitment Exams',
  'Defence Exams',
  'StateGovt.Exams',
  'Police Exams',
  'insranceExams'
];

const sscExams = [
  { title: 'SSC CGL', link: '/imgi_12_SSC_All_1594144420.png' },
  { title: 'SSC CHSL', link: '/imgi_12_SSC_All_1594144420.png' },
  { title: 'SSC MTS', link: '/imgi_12_SSC_All_1594144420.png' },
  { title: 'Delhi Police Constable', link: '/imgi_8_Delhi Police_All_1594144704.png' },
  { title: 'SSC GD Constable', link: '/imgi_12_SSC_All_1594144420.png' },
  { title: 'SSC Selection Post', link: '/imgi_12_SSC_All_1594144420.png' },
  { title: 'SSC Stenographer', link: '/imgi_12_SSC_All_1594144420.png' },
  { title: 'SSC CPO', link: '/imgi_12_SSC_All_1594144420.png' },
  { title: 'Delhi Police Head Constable', link: '/imgi_8_Delhi Police_All_1594144704.png' },
  { title: 'SSC Head Constable AWO TPO', link: '/imgi_12_SSC_All_1594144420.png' },
  { title: 'Delhi Police MTS', link: '/imgi_8_Delhi Police_All_1594144704.png' },
  
];



const PopularExams = () => {
  const [activeTab, setActiveTab] = useState('SSC Exams');
  const scrollRef = useRef(null);

  const scrollTabs = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'right' ? 200 : -200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-2">Popular Exams</h2>
      <p className="text-gray-600 mb-6">
        Get exam-ready with concepts, questions and study notes as per the latest pattern
      </p>

      
      <div className="relative mb-6 border border-r-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTabs('left')}
            className="bg-gray-100 border border-gray-300 px-2 py-4 rounded-r-full  hidden md:block"
          >
              <FaAngleLeft />
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-3 pb-2 w-full"
          >
            {tabs.map((tab) => (
              <button
              
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 py-2 rounded-full border shrink-0 ${
                  activeTab === tab
                    ? 'bg-cyan-400 text-white'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTabs('right')}
            className="bg-gray-100 border border-gray-300 px-2 py-4  rounded-s-full  hidden md:block"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

     
      {activeTab === 'SSC Exams' && (
        <>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {sscExams.map((exam, index) => (
    <a
      key={index}
      href={exam.link}
      className="flex items-center justify-between bg-white border rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition cursor-pointer no-underline hover:no-underline"
    >
      <div className="flex items-center gap-3">
        <img src={exam.link} alt="logo" className="w-8 h-8 object-contain" />
        <span className="font-medium text-gray-800">{exam.title}</span>
      </div>
      <FaChevronRight className="text-gray-400" />
    </a>
  ))}
</div>


          <div className="mt-6 flex justify-center">
            <a href="/all-exams" className="text-cyan-500 text-base font-medium hover:underline">
              Explore all exams
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default PopularExams;
