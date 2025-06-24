
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal design-grid">
      {/* Sophisticated background orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="orb-container">
          <div 
            className="w-[600px] h-[600px] rounded-full opacity-40"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.4) 0%, transparent 40%),
                radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.3) 0%, transparent 40%),
                radial-gradient(circle at 50% 80%, rgba(5, 150, 105, 0.2) 0%, transparent 40%)
              `,
              filter: 'blur(100px)',
              animation: 'float-elegant 12s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/40"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main headline with enhanced typography */}
          <h1 className={`heading-xl text-white mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Turn AI Into Your{' '}
            <span className="sage-gradient font-medium">
              Competitive Advantage
            </span>
          </h1>

          {/* Enhanced subheadline */}
          <p className={`body-lg text-neutral-300 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We help ambitious businesses harness automation, chatbots, and AI-driven growth strategies 
            without the technical overwhelm.
          </p>

          {/* Refined CTA buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="btn-primary group">
              Our services
            </button>
            <button className="btn-secondary group">
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Enhanced feature highlights */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { title: "AI Strategy", desc: "Custom roadmaps" },
              { title: "Automation", desc: "Smart workflows" },
              { title: "24/7 Support", desc: "Always available" }
            ].map((item, index) => (
              <div key={index} className="glass-charcoal rounded-xl p-6 hover-lift">
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Refined scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float-elegant">
        <div className="w-px h-16 bg-gradient-to-b from-green-400 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
