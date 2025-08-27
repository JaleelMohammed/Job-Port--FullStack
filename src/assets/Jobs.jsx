// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";


// //  export default function Jobs() {
// //   const [jobs, setJobs] = useState([]);
// //   const [applied, setApplied] = useState({});
// //   const [loading, setLoading] = useState({});
// //   const [showLogin, setShowLogin] = useState(false);
// //   const navigate = useNavigate();

// //   const checkAuth = () => {
// //     const user = localStorage.getItem("loggedUser");
// //     return !!user;
// //   };

// //   const handleApply = (id) => {
// //     // Check if user is logged in
// //     if (!checkAuth()) {
// //       setShowLogin(true);
// //       return;
// //     }

// //     setLoading((prev) => ({ ...prev, [id]: true }));

// //     setTimeout(() => {    
// //       setApplied((prev) => ({ ...prev, [id]: true }));    
// //       setLoading((prev) => ({ ...prev, [id]: false }));    
// //     }, 3000);
// //   };

// //   useEffect(() => {
// //     const defaultJobs = [
// //       { title: "Frontend Developer", experience: 4, location: "Noida", techStack: "Flutter, Firebase", description: "Assist in recruitment, onboarding, and employee relations." },
// //       { title: "Backend Developer", experience: 4, location: "Noida", techStack: "Java, Spring Boot, MySQL", description: "Responsible for developing and maintaining scalable applications." },
// //       { title: "Full Stack Engineer", experience: 7, location: "Ahmedabad", techStack: "HTML, CSS, JavaScript", description: "Troubleshoot issues and provide technical support." },
// //       { title: "Data Scientist", experience: 8, location: "Kolkata", techStack: "React, Node.js, MongoDB", description: "Create engaging digital content and manage campaigns." },
// //       { title: "Machine Learning Engineer", experience: 7, location: "Chennai", techStack: "Python, Django, PostgreSQL", description: "Assist in recruitment, onboarding, and employee relations." },
// //       { title: "DevOps Engineer", experience: 3, location: "Chennai", techStack: "Unity, C#", description: "Design user-friendly interfaces and improve user experiences." },
// //       { title: "UI/UX Designer", experience: 4, location: "Chennai", techStack: "Angular, .NET Core, SQL Server", description: "Develop APIs and integrate third-party services." },
// //       { title: "React Native Developer", experience: 3, location: "Bangalore", techStack: "React Native, JavaScript, Redux", description: "Develop cross-platform mobile applications using React Native." },
// //   { title: "Python Developer", experience: 5, location: "Hyderabad", techStack: "Python, Django, Flask", description: "Build robust backend systems and APIs using Python frameworks." },
// //   { title: "iOS Developer", experience: 4, location: "Pune", techStack: "Swift, Objective-C, Xcode", description: "Create innovative iOS applications with clean code architecture." },
// //   { title: "Android Developer", experience: 4, location: "Gurgaon", techStack: "Kotlin, Java, Android SDK", description: "Develop native Android applications with modern architecture patterns." },
// //   { title: "Cloud Architect", experience: 8, location: "Mumbai", techStack: "AWS, Azure, GCP", description: "Design and implement cloud infrastructure solutions for enterprise clients." },
// //   { title: "Data Engineer", experience: 5, location: "Delhi", techStack: "Python, SQL, Big Data", description: "Build and maintain data pipelines for analytics and machine learning." },
// //   { title: "Product Manager", experience: 6, location: "Bangalore", techStack: "Agile, Scrum, Product Strategy", description: "Lead product development from conception to launch and iteration." },
// //   { title: "QA Automation Engineer", experience: 4, location: "Chennai", techStack: "Selenium, Java, TestNG", description: "Develop automated test scripts and ensure software quality." },
// //   { title: "Technical Lead", experience: 8, location: "Hyderabad", techStack: "Java, Microservices, Architecture", description: "Lead technical teams and make architectural decisions for projects." },
// //   { title: "Network Engineer", experience: 5, location: "Noida", techStack: "Cisco, Networking, Security", description: "Design, implement and maintain network infrastructure." },
// //   { title: "Security Analyst", experience: 4, location: "Pune", techStack: "Cybersecurity, SIEM, Pen Testing", description: "Protect systems and networks from cyber threats and vulnerabilities." },
// //   { title: "Business Analyst", experience: 5, location: "Mumbai", techStack: "SQL, Requirements Gathering, UML", description: "Bridge the gap between IT and business using data analytics." },
// //   { title: "Scrum Master", experience: 5, location: "Gurgaon", techStack: "Agile, Scrum, JIRA", description: "Facilitate agile processes and remove impediments for development teams." },
// //   { title: "Technical Writer", experience: 3, location: "Delhi", techStack: "Documentation, Markdown, API Docs", description: "Create clear and comprehensive technical documentation." },
// //   { title: "Solution Architect", experience: 9, location: "Bangalore", techStack: "Cloud, Architecture, Design Patterns", description: "Design end-to-end solutions for complex business problems." },
// //   { title: "Database Administrator", experience: 6, location: "Hyderabad", techStack: "SQL, Oracle, MySQL", description: "Manage, maintain and optimize database performance." },
// //   { title: "ERP Consultant", experience: 5, location: "Pune", techStack: "SAP, Oracle, Business Process", description: "Implement and customize ERP solutions for clients." },
// //   { title: "AI Research Scientist", experience: 7, location: "Bangalore", techStack: "Python, TensorFlow, Research", description: "Conduct research and develop innovative AI algorithms." },
// //   { title: "Blockchain Developer", experience: 4, location: "Mumbai", techStack: "Solidity, Ethereum, Smart Contracts", description: "Build decentralized applications and smart contracts." },
// //   { title: "VR/AR Developer", experience: 4, location: "Gurgaon", techStack: "Unity, C#, 3D Modeling", description: "Create immersive virtual and augmented reality experiences." },
// //   { title: "Embedded Systems Engineer", experience: 5, location: "Bangalore", techStack: "C, C++, Embedded Linux", description: "Develop firmware for embedded devices and IoT products." },
// //   { title: "Site Reliability Engineer", experience: 6, location: "Hyderabad", techStack: "Kubernetes, Docker, DevOps", description: "Ensure system reliability and automate operational processes." },
// //   { title: "Mobile App Developer", experience: 4, location: "Pune", techStack: "Flutter, Dart, Firebase", description: "Create cross-platform mobile applications with Flutter." },
// //   { title: "Frontend Architect", experience: 8, location: "Delhi", techStack: "React, Vue, Architecture", description: "Design and implement scalable frontend architecture." },
// //   { title: "Backend Architect", experience: 9, location: "Bangalore", techStack: "Node.js, Microservices, AWS", description: "Design and implement scalable backend systems." },
// //   { title: "Full Stack Architect", experience: 10, location: "Mumbai", techStack: "MERN Stack, Cloud, DevOps", description: "Design and implement end-to-end web applications." },
// //   { title: "Data Science Manager", experience: 8, location: "Hyderabad", techStack: "Python, ML, Team Management", description: "Lead data science teams and deliver AI solutions." },
// //   { title: "IT Project Manager", experience: 7, location: "Gurgaon", techStack: "PMP, Agile, Budgeting", description: "Manage IT projects from initiation to completion." },
// //   { title: "UX Researcher", experience: 4, location: "Pune", techStack: "User Research, Usability Testing", description: "Conduct user research to inform product design decisions." },
// //   { title: "Content Strategist", experience: 5, location: "Delhi", techStack: "Content Strategy, SEO, Marketing", description: "Develop content strategies to engage target audiences." }

