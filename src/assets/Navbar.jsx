

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// NavBar Component
export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Load logged-in user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!existingUser) {
      alert("Invalid email or password or account not found!");
      return;
    }

    setUser(existingUser);
    setIsLoggedIn(true);
    localStorage.setItem("loggedUser", JSON.stringify(existingUser));
    setShowLogin(false);
  };

  // SIGNUP
  const handleSignup = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!username || !email || !password) {
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      alert("Account with this email already exists!");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedUser", JSON.stringify(newUser));
    setUser(newUser);
    setIsLoggedIn(true);
    setShowSignup(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <>
      <header className="flex justify-between items-center px-8 py-4 bg-indigo-500 text-white">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <div className="bg-white text-blue-700 font-extrabold rounded-full h-10 w-10 flex items-center justify-center">
            JP
          </div>
          <span className="sm:font-extrabold font-bold">Job-Port</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-black font-bold">
          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/post-job">Employers</Link>
          <a href="#">Candidates</a>
        </nav>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <span className="text-1xl md:text-1xl font-bold text-white  
               bg-clip-text   
               text-center md:text-left md:px-0 mt-0.5"> Welcome, {user?.username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Login / Register
            </button>
          )}
        </div>
      </header>

      {/* Login Modal */}
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
            <form
              onSubmit={handleLogin}
              className="text-black"
            >
              <h2 className="text-3xl font-extrabold text-center text-black mb-4">
                Login
              </h2>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl mt-3 py-2 font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-95"
              >
                Login
              </button>
              <p className="text-sm mt-2 text-center">
                Create a new account?{" "}
                <span
                  onClick={() => {
                    setShowLogin(false);
                    setShowSignup(true);
                  }}
                  className="text-blue-700 cursor-pointer"
                >
                  Click here
                </span>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 relative">
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <form
              onSubmit={handleSignup}
              className="text-black"
            >
              <h2 className="text-3xl font-extrabold text-center text-black mb-4">
                Sign up
              </h2>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl mt-3 py-2 font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:opacity-95"
              >
                Sign up
              </button>
              <p className="text-sm mt-2 text-center">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setShowLogin(true);
                    setShowSignup(false);
                  }}
                  className="text-blue-700 cursor-pointer"
                >
                  Click here
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}