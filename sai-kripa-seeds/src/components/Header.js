import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.min(
        (window.scrollY / (window.innerHeight * 0.3)) * 100,
        100
      );
      setScrolled(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scrolling when menu is open
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    // Clean up effect
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/products", text: "Products" },
    { to: "/customers", text: "Our Customers" },
    { to: "/contact", text: "Contact" }
  ];

  return (
    <>
      <header className="header" style={{ "--scroll-percent": `${scrolled}%` }}>
        <div className="logo-container">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img
              src="/images/An_innovative_logo_design_for_Sai_Kripa_Seeds.png"
              alt="Sai Kripa Seeds Logo"
              className="logo"
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          {/* Close button (visible in mobile menu) */}
          <div 
            className="nav-close" 
            onClick={closeMenu}
            aria-label="Close menu"
            role="button"
            tabIndex={0}
          />
          
          <ul>
            {navItems.map((item, index) => (
              <li key={item.to} style={{ "--i": index }}>
                <Link 
                  to={item.to}
                  onClick={closeMenu} // Close menu when link is clicked
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Overlay (visible when mobile menu is open) */}
        <div 
          className={`nav-overlay ${menuOpen ? 'active' : ''}`}
          onClick={closeMenu}
          role="presentation"
        />
      </header>
    </>
  );
};

export default Header;