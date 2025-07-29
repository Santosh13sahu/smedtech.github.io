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

const FindJobs = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h1>🎯 Find and Get Jobs</h1>
                    <p>
                        This course is designed to help job seekers develop the practical skills and strategies needed to effectively
                        search, apply, and interview for jobs successfully.
                    </p>
                    <ul className="features">
                        <li>✅ Resume Writing & LinkedIn Optimization</li>
                        <li>✅ Job Search Portals & Strategy</li>
                        <li>✅ Mock Interviews & HR Q&A Preparation</li>
                    </ul>
                    <a href="/contact" className="enroll-btn">Enroll For Demo Class</a>
                </div>
                <div className="hero-image">
                    <img src="/images/findjob.jpeg" alt="Find and Get Jobs" />
                </div>
                <div className="rating">⭐ 4.8</div>
            </section>

            <section className="curriculum">
                <h1>Course Curriculum</h1>
                <div className="accordion-container">
                    <Accordion title="1. Career Planning">
                        <ul>
                            <li>Crafting a professional resume</li>
                            <li>ATS-friendly resume format</li>
                            <li>Building a strong LinkedIn profile</li>
                            <li>SEO keywords for job titles</li>
                            <li>Profile visibility settings</li>
                        </ul>
                    </Accordion>

                    <Accordion title="2. Resume Writing">
                        <ul>
                            <li>Understanding job portals (Naukri, Indeed, etc.)</li>
                            <li>Email communication and follow-up</li>
                            <li>Freelancing & remote opportunities</li>
                            <li>Creating job alert systems</li>
                            <li>Applying in bulk using smart tools</li>
                        </ul>
                    </Accordion>

                    <Accordion title="3. Job Portals & Networking">
                        <ul>
                            <li>Mock interview sessions</li>
                            <li>Common HR questions & best responses</li>
                            <li>STAR technique for storytelling</li>
                            <li>Confidence building and body language</li>
                            <li>Post-interview etiquette and follow-up</li>
                        </ul>
                    </Accordion>
                    <Accordion title="4. Interview Preparation">
                        <ul>
                            <li>Mock interview sessions</li>
                            <li>Common HR questions & best responses</li>
                            <li>STAR technique for storytelling</li>
                            <li>Confidence building and body language</li>
                            <li>Post-interview etiquette and follow-up</li>
                        </ul>
                    </Accordion>
                    <Accordion title="5.Professional Etiquette">
                        <ul>
                            <li>Mock interview sessions</li>
                            <li>Common HR questions & best responses</li>
                            <li>STAR technique for storytelling</li>
                            <li>Confidence building and body language</li>
                            <li>Post-interview etiquette and follow-up</li>
                        </ul>
                    </Accordion>
                    <Accordion title="6. Workplace Tools">
                        <ul>
                            <li>Mock interview sessions</li>
                            <li>Common HR questions & best responses</li>
                            <li>STAR technique for storytelling</li>
                            <li>Confidence building and body language</li>
                            <li>Post-interview etiquette and follow-up</li>
                        </ul>
                    </Accordion>
                    <Accordion title="7.  Introduction to Artificial Intelligence">
                        <ul>
                            <li>Mock interview sessions</li>
                            <li>Common HR questions & best responses</li>
                            <li>STAR technique for storytelling</li>
                            <li>Confidence building and body language</li>
                            <li>Post-interview etiquette and follow-up</li>
                        </ul>
                    </Accordion>


                </div>
            </section>

            <section className="cta-about">
                <div className="container">
                    <h3>Ready to Land Your Dream Job?</h3>
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

export default FindJobs;