// //     ];

// //     const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];    
// //     const jobsWithId = [...defaultJobs, ...savedJobs].map((job, index) => ({    
// //       id: `${Date.now()}-${index}-${Math.random()} `,    
// //       ...job,    
// //     }));    

// //     setJobs(jobsWithId);
// //   }, []);

// //   const [searchTerm, setSearchTerm] = useState("");
// //   const SearchedJob = jobs.filter(
// //     (job) =>
// //       job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       job.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       job.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       job.techStack?.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-3xl font-bold mb-6 text-center">
// //         Current Job Openings
// //       </h2>
// //       <p className="text-center text-gray-600 mb-6">
// //         Explore a wide range of career opportunities tailored to your skills and
// //         experience.
// //       </p>

// //       {/* 🔍 Search Bar */}    
// //       <div className="max-w-xl mx-auto mb-10">    
// //         <input    
// //           type="text"    
// //           placeholder="Search job title..."    
// //           className="bg-white w-full px-5 py-3 rounded-2xl shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-50 outline-none"    
// //           value={searchTerm}    
// //           onChange={(e) => setSearchTerm(e.target.value)}    
// //         />    
// //       </div>    

// //       {/* Jobs Grid */}    
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">    
// //         {SearchedJob.map((job) => (    
// //           <div    
// //             key={job.id}    
// //             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between p-6"    
// //           >    
// //             <div>    
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">    
// //                 {job.title}    
// //               </h3>    

