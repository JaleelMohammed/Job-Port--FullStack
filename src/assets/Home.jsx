
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Img from '../assets/img2.jpg'



export default function Home() {
  const [resume, setResume] = useState(null);

  // words changing Animation
  const wordPairs = [
    ['Job', 'Portal'],
    ['Career', 'Platform'],
    ['Talent', 'Board'],
    ['Hiring', 'Hub'],
    ['Work', 'World'],
  ];

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(false); // fade out current words
      setTimeout(() => {
        setCurrentPairIndex((prev) => (prev + 1) % wordPairs.length);
        setShowFirst(true); // fade in next words
      }, 800); // transition duration (fade out before switching)
    }, 3000); // time per word pair

    return () => clearInterval(interval);
  }, []);

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResume(file.name);
      alert(`Resume "${file.name}" uploaded successfully!`);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}

      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20  bg-gradient-to-br from-[3A294F] via-[#8D88AA] to-[#F4D6FF] transition-all text-white">

        {/* Left Side Content */}
        <div className="flex flex-col gap-6 max-w-lg text-center md:text-left flex-1 justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Welcome to the <br />
            <span
              className={`inline-block transition-all duration-500 ${showFirst ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                } text-indigo-600`}
            >
              {wordPairs[currentPairIndex][0]}
            </span>{" "}
            <span
              className={`inline-block transition-all duration-500 ${showFirst ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                } text-indigo-600`}
            >
              {wordPairs[currentPairIndex][1]}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800">
            Find Jobs, Employment & Career Opportunities
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/jobs"

              className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-3xl border border-indigo-600 shadow hover:bg-white hover:text-indigo-600 transition duration-300"
            >
              🔍 Browse All Jobs
            </Link>
            <Link
              to="/post-job"

              className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-3xl border border-indigo-600 shadow hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              ✏ Post a Job
            </Link>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User1"
                className="w-10 h-10 rounded-full border-2 border-black"
              />
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="User2"
                className="w-10 h-10 rounded-full border-2 border-black"
              />
              <img
                src="https://randomuser.me/api/portraits/women/46.jpg"
                alt="User3"
                className="w-10 h-10 rounded-full border-2 border-black"
              />
            </div>
            <span className="text-sm text-gray-800">10k+ Candidates</span>
          </div>
          <label className="inline-block  w-90 md:w-50 bg-white text-indigo-600 font-semibold py-2  rounded-3xl border border-indigo-600 shadow hover:bg-indigo-600 hover:text-white transition duration-300 text-center">
            {resume ? `Uploaded: ${resume} ` : "Upload Your Resume"}
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
            />
          </label>

        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 flex-1">
          <img
            src={Img}
            alt="Job Illustration"
            className="w-full h-full object-contain max-w-md rounded-xl hover:scale-105 transition"
          />
        </div>
      </section>

    </div>
  );
}




// import { Link } from "react-router-dom";
// // import { tr } from "framer-motion/client";
// import Navbar from "./Navbar";

// export default function Home() {
//   const [resume, setResume] = useState(null);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   //  words changing Animation

//   const wordPairs = [
//     ['Job', 'Portal'],
//     ['Career', 'Platform'],
//     ['Talent', 'Board'],
//     ['Hiring', 'Hub'],
//     ['Work', 'World'],
//   ];

//   const [currentPairIndex, setCurrentPairIndex] = useState(0);
//   const [showFirst, setShowFirst] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowFirst(false); // fade out current words
//       setTimeout(() => {
//         setCurrentPairIndex((prev) => (prev + 1) % wordPairs.length);
//         setShowFirst(true); // fade in next words
//       }, 800); // transition duration (fade out before switching)
//     }, 3000); // time per word pair

//     return () => clearInterval(interval);
//   }, []);


//   // Load logged-in user on refresh
//   useEffect(() => {
//     const storedUser = localStorage.getItem("loggedUser");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//       setIsLoggedIn(true);
//     }
//   }, []);



//   const handleResumeUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setResume(file.name);
//       alert(`Resume "${file.name}" uploaded successfully!`);
//     }
//   };

