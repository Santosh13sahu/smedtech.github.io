import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/style.css";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/smplacementint@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        setStatusMessage("✅ Thank you! Your message has been sent.");
      } else {
        setStatusMessage("❌ Oops! Something went wrong.");
      }
    } catch (error) {
      setStatusMessage("❌ Network error. Please try again.");
    }
  };

  return (
    <main>
      <Navbar />

      <section className="contact-hero" data-aos="fade-down">
        <h1>
          We are eager to <span>hear from you!</span>
        </h1>
        <p>Feel free to get in touch with the team if you have any questions</p>
      </section>

      <section className="contact-wrapper" data-aos="fade-up">
        <div className="contact-card">
          <div className="contact-form" data-aos="fade-right">
            <h2>
              Fill out the form to hear from our <strong>Team!</strong>
            </h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />

              <label htmlFor="phone">Phone</label>
              <div className="phone-field">
                <img src="https://flagcdn.com/in.svg" alt="India Flag" className="flag" />
                <span>+91</span>
                <input type="text" id="phone" name="phone" placeholder="Enter mobile number" />
              </div>

              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />

              <label htmlFor="message">Your Message *</label>
              <textarea id="message" name="message" placeholder="Type here..." required></textarea>

              <button type="submit">Submit</button>
            </form>

            <div id="formStatus" className="form-status">
              {statusMessage}
            </div>
          </div>

          <div className="contact-info" data-aos="fade-left">
            <h2>Contact Info</h2>
            <div className="location-block">
              <h3>India</h3>
              <p><i className="fas fa-phone"></i> +91 7975207019</p>
              <p><i className="fas fa-envelope"></i> krish@sminstitute.co.in</p>
              <p><i className="fas fa-map-marker-alt"></i> SM Training and placement institute, Door No. 301, Andree Capitol, Andree Road, Shanthi Nagar, Bengaluru 560027.</p>
            </div>

            <div className="location-block" data-aos="zoom-in">
              <div className="google-map">
                <iframe
                  title="SM Institute Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.292352842008!2d77.59205927489278!3d12.96070528735366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157f664268bd%3A0x2cfdafc8f6abdf5c!2sSM%20TRAINING%20AND%20PLACEMENT%20INSTITUTE!5e1!3m2!1sen!2sin!4v1753347692185!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer data-aos="fade-up">
        <p>&copy; 2025 SM Institute. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Contact;
