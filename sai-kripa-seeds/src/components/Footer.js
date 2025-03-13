// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sai Kripa Seeds</h3>
          <p>Cultivating dreams, one seed at a time</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/products">Our Seeds</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Sai Kripa Seeds HQ,Betwa Ice and Cold Storage, Near L.S. Garden, Jalaun(285123), UP, India</p>
          <p>📞 +919695910637</p>
          <p>✉️ info.saikripaseeds@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© SAI KRIPA SEEDS {new Date().getFullYear()} | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;