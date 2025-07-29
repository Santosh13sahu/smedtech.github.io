import React, { useState, useRef, useEffect } from "react";
import "../styles/style.css";
import "../styles/coursecard.css";
import "../styles/accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button className="accordion-btn" onClick={() => setIsOpen(!isOpen)}>
        {title}
        {/* <span className={`accordion-icon ${isOpen ? "open" : ""}`}>▾</span> */}
      </button>
      {/* <div className="accordion-content" ref={contentRef}>
        {children}
      </div> */}
    </div>
  );
};

const PUCCourses = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>🏫 Higher Secondary / PUC Courses</h1>
          <p>
            Strengthen your foundation in Science, Commerce, or Arts. Our expert faculty provides support, guidance, and exam-focused coaching to help you score better and plan your future.
          </p>
          <ul className="features">
            <li>✅ Expert Faculty for Science, Commerce, Arts</li>
            <li>✅ Crash Courses + Regular Coaching</li>
            <li>✅ CET, NEET, and Career Counselling</li>
          </ul>
          <a href="/contact" className="enroll-btn">Book Free Counseling</a>
        </div>
        <div className="hero-image">
          <img src="/images/puc.jpeg" alt="PUC Coaching" />
        </div>
        <div className="rating">⭐ 4.7</div>
      </section>

      <section className="curriculum">
        <h1>Course Curriculum</h1>
        <div className="accordion-container">
          <Accordion title="1. Science (PCMB, PCMC)">
            <ul>
              <li>Physics, Chemistry, Maths, Biology</li>
              <li>Accountancy, Economics, Business Studies</li>
              <li>History, Political Science, Sociology</li>
              <li>English, Kannada, Hindi</li>
            </ul>
          </Accordion>

          <Accordion title="2. Commerce (Accountancy, Business Studies, Economics)">
            <ul>
              <li>Chapter-wise MCQs & Solving Techniques</li>
              <li>Last 10-Year Paper Practice</li>
              <li>Weekly tests and full-length exams</li>
              <li>Model answers & writing improvement</li>
            </ul>
          </Accordion>

          <Accordion title="3. Arts (History, Political Science, Sociology)">
            <ul>
              <li>CET/NEET coaching options</li>
              <li>Career guidance for higher education</li>
              <li>Time management & stress management</li>
              <li>Parent-teacher progress meetings</li>
            </ul>
          </Accordion>
            <Accordion title="4.Mathematics & Statistics">
            <ul>
              <li>CET/NEET coaching options</li>
              <li>Career guidance for higher education</li>
              <li>Time management & stress management</li>
              <li>Parent-teacher progress meetings</li>
            </ul>
          </Accordion>
            <Accordion title="5.Languages (English, Kannada, Hindi)">
            <ul>
              <li>CET/NEET coaching options</li>
              <li>Career guidance for higher education</li>
              <li>Time management & stress management</li>
              <li>Parent-teacher progress meetings</li>
            </ul>
          </Accordion>
            <Accordion title="6. Introduction to Artificial Intelligence">
            <ul>
              <li>CET/NEET coaching options</li>
              <li>Career guidance for higher education</li>
              <li>Time management & stress management</li>
              <li>Parent-teacher progress meetings</li>
            </ul>
          </Accordion>
        </div>
      </section>

      <section className="cta-about">
        <div className="container">
          <h3>Start Scoring High in PUC – Join Today!</h3>
          <a href="/contact" className="btn">Talk to a Counselor</a>
        </div>
      </section>

      <a href="/courses" className="go-back-btn">← Go Back to Courses</a>

      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default PUCCourses;
