
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-dark shadow-lg backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/bc1e670f-0fd4-4dde-bc6c-10a0ffa0e3d6.png" 
              alt="FluxGrowth Logo" 
              className="h-40 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 px-6 py-3 rounded-lg border border-white/10 bg-transparent backdrop-blur-sm">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-sage-green transition-all duration-300 group-hover:w-4/5"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA - Updated to new style with normal font weight */}
          <div className="hidden md:block">
            <button 
              className="animated-glow-cta-button px-6 py-2 rounded-lg transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(20, 20, 20, 0.8)',
                border: '1px solid rgba(181, 227, 192, 0.4)',
                color: '#b5e3c0',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                fontWeight: '400'
              }}
            >
              <span className="relative z-10">Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-dark rounded-lg mt-4 p-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/80 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button 
              className="animated-glow-cta-button w-full px-6 py-2 rounded-lg transition-all duration-300 mt-4"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: 'rgba(20, 20, 20, 0.8)',
                border: '1px solid rgba(181, 227, 192, 0.4)',
                color: '#b5e3c0',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                fontWeight: '400'
              }}
            >
              <span className="relative z-10">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