// //               <p className="text-gray-600 mb-3">    
// //                 <span className="font-semibold text-gray-800">Location:</span>{" "}    
// //                 {job.location}    
// //               </p>    

// //               <p className="text-gray-600 mb-3">    
// //                 <span className="font-semibold text-gray-800">Experience:</span>{" "}    
// //                 {job.experience}    
// //               </p>    

// //               <p className="text-gray-600 mb-3">    
// //                 <span className="font-semibold text-gray-800">    
// //                   Required Technologies:    
// //                 </span>{" "}    
// //                 {job.techStack}    
// //               </p>    

// //               <p className="text-gray-500 mb-6 line-clamp-3">    
// //                 {job.description}    
// //               </p>    
// //             </div>    

// //             <button    
// //               onClick={() => handleApply(job.id)}    
// //               className={`w-full py-2 rounded-3xl text-white font-semibold transition duration-200 ${applied[job.id]    
// //                   ? "bg-emerald-600 cursor-not-allowed"    
// //                   : "bg-indigo-600 hover:bg-indigo-700"    
// //                 }`}    
// //               disabled={applied[job.id] || loading[job.id]}    
// //             >    
// //               {loading[job.id]    
// //                 ? "Applying..."    
// //                 : applied[job.id]    
// //                   ? "Applied"    
// //                   : "Apply Now"}    
// //             </button>    
// //           </div>    
// //         ))}    
// //       </div>

// //       {/* Login Modal for Jobs Page */}  
// //       {showLogin && (  
// //         <div className="fixed inset-0 flex justify-center items-center z-50">  
// //           <div className="bg-white p-6 rounded-lg shadow-xl w-80 relative">
// //             <button
// //               onClick={() => setShowLogin(false)}
// //               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
// //             >
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //               </svg>
// //             </button>
// //             <h2 className="text-3xl font-extrabold text-center text-black mb-4">  
// //               Login Required  
// //             </h2>  
// //             <p className="text-gray-600 mb-4 text-center">  
// //               You need to login to apply for this job.  
// //             </p>  
// //             <button  
// //               onClick={() => {  
// //                 setShowLogin(false);  
// //                 // This would typically trigger the login modal from NavBar  
// //                 // For simplicity, we'll just show an alert  
// //                 alert("Please use the login button in the navigation bar");  
// //               }}  
// //               className="w-full rounded-xl py-2 font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-95"  
// //             >  
// //               Go to Login  
// //             </button>  
// //           </div>  
// //         </div>  
// //       )}  
// //     </div>
// //   );
// // }






// // export default function Jobs() {
// //   const [jobs, setJobs] = useState([]);
// //   const [applied, setApplied] = useState({});
// //   const [loading, setLoading] = useState({});
// //   const [searchTerm, setSearchTerm] = useState("");

// //   //  Track auth + resume
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [resume, setResume] = useState(null);

// //   //  Modal state
// //   const [showLogin, setShowLogin] = useState(false);

// //   // load login + resume from localStorage
// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("loggedUser");
// //     if (storedUser) setIsLoggedIn(true);

// //     const storedResume = localStorage.getItem("resume");
// //     if (storedResume) setResume(storedResume);
// //   }, []);

// //   const handleApply = (id) => {
// //     // ✅ Restriction checks
// //     if (!isLoggedIn) {
// //       setShowLogin(true); // show login modal
// //       return;
// //     }
// //     if (!resume) {
// //       alert("⚠ Please upload your resume before applying.");
// //       return;
// //     }

// //     // Apply with delay
// //     setLoading((prev) => ({ ...prev, [id]: true }));
// //     setTimeout(() => {
// //       setApplied((prev) => ({ ...prev, [id]: true }));
// //       setLoading((prev) => ({ ...prev, [id]: false }));
// //     }, 2000);
// //   };

// //   const handleLoginSubmit = (e) => {
// //     e.preventDefault();
// //     // save login state (dummy)
// //     localStorage.setItem("loggedUser", JSON.stringify({ email: "user@test.com" }));
// //     setIsLoggedIn(true);
// //     setShowLogin(false); // close modal
// //   };

