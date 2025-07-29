// src/components/GoogleReviews.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const GoogleReviews = () => {
  const [googleReviews, setGoogleReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("https://api.featurable.com/v1/reviews", {
          headers: {
            Authorization: "Bearer YOUR_API_KEY", // 🔁 Replace with your actual API key
          },
          params: {
            location_id: "YOUR_LOCATION_ID", // 🔁 Replace with your location ID
            platform: "google",
            limit: 5,
          },
        });

        const filtered = response.data.reviews.filter((r) => r.rating >= 3);
        setGoogleReviews(filtered);
      } catch (error) {
        console.error("Failed to fetch Google Reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="testimonial-cards">
      {googleReviews.map((review, index) => (
        <div className="testimonial-card" key={index}>
          <p>“{review.text}”</p>
          <strong>– {review.author} ({review.rating}★)</strong>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;
