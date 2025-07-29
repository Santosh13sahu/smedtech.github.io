// src/components/CareerCourses.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CareerCourses.css';

const nonTechnicalCourses = [
  {
    title: '🎯 Find and Get Jobs',
    subjects: [
      'Career Planning',
      'Resume Writing',
      'Job Portals & Networking',
      'Interview Preparation',
      'Professional Etiquette',
      'Workplace Tools',
      'Introduction to Artificial Intelligence',
    ],
  },
  {
    title: '🧠 Personal Development',
    subjects: [
      'Communication Skills',
      'Time Management',
      'Leadership & Teamwork',
      'Emotional Intelligence',
      'Stress Management',
      'Growth Mindset',
      'Introduction to Artificial Intelligence',
    ],
  },
  {
    title: '🧾 Interview Clearing Courses',
    subjects: [
      'Resume Deep-dive',
      'Mock Interviews (HR & Technical)',
      'Aptitude Test Preparation',
      'Behavioral Questions (STAR)',
      'Group Discussions',
      'Stress & Negotiation Handling',
      'Introduction to Artificial Intelligence',

    ],
  },
  {
    title: '🏫 Higher Secondary / PUC Courses',
    subjects: [
      'Science (PCMB, PCMC)',
      'Commerce (Accountancy, Business Studies, Economics)',
      'Arts (History, Political Science, Sociology)',
      'Mathematics & Statistics',
      'Languages (English, Kannada, Hindi)',
      'Introduction to Artificial Intelligence',

    ],
  },
  {
    title: '📘 SSLC / Grade 10 Courses',
    subjects: [
      'Mathematics',
      'Science (Physics, Chemistry, Biology)',
      'Social Science',
      'English & Other Languages',
      'IT Basics & Computer Fundamentals',
      'Introduction to Artificial Intelligence',

    ],
  },
];

const technicalCourses = [
  {
    title: '☕ JAVA & Python Fullstack',
    subjects: ['Core Java', 'Spring Boot', 'Django', 'REST API', 'React', 'MySQL'],
  },
  {
    title: '🎨 Web Designing & Frontend',
    subjects: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Figma'],
  },
  {
    title: '📱 Mobile App Development',
    subjects: ['Flutter', 'React Native', 'Android Studio', 'iOS Basics'],
  },
  {
    title: '🗄️ Database and Testing',
    subjects: ['SQL', 'MongoDB', 'Junit', 'Selenium', 'Postman'],
  },
  {
    title: '🌐 Networking',
    subjects: ['TCP/IP', 'Routing', 'Switching', 'Firewalls'],
  },
];

const CareerCourses = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleSubjects = (e, subjects) => {
    const existing = e.currentTarget.parentElement.querySelector('.subject-list');
    document.querySelectorAll('.subject-list').forEach((el) => el.remove());
    if (!existing) {
      const ul = document.createElement('ul');
      ul.className = 'subject-list';
      subjects.forEach((subj) => {
        const li = document.createElement('li');
        li.textContent = subj;
        ul.appendChild(li);
      });
      e.currentTarget.parentElement.appendChild(ul);
    }
  };

  return (
    <section className="career-courses container" id="career-courses" data-aos="fade-up">
      <h1 className="heading">Career Courses</h1>
      <div className="course-columns">
        <div className="course-column" data-aos="fade-right">
          <h2>Non-Technical</h2>
          <p>Our non-technical programs develop practical job-ready skills in business, communication, and more.</p>
          <div className="course-list">
            {nonTechnicalCourses.map((course, i) => (
              <div key={i} className="tooltip-wrapper">
                <button className="course-btn" onClick={(e) => toggleSubjects(e, course.subjects)}>
                  {course.title}
                </button>
                <span className="tooltip-text">See course details</span>
              </div>
            ))}
          </div>
        </div>
        <div className="course-column" data-aos="fade-left">
          <h2>Technical</h2>
          <p>Our technical courses cover development, databases, networking, and software engineering skills.</p>
          <div className="course-list">
            {technicalCourses.map((course, i) => (
              <div key={i} className="tooltip-wrapper">
                <button className="course-btn" onClick={(e) => toggleSubjects(e, course.subjects)}>
                  {course.title}
                </button>
                <span className="tooltip-text">See course details</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCourses;
