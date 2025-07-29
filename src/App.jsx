import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DatabaseTesting from "./pages/DatabaseTesting";
import JavaFullstack from "./pages/JavaFullstack";
import MobileDevelopment from "./pages/MobileDevelopment";
import Networking from "./pages/Networking";
import PythonFullstack from "./pages/PythonFullstack";
import Courses from "./pages/Courses";
import WebDesigning from "./pages/WebDesigning";
import Experts from "./pages/Experts";
import Testimonials from "./pages/Testimonials";
import FindJobs from "./pages/FindJobs";
import PersonalDevelopment from "./pages/PersonalDevelopment";
import InterviewClearing from "./pages/InterviewClearing";
import PUCCourses from "./pages/PUCCourses";
import SSLCGrade10 from "./pages/SSLCGrade10";
const App = () => {
  return (
    <Router>
      {/* <header className="bg-gradient-to-r from-[#6ea5f1] to-[#11445c] text-white p-4 shadow-md sticky top-0 z-50">
        <nav className="flex space-x-4 justify-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header> */}
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/databasetesting" element={<DatabaseTesting />} />
          <Route path="/javafullstack" element={<JavaFullstack />} />
          <Route path="/mobiledevelopment" element={<MobileDevelopment />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/pythonfullstack" element={<PythonFullstack />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/webdesigning" element={<WebDesigning />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/personaldevelopment" element={<PersonalDevelopment />} />
        <Route path="/interviewprep" element={<InterviewClearing />} />
        <Route path="/puc" element={<PUCCourses />} />
        <Route path="/sslc" element={<SSLCGrade10 />} />
      </Routes>
    </Router>
  );
};

export default App;
