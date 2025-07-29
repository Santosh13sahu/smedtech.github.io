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

const InterviewClearing = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>🧾 Interview Clearing Courses</h1>
          <p>
            Master the art of cracking interviews with confidence, preparation strategies, and real-time practice sessions tailored for job seekers and freshers.
          </p>
          <ul className="features">
            <li>✅ HR + Technical Interview Prep</li>
            <li>✅ Mock Interviews & Feedback</li>
            <li>✅ Resume & LinkedIn Optimization</li>
          </ul>
          <a href="/contact" className="enroll-btn">Enroll For Demo Class</a>
        </div>
        <div className="hero-image">
          <img src="/images/interview.jpeg" alt="Interview Coaching" />
        </div>
        <div className="rating">⭐ 4.8</div>
      </section>

      <section className="curriculum">
        <h1>Course Curriculum</h1>
        <div className="accordion-container">
          <Accordion title="1. Resume Deep-dive">
            <ul>
              <li>Understanding interview types</li>
              <li>Body language & presentation</li>
              <li>Common questions and how to answer</li>
              <li>Handling gaps or low marks</li>
            </ul>
          </Accordion>

          <Accordion title="2. Mock Interviews (HR & Technical)">
            <ul>
              <li>Writing targeted resumes</li>
              <li>Formatting for ATS systems</li>
              <li>Optimizing LinkedIn profiles</li>
              <li>Professional branding tips</li>
            </ul>
          </Accordion>

          <Accordion title="3. Aptitude Test Preparation">
            <ul>
              <li>HR + Technical mock rounds</li>
              <li>Feedback & improvement plans</li>
              <li>Communication confidence building</li>
              <li>Role-specific Q&A practice</li>
            </ul>
          </Accordion>

              <Accordion title="4.  Behavioral Questions (STAR)n">
            <ul>
              <li>HR + Technical mock rounds</li>
              <li>Feedback & improvement plans</li>
              <li>Communication confidence building</li>
              <li>Role-specific Q&A practice</li>
            </ul>
          </Accordion>
              <Accordion title="5. Group Discussions">
            <ul>
              <li>HR + Technical mock rounds</li>
              <li>Feedback & improvement plans</li>
              <li>Communication confidence building</li>
              <li>Role-specific Q&A practice</li>
            </ul>
          </Accordion>
              <Accordion title="6. Stress & Negotiation Handling">
            <ul>
              <li>HR + Technical mock rounds</li>
              <li>Feedback & improvement plans</li>
              <li>Communication confidence building</li>
              <li>Role-specific Q&A practice</li>
            </ul>
          </Accordion>
            <Accordion title="7. Introduction to Artificial Intelligence">
            <ul>
              <li>HR + Technical mock rounds</li>
              <li>Feedback & improvement plans</li>
              <li>Communication confidence building</li>
              <li>Role-specific Q&A practice</li>
            </ul>
          </Accordion>
   
        </div>
      </section>

      <section className="cta-about">
        <div className="container">
          <h3>Get Ready to Ace Your Next Interview</h3>
          <a href="/contact" className="btn">Book a Free Practice Session</a>
        </div>
      </section>

      <a href="/courses" className="go-back-btn">← Go Back to Courses</a>

      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default InterviewClearing;
