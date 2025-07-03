import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Body from "./Bbody.jsx";
import Footer from "./Footer.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contacts.js";
const App = () => {
  return (
    <div className="bg-black font-[mono] min-h-screen">
      <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
