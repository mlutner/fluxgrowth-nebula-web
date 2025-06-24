
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'AI Strategy & Roadmapping',
    'Intelligent Automation',
    'Chatbot Development',
    'Lead Generation',
    'Sales Automation',
    'Change Management'
  ];

  const resources = [
    'AI Implementation Guide',
    'ROI Calculator',
    'Case Studies',
    'Webinars',
    'Blog',
    'FAQ'
  ];

  return (
    <footer className="bg-gradient-to-br from-flux-dark via-slate-900 to-flux-dark">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-flux-blue to-flux-purple rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-2xl font-bold text-white">FluxGrowth</span>
              </div>
              
              <p className="text-white/70 leading-relaxed mb-6">
                Turn AI into your competitive advantage with our comprehensive automation and growth strategies.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <Mail className="w-5 h-5 text-flux-blue" />
                  <span>hello@fluxgrowth.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone className="w-5 h-5 text-flux-blue" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-5 h-5 text-flux-blue" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-flux-blue transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/70 hover:text-flux-blue transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource}>
                    <span className="text-white/70 hover:text-flux-blue transition-colors duration-200 cursor-pointer">
                      {resource}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 FluxGrowth Consulting. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-flux-blue transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-flux-blue transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-flux-blue transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-flux-blue transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
