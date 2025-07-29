import React, { useState } from "react";
import "../styles/coursecard.css"; // Make sure this file exists and path is correct

const JavaFullstack = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Java Full Stack</h1>
          <p>
            Master Java Full Stack course to build end-to-end web applications
            using Java for backend development, along with frontend technologies.
          </p>
          <ul className="features">
            <li>✅ Frontend (HTML, CSS, JavaScript) & Backend (Java, Spring, SQL)</li>
            <li>✅ State-of-the-art tools & web development methodologies</li>
            <li>✅ Hands-on projects, problem-solving & full-stack deployment skills</li>
          </ul>
          <a href="#" className="enroll-btn">
            Enroll For Demo Class
          </a>
        </div>
        <div className="hero-image">
          <img src="/images/java.jpeg" alt="Java Course" />
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum">
        <h1>Java Full Stack Curriculum</h1>
        <div className="accordion-container">
          {accordionData.map((section, i) => (
            <div className="accordion-item" key={i}>
              <button
                className="accordion-btn"
                onClick={() => toggleAccordion(i)}
              >
                {i + 1}. {section.title}
              </button>
              <div
                className="accordion-content"
                style={{
                  maxHeight: activeIndex === i ? "1000px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <ul>
                  {section.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-about">
        <h3>Ready to Kickstart Your Career?</h3>
        <a href="/contact" className="enroll-btn">
          Get in Touch
        </a>
      </section>

      {/* Back Button */}
      <div style={{ textAlign: "center" }}>
        <a href="/courses" className="go-back-btn">
          ← Go Back to Courses
        </a>
      </div>

      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

const accordionData = [
  {
    title: "Core Java",
    topics: [
      "Intro to Programming language",
      "Variables & Datatypes",
      "Operators & Methods",
      "Decision statement & Looping Statement",
      "Array & 2D Array",
      "Object Oriented Fundamentals",
      "OOPs",
      "Encapsulation & Data Hiding",
      "Is-A relationship Inheritance",
      "Polymorphism",
      "Abstraction",
      "Has-A relationship",
      "Object class",
      "Strings",
      "Exception & Exception Handling",
      "Wrapper class",
      "Collection Framework in Java",
      "Java 8 Feature",
      "Multithreading",
      "Functional programming (Stream API)",
    ],
  },
  {
    title: "JDBC",
    topics: [
      "Introduction to JDBC",
      "Difference between file and database",
      "JDBC API",
      "5 Steps to connect to database",
      "Statement / PreparedStatement",
      "execute, executeUpdate, executeQuery",
      "Batch Execution",
      "Maven CRUD using JDBC",
      "Create Procedure in DB",
      "Create Function in DB",
      "DB metadata",
      "ResultSet metadata",
      "Connection Pool Practical",
    ],
  },
  {
    title: "Hibernate with JPA",
    topics: [
      "Introduction to Hibernate",
      "Entity Class Rules",
      "CRUD Operations Setup",
      "CRUD in Action",
      "Primary / Composite Key",
      "Hibernate Mapping",
      "One-to-one (Uni & Bi)",
      "One-to-many (Uni & Bi)",
      "Many-to-many (Uni & Bi)",
      "Hibernate Annotations",
      "Cascade Types",
      "Generation Types",
      "First Level Cache",
      "Second Level Cache",
      "Hibernate Life Cycle",
    ],
  },
  {
    title: "HTML",
    topics: [
      "Introduction to HTML",
      "HTML5 Basics",
      "Helper Elements",
      "Anchor & Hyperlinks",
      "HTML Multimedia",
      "HTML Frame",
      "Advanced HTML",
      "HTML References",
    ],
  },
  {
    title: "CSS",
    topics: [
      "CSS Selectors",
      "CSS Units",
      "Text Styling",
      "Box Model",
      "Colors & Backgrounds",
      "Layouts & Animations",
      "Responsive Design",
      "Frameworks",
      "List, Table, Functions",
      "Specificity & Z-Index",
      "Opacity, Image Sprites, Filters",
    ],
  },
  {
    title: "JavaScript",
    topics: [
      "Intro, Files, Output",
      "Variables, Tokens",
      "Hoisting, Operators",
      "Data types & Typecasting",
      "JSON, Copying, this",
      "Prototype & Methods",
      "OOP, ES6 Classes",
      "Async, Promises",
      "Browser Storage",
      "DOM, Events",
      "Event Propagation",
    ],
  },
  {
    title: "SQL",
    topics: [
      "Intro to SQL",
      "Datatypes, Constraints",
      "SQL Statements",
      "DQL, DDL, DML",
      "Operators, Functions",
      "Grouping, Sorting, Joins",
      "Subquery, Normalization",
      "Co-Related Subquery",
      "TCL, DCL",
    ],
  },
];

export default JavaFullstack;
