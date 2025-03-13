import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";

const HeroSection = ({ 
  heroTitle = "Welcome to Sai Kripa Seed Co.", 
  heroTagline = "Where tiny seeds spark big dreams! " 
}) => (
  <section className="hero">
    <h1>{heroTitle}</h1>
    <p className="tagline">{heroTagline}</p>
  </section>
);

const DescriptionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="description">
      <p>
        We're passionate about peas, and our premium seeds are the secret to
        your garden's success. From sweet snap peas to robust shell varieties,
        our carefully selected seeds promise bountiful harvests and unmatched
        flavor.
      </p>
      <ul>
        <li>🌱 Non-GMO and organic</li>
        <li>🌱 High-yielding and disease-resistant</li>
        <li>🌱 Perfect for gardens of all sizes</li>
      </ul>
      <p>
        Join us in cultivating a greener world, one pea at a time. Explore our
        collection and let your garden flourish!
      </p>
      <div className="buttons">
        <Link 
          to="/products" 
          className="button"
          aria-label="Navigate to our seed products"
        >
          Discover Our Seeds
        </Link>
        <Link 
          to="/contact" 
          className="button"
          aria-label="Get gardening tips and contact us"
        >
          Get Growing Tips
        </Link>
      </div>
    </section>
  );
};

const CorporateSection = () => (
  <section className="corporate">
    
    <h2>Your Partner in Sustainable Agriculture</h2>
    <p>
      Rooted in local heritage, we're not just growing peas – we're
      cultivating a greener future. Our organic-certified pea seeds offer
      government agencies and large corporations an unbeatable combination
      of cost-effectiveness and high yields.
    </p>
    <ul>
      <li>🌱 Local Heritage Seeds: Preserving biodiversity</li>
      <li>🌱 High Germination Rates: Ensuring robust crops</li>
      <li>🌱 Organic Certification: Meeting the highest standards</li>
    </ul>
    <div className="buttons">
      <Link 
        to="/products" 
        className="button"
        aria-label="Browse our seed products"
      >
        Explore Our Products
      </Link>
      <Link 
        to="/contact" 
        className="button"
        aria-label="Contact Sai Kripa Seed Co"
      >
        Contact
      </Link>
    </div>
    
  </section>
);

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <DescriptionSection />
      <CorporateSection />
    </div>
  );
};

export default Home;