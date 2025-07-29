import React, { useState } from "react";
import "../styles/style.css"; // main styles
import "../styles/coursecard.css"; // optional
import "../styles/accordion.css"; // add this file for accordion styles

// Reusable Accordion Component
const Accordion = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button className="accordion-btn" onClick={toggleAccordion}>
        {title}
        <span className="indicator">{isOpen ? "−" : "+"}</span>
      </button>
      <div className="accordion-content" style={{ maxHeight: isOpen ? "500px" : "0" }}>
        <ul>
          {items.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MobileDevelopment = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Mobile App Development</h1>
          <p>
            Learn to design, build, and publish Android and iOS mobile applications using industry-leading technologies.
          </p>
          <ul className="features">
            <li>✅ Build apps using Flutter, React Native, Java, and Kotlin</li>
            <li>✅ Understand UI/UX, Firebase integration, and Play Store publishing</li>
            <li>✅ Create real-world mobile apps with project-based learning</li>
          </ul>
          <a href="/contact" className="enroll-btn">Enroll For Demo Class</a>
        </div>
        <div className="hero-image">
          <img src="/images/mobileapp.jpeg" alt="Mobile App Development Course" />
        </div>
        <div className="rating">⭐ 4.6</div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum">
        <h1>Mobile App Development Curriculum</h1>
        <div className="accordion-container">
          {curriculumData.map((section, index) => (
            <Accordion key={index} title={section.title} items={section.topics} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-about">
        <div className="container">
          <h3>Ready to Kickstart Your Career?</h3>
          <a href="/contact" className="btn">Get in Touch</a>
        </div>
      </section>

      {/* Back Link */}
      <a href="/courses" className="go-back-btn">← Go Back to Courses</a>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

// Curriculum Data
const curriculumData = [
  {
    title: "1. Android Development",
    topics: [
      "Java Basics for Android",
      "Setting Up Android Studio",
      "Understanding Activities & Intents",
      "Layout Design using XML",
      "Views, Widgets, RecyclerView",
      "Activity Lifecycle",
      "Fragments and Navigation",
      "Data Storage (Shared Preferences, SQLite, Room)",
      "Connecting with Firebase (Auth, Firestore)",
      "Publishing to Play Store",
    ],
  },
  {
    title: "2. iOS Development",
    topics: [
      "Introduction to Swift",
      "Xcode Setup and Interface Builder",
      "Storyboards and UI Design",
      "ViewControllers and Navigation",
      "Data Persistence and Core Data",
      "Connecting to APIs",
      "App Signing and App Store Deployment",
    ],
  },
  {
    title: "3. Flutter Framework",
    topics: [
      "Dart Language Fundamentals",
      "Flutter Setup and Hot Reload",
      "Widgets, Layouts, and Styling",
      "State Management (Provider, setState)",
      "Navigation and Routing",
      "Forms, Validation, and Input",
      "Integration with REST APIs",
      "Firebase Authentication",
      "Push Notifications with Firebase",
      "Deployment for Android & iOS",
    ],
  },
  {
    title: "4. React Native",
    topics: [
      "React Native Setup and Expo",
      "JSX and Component Structure",
      "Core Components and Layouts",
      "Navigation (React Navigation)",
      "State Management with Hooks and Redux",
      "Fetching Data from APIs",
      "Form Handling and Validation",
      "Device Integration (Camera, Location)",
      "Firebase Integration",
      "Publishing to Play Store and App Store",
    ],
  },
];

export default MobileDevelopment;
