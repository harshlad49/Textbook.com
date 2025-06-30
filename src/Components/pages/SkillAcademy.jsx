import React from "react";

const SkillAcademy = () => {
  return (
    <div className="w-full bg-[#e6f6f3]">
      {/* Top Section */}
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            <span className="text-green-600 font-bold">Skill</span> academy
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Learn Professional Skills <br /> & Become Job Ready
          </h1>
          <p className="text-gray-700 text-lg">
            Get Internship Certificate in
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-gray-800 font-medium text-md">
            <p className="text-green-600">• Digital Marketing</p>
            <p className="text-green-600">• Business Analytics</p>
            <p className="text-green-600">• Software Development</p>
            <p className="text-green-600">• Data Science</p>
          </div>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold shadow">
            Explore Programs
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <img
            src="https://testbook.com/assets/img/select/banner-illust.svg"
            alt="Skill Academy Illustration"
            className="max-w-[600px] w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Unique Features Section */}
      <div className="w-full bg-[#f4f7f8] px-6 md:px-20 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Unique Features of <span className="text-green-600">Skill</span>{" "}
          <span className="text-[#19b592]">academy</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="bg-green-100 p-6 rounded-2xl flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Industry-Recognised Internship Certificate
              </h3>
              <p className="text-gray-700">
                All candidates will be provided with a course completion &
                internship certificate upon successful completion of the course.
              </p>
            </div>
            <img
              src="https://testbook.com/assets/img/select/skill-feature-f2.svg"
              alt="certificate"
              className="w-16 h-16 ml-4"
            />
          </div>

          {/* Feature 2 */}
          <div className="bg-red-50 p-6 rounded-2xl flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Become Job Ready</h3>
              <p className="text-gray-700">
                Complete assistance in building an outstanding resume/profile
                along with soft skills training & mock interviews to make you
                job-ready.
              </p>
            </div>
            <img
              src="https://testbook.com/assets/img/select/skill-feature-f1.svg"
              alt="job ready"
              className="w-16 h-16 ml-4"
            />
          </div>

          {/* Feature 3 */}
          <div className="bg-blue-50 p-6 rounded-2xl flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Designed for Freshers</h3>
              <p className="text-gray-700">
                No prior experience or knowledge is required to enrol into this
                program.
              </p>
            </div>
            <img
              src="https://testbook.com/assets/img/select/skills-internship.svg"
              alt="freshers"
              className="w-16 h-16 ml-4"
            />
          </div>

          {/* Feature 4 */}
          <div className="bg-green-50 p-6 rounded-2xl flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Hands-on real world projects
              </h3>
              <p className="text-gray-700">
                Learn with Real-world capstone projects designed by industry
                experts.
              </p>
            </div>
            <img
              src="https://testbook.com/assets/img/select/select-unique-f2.svg"
              alt="projects"
              className="w-16 h-16 ml-4"
            />
          </div>
        </div>
      </div>
      
            {/* Instructor Section */}
      <div className="w-full bg-[#f9fbfb] px-6 md:px-20 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Meet your Instructors
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Learn from the best domain/industry experts with skill academy.{" "}
          <br />
          <span className="text-sm italic">*Indicative List</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6">
            <img
              src="https://cdn.testbook.com/users/000000000000000000000000_1649916727.png"
              alt="Nitesh Gupta"
              className=" cursor-pointer w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-200"
            />
            <h3 className="text-xl font-bold">
              Nitesh Gupta{" "}
              <img
                src="https://testbook.com/assets/img/skill-academy/linkedIn.png"
                alt="linkedin"
                className="cursor-pointer inline w-5 h-5 ml-1"
              />
            </h3>
            <p className="text-sm mt-1 text-gray-700">
              Software Development Engineer
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png"
              alt="amazon"
              className="cursor-pointer w-[100px] mx-auto mt-2"
            />
            <hr className="my-4" />
            <p className="text-gray-600 text-sm">
              A SDE currently working with Amazon Web Services who makes
              complex concepts easy for his students.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6">
            <img
              src="https://cdn.testbook.com/users/000000000000000000000000_1649916727.png"
              alt="Saurabh Kango"
              className=" cursor-pointer w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-200"
            />
            <h3 className="text-xl font-bold">
              Saurabh Kango{" "}
              <img
                src="https://testbook.com/assets/img/skill-academy/linkedIn.png"
                alt="linkedin"
                className="inline w-5 h-5 ml-1"
              />
            </h3>
            <p className="text-sm mt-1 text-gray-700">
              Business Analytics Expert
            </p>
            <img
              src="https://cdn.testbook.com/resources/productionimages/Linkedin-logo-png_English_1665049965.png"
              alt="LinkedIn"
              className="cursor-pointer w-[100px] mx-auto mt-2"
            />
            <hr className="my-4" />
            <p className="text-gray-600 text-sm">
              An IIFT alumni expert in business analytics, who has mentored
              50000+ students.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6">
            <img
              src="https://cdn.testbook.com/users/000000000000000000000000_1649916727.png"
              alt="Altamash Aslam"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-200"
            />
            <h3 className="text-xl font-bold">
              Altamash Aslam{" "}
              <img
                src="https://testbook.com/assets/img/skill-academy/linkedIn.png"
                alt="linkedin"
                className="cursor-pointer inline w-5 h-5 ml-1"
              />
            </h3>
            <p className="text-sm mt-1 text-gray-700">
              Senior Manager, Digital Experience
            </p>
            <img 
            
              src="https://cdn.testbook.com/resources/productionimages/512-5120253_aia-logo-png_English_1665050061.png"
              alt="TATA AIA"
              className=" cursor-pointer w-[120px] mx-auto mt-2"
            />
            <hr className="my-4" />
            <p className="text-gray-600 text-sm">
              Brand Manager with brands like TATA AIA, Bajaj Allianz & Sony
              Pictures who has mentored more than 8500 students.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SkillAcademy;
