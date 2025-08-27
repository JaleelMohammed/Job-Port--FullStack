
import Img from '../assets/img2.jpg'
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Home() {
  const { resume, updateResume } = useAuth();

  // Modern words changing animation
  const wordPairs = [
    ['Job', 'Portal'],
    ['Career', 'Platform'],
    ['Talent', 'Board'],
    ['Hiring', 'Hub'],
    ['Work', 'World'],
  ];

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [displayText, setDisplayText] = useState({ first: '', second: '' });
  const [animationState, setAnimationState] = useState('typing');
  const animationRef = useRef(null);
  const canvasRef = useRef(null);

  // Modern background animation
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

    // Floating particles animation
    const particles = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(99, 102, 241, ${Math.random() * 0.3 + 0.1})`, // indigo with opacity
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Modern text animation
  useEffect(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }

    const currentPair = wordPairs[currentPairIndex];

    if (animationState === 'typing') {
      // Type first word
      if (displayText.first.length < currentPair[0].length) {
        animationRef.current = setTimeout(() => {
          setDisplayText(prev => ({
            ...prev,
            first: currentPair[0].slice(0, prev.first.length + 1)
          }));
        }, 100);
      }
      // Type second word
      else if (displayText.second.length < currentPair[1].length) {
        animationRef.current = setTimeout(() => {
          setDisplayText(prev => ({
            ...prev,
            second: currentPair[1].slice(0, prev.second.length + 1)
          }));
        }, 100);
      }
      // Finished typing, wait then start deleting
      else {
        animationRef.current = setTimeout(() => {
          setAnimationState('deleting');
        }, 2000);
      }
    }
    else if (animationState === 'deleting') {
      // Delete second word
      if (displayText.second.length > 0) {
        animationRef.current = setTimeout(() => {
          setDisplayText(prev => ({
            ...prev,
            second: prev.second.slice(0, -1)
          }));
        }, 50);
      }
      // Delete first word
      else if (displayText.first.length > 0) {
        animationRef.current = setTimeout(() => {
          setDisplayText(prev => ({
            ...prev,
            first: prev.first.slice(0, -1)
          }));
        }, 50);
      }
      // Finished deleting, move to next pair
      else {
        setCurrentPairIndex((prev) => (prev + 1) % wordPairs.length);
        setAnimationState('typing');
      }
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [displayText, animationState, currentPairIndex]);

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      updateResume(file.name);
      alert(`Resume "${file.name}" uploaded successfully!`);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section with animated background */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 transition-all bg-white text-white overflow-hidden relative ">
        {/* Animated background canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Left Side Content */}
        <div className="flex flex-col gap-6 max-w-lg text-center md:text-left flex-1 justify-center z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Welcome to the <br />
            <span className="text-indigo-600 whitespace-nowrap">
              {displayText.first}
              {(animationState === 'typing' && displayText.first.length < wordPairs[currentPairIndex][0].length) &&
                <span className="animate-pulse text-black"></span>}
              {" "}
              {displayText.second}
              {(animationState === 'typing' && displayText.second.length === wordPairs[currentPairIndex][1].length) &&
                <span className="animate-pulse text-black"></span>}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800">
            Find Jobs, Employment & Career Opportunities
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/jobs"
              className="inline-block bg-indigo-600 font-semibold py-3 px-6 rounded-3xl border border-indigo-600 hover:bg-white text-white  hover:text-indigo-600 transition duration-300 z-10"
            >
              🔍 Browse All Jobs
            </Link>
            <Link
              to="/post-job"
              className="iinline-block b-indigo-600  font-semibold py-3 px-6 rounded-3xl border border-indigo-600 shadow hover:bg-indigo-600 hover:text-white text-indigo-600 transition duration-300 z-10"
            >
              ✏ Post a Job
            </Link>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User1"
                className="w-10 h-10 rounded-full border-1 border-indigo-800"
              />
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="User2"
                className="w-10 h-10 rounded-full border-1 border-indigo-800"
              />
              <img
                src="https://randomuser.me/api/portraits/women/46.jpg"
                alt="User3"
                className="w-10 h-10 rounded-full border-1 border-indigo-800"
              />
            </div>
            <span className="text-sm text-gray-900">10k+ Candidates</span>
          </div>
          <label className="inline-block w-90 md:w-90 bg-white text-indigo-600 font-semibold py-2 rounded-3xl border border-indigo-600 shadow hover:bg-indigo-600 hover:text-white transition duration-300 text-center cursor-pointer z-10">
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
        <div className="flex justify-center md:justify-end w-full md:w-1/2 flex-1 z-10 mt-8 md:mt-0">
          <div className="w-full h-full object-contain max-w-md rounded-xl bg-gray-300 flex items-center justify-center">
            <img
              src={Img}
              alt="Job Illustration"
              className="w-full h-full object-contain max-w-md rounded-xl hover:scale-105 transition"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
