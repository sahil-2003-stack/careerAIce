import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "./Customers.css";

const Customers = () => {
  const customerExperiences = [
    {
      name: "Rajesh Kumar",
      location: "Madhya Pradesh",
      feedback: "The seeds provided by Sai Kripa Seeds gave an excellent yield. Highly recommended!",
      image: "/images/customers/rajesh.jpg",
    },
    {
      name: "Anjali Patel",
      location: "Uttar Pradesh",
      feedback: "I've been a loyal customer for years. The quality is unmatched, and the support is fantastic!",
      image: "/images/customers/anjali.jpg",
    },
    {
      name: "Vikram Singh",
      location: "Rajasthan",
      feedback: "Sai Kripa Seeds helped me transform my farming business. Their expertise is incredible.",
      image: "/images/customers/vikram.jpg",
    },
    {
      name: "Sahil Singh",
      location: "Uttar Pradesh",
      feedback: "Sai Kripa Seeds helped me transform my farming business. Their expertise is incredible.",
      image: "/images/customers/vikram.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState('next');

  const nextSlide = useCallback(() => {
    setSlideDirection('next');
    setCurrentIndex((prevIndex) => 
      prevIndex === customerExperiences.length - 1 ? 0 : prevIndex + 1
    );
  }, [customerExperiences.length]);

  const prevSlide = useCallback(() => {
    setSlideDirection('prev');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? customerExperiences.length - 1 : prevIndex - 1
    );
  }, [customerExperiences.length]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const goToSlide = useCallback((index) => {
    setSlideDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  }, [currentIndex]);

  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  return (
    <section className="customers-section">
      <h1>Our Customers</h1>
      <p className="subtitle">
        See what our happy customers have to say about their experiences with Sai Kripa Seeds!
      </p>
      
      <div 
        className="carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className="carousel-button prev"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-track">
          {customerExperiences.map((customer, index) => (
            <div 
              key={index}
              className={`customer-card ${index === currentIndex ? 'active' : ''} ${slideDirection}`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <div className="customer-image">
                <img src={customer.image} alt={customer.name} />
              </div>
              <h2>{customer.name}</h2>
              <p className="location">{customer.location}</p>
              <p className="feedback">"{customer.feedback}"</p>
            </div>
          ))}
        </div>

        <button 
          className="carousel-button next"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="carousel-dots">
        {customerExperiences.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Customers;