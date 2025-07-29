import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/style.css";
import Navbar from "../components/Navbar";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* Navbar */}
      {/* <header className="navbar">
        <div className="logo">
          <a href="/">
            <img src="/images/sm-logo.png" alt="SM Logo" />
          </a>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/experts">Experts</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
          </ul>
        </nav>
      </header> */}

      <Navbar />



      {/* About Section */}
      <section className="about-section" data-aos="fade-left">
        <div className="container about-container">
          <div className="about-image">
            <img src="/images/about.png" alt="About SM Management" />
          </div>
          <div className="about-content">
            <h2>
              <span className="highlight">ABOUT US</span>
            </h2>
            <p>
              We provide career services that include resume building, interview preparation, job fairs, and
              industry networking. Our aim is to make students job-ready through hands-on training and
              personalized guidance.
            </p>
            <h3>Our Core Strengths</h3>
            <div className="about-lists">
              <ul className="list-column">
                <li><i className="fas fa-check"></i> Training for Excellence.</li>
                <li><i className="fas fa-check"></i> Empowering Growth, Ensuring Quality.</li>
                <li><i className="fas fa-check"></i> Striving for Perfection, Achieving Success.</li>
                <li><i className="fas fa-check"></i> The Standard of Excellence in Training.</li>
                <li><i className="fas fa-check"></i> Building Skills, Defining Quality.</li>
                <li><i className="fas fa-check"></i> Empowering You for Tomorrow.</li>
                <li><i className="fas fa-check"></i> Igniting Potential, Fostering Growth.</li>
                <li><i className="fas fa-check"></i> Preparing You for the Challenges Ahead.</li>
              </ul>
              <ul className="list-column">
                <li><i className="fas fa-check"></i> Unlocking Your Full Potential.</li>
                <li><i className="fas fa-check"></i> Investing in Your Future.</li>
                <li><i className="fas fa-check"></i> Growing Skills, Building Careers.</li>
                <li><i className="fas fa-check"></i> Training that Works.</li>
                <li><i className="fas fa-check"></i> Real-World Skills for Real-World Success.</li>
                <li><i className="fas fa-check"></i> Bridging the Gap Between Learning and Doing.</li>
                <li><i className="fas fa-check"></i> Hands-On Training, Tangible Results.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision" data-aos="fade-up">
        <div className="container">
          <h3>Our Mission</h3>
          <p>
            To bridge the gap between academic learning and real-world application by delivering quality,
            industry-relevant education that empowers and prepares students for successful careers.
          </p>
          <h3>Our Vision</h3>
          <p>
            To become India’s most trusted SM Institute, delivering transformative learning experiences through
            expert mentorship and hands-on training.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us" data-aos="fade-right">
        <div className="container">
          <h3>Why Choose SM Management?</h3>
          <ul className="usp-list">
            <li><i className="fas fa-check-circle"></i> 100% Placement Assistance</li>
            <li><i className="fas fa-check-circle"></i> Real-Time Project Experience</li>
            <li><i className="fas fa-check-circle"></i> Expert Mentors from Top MNCs</li>
            <li><i className="fas fa-check-circle"></i> Dedicated Interview Preparation</li>
            <li><i className="fas fa-check-circle"></i> Certification & Resume Building</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications" data-aos="zoom-in">
        <div className="container">
          <h3>Our Accreditations</h3>
          <div className="cert-logos">
            <img src="/images/iso.jpeg" alt="ISO Certified" />
            <img src="/images/nascom.webp" alt="NASSCOM Certified" />
            <img src="/images/MSME-Certificate.webp" alt="MSME Registered" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-about" data-aos="fade-up">
        <h3>Ready to Kickstart Your Career?</h3>
        <a href="/contact" className="btn">Get in Touch</a>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917975207019"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default About;
