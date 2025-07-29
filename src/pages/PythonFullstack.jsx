import React, { useRef, useState } from "react";
import "../styles/coursecard.css";
import "../styles/style.css";
import "../styles/accordion.css"; // Make sure this file exists

// Reusable Accordion Component
const Accordion = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef();

  return (
    <div className="accordion-item">
      <button className="accordion-btn" onClick={onToggle}>
        {title}
      </button>
      <div
        className="accordion-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <ul>
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PythonFullstack = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>Python Fullstack Development</h1>
          <p>
            Master Python, Django, REST APIs, and Fullstack Web Development with
            expert-led training and real-time projects.
          </p>
          <ul className="features">
            <li>✅ Python, Django, HTML, CSS, JavaScript, REST API</li>
            <li>✅ Real-time projects, mock interviews & resume building</li>
            <li>✅ Certification & 100% Placement Assistance</li>
          </ul>
          <a href="#" className="enroll-btn">
            Enroll For Demo Class
          </a>
        </div>
        <div className="hero-image">
          <img src="/images/python.jpg" alt="Python Fullstack Course" />
        </div>
        <div className="rating">⭐ 4.6</div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum">
        <h1>Python Fullstack Curriculum</h1>
        <div className="accordion-container">
          {accordionData.map((section, i) => (
            <Accordion
              key={i}
              title={section.title}
              content={section.topics}
              isOpen={openIndex === i}
              onToggle={() => toggleAccordion(i)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-about" data-aos="fade-up">
        <div className="container">
          <h3>Ready to Kickstart Your Career?</h3>
          <a href="/contact" className="btn">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Go Back */}
      <a href="/courses" className="go-back-btn">
        ← Go Back to Courses
      </a>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 EduSite. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Curriculum Data
const accordionData = [
  {
    title: "1. Python Programming",
    topics: [
      "1.1. Introduction to Python",
      "1.2. Introduction to Library Functions",
      "1.3. Datatypes",
      "1.4. Operators",
      "1.5. Input/Output Statements",
      "1.6. Control Statements",
      "1.7. Functions",
      "1.8. Object-Oriented Programming (OOP)",
      "1.9. Comprehensions",
      "1.10. Lambda, Map, Filter",
      "1.11. Decorator, Iterator, Generator",
      "1.12. File Handling",
      "1.13. Error Handling and Exceptions",
      "1.14. Package Architecture",
      "1.15. Regular Expressions",
      "1.16. SQL Connection",
      "1.17. Multi-threading",
      "1.18. Projects",
    ],
  },
  {
    title: "2. Django Framework",
    topics: [
      "2.1. Introduction to Django",
      "2.2. Getting Started with Django",
      "2.3. Views and Templates",
      "2.4. Static Files and Media",
      "2.5. URL Routing and Navigation",
      "2.6. Models and Databases",
      "2.7. Admin Interface",
      "2.8. Forms and Validation",
      "2.9. User Authentication and Authorization",
      "2.10. Restful Web Services",
      "2.11. Advanced Topics (Optional)",
    ],
  },
  {
    title: "3. HTML",
    topics: [
      "3.1. Introduction to HTML",
      "3.2. HTML 5 Basics",
      "3.3. Helper Elements to Structure Web Page",
      "3.4. Anchor and Hyperlinks",
      "3.5. HTML Multimedia and Its Embedding",
      "3.6. HTML Frame",
      "3.7. Advanced Concepts in HTML",
      "3.8. HTML References",
    ],
  },
  {
    title: "4. CSS",
    topics: [
      "4.1. CSS Selectors",
      "4.2. CSS Units",
      "4.3. Typography and Text Styling",
      "4.4. Box Model",
      "4.5. CSS Colours",
      "4.6. CSS Backgrounds",
      "4.7. CSS Layouts",
      "4.8. CSS Animations",
      "4.9. Responsive Web Design",
      "4.10. CSS Frameworks",
      "4.11. CSS List",
      "4.12. CSS Functions",
      "4.13. Specificity",
      "4.14. Z-Index",
      "4.15. CSS Opacity",
      "4.16. CSS Image Sprites",
      "4.17. CSS Entities",
      "4.18. Filter",
    ],
  },
  {
    title: "5. JavaScript",
    topics: [
      "5.1. Introduction to JavaScript",
      "5.2. JS File",
      "5.3. Output Methods",
      "5.4. Variables",
      "5.5. Tokens",
      "5.6. Hoisting",
      "5.7. Operators",
      "5.8. Statements",
      "5.9. Data Types",
      "5.10. Typecasting",
      "5.11. Primitive and Non-Primitive Data Types",
      "5.12. JSON",
      "5.13. Copying in JS",
      "5.14. This Keyword",
      "5.15. Prototype",
      "5.16. Function Prototype Methods",
      "5.17. OOPs",
      "5.18. ES6 Class",
      "5.19. Synchronicity in JS",
      "5.20. Promises",
      "5.21. Browser Storage",
      "5.22. DOM",
      "5.23. DOM Events",
      "5.24. Event Propagation",
    ],
  },
  {
    title: "6. SQL",
    topics: [
      "6.1. Introduction to SQL",
      "6.2. Datatypes",
      "6.3. Constraints",
      "6.4. Overview of SQL Statements",
      "6.5. Data Query Language (DQL)",
      "6.6. Operators",
      "6.7. Functions",
      "6.8. Grouping",
      "6.9. Sorting",
      "6.10. Subquery",
      "6.11. Joins",
      "6.12. Co-Related Subquery",
      "6.13. Data Definition Language (DDL)",
      "6.14. Data Manipulation Language (DML)",
      "6.15. Transaction Control Language (TCL)",
      "6.16. Data Control Language (DCL)",
      "6.17. Normalization",
    ],
  },
];

export default PythonFullstack;
