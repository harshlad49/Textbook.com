import React, { useState } from 'react';
import {
  FaChevronDown, FaSearch, FaShieldAlt, FaUniversity, FaChalkboardTeacher,
  FaGavel, FaTrain, FaCogs, FaBuilding, FaLandmark, FaUserShield,
  FaHeartbeat, FaStethoscope, FaList
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const categoryData = {
  'SSC Exams': [
    { name: 'Army GD Agniveer', link: '/exams/army-gd-agniveer' },
    { name: 'Army Clerk Agniveer', link: '/exams/army-clerk-agniveer' },
    { name: 'CDS', link: '/exams/cds' },
    { name: 'NDA', link: '/exams/nda' },
    { name: 'Airforce Group X', link: '/exams/airforce-group-x' }
  ],
  'Banking Exams': [
    { name: 'BSF Head Constable', link: '/exams/bsf-head-constable' },
    { name: 'AFCAT', link: '/exams/afcat' },
    { name: 'Indian Army Agniveer', link: '/exams/indian-army-agniveer' }
  ],
  'Teaching Exams': [
    { name: 'Indian Coast Guard Navik', link: '/exams/indian-coast-guard-navik' },
    { name: 'CAPF HCM ASI', link: '/exams/capf-hcm-asi' },
    { name: 'Army Technical Agniveer', link: '/exams/army-technical-agniveer' }
  ],
  'Civil Services Exam': [
    { name: 'UPSC CAPF AC', link: '/exams/upsc-capf-ac' },
    { name: 'CRPF Constable', link: '/exams/crpf-constable' },
    { name: 'Territorial Army', link: '/exams/territorial-army' }
  ],
  'Railways Exams': [
    { name: 'Indian Navy SSR', link: '/exams/indian-navy-ssr' },
    { name: 'CRPF Head Constable', link: '/exams/crpf-head-constable' },
    { name: 'CISF Constable', link: '/exams/cisf-constable' }
  ],
  'Engineering Recruitment Exams': [
    { name: 'ITBP Constable', link: '/exams/itbp-constable' },
    { name: 'BSF Constable', link: '/exams/bsf-constable' },
    { name: 'CISF Head Constable', link: '/exams/cisf-head-constable' }
  ],
  'Defence Exams': [
    { name: 'Indian Army Nursing', link: '/exams/indian-army-nursing' },
    { name: 'Indian Airforce Agniveer', link: '/exams/indian-airforce-agniveer' },
    { name: 'Indian Navy Agniveer', link: '/exams/indian-navy-agniveer' }
  ],
  'State Govt. Exams': [
    { name: 'Indian Coast Guard Yantrik', link: '/exams/indian-coast-guard-yantrik' },
    { name: 'Indian Navy SSR Medical', link: '/exams/indian-navy-ssr-medical' }
  ],
  'Police Exams': [
    { name: 'Army Havildar SAC', link: '/exams/army-havildar-sac' },
    { name: 'CISF Tradesman', link: '/exams/cisf-tradesman' }
  ],
  'Insurance Exams': [
    { name: 'LIC AAO', link: '/exams/lic-aao' },
    { name: 'NIACL AO', link: '/exams/niacl-ao' }
  ],
  'Nursing Exams': [
    { name: 'AIIMS Nursing Officer', link: '/exams/aiims-nursing-officer' }
  ],
  'Other Govt. Exams': [
    { name: 'Territorial Army', link: '/exams/territorial-army' }
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

  return (
    <nav className="w-full bg-white shadow-md relative z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-3">
          <img src="/imgi_85_logo-testbook.svg" alt="logo" className="w-[200px] h-[50px]" />
        </div>

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
              <div className="absolute top-full left-0 w-[900px] bg-white shadow-xl border flex z-50">
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

                <div className="grid grid-cols-3 gap-4 p-4 w-[1300px] h-[200px] overflow-y-auto">
                  {activeCategory &&
                    categoryData[activeCategory].map(({ name, link }) => (
                      <a
                        key={name}
                        href={link}
                        className="flex items-center gap-2 p-2 border rounded hover:shadow hover:bg-gray-50 cursor-pointer text-gray-800 hover:text-sky-400"
                      >
                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                        <span className="text-sm">{name}</span>
                      </a>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Other Nav Items */}
  <Link to="/supercoaching" className="flex items-center text-gray-800 hover:text-sky-400 cursor-pointer">
  <span>SuperCoaching</span>
  
</Link>
<Link to="/test-series" className="flex items-center text-gray-800 hover:text-sky-400 cursor-pointer">
  <span>Test Series</span>
  
</Link>
<Link to="/skill-academy" className="flex items-center text-gray-800 hover:text-sky-400 cursor-pointer">
  <span>Skill Academy</span>
  
</Link>
<Link to="/pass" className="flex items-center text-gray-800 hover:text-sky-400 cursor-pointer">
  <span>Pass</span>
  
</Link>
<Link to="/more" className="flex items-center text-gray-800 hover:text-sky-400 cursor-pointer">
  <span>More</span>
  
</Link>



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
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
