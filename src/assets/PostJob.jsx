// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function PostJob() {
//   const [title, setTitle] = useState("");
//   const [experience, setExperience] = useState("");
//   const [location, setLocation] = useState("");
//   const [techStack, setTechStack] = useState("");
//   const [description, setDescription] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newJob = {
//       title,
//       experience,
//       location,
//       techStack,
//       description,
//     };

//     // Get existing jobs from localStorage
//     const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

//     // Add new job
//     localStorage.setItem("jobs", JSON.stringify([...savedJobs, newJob]));

//     // Redirect to jobs page
//     navigate("/jobs");
//     alert("Job Posted successfully")
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center  bg-gradiet-to-br from-[3A294F] via-[#8D88AA] to-[#817e82] transition-all p-4">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-sm">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Job Posting Details</h2>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Job Title</label>
//             <input
//               type="text"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Location</label>
//             <input
//               type="text"
//               placeholder="Enter Location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Experience (Years)</label>
//             <input
//               type="number"
//               placeholder="Enter experience"
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Required Technologies</label>
//             <input
//               type="text"
//               placeholder="Enter tech stack"
//               value={techStack}
//               onChange={(e) => setTechStack(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700">Job Description</label>
//             <textarea
//               placeholder="Enter description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
//               rows="4"
//             ></textarea>
//           </div>

//           <div className="md:col-span-2 flex justify-center">
//             <button
//               type="submit"
//               className=" px-25 py-2.5 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-transform duration-300 ease-in-out"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";
import { useAuth } from "./AuthContext";

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    experience: "",
    jobType: "",
    techStack: "",
    description: "",
    companyName: "",
    companyWebsite: ""
  });
  const { user, openLogin } = useAuth();
  const canvasRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user is logged in
    if (!user) {
      openLogin();
      return;
    }

    // Basic validation
    if (!formData.title || !formData.location || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }

    // Save job to localStorage
    const savedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
    const newJob = {
      ...formData,
      id: Date.now().toString(),
      postedDate: new Date().toISOString()
    };

    savedJobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(savedJobs));

    // Reset form
    setFormData({
      title: "",
      location: "",
      experience: "",
      jobType: "",
      techStack: "",
      description: "",
      companyName: "",
      companyWebsite: ""
    });

    alert("Job posted successfully!");
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
    const shapeCount = 15;

    // Create different types of shapes
    for (let i = 0; i < shapeCount; i++) {
      const size = Math.random() * 60 + 40;
      const type = Math.floor(Math.random() * 4); // 0: circle, 1: triangle, 2: square, 3: hexagon

      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        type: type,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        color: `hsla(${260 + Math.random() * 40}, 60%, 60%, ${Math.random() * 0.15 + 0.05})`,
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
          case 3: // Hexagon
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i;
              const x = Math.cos(angle) * shape.size / 2;
              const y = Math.sin(angle) * shape.size / 2;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
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

  return (
    <div className="p-6 relative min-h-screen bg-white">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Post a Job Opening
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {user ? "Reach thousands of qualified candidates with your job posting." : "Please login to post a job opening."}
        </p>

        {!user ? (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
            <svg className="h-16 w-16 text-indigo-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Authentication Required</h3>
            <p className="text-gray-600 mb-6">You need to be logged in to post job openings.</p>
            <button
              onClick={openLogin}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
            >
              Login Now
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g. Senior Frontend Developer"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Bangalore, Remote"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Experience Required *
                  </label>
                  <select
                    name="experience"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select years of experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-8">5-8 years</option>
                    <option value="8+">8+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Job Type *
                  </label>
                  <select
                    name="jobType"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
                    value={formData.jobType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select job type</option>
                    <option value="fulltime">Full-time</option>
                    <option value="parttime">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Required Technologies/Skills *
                </label>
                <input
                  type="text"
                  name="techStack"
                  placeholder="e.g. React, Node.js, MongoDB, AWS"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
                  value={formData.techStack}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Job Description *
                </label>
                <textarea
                  name="description"
                  placeholder="Describe the role, responsibilities, and requirements..."
                  rows="5"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Company Details
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    name="companyEmail"
                    placeholder="Company Email"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
                    value={formData.companyWebsite}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-indigo-600  text-white font-semibold py-3 px-6 rounded-xl hover:bg-indigo-700 transition duration-300"
                >
                  Post Job Opening
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostJob;
