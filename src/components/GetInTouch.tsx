import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const GetInTouch = () => {
  useScrollReveal(); // For the main section fade-in

  return (
    <section className="get-in-touch-section max-w-7xl mx-auto py-12 md:py-24 w-full fade-in-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Contact Info */}
        <div className="space-y-10">
          <h2 className="main-heading">
            Get in <span className="accent-text">touch</span>
          </h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-400 mb-1">Office</p>
              <p className="text-lg">Vancouver, BC</p>
            </div>
            <hr className="border-gray-800" />
            <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a href="mailto:info@fluxgrowth.io" className="contact-link">
                info@fluxgrowth.io
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="rgb(211, 255, 202)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <hr className="border-gray-800" />
            <div>
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <a href="tel:604-358-3125" className="contact-link">
                604 358 3125
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="rgb(211, 255, 202)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        {/* Note: This is a front-end only form as per the snippet. No submission logic. */}
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="first-name" className="text-sm text-gray-400 mb-1 block">First Name</label>
              <input type="text" id="first-name" name="first-name" className="form-input" placeholder="John" />
            </div>
            <div>
              <label htmlFor="last-name" className="text-sm text-gray-400 mb-1 block">Last Name</label>
              <input type="text" id="last-name" name="last-name" className="form-input" placeholder="Doe" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="email" className="text-sm text-gray-400 mb-1 block">Email</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="john.doe@example.com" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm text-gray-400 mb-1 block">Phone</label>
              <input type="tel" id="phone" name="phone" className="form-input" placeholder="604-555-1234" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-gray-400 mb-1 block">Message</label>
            <textarea id="message" name="message" rows={4} className="form-input" placeholder="Your message..."></textarea>
          </div>
          <div className="submit-btn-wrapper">
            <div className="submit-btn-glow"></div>
            <button type="submit" className="submit-btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
