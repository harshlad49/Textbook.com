import React, { useState } from 'react';
import {
  FaChevronDown, FaSearch, FaShieldAlt, FaUniversity, FaChalkboardTeacher,
  FaGavel, FaTrain, FaCogs, FaBuilding, FaLandmark, FaUserShield,
  FaHeartbeat, FaStethoscope, FaList
} from 'react-icons/fa';

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
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = Object.keys(categoryData);

  return (
    <nav className="w-full bg-white shadow-md relative z-50">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/imgi_127_loader.gif" alt="logo" className="w-9 h-9" />
          <span className="text-3xl font-bold text-[#0AD0F4]">testbook</span>
        </div>

        {/* Center Menu */}
        <div className="flex space-x-6 items-center relative">
          {/* Exams Dropdown Wrapper */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => {
              setShowDropdown(false);
              setActiveCategory(null);
            }}
          >
            <div className="flex items-center text-gray-800 hover:text-blue-600 cursor-pointer">
              <span>Exams</span>
              <FaChevronDown className="ml-1 text-xs" />
            </div>

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute top-full left-0 w-[900px] bg-white shadow-xl border flex z-50">
                {/* Left Side Category List */}
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

                {/* Right Side Items */}
                <div className="grid grid-cols-3 gap-4 p-4 w-[600px]">
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

          {/* Other Items */}
          {['SuperCoaching', 'Test Series', 'Skill Academy', 'Pass', 'More'].map((item) => (
            <div key={item} className="flex items-center text-gray-800 hover:text-blue-600 cursor-pointer">
              <span>{item}</span>
              <FaChevronDown className="ml-1 text-xs" />
            </div>
          ))}

          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded px-3 py-1 ml-4">
            <FaSearch className="text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 text-sm"
            />
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-sm border border-gray-300 px-2 py-1 rounded">🌐</button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
