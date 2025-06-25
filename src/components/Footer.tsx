import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal'; // For fade-in animation

const Footer = () => {
  useScrollReveal(); // Initialize scroll reveal for the footer section

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    // Set current year - already handled by useState initial value, but this confirms it.
    // setCurrentYear(new Date().getFullYear()); // Not strictly needed if useState is used for init

    // Set local time and update it
    const updateTime = () => {
      const now = new Date();
      // Using a simple time string, can be customized further if needed
      setLocalTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };

    updateTime(); // Initial call
    const timerId = setInterval(updateTime, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <footer className="footer-container fade-in-section"> {/* Ensure class names match CSS */}
      <div className="footer-contact-main">
        <h2>Let's talk.</h2>
        <a href="mailto:info@fluxgrowth.io">info@fluxgrowth.io</a>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom-grid">
        {/* Contact Info Column */}
        <div className="footer-column">
          <p>&copy; <span id="year">{currentYear}</span> FluxGrowth Consulting</p>
          <a href="mailto:info@fluxgrowth.io" className="email-link">info@fluxgrowth.io</a>
          <p>Vancouver, BC</p>
          <div style={{ display: 'flex', gap: '5px' }}> {/* Inline style from snippet */}
            <p>Local time:</p>
            <p className="accent-text" id="local-time">{localTime}</p>
          </div>
        </div>

        {/* Site Links Column */}
        <div className="footer-column">
          <a href="#process">Process</a> {/* Updated href to match existing site structure if possible */}
          <a href="#services">Services</a>
          <a href="#results">Work</a> {/* Assuming #results maps to a "Work" or "Case Studies" section */}
          {/* <a href="#plans">Plans</a> {/* Add if #plans section exists */}
          {/* <a href="#team">Team</a> {/* Add if #team section exists */}
        </div>

        {/* Social Links Column */}
        <div className="footer-column">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> {/* Added https for valid links */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
