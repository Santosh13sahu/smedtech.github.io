import React, { useEffect } from "react";
import "../styles/style.css";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const script = document.createElement("script");
    script.src = "https://featurable.com/assets/v2/carousel_default.min.js";
    script.defer = true;
    script.charset = "UTF-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      <Navbar />

      <section className="about-section">
        <div className="about-content">
        <h2 className="google-reviews-heading" data-aos="fade-down">
  Student <span>Testimonials</span>
</h2>

          <div
            id="featurable-4b60db2c-4d48-4172-b867-aa645f234944"
            data-featurable-async
            data-aos="fade-up"
          >
            {/* <p>Loading student testimonials...</p> */}
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Testimonials;
