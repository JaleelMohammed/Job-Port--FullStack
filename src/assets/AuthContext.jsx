import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [resume, setResume] = useState(null);

  // Load logged-in user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setResume(userData.resume || null);
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

    const updatedUser = { ...existingUser, resume: existingUser.resume || resume };
    setUser(updatedUser);
    setResume(updatedUser.resume || null);
    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
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

    const newUser = { username, email, password, resume };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedUser", JSON.stringify(newUser));
    setUser(newUser);
    setShowSignup(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
    setResume(null);
  };

  const updateResume = (resumeData) => {
    setResume(resumeData);
    if (user) {
      const updatedUser = { ...user, resume: resumeData };
      setUser(updatedUser);
      localStorage.setItem("loggedUser", JSON.stringify(updatedUser));

      // Update in users array too
      let users = JSON.parse(localStorage.getItem("users")) || [];
      const userIndex = users.findIndex(u => u.email === user.email);
      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  };

  const openLogin = () => setShowLogin(true);
  const closeModals = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const value = {
    user,
    resume,
    showLogin,
    showSignup,
    setShowLogin,
    setShowSignup,
    handleLogin,
    handleSignup,
    handleLogout,
    updateResume,
    openLogin,
    closeModals
  };

  return (
    <AuthContext.Provider value={value}>
      {children}

      {/* Overlay when modal is open */}
      {(showLogin || showSignup) && (
        <div className="fixed inset-0 bg-black/50 z-40"></div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 relative">
            <button
              onClick={closeModals}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600 "
                  required
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
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                  required
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
              onClick={closeModals}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                  required
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
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                  required
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
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600"
                  required
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
    </AuthContext.Provider>
  );
};
