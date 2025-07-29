import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/style.css";
import Navbar from "../components/Navbar";

// Google Form setup – update these with actual form field names
const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"; // <-- Replace
const ENTRY_FULLNAME = "entry.1234567890"; // <-- Replace
const ENTRY_EMAIL = "entry.2345678901"; // <-- Replace
const ENTRY_PHONE = "entry.3456789012"; // <-- Replace
const ENTRY_COURSE = "entry.4567890123"; // <-- Replace

const coursesData = [
  // ✅ Technical Courses
  {
    icon: "fas fa-laptop-code",
    title: "Java Fullstack Development",
    description: "Master Java, Spring Boot, REST APIs, frontend tech, databases & deployment in one powerful program.",
    gradient: "linear-gradient(to right, #6a11cb, #2575fc)",
    rating: "4.8 (200)",
    stars: 5,
    link: "/javafullstack",
    category: "technical",
  },
  {
    icon: "fab fa-python",
    title: "Python Fullstack Development",
    description: "Learn Python, Django, REST API, React/JS, databases, testing, and deployment in fullstack mode.",
    gradient: "linear-gradient(to right, #f12711, #f5af19)",
    rating: "4.7 (185)",
    stars: 4,
    link: "/pythonfullstack",
    category: "technical",
  },
  {
    icon: "fas fa-code",
    title: "Web Designing & Frontend",
    description: "HTML5, CSS3, JS, Bootstrap, Tailwind, UI/UX, Figma to Live Projects. Build responsive sites.",
    gradient: "linear-gradient(to right, #000428, #004e92)",
    rating: "4.6 (170)",
    stars: 5,
    link: "/webdesigning",
    category: "technical",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile App Development",
    description: "Flutter, React Native, Android SDK, APIs, and app deployment for Android/iOS with real-world projects.",
    gradient: "linear-gradient(to right, #7cbe0b, #31d23e)",
    rating: "4.5 (160)",
    stars: 4,
    link: "/mobiledevelopment",
    category: "technical",
  },
  {
    icon: "fas fa-database",
    title: "Database & Testing",
    description: "SQL, MySQL, Oracle, Manual Testing, Selenium Automation, Test Case Writing & Bug Tracking.",
    gradient: "linear-gradient(to right, #00b09b, #96c93d)",
    rating: "4.4 (145)",
    stars: 4,
    link: "/databasetesting",
    category: "technical",
  },
  {
    icon: "fas fa-network-wired",
    title: "Networking & Security",
    description: "CCNA, Routing, Switching, Firewalls, Linux basics, Network Security & Troubleshooting practices.",
    gradient: "linear-gradient(to right, #43cea2, #185a9d)",
    rating: "4.6 (155)",
    stars: 4,
    link: "/networking",
    category: "technical",
  },

  // ✅ Non-Technical Courses
  {
    icon: "fas fa-briefcase",
    title: "Find and Get Jobs",
    description: "Resume building, job portals, aptitude training, and job placement skills.",
    gradient: "linear-gradient(to right, #2f012eff, #9e4ceaff)",
    rating: "4.8 (95)",
    stars: 5,
    link: "/findjobs",
    category: "non-technical",
  },
  {
    icon: "fas fa-brain",
    title: "Personal Development",
    description: "Boost confidence, time management, leadership, and professional etiquette.",
    gradient: "linear-gradient(to right, #c31432, #240b36)",
    rating: "4.7 (88)",
    stars: 4,
    link: "/personaldevelopment",
    category: "non-technical",
  },
  {
    icon: "fas fa-user-check",
    title: "Interview Clearing Courses",
    description: "Mock interviews, HR questions, technical prep, and soft skill polishing.",
    gradient: "linear-gradient(to right, #061c62ff, #5fb7e6ff)",
    rating: "4.6 (110)",
    stars: 4,
    link: "/interviewprep",
    category: "non-technical",
  },
  {
    icon: "fas fa-school",
    title: " Higher Secondary / PUC Courses",
    description: "Academic coaching for PUC Science, Commerce & Arts – online & offline.",
    gradient: "linear-gradient(to right, #43e97b, #38f9d7)",
    rating: "4.5 (132)",
    stars: 4,
    link: "/puc",
    category: "non-technical",
  },
  {
    icon: "fas fa-book",
    title: " SSLC / Grade 10 Courses",
    description: "Subjects like Maths, Science, English, and Kannada with practice tests.",
    gradient: "linear-gradient(to right, #385705ff, #71e90eff)",
    rating: "4.6 (99)",
    stars: 4,
    link: "/sslc",
    category: "non-technical",
  },
];

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleEnroll = (title) => {
    setSelectedCourse(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse("");
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append(ENTRY_FULLNAME, formData.name);
    data.append(ENTRY_EMAIL, formData.email);
    data.append(ENTRY_PHONE, formData.phone);
    data.append(ENTRY_COURSE, selectedCourse);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    })
      .then(() => {
        alert(`Thank you, ${formData.name}! Enrollment for ${selectedCourse} submitted.`);
        closeModal();
      })
      .catch((err) => {
        console.error("Google Form submission error:", err);
        alert("Something went wrong. Please try again.");
      });
  };

  const renderCourseCard = (course) => (
    <div key={course.title} className="course-card" data-aos="fade-up">
      <div className="course-header" style={{ background: course.gradient }}>
        <i className={course.icon} aria-hidden="true"></i>
        <h3>{course.title}</h3>
      </div>
      <div className="course-body">
        <p>{course.description}</p>
      </div>
      <div className="button-container">
        <button className="button b1" onClick={() => handleEnroll(course.title)}>Enroll Now</button>
        <Link className="button b2" to={course.link}>Know More</Link>
      </div>
      <div className="course-footer">
        <p className="rating">Reviews</p>
        <div className="stars">
          <span className="stars-color">
            {"★".repeat(course.stars)}
            {"☆".repeat(5 - course.stars)}
          </span>
          <span className="rating">{course.rating}</span>
        </div>
      </div>
    </div>
  );

  return (
    <main className="courses-main">
      <Navbar />
      <h1 className="courses-heading">Non-Technical Courses</h1>
      <div className="card-container">
        {coursesData.filter(course => course.category === "non-technical").map(renderCourseCard)}
      </div>
      <h1 className="courses-heading">Technical Courses</h1>
      <div className="card-container">
        {coursesData.filter(course => course.category === "technical").map(renderCourseCard)}
      </div>



      {showModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2 className="modal-title">Enroll in {selectedCourse}</h2>
            <form onSubmit={handleFormSubmit} className="modal-form">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="modal-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="modal-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                className="modal-input"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="text"
                value={selectedCourse}
                readOnly
                className="modal-input readonly"
              />
              <button type="submit" className="modal-submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Courses;
