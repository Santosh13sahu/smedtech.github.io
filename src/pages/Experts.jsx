import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/style.css";
import Navbar from "../components/Navbar";

const nonTechExperts = [
  {
    name: "Krish",
    role: "Non technical trainer",
    experience: "13+ experience",
    location: "Bangalore",
    image: "/images/Sakthi.png",
  },
  {
    name: "Dines Mishra",
    role: "Non technical trainer",
    experience: "26+ experience",
    location: "Chennai",
    image: "/images/Dinesh.png",
  },
  {
    name: "Ranganatha Gowda",
    role: "Non technical trainer",
    experience: "10+ experience",
    location: "Bangalore",
    image: "/images/Ranganatha.png",
  },
  {
    name: "Prabhu Nithyanandham",
    role: "Non technical trainer",
    experience: "12+ experience",
    location: "Erode",
    image: "/images/Prabhu.png",
  },
];

const techExperts = [
  {
    name: "Ravi Nandan Singh",
    role: "Sr Developer at Amazon",
    experience: "13+ experience",
    location: "Sunnyvale, California, US",
    image: "/images/Ravi.png",
  },
  {
    name: "Vinoth Kannan",
    role: "Sr Consultant at Microsoft",
    experience: "12+ experience in Azure Solutions",
    location: "Huston, Texas, US",
    image: "/images/Vinoth.png",
  },
  {
    name: "Elango Arumuganainar",
    role: "Data Engineer at Stellantis",
    experience: "16+ experience",
    location: "Warsaw, Mazowieckie, Poland",
    image: "/images/Elango.png",
  },
];

const ExpertCard = ({ name, role, experience, location, image }) => (
  <div className="expert-card" data-aos="zoom-in">
    <img src={image} alt={name} className="expert-img" />
    <h3>{name}</h3>
    <p className="role">{role}</p>
    <p>{experience}</p>
    <p className="location">
      <i className="fas fa-map-marker-alt"></i> {location}
    </p>
  </div>
);

const Experts = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <main className="experts-section">
        <section className="section" data-aos="fade-up">
          <h2 className="section-title" data-aos="fade-right">OUR NON TECHNICAL EXPERTISE</h2>
          <p className="section-description" data-aos="fade-left">
            At SM Institute, our training is delivered by a team of highly qualified
            experts with both technical and non-technical backgrounds. Our
            instructors bring a unique blend of practical experience and theoretical
            knowledge, gained from working in top companies around the world...
          </p>
          <div className="experts-grid">
            {nonTechExperts.map((expert, i) => (
              <ExpertCard key={i} {...expert} />
            ))}
          </div>
        </section>

        <section className="section" data-aos="fade-up">
          <h2 className="section-title" data-aos="fade-right">OUR TECHNICAL EXPERTISE</h2>
          <div className="experts-grid">
            {techExperts.map((expert, i) => (
              <ExpertCard key={i} {...expert} />
            ))}
          </div>
        </section>
      </main>

      <footer data-aos="fade-up">
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Experts;
