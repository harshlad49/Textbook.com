import React, { useState } from 'react';
import {
  FaChevronDown, FaSearch, FaShieldAlt, FaUniversity, FaChalkboardTeacher,
  FaGavel, FaTrain, FaCogs, FaBuilding, FaLandmark, FaUserShield,
  FaHeartbeat, FaStethoscope, FaList, FaChevronRight, FaAngleRight 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Login from './pages/Login';
import categoryData from './pages/Constants/categoryData';

const icons = [
  FaShieldAlt, FaUniversity, FaChalkboardTeacher, FaGavel, FaTrain, FaCogs,
  FaBuilding, FaLandmark, FaUserShield, FaHeartbeat, FaStethoscope, FaList
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  // const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); 
  const categories = Object.keys(categoryData);
const [examMenuOpen, setExamMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 w-full bg-white shadow-md z-50">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img src="/imgi_85_logo-testbook.svg" alt="logo" className="w-[150px] h-[30px]" />
            </div>
          </Link>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center relative">
            {/* Exams Dropdown */}
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

            <Link to="/supercoaching" className="text-gray-800 hover:text-sky-400">SuperCoaching</Link>
            <Link to="/test-series" className="text-gray-800 hover:text-sky-400">Test Series</Link>
            <Link to="/skill-academy" className="text-gray-800 hover:text-sky-400">Skill Academy</Link>

            {/* <div
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
                  <Link to="/liveClassesPage" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-sky-500">Live Classes</Link>
                </div>
              )}
            </div> */}

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

          {/* Right Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
     <div className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
  <div className="p-4 space-y-4">
    <button
      className="text-gray-600 hover:text-gray-900 absolute top-4 right-4"
      onClick={() => setMenuOpen(false)}
    >
      ✕
    </button>
    <div
    className="flex items-center justify-between text-gray-800 hover:text-sky-500 cursor-pointer"
    onClick={() => setExamMenuOpen(!examMenuOpen)}
  >
    <span>Exams</span>
    <FaChevronDown className={`transform transition-transform duration-200 ${examMenuOpen ? 'rotate-180' : ''}`} />
  </div>

  {examMenuOpen && (
    <div className="mt-2 ml-2 space-y-2">
      {categories.map((category, i) => {
        const Icon = icons[i % icons.length];
        return (
          <details key={category} className="group">
            <summary className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-sky-500">
              <div className="flex items-center gap-2">
                <Icon className="text-blue-600" />
                <span>{category}</span>
              </div>
              <FaChevronDown className="text-sm group-open:rotate-180 transition-transform" />
            </summary>
            <div className="ml-6 mt-2 space-y-1">
              {categoryData[category].map(({ name, link, image }) => (
                <Link
                  to={link}
                  key={name}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-sky-500"
                  onClick={() => setMenuOpen(false)}
                >
                  <img src={image} alt={name} className="w-6 h-6 rounded object-cover" />
                  {name}
                </Link>
              ))}
            </div>
          </details>
        );
      })}
    </div>
  )}
</div>
    <Link to="/SuperCoaching" className=" mt-0 ml-3 space-y-2 flex items-center justify-between text-gray-800 hover:text-sky-500 cursor-pointer">SuperCoaching</Link>
    <Link to="/TestSeries" className="mt-0 ml-3 space-y-2 flex items-center justify-between text-gray-800 hover:text-sky-500 cursor-pointer">Test Series</Link>
    <Link to="/SkillAcademy" className="mt-0 ml-3 space-y-2 flex items-center justify-between text-gray-800 hover:text-sky-500 cursor-pointer">Skill Academy</Link>
    {/* <Link to="/liveClassesPage" className="mt-0 ml-3 space-y-2 flex items-center justify-between text-gray-800 hover:text-sky-500 cursor-pointer">Live Classes</Link> */}
     <div className="flex items-center bg-gray-100 rounded px-3 py-1 w-[250px] h-[50px] ml-4 mt-5">
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
              <FaSearch className="text-gray-500  text-xl" />
            </div>

  </div>


      {/* Login Modal */}
     {!menuOpen && <Login show={showLogin} onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
