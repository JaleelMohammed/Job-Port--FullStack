import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


 export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [applied, setApplied] = useState({});
  const [loading, setLoading] = useState({});
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const checkAuth = () => {
    const user = localStorage.getItem("loggedUser");
    return !!user;
  };

  const handleApply = (id) => {
    // Check if user is logged in
    if (!checkAuth()) {
      setShowLogin(true);
      return;
    }
    
    setLoading((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {    
      setApplied((prev) => ({ ...prev, [id]: true }));    
      setLoading((prev) => ({ ...prev, [id]: false }));    
    }, 3000);
  };

  useEffect(() => {
    const defaultJobs = [
      { title: "Frontend Developer", experience: 4, location: "Noida", techStack: "Flutter, Firebase", description: "Assist in recruitment, onboarding, and employee relations." },
      { title: "Backend Developer", experience: 4, location: "Noida", techStack: "Java, Spring Boot, MySQL", description: "Responsible for developing and maintaining scalable applications." },
      { title: "Full Stack Engineer", experience: 7, location: "Ahmedabad", techStack: "HTML, CSS, JavaScript", description: "Troubleshoot issues and provide technical support." },
      { title: "Data Scientist", experience: 8, location: "Kolkata", techStack: "React, Node.js, MongoDB", description: "Create engaging digital content and manage campaigns." },
      { title: "Machine Learning Engineer", experience: 7, location: "Chennai", techStack: "Python, Django, PostgreSQL", description: "Assist in recruitment, onboarding, and employee relations." },
      { title: "DevOps Engineer", experience: 3, location: "Chennai", techStack: "Unity, C#", description: "Design user-friendly interfaces and improve user experiences." },
      { title: "UI/UX Designer", experience: 4, location: "Chennai", techStack: "Angular, .NET Core, SQL Server", description: "Develop APIs and integrate third-party services." },
      { title: "React Native Developer", experience: 3, location: "Bangalore", techStack: "React Native, JavaScript, Redux", description: "Develop cross-platform mobile applications using React Native." },
  { title: "Python Developer", experience: 5, location: "Hyderabad", techStack: "Python, Django, Flask", description: "Build robust backend systems and APIs using Python frameworks." },
  { title: "iOS Developer", experience: 4, location: "Pune", techStack: "Swift, Objective-C, Xcode", description: "Create innovative iOS applications with clean code architecture." },
  { title: "Android Developer", experience: 4, location: "Gurgaon", techStack: "Kotlin, Java, Android SDK", description: "Develop native Android applications with modern architecture patterns." },
  { title: "Cloud Architect", experience: 8, location: "Mumbai", techStack: "AWS, Azure, GCP", description: "Design and implement cloud infrastructure solutions for enterprise clients." },
  { title: "Data Engineer", experience: 5, location: "Delhi", techStack: "Python, SQL, Big Data", description: "Build and maintain data pipelines for analytics and machine learning." },
  { title: "Product Manager", experience: 6, location: "Bangalore", techStack: "Agile, Scrum, Product Strategy", description: "Lead product development from conception to launch and iteration." },
  { title: "QA Automation Engineer", experience: 4, location: "Chennai", techStack: "Selenium, Java, TestNG", description: "Develop automated test scripts and ensure software quality." },
  { title: "Technical Lead", experience: 8, location: "Hyderabad", techStack: "Java, Microservices, Architecture", description: "Lead technical teams and make architectural decisions for projects." },
  { title: "Network Engineer", experience: 5, location: "Noida", techStack: "Cisco, Networking, Security", description: "Design, implement and maintain network infrastructure." },
  { title: "Security Analyst", experience: 4, location: "Pune", techStack: "Cybersecurity, SIEM, Pen Testing", description: "Protect systems and networks from cyber threats and vulnerabilities." },
  { title: "Business Analyst", experience: 5, location: "Mumbai", techStack: "SQL, Requirements Gathering, UML", description: "Bridge the gap between IT and business using data analytics." },
  { title: "Scrum Master", experience: 5, location: "Gurgaon", techStack: "Agile, Scrum, JIRA", description: "Facilitate agile processes and remove impediments for development teams." },
  { title: "Technical Writer", experience: 3, location: "Delhi", techStack: "Documentation, Markdown, API Docs", description: "Create clear and comprehensive technical documentation." },
  { title: "Solution Architect", experience: 9, location: "Bangalore", techStack: "Cloud, Architecture, Design Patterns", description: "Design end-to-end solutions for complex business problems." },
  { title: "Database Administrator", experience: 6, location: "Hyderabad", techStack: "SQL, Oracle, MySQL", description: "Manage, maintain and optimize database performance." },
  { title: "ERP Consultant", experience: 5, location: "Pune", techStack: "SAP, Oracle, Business Process", description: "Implement and customize ERP solutions for clients." },
  { title: "AI Research Scientist", experience: 7, location: "Bangalore", techStack: "Python, TensorFlow, Research", description: "Conduct research and develop innovative AI algorithms." },
  { title: "Blockchain Developer", experience: 4, location: "Mumbai", techStack: "Solidity, Ethereum, Smart Contracts", description: "Build decentralized applications and smart contracts." },
  { title: "VR/AR Developer", experience: 4, location: "Gurgaon", techStack: "Unity, C#, 3D Modeling", description: "Create immersive virtual and augmented reality experiences." },
  { title: "Embedded Systems Engineer", experience: 5, location: "Bangalore", techStack: "C, C++, Embedded Linux", description: "Develop firmware for embedded devices and IoT products." },
  { title: "Site Reliability Engineer", experience: 6, location: "Hyderabad", techStack: "Kubernetes, Docker, DevOps", description: "Ensure system reliability and automate operational processes." },
  { title: "Mobile App Developer", experience: 4, location: "Pune", techStack: "Flutter, Dart, Firebase", description: "Create cross-platform mobile applications with Flutter." },
  { title: "Frontend Architect", experience: 8, location: "Delhi", techStack: "React, Vue, Architecture", description: "Design and implement scalable frontend architecture." },
  { title: "Backend Architect", experience: 9, location: "Bangalore", techStack: "Node.js, Microservices, AWS", description: "Design and implement scalable backend systems." },
  { title: "Full Stack Architect", experience: 10, location: "Mumbai", techStack: "MERN Stack, Cloud, DevOps", description: "Design and implement end-to-end web applications." },
  { title: "Data Science Manager", experience: 8, location: "Hyderabad", techStack: "Python, ML, Team Management", description: "Lead data science teams and deliver AI solutions." },
  { title: "IT Project Manager", experience: 7, location: "Gurgaon", techStack: "PMP, Agile, Budgeting", description: "Manage IT projects from initiation to completion." },
  { title: "UX Researcher", experience: 4, location: "Pune", techStack: "User Research, Usability Testing", description: "Conduct user research to inform product design decisions." },
  { title: "Content Strategist", experience: 5, location: "Delhi", techStack: "Content Strategy, SEO, Marketing", description: "Develop content strategies to engage target audiences." }

    ];

    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];    
    const jobsWithId = [...defaultJobs, ...savedJobs].map((job, index) => ({    
      id: `${Date.now()}-${index}-${Math.random()} `,    
      ...job,    
    }));    

    setJobs(jobsWithId);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const SearchedJob = jobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.techStack?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Current Job Openings
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Explore a wide range of career opportunities tailored to your skills and
        experience.
      </p>

      {/* 🔍 Search Bar */}    
      <div className="max-w-xl mx-auto mb-10">    
        <input    
          type="text"    
          placeholder="Search job title..."    
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

              <p className="text-gray-600 mb-3">    
                <span className="font-semibold text-gray-800">Location:</span>{" "}    
                {job.location}    
              </p>    

              <p className="text-gray-600 mb-3">    
                <span className="font-semibold text-gray-800">Experience:</span>{" "}    
                {job.experience}    
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

      {/* Login Modal for Jobs Page */}  
      {showLogin && (  
        <div className="fixed inset-0 flex justify-center items-center z-50">  
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-extrabold text-center text-black mb-4">  
              Login Required  
            </h2>  
            <p className="text-gray-600 mb-4 text-center">  
              You need to login to apply for this job.  
            </p>  
            <button  
              onClick={() => {  
                setShowLogin(false);  
                // This would typically trigger the login modal from NavBar  
                // For simplicity, we'll just show an alert  
                alert("Please use the login button in the navigation bar");  
              }}  
              className="w-full rounded-xl py-2 font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-95"  
            >  
              Go to Login  
            </button>  
          </div>  
        </div>  
      )}  
    </div>
  );
}






