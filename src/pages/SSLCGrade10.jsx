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

const SSLCGrade10 = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>📘 SSLC / Grade 10 Courses</h1>
          <p>
            Prepare confidently for your board exams with our Grade 10/SSLC coaching program. Tailored classes, exam techniques, and personal mentoring for academic success.
          </p>
          <ul className="features">
            <li>✅ All Subjects Covered</li>
            <li>✅ Individual Attention & Worksheets</li>
            <li>✅ Board Exam Oriented Practice</li>
          </ul>
          <a href="/contact" className="enroll-btn">Book Free Demo</a>
        </div>
        <div className="hero-image">
          <img src="/images/sslc.jpeg" alt="SSLC Coaching" />
        </div>
        <div className="rating">⭐ 4.6</div>
      </section>

      <section className="curriculum">
        <h1>Course Curriculum</h1>
        <div className="accordion-container">
          <Accordion title="1. Mathematics">
            <ul>
              <li>Mathematics (KSEEB / CBSE / ICSE)</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>English, Kannada, Hindi</li>
            </ul>
          </Accordion>

          <Accordion title="2. Science (Physics, Chemistry, Biology)">
            <ul>
              <li>Model Question Paper Practice</li>
              <li>Weekly Mock Tests</li>
              <li>Handwriting & Time Management</li>
              <li>Common Mistakes & Corrections</li>
            </ul>
          </Accordion>

          <Accordion title="3. Social Science">
            <ul>
              <li>Regular Parent-Teacher Updates</li>
              <li>Goal Setting for Final Exams</li>
              <li>Confidence Building Activities</li>
              <li>Progress Reports</li>
            </ul>
          </Accordion>
           <Accordion title="4.English & Other Languages">
            <ul>
              <li>Regular Parent-Teacher Updates</li>
              <li>Goal Setting for Final Exams</li>
              <li>Confidence Building Activities</li>
              <li>Progress Reports</li>
            </ul>
          </Accordion>
           <Accordion title="5. IT Basics & Computer Fundamentals">
            <ul>
              <li>Regular Parent-Teacher Updates</li>
              <li>Goal Setting for Final Exams</li>
              <li>Confidence Building Activities</li>
              <li>Progress Reports</li>
            </ul>
          </Accordion>
           <Accordion title="6. Introduction to Artificial Intelligence">
            <ul>
              <li>Regular Parent-Teacher Updates</li>
              <li>Goal Setting for Final Exams</li>
              <li>Confidence Building Activities</li>
              <li>Progress Reports</li>
            </ul>
          </Accordion>
        </div>
      </section>

      <section className="cta-about">
        <div className="container">
          <h3>Score More in Board Exams – Enroll Now!</h3>
          <a href="/contact" className="btn">Get Started</a>
        </div>
      </section>

      <a href="/courses" className="go-back-btn">← Go Back to Courses</a>

      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default SSLCGrade10;
