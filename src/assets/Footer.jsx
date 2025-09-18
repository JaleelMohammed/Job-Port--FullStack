import { FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="pt-12  px-6 md:px-20 bg-[#0d111b] text-gray-200 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand + blurb */}
        <div>
          <div className="flex">
            
          <div className="bg-white  text-blue-700 font-extrabold rounded-full h-10 w-10 flex items-center justify-center">
            JP
          </div>
          <span className="sm:font-extrabold font-bold  sm:block mt-1.5 ms-1.5  items-center justify-center ">Job-Port</span>
            </div> 
          <p className="mt-3 text-gray-300">
            This Job Portal is a user-friendly platform that bridges the gap between job seekers and employers. Candidates can explore opportunities, create profiles, and apply for suitable roles, while employers can post vacancies and manage applications. 
          </p>
          <div className="flex gap-3 mt-4 text-lg">
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-sky-400"><FaLinkedin /></a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-sky-400"><FaGithub /></a>
            <a href="#" className="hover:text-sky-400"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
          <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/jobs" className="hover:text-white">Jobs</a></li>
            <li><a href="/post-job" className="hover:text-white">Post Job</a></li>
           
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-bold mb-3">Contact Info</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2"><MdEmail />iamjaleelmohammed@email.com</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Bengalore, india</li>
          </ul>
        </div>
      </div>

      <div className="mt-47.5 py-3 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jaleel KM. All rights reserved. 
        </div>
       </footer>
  );
}
