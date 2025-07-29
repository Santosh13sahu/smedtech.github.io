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

const PersonalDevelopment = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>🧠 Personal Development</h1>
          <p>
            Develop essential life and career skills that enhance your confidence, productivity, communication, and emotional intelligence.
          </p>
          <ul className="features">
            <li>✅ Goal Setting & Productivity</li>
            <li>✅ Confidence & Mindset Building</li>
            <li>✅ Public Speaking & Communication</li>
          </ul>
          <a href="/contact" className="enroll-btn">Enroll For Demo Class</a>
        </div>
        <div className="hero-image">
          <img src="/images/personaldev.jpeg" alt="Personal Development" />
        </div>
        <div className="rating">⭐ 4.9</div>
      </section>


      <section className="curriculum">
        <h1>Course Curriculum</h1>
        <div className="accordion-container">
          <Accordion title="1. Communication Skills">
            <ul>
              <li>Identifying your strengths & areas of improvement</li>
              <li>Vision boarding and life planning</li>
              <li>Setting achievable SMART goals</li>
              <li>Time management techniques</li>
            </ul>
          </Accordion>

          <Accordion title="2.Time Management">
            <ul>
              <li>Verbal & non-verbal communication</li>
              <li>Effective listening and assertiveness</li>
              <li>Practicing stage presence</li>
              <li>Giving presentations with impact</li>
            </ul>
          </Accordion>

          <Accordion title="3. Emotional Intelligence & Mindset">
            <ul>
              <li>Self-awareness and control</li>
              <li>Empathy and relationship building</li>
              <li>Confidence and positive self-talk</li>
              <li>Stress management & resilience</li>
            </ul>
          </Accordion>
            <Accordion title="4. Stress Management">
            <ul>
              <li>Self-awareness and control</li>
              <li>Empathy and relationship building</li>
              <li>Confidence and positive self-talk</li>
              <li>Stress management & resilience</li>
            </ul>
          </Accordion>
            <Accordion title="5. Growth Mindsett">
            <ul>
              <li>Self-awareness and control</li>
              <li>Empathy and relationship building</li>
              <li>Confidence and positive self-talk</li>
              <li>Stress management & resilience</li>
            </ul>
          </Accordion>
            <Accordion title="6. Introduction to Artificial Intelligence">
            <ul>
              <li>Self-awareness and control</li>
              <li>Empathy and relationship building</li>
              <li>Confidence and positive self-talk</li>
              <li>Stress management & resilience</li>
            </ul>
          </Accordion>
          

        </div>
      </section>

      <section className="cta-about">
        <div className="container">
          <h3>Start Transforming Yourself Today</h3>
          <a href="/contact" className="btn">Join the Journey</a>
        </div>
      </section>

      <a href="/courses" className="go-back-btn">← Go Back to Courses</a>

      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default PersonalDevelopment;