// export default function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [applied, setApplied] = useState({});
//   const [loading, setLoading] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");

//   //  Track auth + resume
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [resume, setResume] = useState(null);

//   //  Modal state
//   const [showLogin, setShowLogin] = useState(false);

//   // load login + resume from localStorage
//   useEffect(() => {
//     const storedUser = localStorage.getItem("loggedUser");
//     if (storedUser) setIsLoggedIn(true);

//     const storedResume = localStorage.getItem("resume");
//     if (storedResume) setResume(storedResume);
//   }, []);

//   const handleApply = (id) => {
//     // ✅ Restriction checks
//     if (!isLoggedIn) {
//       setShowLogin(true); // show login modal
//       return;
//     }
//     if (!resume) {
//       alert("⚠ Please upload your resume before applying.");
//       return;
//     }

//     // Apply with delay
//     setLoading((prev) => ({ ...prev, [id]: true }));
//     setTimeout(() => {
//       setApplied((prev) => ({ ...prev, [id]: true }));
//       setLoading((prev) => ({ ...prev, [id]: false }));
//     }, 2000);
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     // save login state (dummy)
//     localStorage.setItem("loggedUser", JSON.stringify({ email: "user@test.com" }));
//     setIsLoggedIn(true);
//     setShowLogin(false); // close modal
//   };