// //   useEffect(() => {
// //     const defaultJobs = [
// //       { title: "Frontend Developer", experience: 4, location: "Noida", techStack: "Flutter, Firebase", description: "Assist in recruitment, onboarding, and employee relations." },
// //       { title: "Backend Developer", experience: 4, location: "Noida", techStack: "Java, Spring Boot, MySQL", description: "Responsible for developing and maintaining scalable applications." },
// //       { title: "Full Stack Engineer", experience: 7, location: "Ahmedabad", techStack: "HTML, CSS, JavaScript", description: "Troubleshoot issues and provide technical support." },
// //       { title: "Data Scientist", experience: 8, location: "Kolkata", techStack: "React, Node.js, MongoDB", description: "Create engaging digital content and manage campaigns." },
// //       { title: "Machine Learning Engineer", experience: 7, location: "Chennai", techStack: "Python, Django, PostgreSQL", description: "Assist in recruitment, onboarding, and employee relations." },
// //       { title: "DevOps Engineer", experience: 3, location: "Chennai", techStack: "Unity, C#", description: "Design user-friendly interfaces and improve user experiences." },
// //       { title: "UI/UX Designer", experience: 4, location: "Chennai", techStack: "Angular, .NET Core, SQL Server", description: "Develop APIs and integrate third-party services." },
// //     ];

// //     const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

// //     const jobsWithId = [...defaultJobs, ...savedJobs].map((job, index) => ({
// //       id: `${Date.now()}-${index}-${Math.random()} `,
// //       ...job,
// //     }));

// //     setJobs(jobsWithId);
// //   }, []);

// //   const SearchedJob = jobs.filter(
// //     (job) =>
// //       job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       job.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       job.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       job.techStack?.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="p-6 relative">
// //       <h2 className="text-3xl font-bold mb-6 text-center">Current Job Openings</h2>
// //       <p className="text-center text-gray-600 mb-6">
// //         Explore a wide range of career opportunities tailored to your skills and experience.
// //       </p>

// //       {/*  Search Bar */}
// //       <div className="max-w-xl mx-auto mb-10">
// //         <input
// //           type="text"
// //           placeholder="Search job title..."
// //           className="bg-white w-full px-5 py-3 rounded-2xl shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-50 outline-none"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />
// //       </div>

// //       {/* Jobs Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {SearchedJob.map((job) => (
// //           <div
// //             key={job.id}
// //             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between p-6"
// //           >
// //             <div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">{job.title}</h3>

// //               <p className="text-gray-600 mb-3">
// //                 <span className="font-semibold text-gray-800">Location:</span> {job.location}
// //               </p>

// //               <p className="text-gray-600 mb-3">
// //                 <span className="font-semibold text-gray-800">Experience:</span> {job.experience}
// //               </p>

// //               <p className="text-gray-600 mb-3">
// //                 <span className="font-semibold text-gray-800">Required Technologies:</span>{" "}
// //                 {job.techStack}
// //               </p>

// //               <p className="text-gray-500 mb-6 line-clamp-3">{job.description}</p>
// //             </div>

// //             <button
// //               onClick={() => handleApply(job.id)}
// //               className={`w-full py-2 rounded-3xl text-white font-semibold transition duration-200 ${
// //                 applied[job.id]
// //                   ? "bg-emerald-600 cursor-not-allowed"
// //                   : "bg-indigo-600 hover:bg-indigo-700"
// //               }`}
// //               disabled={applied[job.id] || loading[job.id]}
// //             >
// //               {loading[job.id]
// //                 ? "Applying..."
// //                 : applied[job.id]
// //                 ? "Applied"
// //                 : "Apply Now"}
// //             </button>
// //           </div>
// //         ))}
// //       </div>

// //       {/*  Login Modal */}
// //       {showLogin && (

// //         <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-500">

// //           <form
// //             onSubmit={handleLoginSubmit}
// //             className="bg-white p-6 rounded-lg shadow-xl w-80 text-black">

// //             {/* Title */}
// //             <h2 className="text-3xl font-extrabold text-center text-black mb-4">
// //             Login
// //             </h2>



// //             {/* Email */}
// //             <div>
// //               <label className="block text-gray-700 font-semibold mb-1">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 required
// //                 placeholder="Enter email"
// //                 className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
// //               />
// //             </div>

// //             {/* Password */}
// //             <div>
// //               <label className="block text-gray-700 font-semibold mb-1">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 required
// //                 placeholder="Enter Password"
// //                 className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
// //               />
// //             </div>

