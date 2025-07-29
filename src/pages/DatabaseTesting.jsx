import React, { useState, useRef, useEffect } from "react";
import "../styles/style.css";
import "../styles/coursecard.css";
import "../styles/accordion.css"; // custom CSS for animation

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
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>▾</span>
      </button>
      <div className="accordion-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

const DatabaseTesting = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Database & Software Testing</h1>
          <p>
            Learn backend databases and how to test applications using both manual and automation tools effectively.
          </p>
          <ul className="features">
            <li>✅ SQL, MySQL, MongoDB for backend data management</li>
            <li>✅ Manual Testing, Automation with Selenium, JUnit, Postman</li>
            <li>✅ Learn test case design, bug reporting & test cycles</li>
          </ul>
          <a href="/contact" className="enroll-btn">Enroll For Demo Class</a>
        </div>
        <div className="hero-image">
          <img src="/images/database.jpeg" alt="Database and Testing Course" />
        </div>
        <div className="rating">⭐ 4.7</div>
      </section>

      <section className="curriculum">
        <h1>Database & Testing Curriculum</h1>
        <div className="accordion-container">
          <Accordion title="1. Database (SQL, MySQL, Oracle)">
            <ul>
              <li>Introduction to Databases & RDBMS</li>
              <li>Data Types and Constraints</li>
              <li>SQL Basics – SELECT, INSERT, UPDATE, DELETE</li>
              <li>Filtering and Sorting Data</li>
              <li>Joins (INNER, LEFT, RIGHT, FULL)</li>
              <li>Subqueries and Nested Queries</li>
              <li>Functions – Aggregate & String</li>
              <li>Group By, Having Clauses</li>
              <li>Views and Indexes</li>
              <li>Stored Procedures and Triggers</li>
              <li>MySQL Workbench & phpMyAdmin</li>
              <li>Oracle SQL Developer Introduction</li>
            </ul>
          </Accordion>

          <Accordion title="2. Software Testing (Manual & Automation)">
            <ul>
              <li>Introduction to Software Testing</li>
              <li>SDLC vs STLC</li>
              <li>Types of Testing – Functional & Non-Functional</li>
              <li>Test Plan & Test Strategy</li>
              <li>Test Case Writing & Execution</li>
              <li>Bug Reporting and Defect Life Cycle</li>
              <li>Introduction to Automation Testing</li>
              <li>Selenium WebDriver – Setup & Locators</li>
              <li>TestNG Framework</li>
              <li>JUnit & Assertions</li>
              <li>Automation Script Creation</li>
              <li>Working with Maven & Git</li>
              <li>Overview of CI/CD Tools (Jenkins)</li>
              <li>Introduction to API Testing using Postman</li>
            </ul>
          </Accordion>

          <Accordion title="3. Performance Testing (JMeter)">
            <ul>
              <li>Introduction to Performance Testing</li>
              <li>Types: Load, Stress, Spike, Endurance Testing</li>
              <li>JMeter Installation & Configuration</li>
              <li>Understanding Thread Groups & Samplers</li>
              <li>Creating Test Plans with HTTP Requests</li>
              <li>Assertions, Timers & Logic Controllers</li>
              <li>Load Test Execution & Monitoring</li>
              <li>Listeners and Report Generation</li>
              <li>Integrating JMeter with CI/CD</li>
              <li>Analyzing Results & Bottleneck Identification</li>
            </ul>
          </Accordion>
        </div>
      </section>

      <section className="cta-about">
        <div className="container">
          <h3>Ready to Kickstart Your Career?</h3>
          <a href="/contact" className="btn">Get in Touch</a>
        </div>
      </section>

      <a href="/courses" className="go-back-btn">← Go Back to Courses</a>

      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default DatabaseTesting;
