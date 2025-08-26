import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [techStack, setTechStack] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      experience,
      location,
      techStack,
      description,
    };

    // Get existing jobs from localStorage
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // Add new job
    localStorage.setItem("jobs", JSON.stringify([...savedJobs, newJob]));

    // Redirect to jobs page
    navigate("/jobs");
    alert("Job Posted successfully")
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-[3A294F] via-[#8D88AA] to-[#817e82] transition-all p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Job Posting Details</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Experience (Years)</label>
            <input
              type="number"
              placeholder="Enter experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Required Technologies</label>
            <input
              type="text"
              placeholder="Enter tech stack"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              rows="4"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className=" px-25 py-3 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
