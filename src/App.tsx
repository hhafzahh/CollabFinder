import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Index from './pages';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/talent" element={<div className="p-4"><h1>Find Talent</h1></div>} />
          <Route path="/how-it-works" element={<div className="p-4"><h1>How it Works</h1></div>} />
          <Route path="/about" element={<div className="p-4"><h1>About Page</h1></div>} />
          <Route path="/contact" element={<div className="p-4"><h1>Contact Page</h1></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
