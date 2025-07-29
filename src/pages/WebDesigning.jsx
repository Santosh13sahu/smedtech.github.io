import React, { useRef, useState } from "react";
import "../styles/style.css";
import "../styles/coursecard.css";
import "../styles/accordion.css"; // Add this CSS file for accordion styles

const WebDesigning = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Web Designing & Frontend Development</h1>
          <p>
            Master frontend technologies and responsive web design to build
            beautiful, user-friendly websites and web apps.
          </p>
          <ul className="features">
            <li>✅ HTML, CSS, Bootstrap, JavaScript, React Basics</li>
            <li>✅ Portfolio Projects + UI/UX Practices</li>
            <li>✅ Interview Preparation & Job Assistance</li>
          </ul>
          <a href="/contact" className="enroll-btn">
            Enroll For Demo Class
          </a>
        </div>
        <div className="hero-image">
          <img src="/images/frontend.jpeg" alt="Web Designing Course" />
        </div>
        <div className="rating">⭐ 4.7</div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum">
        <h1>Web Designing & Frontend Curriculum</h1>
        <div className="accordion-container">
          {curriculumData.map((section, i) => {
            const ref = useRef();
            const isOpen = openIndex === i;

            return (
              <div className="accordion-item" key={i}>
                <button
                  className="accordion-btn"
                  onClick={() => toggleAccordion(i)}
                >
                  {section.title}
                </button>
                <div
                  className="accordion-content"
                  ref={ref}
                  style={{
                    maxHeight: isOpen ? `${ref.current?.scrollHeight}px` : "0px",
                  }}
                >
                  <ul>
                    {section.topics.map((topic, j) => (
                      <li key={j}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-about">
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

// Curriculum Data (unchanged)

const curriculumData = [
  {
    title: "1. HTML Fundamentals",
    topics: [
      "HTML - Introduction",
      "HTML - Creating a Basic Webpage",
      "HTML - Understanding the DOCTYPE",
      "HTML - Headings and Paragraphs",
      "HTML - Formatting Text",
      "HTML - Adding Links",
      "HTML - Adding Images",
      "HTML - Lists: Ordered & Unordered",
      "HTML - Tables",
      "HTML - Forms and Input Fields",
      "HTML - Input Field Attributes",
      "HTML - Buttons and Submit Actions",
      "HTML - Semantic Elements",
      "HTML - div and span Elements",
      "HTML - Iframe Embedding",
      "HTML - Audio and Video Tags",
      "HTML - Adding Meta Tags",
      "HTML - HTML Entities",
      "HTML - Block vs Inline Elements",
      "HTML - Structuring a Full Page Layout",
      "HTML - Project: Build a Resume Page",
      "HTML - Project: Google Home Clone",
      "HTML - Introduction to SEO Tags",
      "HTML - Practice Quiz & Exercises",
    ],
  },
  {
    title: "2. CSS Essentials",
    topics: [
      "CSS - Introduction",
      "CSS - How to use CSS?",
      "CSS - Styling Text",
      "CSS - Adding Borders",
      "CSS - Margin and Padding",
      "CSS - Styling Lists",
      "CSS - Styling Links",
      "CSS - Styling Buttons",
      "CSS - Adding Icons",
      "CSS - Working with Display Values",
      "CSS - Display value: Inline-Block",
      "CSS - Positioning HTML Elements Part-1",
      "CSS - Positioning HTML Elements Part-2",
      "CSS - Handling Content Overflow",
      "CSS - Floating HTML Elements",
      "CSS - Box Model",
      "CSS - Box Sizing",
      "CSS - Adding Shadows",
      "CSS - Combinators Part-1",
      "CSS - Combinators Part-2",
      "CSS - Pseudo Classes Part-1",
      "CSS - Pseudo Classes Part-2",
      "CSS - Pseudo Elements",
      "CSS - Adding Backgrounds",
      "CSS - Gradients",
      "CSS - Handling Text Overflow",
      "CSS - Practice Problem-1: Create Google.com Look-Alike",
      "CSS - Practice Problem-1: Solution",
      "CSS - Introduction to Responsive Web Design",
      "CSS - Viewport",
      "CSS - Dynamic Size",
      "CSS - Introduction to Media Queries",
      "CSS - Responsive Design with Media Queries",
      "CSS - Flex Layout",
      "CSS - Flex Container Properties",
      "CSS - Align Flex Items",
      "CSS - Flex Item Properties",
      "CSS - Design Topbar using Flex",
      "CSS - Responsive Grid using Flex",
      "CSS - Transform Property",
      "CSS - Align Elements using Transform",
      "CSS - Transition Property",
      "CSS - Animation Property",
      "CSS - Rocket Animation",
      "CSS - Grid Layout",
      "CSS - Grid Container & Item Properties",
      "CSS - Final Project Problem",
    ],
  },
  {
    title: "3. Bootstrap Framework",
    topics: [
      "Bootstrap - Introduction",
      "Bootstrap - Environment Setup",
      "Bootstrap - Grid System",
      "Bootstrap - Containers, Rows & Columns",
      "Bootstrap - Typography Utilities",
      "Bootstrap - Backgrounds and Colors",
      "Bootstrap - Buttons and Badges",
      "Bootstrap - Alerts and Progress Bars",
      "Bootstrap - Cards Component",
      "Bootstrap - Modals and Popups",
      "Bootstrap - Carousel",
      "Bootstrap - Forms and Validation",
      "Bootstrap - Navbar and Menus",
      "Bootstrap - Accordion and Collapse",
      "Bootstrap - Icons",
      "Bootstrap - Responsive Design",
      "Bootstrap - Layout Utilities and Flex",
      "Bootstrap - Customizing with CSS",
      "Bootstrap - Responsive Landing Page",
      "Bootstrap - Final Project: Portfolio",
    ],
  },
  {
    title: "4. JavaScript Programming",
    topics: [
      "JavaScript - Introduction",
      "Linking JS to HTML",
      "Variables and Datatypes",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Arrow Functions",
      "Arrays & Array Methods",
      "Objects & Object Methods",
      "Events & Event Handling",
      "DOM Introduction",
      "Selecting and Manipulating Elements",
      "Creating and Removing Elements",
      "Event Listeners",
      "Form Validation",
      "Timers",
      "Local Storage",
      "Mini Projects: Counter, To-do List, Calculator",
    ],
  },
  {
    title: "5. ES6 Modern JavaScript",
    topics: [
      'let & const',
      'Template Strings',
      'Arrow Functions',
      'Rest & Spread Operators',
      'Destructuring',
      'Array Functions: map, reduce, filter',
      'find & findIndex',
      'Classes & Inheritance',
      'Callbacks & Promises',
      'Chaining Promises',
    ],
  },
  {
    title: "6. Modern Frontend Tools",
    topics: [
      "VS Code & Extensions",
      "Git & GitHub",
      "Project Structure & Asset Management",
      "SEO & Page Optimization",
    ],
  },
  {
    title: "7. ReactJS Essentials",
    topics: [
      "React Introduction",
      "SPAs vs MPAs",
      "First React App",
      "JSX & Styling",
      "React Components",
      "Props & State",
      "Class Components",
      "setState",
      "Props Functions",
      "Product Page Project",
      "Component Lifecycle",
    ],
  },
  {
    title: "8. Final Projects & Career Prep",
    topics: [
      "Portfolio Website",
      "Responsive Client Project",
      "UI Reviews",
      "Interview Prep + Resume",
    ],
  },
];
export default WebDesigning;
