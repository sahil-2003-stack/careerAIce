import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [responseMessage, setResponseMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mul7g6t", // Replace with your EmailJS service ID
        "template_3x2kmuo", // Replace with your EmailJS template ID
        form.current,
        "mTa6VNQJl8RtN2Hej" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setResponseMessage("Message sent successfully!");
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          setResponseMessage("Failed to send the message. Please try again.");
          console.error("FAILED...", error.text);
        }
      );

    // Reset form fields
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <h1>Contact Us</h1>
      <p>We’re here to help! Reach out to us through any of the methods below.</p>

      <div className="contact-details">
        <div className="contact-item">
          <h2>Phone Numbers</h2>
          <ul>
            <li>
              <a href="tel:+919695910637" className="phone-link">
                +91 96959 10637
              </a>
            </li>
            <li>
              <a href="tel:+919935167100" className="phone-link">
                +91 99351 67100
              </a>
            </li>
            <li>
              <a href="tel:+917007079622" className="phone-link">
                +91 70070 79622
              </a>
            </li>
          </ul>
          <h2>Email</h2>
          <ul>
            <li>
              <a href="mailto:info.saikripaseeds@gmail.com">
                info.saikripaseeds@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:support@saikripaseeds.com">
                support@saikripaseeds.com
              </a>
            </li>
          </ul>
          <h2>Office Locations</h2>
          <ul>
            <li>
              Sai Kripa Seeds HQ, Betwa Ice and Cold Storage, Near L.S. Garden,
              Jalaun(285123), UP, India
            </li>
          </ul>
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/share/15CaLZ1euQ/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://x.com/seedssai43005?s=11"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sai_kripa_seeds?igsh=Z2o3YjJraXowdnJj&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="map-embed">
          <h2>Visit Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.405922926219!2d79.3495731!3d26.118304600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39762989d5abba51%3A0x531d7ba3c6014ac6!2sBetwa%20ice%20and%20cold%20storage!5e0!3m2!1sen!2sin!4v1737269753132!5m2!1sen!2sin"
            
            
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form ref={form} onSubmit={sendEmail} className="styled-form">
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="message"
              placeholder="Your Message"
              required
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
