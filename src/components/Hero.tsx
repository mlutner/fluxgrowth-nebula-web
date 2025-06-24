
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Large rotating gradient orb background */}
      <div className="rotating-orb"></div>

      {/* Twinkling white dot particles */}
      <div className="particles absolute inset-0 pointer-events-none">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/20"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main headline with word-specific colors */}
          <h1 className={`hero-headline transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="driving">Driving</span>{' '}
            <span className="growth">growth</span>{' '}
            <span className="with">with</span>{' '}
            <span className="ai">AI.</span>
          </h1>

          {/* Smaller subheadline with more space below */}
          <p className={`text-xs md:text-sm text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We help ambitious businesses harness automation, chatbots, and AI-driven growth strategies without the technical overwhelm.
          </p>

          {/* CTA Buttons - subtle like reference image */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              className="subtle-button-primary px-8 py-3 text-sm rounded-lg transition-all duration-300 group"
            >
              Our services
            </button>
            <button 
              className="subtle-button-secondary px-8 py-3 text-sm rounded-lg transition-all duration-300 group"
            >
              Get in touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform inline" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-20 bg-gradient-to-b from-sage-green to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