// //             {/* Button */}
// //             <button
// //               type="submit"
// //               className="w-full rounded-xl mt-3 py-2 font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-95"
// //             >
// //               Sing up
// //             </button>
// //             <p className="text-sm mt-2 text-center">
// //               Already have an account?{" "}
// //               <span
// //                 onClick={() => {
// //                   setShowLogin(false)
// //                 }}
// //                 className="text-blue-700 cursor-pointer"
// //               >
// //                 Click here
// //               </span>
// //             </p>
// //           </form>

// //         </div>
// //       )}

// //     </div>
// //   );
// // }


// import { useState, useEffect } from "react";
// import { useAuth } from "./AuthContext";

// function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [applied, setApplied] = useState({});
//   const [loading, setLoading] = useState({});
//   const { user, resume, openLogin } = useAuth();

//   const checkAuth = () => {
//     return user && resume;
//   };

//   const handleApply = (id) => {
//     // Check if user is logged in and has resume
//     if (!user) {
//       openLogin();
//       return;
//     }

//     if (!resume) {
//       alert("Please upload your resume before applying for jobs!");
//       return;
//     }

//     setLoading((prev) => ({ ...prev, [id]: true }));

//     setTimeout(() => {    
//       setApplied((prev) => ({ ...prev, [id]: true }));    
//       setLoading((prev) => ({ ...prev, [id]: false }));    
//     }, 3000);
//   };

//   useEffect(() => {
//     const defaultJobs = [
//       // Your 37 jobs here (same as before)
//       { title: "Frontend Developer", experience: 4, location: "Noida", techStack: "Flutter, Firebase", description: "Assist in recruitment, onboarding, and employee relations." },
//       // ... add all the other jobs
//     ];

//     const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];    
//     const jobsWithId = [...defaultJobs, ...savedJobs].map((job, index) => ({    
//       id: `${Date.now()}-${index}-${Math.random()}`,    
//       ...job,    
//     }));    

//     setJobs(jobsWithId);
//   }, []);

//   const [searchTerm, setSearchTerm] = useState("");
//   const SearchedJob = jobs.filter(
//     (job) =>
//       job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.techStack?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">
//         Current Job Openings
//       </h2>
//       <p className="text-center text-gray-600 mb-6">
//         Explore a wide range of career opportunities tailored to your skills and
//         experience.
//       </p>

//       {/* 🔍 Search Bar */}    
//       <div className="max-w-xl mx-auto mb-10">    
//         <input    
//           type="text"    
//           placeholder="Search job title..."    
//           className="bg-white w-full px-5 py-3 rounded-2xl shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-50 outline-none"    
//           value={searchTerm}    
//           onChange={(e) => setSearchTerm(e.target.value)}    
//         />    
//       </div>    

//       {/* Jobs Grid */}    
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">    
//         {SearchedJob.map((job) => (    
//           <div    
//             key={job.id}    
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between p-6"    
//           >    
//             <div>    
//               <h3 className="text-xl font-bold text-gray-900 mb-4">    
//                 {job.title}    
//               </h3>    

//               <p className="text-gray-600 mb-3">    
//                 <span className="font-semibold text-gray-800">Location:</span>{" "}    
//                 {job.location}    
//               </p>    

//               <p className="text-gray-600 mb-3">    
//                 <span className="font-semibold text-gray-800">Experience:</span>{" "}    
//                 {job.experience}    
//               </p>    

//               <p className="text-gray-600 mb-3">    
//                 <span className="font-semibold text-gray-800">    
//                   Required Technologies:    
//                 </span>{" "}    
//                 {job.techStack}    
//               </p>    

//               <p className="text-gray-500 mb-6 line-clamp-3">    
//                 {job.description}    
//               </p>    
//             </div>    

//             <button    
//               onClick={() => handleApply(job.id)}    
//               className={`w-full py-2 rounded-3xl text-white font-semibold transition duration-200 ${applied[job.id]    
//                   ? "bg-emerald-600 cursor-not-allowed"    
//                   : "bg-indigo-600 hover:bg-indigo-700"    
//                 }`}    
//               disabled={applied[job.id] || loading[job.id]}    
//             >    
//               {loading[job.id]    
//                 ? "Applying..."    
//                 : applied[job.id]    
//                   ? "Applied"    
//                   : "Apply Now"}    
//             </button>    
//           </div>    
//         ))}    
//       </div>  
//     </div>
//   );
// }

// export default Jobs;