//   // LOGIN
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     const existingUser = users.find(
//       (u) => u.email === email && u.password === password
//     );

//     if (!existingUser) {
//       alert("Invalid email or password or account not found!");
//       return;
//     }

//     setUser(existingUser);
//     setIsLoggedIn(true);
//     localStorage.setItem("loggedUser", JSON.stringify(existingUser));
//     setShowLogin(false);
//     // alert(`Welcome back, ${existingUser.username}!`);
//   };

//   // SIGNUP
//   const handleSignup = (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     if (!username || !email || !password) {
//       // alert("Please fill in all fields.");
//       return;
//     }

//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     const userExists = users.some((u) => u.email === email);

//     if (userExists) {
//       alert("Account with this email already exists!");
//       return;
//     }

//     const newUser = { username, email, password };
//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));
//     localStorage.setItem("loggedUser", JSON.stringify(newUser));
//     setUser(newUser);
//     setIsLoggedIn(true);
//     setShowSignup(false);
//     // alert("Account created successfully! You are now logged in.");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("loggedUser");
//     setIsLoggedIn(false);
//     setUser(null);
//   };

//   return (
//     <div className="relative">

// <Navbar
//         user={user}
//         isLoggedIn={isLoggedIn}
//         onLoginClick={() => setShowLogin(true)}
//         onLogout={handleLogout}
//       />

//       {(showLogin || showSignup) && (
//         <div className="fixed inset-0 bg-black/50 z-40"></div>
//       )}

//       {/* Navbar */}
//       {/* <header className="flex justify-between items-center px-8 py-4 bg-indigo-500 text-white">
//         <div className="text-2xl font-bold flex items-center gap-2">
//           <div className="bg-white text-blue-700 font-extrabold rounded-full h-10 w-10 flex items-center justify-center">
//             JP
//           </div>
//           <span className="sm:font-extrabold font-bold">Job-Port</span>
//         </div>
//         <nav className="hidden md:flex gap-6 text-black font-bold">
//           <a href="#">Home</a>
//           <a href="#">Find Jobs</a>
//           <a href="#">Employers</a>
//           <a href="#">Candidates</a>
          
//         </nav>
//         <div className="flex items-center gap-4">
//           {isLoggedIn ? (
//             <div className="flex items-center gap-2">
//               <span className="text-1xl md:text-1xl font-bold text-white
//                bg-clip-text 
//                text-center md:text-left md:px-0 mt-0.5"> Welcome, {user?.username}</span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={() => setShowLogin(true)}
//               className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-transform duration-300 ease-in-out"
//             >
//               Login / Register
//             </button>
//           )}
//         </div>
//       </header> */}

//       {/* Hero Section */}

      // <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20  bg-gradient-to-br from-[3A294F] via-[#8D88AA] to-[#F4D6FF] transition-all text-white">

      //   {/* Left Side Content */}
      //   <div className="flex flex-col gap-6 max-w-lg text-center md:text-left flex-1 justify-center">
      //     <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
      //       Welcome to the <br />
      //       <span
      //         className={`inline-block transition-all duration-500 ${showFirst ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      //           } text-indigo-600`}
      //       >
      //         {wordPairs[currentPairIndex][0]}
      //       </span>{" "}
      //       <span
      //         className={`inline-block transition-all duration-500 ${showFirst ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      //           } text-indigo-600`}
      //       >
      //         {wordPairs[currentPairIndex][1]}
      //       </span>
      //     </h1>
      //     <p className="text-lg md:text-xl text-gray-800">
      //       Find Jobs, Employment & Career Opportunities
      //     </p>
      //     <div className="flex flex-wrap gap-4">
      //       <Link
      //         to="/jobs"

      //         className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-3xl border border-indigo-600 shadow hover:bg-white hover:text-indigo-600 transition duration-300"
      //       >
      //         🔍 Browse All Jobs
      //       </Link>
      //       <Link
      //         to="/post-job"

      //         className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-3xl border border-indigo-600 shadow hover:bg-indigo-600 hover:text-white transition duration-300"
      //       >
      //         ✏ Post a Job
      //       </Link>
      //     </div>
      //     <div className="flex items-center gap-4 justify-center md:justify-start">
      //       <div className="flex -space-x-2">
      //         <img
      //           src="https://randomuser.me/api/portraits/women/44.jpg"
      //           alt="User1"
      //           className="w-10 h-10 rounded-full border-2 border-black"
      //         />
      //         <img
      //           src="https://randomuser.me/api/portraits/men/45.jpg"
      //           alt="User2"
      //           className="w-10 h-10 rounded-full border-2 border-black"
      //         />
      //         <img
      //           src="https://randomuser.me/api/portraits/women/46.jpg"
      //           alt="User3"
      //           className="w-10 h-10 rounded-full border-2 border-black"
      //         />
      //       </div>
      //       <span className="text-sm text-gray-800">10k+ Candidates</span>
      //     </div>
      //     <label className="inline-block  w-90 md:w-50 bg-white text-indigo-600 font-semibold py-2  rounded-3xl border border-indigo-600 shadow hover:bg-indigo-600 hover:text-white transition duration-300 text-center">
      //       {resume ? `Uploaded: ${resume} ` : "Upload Your Resume"}
      //       <input
      //         type="file"
      //         className="hidden"
      //         accept=".pdf,.doc,.docx"
      //         onChange={handleResumeUpload}
      //       />
      //     </label>

      //   </div>

      //   {/* Right Side Image */}
      //   <div className="flex justify-center md:justify-end w-full md:w-1/2 flex-1">
      //     <img
      //       src={Img}
      //       alt="Job Illustration"
      //       className="w-full h-full object-contain max-w-md rounded-xl hover:scale-105 transition"
      //     />
      //   </div>
      // </section>

//       {/* Login Modal */}
//       {showLogin && (
//         <div className="fixed inset-0 flex justify-center items-center z-50">
//           <form
//             onSubmit={handleLogin}
//             className="bg-white p-6 rounded-lg shadow-xl w-80 text-black">

//               <span
//               onClick={() => {
//                 setShowLogin(false);
//                 setShowSignup(false);
//               }}
//               className=" cursor-pointer text-black font-bold leading-none bg-gray-100  rounded-full h-20 w-20 "
//             >
//               X
//               </span>
//             {/* Title */}
//             <h2 className="text-3xl font-extrabold text-center text-black mb-4">
//               Login
//             </h2>
//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
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
//                 placeholder="Enter Password"
//                 className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
//               />
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full rounded-xl mt-3 py-2 font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-95"
//             >
//               Login
//             </button>
//             <p className="text-sm mt-2 text-center">
//               Create a new account?{" "}
//               <span
//                 onClick={() => {
//                   setShowLogin(false);
//                   setShowSignup(true);
//                 }}
//                 className="text-blue-700 cursor-pointer"
//               >
//                 Click here
//               </span>
//             </p>
            

//           </form>
//         </div>
//       )}

//       {/* Signup Modal */}
//       {showSignup && (
//         <div className="fixed inset-0 flex justify-center items-center z-50">
//           <form
//             onSubmit={handleSignup}
//             className="bg-white p-6 rounded-lg shadow-xl w-80 text-black">

//             {/* Title */}
//             <h2 className="text-3xl font-extrabold text-center text-black mb-4">
//               Sign up
//             </h2>

//             {/* Username */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-1">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Enter username"
//                 className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 font-semibold mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
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
//                 placeholder="Enter Password"
//                 className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
//               />
//             </div>

//               {/* resume adde */}
//              <label className="inline-block mt-4 w-90 md:w-67 bg-white text-indigo-600 font-semibold py-2  rounded-xl border border-indigo-600 shadow hover:bg-indigo-600 hover:text-white transition duration-300 text-center">
//             {resume ? `Uploaded: ${resume} ` : "Upload Your Resume"}
//             <input
//               type="file"
//               className="hidden"
//               accept=".pdf,.doc,.docx"
//               onChange={handleResumeUpload}
//             />
//           </label>

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
//                   setShowLogin(true);
//                   setShowSignup(false);
//                 }}
//                 className="text-blue-700 cursor-pointer"
//               >
//                 Click here
//               </span>
//             </p>
//           </form>

//         </div>
//       )}


//     </div>
//   );
// }