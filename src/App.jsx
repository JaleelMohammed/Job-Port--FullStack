
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./assets/AuthContext";
import NavBar from "./assets/Navbar";
import Home from "./assets/Home";
import Jobs from "./assets/Jobs";
import PostJob from './assets/PostJob'

// Main App Component
function App() {
  return (
    <AuthProvider>
      {/* <Router> */}
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/post-job" element={<PostJob />} />
          </Routes>
        </div>
      {/* </Router> */}
    </AuthProvider>
  );
}

export default App;
