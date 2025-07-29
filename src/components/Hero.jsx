// src/components/Hero.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero-section" id="hero" data-aos="fade-up">

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="slide-image" style={{ backgroundImage: "url('/images/slide1.jpg')" }}>
            <div className="slide-text">
           <h1>SM Training and Placement Institute</h1>
            <h2>Join Bangalore's No.1 Training Institute</h2>
            <p>Trusted by thousands of students across the nation. <br /> Upskill and succeed with practical training.
            </p>
              <a href="" className='btn'>Get Started</a>
            </div>
          </div>
          {/* <div className="top-right-sticky">
  <img src="/images/review1.jpg" alt="New Offer" />
</div> */}

        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image" style={{ backgroundImage: "url('/images/slide2.jpg')" }}>
            <div className="slide-text">
               <h1>Unlock Your Potential<br />With Us!</h1>
            <p>World's premier software training institution bridging  <br/> the gap between industry demands and academia.</p>
              <a href="" className='btn'>Get Started</a>
            </div>
          </div>
               {/* <div className="top-right-sticky">
  <img src="/images/review2.jpg" alt="New Offer" />
</div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-image" style={{ backgroundImage: "url('/images/slide3.jpg')" }}>
            <div className="slide-text">
               <h1>The Best Courses you <br /> will find here</h1>
               <p>We guide students with the most effective path to employment <br/> with skills and strong placement support.</p>
              <a href="" className='btn'>Get Started</a>
            </div>
          </div>
               {/* <div className="top-right-sticky">
  <img src="/images/review3.jpg" alt="New Offer" />
</div> */}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
