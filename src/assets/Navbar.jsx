
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function NavBar() {
  const { user, handleLogout, openLogin, resume, updateResume } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      updateResume(file.name);
      alert(`Resume "${file.name}" uploaded successfully!`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 bg-indigo-500 text-white md:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <div className="bg-white text-blue-700 font-extrabold rounded-full h-10 w-10 flex items-center justify-center">
            JP
          </div>
          <span className="sm:font-extrabold font-bold hidden sm:block">Job-Port</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-black font-bold">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/jobs" className="hover:text-white transition-colors">Find Jobs</Link>
          <Link to="/post-job" className="hover:text-white transition-colors">Employers</Link>
          <a href="#" className="hover:text-white transition-colors">Candidates</a>
        </nav>

        {/* Desktop Auth Section - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-1xl font-bold text-white text-center md:text-left md:px-0 mt-0.5">
                Welcome, {user.username}
              </span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r md:hidden from-blue-400  to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700  transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={openLogin}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button - Visible only on small devices */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-2xl font-bold flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <div className="bg-indigo-500 text-white font-extrabold rounded-full h-10 w-10 flex items-center justify-center">
                JP
              </div>
              <span className="font-extrabold">Job-Port</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <Link
              to="/"
              className="block py-4 px-4 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className="block py-4 px-4 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Jobs
            </Link>
            <Link
              to="/post-job"
              className="block py-4 px-4 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Employers
            </Link>
            <a
              href="#"
              className="block py-4 px-4 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Candidates
            </a>
          </nav>

          {/* Auth Section - Only in mobile menu */}
          <div className="pt-6 border-t border-gray-200">
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Welcome, {user.username}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full  bg-red-600 text-white  px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <button
                  onClick={() => {
                    openLogin();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-colors"
                >
                  Login
                </button>
                <label className="block w-full bg-white text-indigo-600 font-semibold py-2 px-4 rounded-xl border border-indigo-300 shadow text-center cursor-pointer hover:bg-indigo-50 transition-colors">
                  {resume ? `Uploaded: ${resume} ` : "Upload Resume"}
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeUpload}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
