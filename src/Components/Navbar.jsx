import React, { useState } from 'react';
import { FaShieldAlt, FaUniversity, FaChalkboardTeacher, FaGavel, FaTrain, FaCogs, FaBuilding, FaLandmark, FaUserShield, FaHeartbeat, FaStethoscope, FaList } from 'react-icons/fa';

const categoryData = {
  'SSC Exams': ['Army GD Agniveer', 'Army Clerk Agniveer', 'CDS', 'NDA', 'Airforce Group X'],
  'Banking Exams': ['BSF Head Constable', 'AFCAT', 'Indian Army Agniveer'],
  'Teaching Exams': ['Indian Coast Guard Navik', 'CAPF HCM ASI', 'Army Technical Agniveer'],
  'Civil Services Exam': ['UPSC CAPF AC', 'CRPF Constable', 'Territorial Army'],
  'Railways Exams': ['Indian Navy SSR', 'CRPF Head Constable', 'CISF Constable'],
  'Engineering Recruitment Exams': ['ITBP Constable', 'BSF Constable', 'CISF Head Constable'],
  'Defence Exams': ['Indian Army Nursing', 'Indian Airforce Agniveer', 'Indian Navy Agniveer'],
  'State Govt. Exams': ['Indian Coast Guard Yantrik', 'Indian Navy SSR Medical'],
  'Police Exams': ['Army Havildar SAC', 'CISF Tradesman'],
  'Insurance Exams': ['LIC AAO', 'NIACL AO'],
  'Nursing Exams': ['AIIMS Nursing Officer'],
  'Other Govt. Exams': ['Territorial Army']
};

const icons = [
  FaShieldAlt, FaUniversity, FaChalkboardTeacher, FaGavel, FaTrain, FaCogs,
  FaBuilding, FaLandmark, FaUserShield, FaHeartbeat, FaStethoscope, FaList
];

const Navbar = () => {
const [activeCategory, setActiveCategory] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const categories = Object.keys(categoryData);

  return (
       <div
      className="relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => {
        setShowDropdown(false);
        setActiveCategory(null);
      }}
    >
      <span className="px-4 py-2 cursor-pointer hover:underline">Exams</span>

      {showDropdown && (
        <div className="absolute top-full left-0 w-[900px] bg-white shadow-xl border flex z-50">
          {/* Left Category List */}
          <div className="w-64 border-r">
            {categories.map((category, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={category}
                  onMouseEnter={() => setActiveCategory(category)}
                  className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 ${
                    activeCategory === category ? 'bg-gray-100' : ''
                  }`}
                >
                  <Icon className="mr-2 text-blue-600" />
                  <span>{category}</span>
                </div>
              );
            })}
          </div>

          {/* Right Exam Grid */}
          <div className="grid grid-cols-3 gap-4 p-4 w-[100px] h-[100px]">
            {activeCategory &&
              categoryData[activeCategory].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2 border rounded hover:shadow hover:bg-gray-50 cursor-pointer"
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
