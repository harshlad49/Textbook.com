import React, { useState } from 'react';
import {
  FaChevronDown, FaSearch, FaShieldAlt, FaUniversity, FaChalkboardTeacher,
  FaGavel, FaTrain, FaCogs, FaBuilding, FaLandmark, FaUserShield,
  FaHeartbeat, FaStethoscope, FaList, FaChevronRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Login from './pages/Login';

const categoryData = {
  'SSC Exams': [
    { name: 'Army GD Agniveer', link: '/exams/army-gd-agniveer', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'Army Clerk Agniveer', link: '/exams/army-clerk-agniveer', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'CDS', link: '/exams/cds', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'NDA', link: '/exams/nda', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'Airforce Group X', link: '/exams/airforce-group-x', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'Banking Exams': [
    { name: 'BSF Head Constable', link: '/exams/bsf-head-constable', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'AFCAT', link: '/exams/afcat', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'Indian Army Agniveer', link: '/exams/indian-army-agniveer', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'Teaching Exams': [
    { name: 'Indian Coast Guard Navik', link: '/exams/indian-coast-guard-navik', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'CAPF HCM ASI', link: '/exams/capf-hcm-asi', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'Army Technical Agniveer', link: '/exams/army-technical-agniveer', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'Civil Services Exam': [
    { name: 'UPSC CAPF AC', link: '/exams/upsc-capf-ac', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'CRPF Constable', link: '/exams/crpf-constable', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'Territorial Army', link: '/exams/territorial-army', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'Railways Exams': [
    { name: 'Indian Navy SSR', link: '/exams/indian-navy-ssr', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'CRPF Head Constable', link: '/exams/crpf-head-constable', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'CISF Constable', link: '/exams/cisf-constable', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'Engineering Recruitment Exams': [
    { name: 'ITBP Constable', link: '/exams/itbp-constable', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'BSF Constable', link: '/exams/bsf-constable', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'CISF Head Constable', link: '/exams/cisf-head-constable', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'Defence Exams': [
    { name: 'Indian Army Nursing', link: '/exams/indian-army-nursing', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'Indian Airforce Agniveer', link: '/exams/indian-airforce-agniveer', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'Indian Navy Agniveer', link: '/exams/indian-navy-agniveer', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'State Govt. Exams': [
    { name: 'Indian Coast Guard Yantrik', link: '/exams/indian-coast-guard-yantrik', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'Indian Navy SSR Medical', link: '/exams/indian-navy-ssr-medical', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'Police Exams': [
    { name: 'Army Havildar SAC', link: '/exams/army-havildar-sac', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'CISF Tradesman', link: '/exams/cisf-tradesman', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'Insurance Exams': [
    { name: 'LIC AAO', link: '/exams/lic-aao', image: '/imgi_5_SSC_All_1594144442.png' },
    { name: 'NIACL AO', link: '/exams/niacl-ao', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'Nursing Exams': [
    { name: 'AIIMS Nursing Officer', link: '/exams/aiims-nursing-officer', image: '/imgi_5_SSC_All_1594144442.png' }
  ],
  'Other Govt. Exams': [
    { name: 'Territorial Army', link: '/exams/territorial-army', image: '/imgi_5_SSC_All_1594144442.png' }
  ]
};

const icons = [
  FaShieldAlt, FaUniversity, FaChalkboardTeacher, FaGavel, FaTrain, FaCogs,
  FaBuilding, FaLandmark, FaUserShield, FaHeartbeat, FaStethoscope, FaList
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = Object.keys(categoryData);
  const [showLogin, setShowLogin] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <nav className=" sticky top-0 w-full bg-white shadow-md relative z-50">
        <div className="flex items-center justify-between px-6 py-3">
          <Link to="/">
          <div className="flex items-center space-x-3 cursor-pointer">
            <img src="/imgi_85_logo-testbook.svg" alt="logo" className="w-[150px] h-[30px]" />
          </div>
          </Link>

          <div className="flex space-x-6 items-center relative">
            {/* Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => {
                setShowDropdown(false);
                setActiveCategory(null);
              }}
            >
              <div className="flex items-center text-gray-800 hover:text-sky-400 cursor-pointer">
                <span>Exams</span>
                <FaChevronDown className="ml-1 text-xs" />
              </div>

              {showDropdown && (
                <div className="absolute top-full left-0 w-[1150px] h-[700px] bg-white shadow-xl border flex z-50">
                  {/* Category List */}
                  <div className="w-64 border-r">
                    {categories.map((category, i) => {
                      const Icon = icons[i % icons.length];
                      return (
                        <div
                          key={category}
                          onMouseEnter={() => setActiveCategory(category)}
                          className={`flex items-center justify-between p-3 cursor-pointer hover:bg-gray-100 ${activeCategory === category ? 'bg-gray-100' : ''}`}
                        >
                          <div className="flex items-center space-x-2">
                            <Icon className="text-blue-600" />
                            <span>{category}</span>
                          </div>
                          <FaChevronRight className="text-gray-400 text-sm" />
                        </div>
                      );
                    })}
                  </div>

                  {/* Exams Grid */}
                  <div className="grid grid-cols-3 gap-4 p-4 w-[1300px] h-[200px] overflow-y-auto">
                    {activeCategory &&
                      categoryData[activeCategory].map(({ name, link, image }) => (
                        <Link
                          key={name}
                          to={link}
                          onClick={() => {
                            setShowDropdown(false);
                            setActiveCategory(null);
                          }}
                          className="flex items-center gap-2 p-2 border rounded hover:shadow h-[60px] w-full hover:bg-gray-50 cursor-pointer text-gray-800 hover:text-sky-400"
                        >
                          <img src={image} alt={name} className="w-10 h-10 object-cover rounded" />
                          <span className="text-sm">{name}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            <Link to="/Components/SuperCoaching" className="text-gray-800 hover:text-sky-400">SuperCoaching</Link>
            <Link to="/Components/TestSeries" className="text-gray-800 hover:text-sky-400">Test Series</Link>
            <Link to="/Components/SkillAcademy" className="text-gray-800 hover:text-sky-400">Skill Academy</Link>

            {/* More Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowMoreDropdown(true)}
              onMouseLeave={() => setShowMoreDropdown(false)}
            >
              <div className="flex items-center text-gray-800 hover:text-sky-400 cursor-pointer">
                <span>More</span>
                <FaChevronDown className="ml-1 text-xs" />
              </div>

              {showMoreDropdown && (
                <div className="absolute top-full left-0 w-48 bg-white border shadow-lg rounded-md z-50">
                  <Link to="/live-classes" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-sky-500">Live Classes</Link>
                </div>
              )}
            </div>

            {/* Search */}
            <div className="flex items-center bg-gray-100 rounded px-3 py-1 w-[400px] h-[50px] ml-4">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                className="bg-transparent outline-none w-[350px] h-[50px] ml-2 text-sm"
              />
              <FaSearch className="text-gray-500 text-sm" />
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
      <Login show={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;
