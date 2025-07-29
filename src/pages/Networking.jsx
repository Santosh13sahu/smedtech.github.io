import React, { useState, useRef } from "react";
import "../styles/style.css";
import "../styles/coursecard.css";
import "../styles/accordion.css"; // Make sure this file exists

const Networking = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const curriculumSections = [
    {
      title: "1. Computer Networking",
      topics: [
        "Networking Basics: LAN, WAN, MAN",
        "OSI & TCP/IP Model",
        "IP Addressing (IPv4 & IPv6)",
        "Subnetting and Supernetting",
        "Switches, Routers, Hubs, Bridges",
        "DNS, DHCP, NAT, MAC Address",
        "Network Topologies and Protocols",
        "Firewalls and VPN",
        "Troubleshooting Tools: ping, tracert, ipconfig, netstat",
        "Network Security Essentials",
      ],
    },
    {
      title: "2. Cloud Computing",
      topics: [
        "Cloud Computing Overview",
        "Service Models – IaaS, PaaS, SaaS",
        "Deployment Models – Public, Private, Hybrid",
        "Virtualization Concepts",
        "Cloud Providers – AWS, Azure, Google Cloud",
        "Storage & Compute Services",
        "Serverless Architecture",
        "Introduction to DevOps in Cloud",
        "Cloud Security & Compliance",
        "Hands-on Practice with AWS/Azure Console",
      ],
    },
    {
      title: "3. AWS Cloud Basics",
      topics: [
        "AWS Overview",
        "IAM, EC2, S3, RDS",
        "VPC & Subnets",
        "Security Groups",
        "CloudWatch & Billing",
      ],
    },
    {
      title: "4. Azure Fundamentals",
      topics: [
        "Azure Dashboard",
        "Virtual Machines",
        "Storage Accounts",
        "Azure Active Directory",
        "Cloud Shell & CLI",
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Networking & Cloud</h1>
          <p>
            Get skilled in the fundamentals of computer networks and modern cloud
            platforms like AWS and Azure.
          </p>
          <ul className="features">
            <li>✅ Learn TCP/IP, routing, switching, firewalls, subnets</li>
            <li>✅ Understand AWS IAM, EC2, S3, VPC and Azure services</li>
            <li>✅ Hands-on practice with network simulation & cloud dashboards</li>
          </ul>
          <a href="/contact" className="enroll-btn">Enroll For Demo Class</a>
        </div>
        <div className="hero-image">
          <img src="/images/Networking.jpeg" alt="Networking and Cloud Course" />
        </div>
        <div className="rating">⭐ 4.6</div>
      </section>

      {/* Curriculum */}
      <section className="curriculum">
        <h1>Networking & Cloud Curriculum</h1>
        <div className="accordion-container">
          {curriculumSections.map((section, index) => {
            const contentRef = useRef(null);
            const isOpen = openIndex === index;
            return (
              <div className="accordion-item" key={index}>
                <button
                  className="accordion-btn"
                  onClick={() => toggleAccordion(index)}
                >
                  {section.title}
                </button>
                <div
                  className="accordion-content"
                  ref={contentRef}
                  style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
                  }}
                >
                  <ul>
                    {section.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-about">
        <div className="container">
          <h3>Ready to Kickstart Your Career?</h3>
          <a href="/contact" className="btn">Get in Touch</a>
        </div>
      </section>

      {/* Back to Courses Link */}
      <a href="/courses" className="go-back-btn">← Go Back to Courses</a>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Networking;