{/* Jobs Grid */ }
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">    
//   {SearchedJob.map((job) => (    
//     <div    
//       key={job.id}    
//       className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between p-6"    
//     >    
//       <div>    
//         <h3 className="text-xl font-bold text-gray-900 mb-2">    
//           {job.title}    
//         </h3>
//         <p className="text-indigo-600 font-semibold mb-3">
//           {job.company}
//         </p>

//         <p className="text-gray-600 mb-2">    
//           <span className="font-semibold text-gray-800">Location:</span>{" "}    
//           {job.location}    
//         </p>    

//         <p className="text-gray-600 mb-2">    
//           <span className="font-semibold text-gray-800">Experience:</span>{" "}    
//           {job.experience} years
//         </p>    

//         <p className="text-gray-600 mb-3">    
//           <span className="font-semibold text-gray-800">    
//             Technologies:    
//           </span>{" "}    
//           {job.techStack}    
//         </p>    

//         <p className="text-gray-500 mb-6 line-clamp-3">    
//           {job.description}    
//         </p>    
//       </div>    

//       <button    
//         onClick={() => handleApply(job.id)}    
//         className={`w-full py-2 rounded-3xl text-white font-semibold transition duration-200 ${applied[job.id]    
//             ? "bg-emerald-600 cursor-not-allowed"    
//             : "bg-indigo-600 hover:bg-indigo-700"    
//           }`}    
//         disabled={applied[job.id] || loading[job.id]}    
//       >    
//         {loading[job.id]    
//           ? "Applying..."    
//           : applied[job.id]    
//             ? "Applied"    
//             : "Apply Now"}    
//       </button>    
//     </div>    
//   ))}    
// </div> 