//   useEffect(() => {
//     const defaultJobs = [
//       { title: "Frontend Developer", experience: 4, location: "Noida", techStack: "Flutter, Firebase", description: "Assist in recruitment, onboarding, and employee relations." },
//       { title: "Backend Developer", experience: 4, location: "Noida", techStack: "Java, Spring Boot, MySQL", description: "Responsible for developing and maintaining scalable applications." },
//       { title: "Full Stack Engineer", experience: 7, location: "Ahmedabad", techStack: "HTML, CSS, JavaScript", description: "Troubleshoot issues and provide technical support." },
//       { title: "Data Scientist", experience: 8, location: "Kolkata", techStack: "React, Node.js, MongoDB", description: "Create engaging digital content and manage campaigns." },
//       { title: "Machine Learning Engineer", experience: 7, location: "Chennai", techStack: "Python, Django, PostgreSQL", description: "Assist in recruitment, onboarding, and employee relations." },
//       { title: "DevOps Engineer", experience: 3, location: "Chennai", techStack: "Unity, C#", description: "Design user-friendly interfaces and improve user experiences." },
//       { title: "UI/UX Designer", experience: 4, location: "Chennai", techStack: "Angular, .NET Core, SQL Server", description: "Develop APIs and integrate third-party services." },
//     ];

//     const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

//     const jobsWithId = [...defaultJobs, ...savedJobs].map((job, index) => ({
//       id: `${Date.now()}-${index}-${Math.random()} `,
//       ...job,
//     }));

//     setJobs(jobsWithId);
//   }, []);

//   const SearchedJob = jobs.filter(
//     (job) =>
//       job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.techStack?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-6 relative">
//       <h2 className="text-3xl font-bold mb-6 text-center">Current Job Openings</h2>
//       <p className="text-center text-gray-600 mb-6">
//         Explore a wide range of career opportunities tailored to your skills and experience.
//       </p>

//       {/*  Search Bar */}
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
//               <h3 className="text-xl font-bold text-gray-900 mb-4">{job.title}</h3>

//               <p className="text-gray-600 mb-3">
//                 <span className="font-semibold text-gray-800">Location:</span> {job.location}
//               </p>

//               <p className="text-gray-600 mb-3">
//                 <span className="font-semibold text-gray-800">Experience:</span> {job.experience}
//               </p>

//               <p className="text-gray-600 mb-3">
//                 <span className="font-semibold text-gray-800">Required Technologies:</span>{" "}
//                 {job.techStack}
//               </p>

//               <p className="text-gray-500 mb-6 line-clamp-3">{job.description}</p>
//             </div>

//             <button
//               onClick={() => handleApply(job.id)}
//               className={`w-full py-2 rounded-3xl text-white font-semibold transition duration-200 ${
//                 applied[job.id]
//                   ? "bg-emerald-600 cursor-not-allowed"
//                   : "bg-indigo-600 hover:bg-indigo-700"
//               }`}
//               disabled={applied[job.id] || loading[job.id]}
//             >
//               {loading[job.id]
//                 ? "Applying..."
//                 : applied[job.id]
//                 ? "Applied"
//                 : "Apply Now"}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/*  Login Modal */}
//       {showLogin && (
       
//         <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-500">
        
//           <form
//             onSubmit={handleLoginSubmit}
//             className="bg-white p-6 rounded-lg shadow-xl w-80 text-black">

//             {/* Title */}
//             <h2 className="text-3xl font-extrabold text-center text-black mb-4">
//             Login
//             </h2>

           

//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="Enter email"
//                 className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 required
//                 placeholder="Enter Password"
//                 className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
//               />
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full rounded-xl mt-3 py-2 font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-95"
//             >
//               Sing up
//             </button>
//             <p className="text-sm mt-2 text-center">
//               Already have an account?{" "}
//               <span
//                 onClick={() => {
//                   setShowLogin(false)
//                 }}
//                 className="text-blue-700 cursor-pointer"
//               >
//                 Click here
//               </span>
//             </p>
//           </form>

//         </div>
//       )}
      
//     </div>
//   );
// }