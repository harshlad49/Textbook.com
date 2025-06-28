import React from 'react';

const FooterUp = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-400 font-semibold py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <h4 className="font-semibold text-white mb-3">
            Testbook Products & Resources for Students
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Plutus Education</a></li>
            <li><a href="#">Daily Editorials for UPSC</a></li>
            <li><a href="#">Legal Blog</a></li>
          </ul>
        </div>
        <div className="pt-6 md:pt-0">
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Online Law Courses by The Legal School</a></li>
            <li><a href="#">Evaluate UPSC Mains Answer</a></li>
            <li><a href="#">Judiciary Preparation</a></li>
          </ul>
        </div>
        <div className="pt-6 md:pt-0">
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">UPSC Preparation 2025</a></li>
            <li><a href="#">Finance & Accounting Blog</a></li>
            <li><a href="#">UPSC Current Affairs</a></li>
            <li><a href="#">Classplus Blog</a></li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-10">
        <div>
          <h4 className="font-semibold text-white mb-3">Testbook USA</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Testbook USA</a></li>
            <li><a href="#">ACT Registration</a></li>
            <li><a href="#">Good SAT Score</a></li>
            <li><a href="#">ACT Scores Guide</a></li>
            <li><a href="#">ACT English Tips</a></li>
          </ul>
        </div>
        <div className="pt-6 md:pt-0">
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">SAT Exam</a></li>
            <li><a href="#">ACT Test Dates</a></li>
            <li><a href="#">How Long is The SAT?</a></li>
            <li><a href="#">Good ACT Scores</a></li>
            <li><a href="#">US College Guide</a></li>
          </ul>
        </div>
        <div className="pt-6 md:pt-0">
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">SAT Practice Test</a></li>
            <li><a href="#">SAT Scores Guide</a></li>
            <li><a href="#">When Should You Take the SAT?</a></li>
            <li><a href="#">ACT Superscore</a></li>
            <li><a href="#">Free SAT Prep</a></li>
          </ul>
        </div>
        <div className="pt-6 md:pt-0">
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">ACT Exam</a></li>
            <li><a href="#">SAT Superscore</a></li>
            <li><a href="#">Digital SAT Format</a></li>
            <li><a href="#">ACT Tips</a></li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-semibold text-white mb-3">Books</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Railway Books</a></li>
            <li><a href="#">Banking Books</a></li>
          </ul>
        </div>
        <div className="pt-6 md:pt-0">
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">UPSC Books</a></li>
          </ul>
        </div>
        <div className="pt-6 md:pt-0">
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">SSC GD Books</a></li>
          </ul>
        </div>
        <div className="pt-6 md:pt-0">
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">AE/JE Books</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterUp;
