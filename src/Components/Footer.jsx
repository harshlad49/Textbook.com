import React from 'react';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaQuora,
} from 'react-icons/fa';
import FooterUp from './FooterUp';
const Footer = () => {
  return (
    <div>
    <FooterUp/>
    <footer className="bg-[#181B1F] font-medium  text-gray-400 py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
       
        <div className="flex flex-col gap-4 text-sm">
          <img src="/imgi_85_logo-testbook.svg" alt="Testbook Logo" className="w-32" />
          <div>Testbook Edu Solutions Pvt. Ltd.</div>
          <div>
            D- 1, Vyapar Marg,<br />
            Noida Sector 3, Noida,<br />
            Uttar Pradesh, India - 201301
          </div>
          <div>
            <a href="mailto:support@testbook.com" className="hover:underline">
              support@testbook.com
            </a><br />
            Toll Free: <br/>1800 203 0577 <br/>
            Office Hours: 10 AM to 7 PM (all 7 days)
          </div>
        </div>

        <div className="text-sm">
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li className="flex items-center gap-2">
              <a href="#" className="hover:underline">Careers</a>
              <span className="bg-gray-600 text-xs px-2 py-0.5 rounded">We are hiring</span>
            </li>
            <li><a href="#" className="hover:underline">Teach Online on Testbook</a></li>
            <li><a href="#" className="hover:underline">Media</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>

      
        <div className="text-sm">
          <h4 className="font-semibold mb-2">Products</h4>
          <ul className="space-y-1">
            {[
              'Test Series', 'Live Tests and Quizzes', 'Testbook Pass', 'Online Videos',
              'Practice', 'Live Classes', 'Blog', 'Refer & Earn', 'Books', 'Exam Calendar',
              'GK & CA', 'Teacher Training Program', 'Doubts', 'Hire from SkillAcademy'
            ].map(item => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

       
        <div className="text-sm">
          <h4 className="font-semibold mb-2">Our App</h4>
          <div className="flex flex-col gap-3">
            <img src="/imgi_59_appstore.svg" alt="App Store" className="w-30" />
            <img src="/imgi_58_playstore.svg" alt="Google Play" className="w-30" />
          </div>
          <h4 className="font-semibold mt-4 text-white">Follow us on</h4>
          <div className="flex gap-3 mt-2 text-gray-400">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
            <FaQuora />
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />
      <div className="flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <div>Copyright © 2014–2024 Testbook Edu Solutions Pvt. Ltd.: All rights reserved</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">User Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
