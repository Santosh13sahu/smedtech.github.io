import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import Hero from '../components/Hero';
import Industry from '../components/Industry';
import CareerCourses from '../components/CareerCourses';
import "../styles/style.css"; // adjust path if needed
// import './Index.css';
import { useState } from 'react';





const Index = () => {
   const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
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
      </header>
      {/* Sticky Top Right Image Slider */}
<div className="top-right-sticky-slider">
  <Swiper
    modules={[Autoplay, EffectFade]}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    effect="fade"
    loop={true}
    className="tiny-swiper"
  >
    <SwiperSlide><img src="/images/review1.jpg" alt="Slide 1" /></SwiperSlide>
    <SwiperSlide><img src="/images/review2.jpg" alt="Slide 2" /></SwiperSlide>
    <SwiperSlide><img src="/images/review3.jpg" alt="Slide 3" /></SwiperSlide>
  </Swiper>
</div>


      {/* Marquee */}
      <div className="marquee-wrapper" data-aos="fade-right">
        <div className="marquee-content">
          <div className="marquee-item">🚀 Learn Full Stack Development | Master Software Testing | 100% Job Guarantee 🎯 | Book a Free Demo Now! 📞</div>
          <div className="marquee-item">🚀 Learn Full Stack Development | Master Software Testing | 100% Job Guarantee 🎯 | Book a Free Demo Now! 📞</div>
        </div>
      </div>


      {/* Sections */}
      <Hero />  
      <div className="section-divider" > <Industry /></div>
      <CareerCourses />

      {/* Enquiry Form Popup */}
{showForm && (
  <div className="enquiry-overlay">
    <div className="enquiry-form">
      <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
      <h3>Enquiry Form</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Your Phone" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
)}

      {/* Sticky Enquiry Button */}
<div className="enquiry-button" onClick={() => setShowForm(true)}>
  ✉️ Enquiry
</div>

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
    </div>
  );
};

export default Index;