import { useState, useEffect, useRef } from "react";
import { useAuth } from "./AuthContext";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [applied, setApplied] = useState({});
  const [loading, setLoading] = useState({});
  const { user, resume, openLogin } = useAuth();
  const canvasRef = useRef(null);

  // Check if user is authenticated and has resume
  const checkAuth = () => {
    return user && resume;
  };

  const handleApply = (id) => {
    // Check if user is logged in and has resume
    if (!user) {
      openLogin();
      return;
    }

    if (!resume) {
      alert("Please upload your resume before applying for jobs!");
      return;
    }

    setLoading((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setApplied((prev) => ({ ...prev, [id]: true }));
      setLoading((prev) => ({ ...prev, [id]: false }));
    }, 3000);
  };

  // Same geometric background animation as Home page
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Modern geometric shapes animation (same as Home page)
    const shapes = [];
    const shapeCount = 20;

    // Create different types of shapes
    for (let i = 0; i < shapeCount; i++) {
      const size = Math.random() * 40 + 20;
      const type = Math.floor(Math.random() * 3); // 0: circle, 1: triangle, 2: square

      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        type: type,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        color: `hsla(${260 + Math.random() * 40}, 70%, 65%, ${Math.random() * 0.3 + 0.1})`,
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw shapes
      shapes.forEach(shape => {
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;

        // Bounce off edges
        if (shape.x < -shape.size || shape.x > canvas.width + shape.size) shape.speedX *= -1;
        if (shape.y < -shape.size || shape.y > canvas.height + shape.size) shape.speedY *= -1;

        // Draw shape
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.fillStyle = shape.color;

        switch (shape.type) {
          case 0: // Circle
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 1: // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -shape.size / 2);
            ctx.lineTo(shape.size / 2, shape.size / 2);
            ctx.lineTo(-shape.size / 2, shape.size / 2);
            ctx.closePath();
            ctx.fill();
            break;
          case 2: // Square
            ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            break;
        }

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Load jobs data
  useEffect(() => {
    const defaultJobs = [
      { title: "Frontend Developer", company: "Tech Solutions Inc", experience: 4, location: "Noida", techStack: "Flutter, Firebase", description: "Assist in recruitment, onboarding, and employee relations." },
      { title: "Backend Developer", company: "Data Systems Ltd", experience: 4, location: "Noida", techStack: "Java, Spring Boot, MySQL", description: "Responsible for developing and maintaining scalable applications." },
      { title: "Full Stack Engineer", company: "Web Innovations", experience: 7, location: "Ahmedabad", techStack: "HTML, CSS, JavaScript", description: "Troubleshoot issues and provide technical support." },
      { title: "Data Scientist", company: "Analytics Pro", experience: 8, location: "Kolkata", techStack: "React, Node.js, MongoDB", description: "Create engaging digital content and manage campaigns." },
      { title: "Machine Learning Engineer", company: "AI Solutions", experience: 7, location: "Chennai", techStack: "Python, Django, PostgreSQL", description: "Assist in recruitment, onboarding, and employee relations." },
      { title: "DevOps Engineer", company: "Cloud Services", experience: 3, location: "Chennai", techStack: "Unity, C#", description: "Design user-friendly interfaces and improve user experiences." },
      { title: "UI/UX Designer", company: "Creative Designs", experience: 4, location: "Chennai", techStack: "Angular, .NET Core, SQL Server", description: "Develop APIs and integrate third-party services." },
      // Additional jobs with company names
      { title: "React Native Developer", company: "Mobile First", experience: 3, location: "Bangalore", techStack: "React Native, JavaScript, Redux", description: "Develop cross-platform mobile applications using React Native." },
      { title: "Python Developer", company: "Python Experts", experience: 5, location: "Hyderabad", techStack: "Python, Django, Flask", description: "Build robust backend systems and APIs using Python frameworks." },
      { title: "iOS Developer", company: "Apple Solutions", experience: 4, location: "Pune", techStack: "Swift, Objective-C, Xcode", description: "Create innovative iOS applications with clean code architecture." },
      { title: "Android Developer", company: "Android Masters", experience: 4, location: "Gurgaon", techStack: "Kotlin, Java, Android SDK", description: "Develop native Android applications with modern architecture patterns." },
      { title: "Cloud Architect", company: "Cloud Transformers", experience: 8, location: "Mumbai", techStack: "AWS, Azure, GCP", description: "Design and implement cloud infrastructure solutions for enterprise clients." },
      { title: "Data Engineer", company: "Data Flow Inc", experience: 5, location: "Delhi", techStack: "Python, SQL, Big Data", description: "Build and maintain data pipelines for analytics and machine learning." },
      { title: "Product Manager", company: "Product Vision", experience: 6, location: "Bangalore", techStack: "Agile, Scrum, Product Strategy", description: "Lead product development from conception to launch and iteration." },
      { title: "QA Automation Engineer", company: "Quality Assurance Ltd", experience: 4, location: "Chennai", techStack: "Selenium, Java, TestNG", description: "Develop automated test scripts and ensure software quality." },
      { title: "Technical Lead", company: "Tech Leadership", experience: 8, location: "Hyderabad", techStack: "Java, Microservices, Architecture", description: "Lead technical teams and make architectural decisions for projects." },
      { title: "Network Engineer", company: "Network Solutions", experience: 5, location: "Noida", techStack: "Cisco, Networking, Security", description: "Design, implement and maintain network infrastructure." },
      { title: "Security Analyst", company: "Cyber Shield", experience: 4, location: "Puen", techStack: "Cybersecurity, SIEM, Pen Testing", description: "Protect systems and networks from cyber threats and vulnerabilities." },
      { title: "Business Analyst", company: "Business Insights", experience: 5, location: "Mumbai", techStack: "SQL, Requirements Gathering, UML", description: "Bridge the gap between IT and business using data analytics." },
      { title: "Scrum Master", company: "Agile Masters", experience: 5, location: "Gurgaon", techStack: "Agile, Scrum, JIRA", description: "Facilitate agile processes and remove impediments for development teams." },
      { title: "Technical Writer", company: "Documentation Pros", experience: 3, location: "Delhi", techStack: "Documentation, Markdown, API Docs", description: "Create clear and comprehensive technical documentation." },
      { title: "Solution Architect", company: "Solution Designers", experience: 9, location: "Bangalore", techStack: "Cloud, Architecture, Design Patterns", description: "Design end-to-end solutions for complex business problems." },
      { title: "Database Administrator", company: "DB Managers", experience: 6, location: "Hyderabad", techStack: "SQL, Oracle, MySQL", description: "Manage, maintain and optimize database performance." },
      { title: "ERP Consultant", company: "ERP Solutions", experience: 5, location: "Pune", techStack: "SAP, Oracle, Business Process", description: "Implement and customize ERP solutions for clients." },
      { title: "AI Research Scientist", company: "AI Research Lab", experience: 7, location: "Bangalore", techStack: "Python, TensorFlow, Research", description: "Conduct research and develop innovative AI algorithms." },
      { title: "Blockchain Developer", company: "Blockchain Innovations", experience: 4, location: "Mumbai", techStack: "Solidity, Ethereum, Smart Contracts", description: "Build decentralized applications and smart contracts." },
      { title: "VR/AR Developer", company: "Immersive Tech", experience: 4, location: "Gurgaon", techStack: "Unity, C#, 3D Modeling", description: "Create immersive virtual and augmented reality experiences." },
      { title: "Embedded Systems Engineer", company: "Embedded Solutions", experience: 5, location: "Bangalore", techStack: "C, C++, Embedded Linux", description: "Develop firmware for embedded devices and IoT products." },
      { title: "Site Reliability Engineer", company: "Reliability Experts", experience: 6, location: "Hyderabad", techStack: "Kubernetes, Docker, DevOps", description: "Ensure system reliability and automate operational processes." },
      { title: "Mobile App Developer", company: "App Creators", experience: 4, location: "Pune", techStack: "Flutter, Dart, Firebase", description: "Create cross-platform mobile applications with Flutter." },
      { title: "Frontend Architect", company: "Frontend Masters", experience: 8, location: "Delhi", techStack: "React, Vue, Architecture", description: "Design and implement scalable frontend architecture." },
      { title: "Backend Architect", company: "Backend Experts", experience: 9, location: "Bangalore", techStack: "Node.js, Microservices, AWS", description: "Design and implement scalable backend systems." },
      { title: "Full Stack Architect", company: "Full Stack Solutions", experience: 10, location: "Mumbai", techStack: "MERN Stack, Cloud, DevOps", description: "Design and implement end-to-end web applications." },
      { title: "Data Science Manager", company: "Data Science Leaders", experience: 8, location: "Hyderabad", techStack: "Python, ML, Team Management", description: "Lead data science teams and deliver AI solutions." },
      { title: "IT Project Manager", company: "Project Masters", experience: 7, location: "Gurgaon", techStack: "PMP, Agile, Budgeting", description: "Manage IT projects from initiation to completion." },
      { title: "UX Researcher", company: "User Experience Lab", experience: 4, location: "Pune", techStack: "User Research, Usability Testing", description: "Conduct user research to inform product design decisions." },
      { title: "Content Strategist", company: "Content Masters", experience: 5, location: "Delhi", techStack: "Content Strategy, SEO, Marketing", description: "Develop content strategies to engage target audiences." }
    ];

    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const jobsWithId = [...defaultJobs, ...savedJobs].map((job, index) => ({
      id: `${Date.now()}-${index}-${Math.random()}`,
      ...job,
    }));

    setJobs(jobsWithId);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  // Improved search function that handles spaces better
  const SearchedJob = jobs.filter((job) => {
    if (!searchTerm.trim()) return true;

    const searchTerms = searchTerm.toLowerCase().split(' ').filter(term => term.length > 0);

    return searchTerms.some(term =>
      job.title?.toLowerCase().includes(term) ||
      job.location?.toLowerCase().includes(term) ||
      job.description?.toLowerCase().includes(term) ||
      job.techStack?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="p-6 relative min-h-screen bg-white">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
      />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Current Job Openings
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Explore a wide range of career opportunities tailored to your skills and
          experience.
        </p>

        {/* Simple Search Filter */}
        <div className="max-w-2xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search jobs by title, location, technology..."
            className="bg-white w-full px-5 py-3 rounded-2xl shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-50 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SearchedJob.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between p-6"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {job.title}
                </h3>
                <p className="text-indigo-600 font-semibold mb-3">
                  {job.company}
                </p>

                <p className="text-gray-600 mb-3">
                  <span className="font-semibold text-gray-800">Location:</span>{" "}
                  {job.location}
                </p>

                <p className="text-gray-600 mb-3">
                  <span className="font-semibold text-gray-800">Experience:</span>{" "}
                  {job.experience} years
                </p>

                <p className="text-gray-600 mb-3">
                  <span className="font-semibold text-gray-800">
                    Required Technologies:
                  </span>{" "}
                  {job.techStack}
                </p>

                <p className="text-gray-500 mb-6 line-clamp-3">
                  {job.description}
                </p>
              </div>

              <button
                onClick={() => handleApply(job.id)}
                className={`w-full py-2 rounded-3xl text-white font-semibold transition duration-200 ${applied[job.id]
                  ? "bg-emerald-600 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                disabled={applied[job.id] || loading[job.id]}
              >
                {loading[job.id]
                  ? "Applying..."
                  : applied[job.id]
                    ? "Applied"
                    : "Apply Now"}
              </button>
            </div>
          ))}
        </div>

        {/* No results message */}
        {SearchedJob.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-md mx-auto">
              <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try different search terms or browse all available positions.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;
