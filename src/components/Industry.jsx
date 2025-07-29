// src/pages/Index.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Index.css';

const industryData = [
  {
    name: 'IT Sector',
    icon: '💻',
    color: 'bg1',
    companies: [
      { name: 'Infosys', logo: '/images/infosys.png' },
      { name: 'TCS', logo: '/images/tcs.jpg' },
      { name: 'Wipro', logo: '/images/wipro.jpg' },
    ],
  },
  {
    name: 'Manufacturing',
    icon: '🏭',
    color: 'bg2',
    companies: [
      { name: 'Larsen & Turbo', logo: '/images/larsen.png' },
      { name: 'Tata Steel', logo: '/images/TATA-Steel.png' },
    ],
  },
  {
    name: 'Insurance',
    icon: '🚗',
    color: 'bg3',
    companies: [
      { name: 'LIC', logo: '/images/lic.png' },
      { name: 'Bajaj Allianz', logo: '/images/bajaj.jpg' },
    ],
  },
  {
    name: 'Banking',
    icon: '🏦',
    color: 'bg4',
    companies: [
      { name: 'SBI', logo: '/images/sbi.jpg' },
      { name: 'HDFC', logo: '/images/hdfc.png' },
    ],
  },
  {
    name: 'Telecom',
    icon: '📱',
    color: 'bg5',
    companies: [
      { name: 'Airtel', logo: '/images/airtel.png' },
      { name: 'Jio', logo: '/images/jio.jpg' },
    ],
  },
  {
  name: 'Financial Industry',
  icon: '💰',
  color: 'bg7',
  companies: [
    { name: 'Paytm', logo: '/images/paytm.jpeg' },
    { name: 'Razorpay', logo: '/images/razorpay.png' },
  ],
},
{
  name: 'Service Based Industry',
  icon: '💼',
  color: 'bg8',
  companies: [
    { name: 'Capgemini', logo: '/images/Capge.png' },
    { name: 'Tech Mahindra', logo: '/images/techm.png' },
  ],
},
{
  name: 'Other Industries',
  icon: '🌐',
  color: 'bg9',
  companies: [
    { name: 'Amazon', logo: '/images/amazon.png' },
    { name: 'Flipkart', logo: '/images/flipkart.jpeg' },
  ],
},

];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleIndustry = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="index-container">
      <h1 className="main-title" data-aos="fade-up">Top Industries Hiring Our Students</h1>

      <div className="industry-grid" data-aos="zoom-in">
        {industryData.map((industry, index) => (
          <div
            key={index}
            className={`industry-box ${industry.color} ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleIndustry(index)}
          >
            <span className="icon">{industry.icon}</span>
            <span className="label">{industry.name}</span>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="company-section" data-aos="fade-up">
          <h2>Top Companies in {industryData[activeIndex].name}</h2>
          <div className="company-grid">
            {industryData[activeIndex].companies.map((company, i) => (
              <div className="company-card" key={i}>
                <img src={company.logo} alt={company.name} />
                <p>{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <div className="floating-buttons">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp</a>
      </div> */}
    </div>
  );
};

export default Index;
