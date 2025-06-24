import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate random dots with varying properties - increased count and even smaller size
  const generateDots = () => {
    const dots = [];
    for (let i = 0; i < 60; i++) { // Increased from 40 to 60
      dots.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 1.8 + 0.9, // Decreased by 25%: 0.9-2.7px (was 1.2-3.6px)
        delay: Math.random() * 10,
        duration: Math.random() * 15 + 10, // 10-25s
        opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
        colorVariant: Math.random() > 0.5 ? 'nebula' : 'white'
      });
    }
    return dots;
  };

  const [dots] = useState(generateDots);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Smaller animated multicolor orb background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="orb-container">
          <div className="sage-orb"></div>
        </div>
      </div>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/20"></div>

      {/* Original floating particles */}
      <div className="particles absolute inset-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* New random moving dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: dot.colorVariant === 'nebula' ? 'rgb(211, 255, 202)' : '#f8fafc',
              opacity: dot.opacity,
              animationDelay: `${dot.delay}s`,
              animationDuration: `${dot.duration}s`,
              transform: 'translate(-50%, -50%)',
              animation: `randomFloat-${dot.id} ${dot.duration}s ease-in-out ${dot.delay}s infinite`
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main headline - using Space Grotesk font */}
          <h1 className={`font-headline text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.05em] text-white mb-12 leading-[0.75] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Turn AI Into Your{' '}
            <span className="bg-gradient-to-r from-nebula-lime via-nebula-lime to-nebula-lime bg-clip-text text-transparent font-normal">
              Competitive Advantage
            </span>
          </h1>

          {/* Subheadline - using Inter Tight font */}
          <p className={`font-body text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We help ambitious businesses harness automation, chatbots, and AI-driven growth strategies without the technical overwhelm.
          </p>

          {/* CTA Buttons - updated with new animated style */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button 
              className="outlined-glow-button px-8 py-3 text-sm rounded-lg transition-all duration-300 group"
            >
              Our services
            </button>
            <button 
              className="outlined-glow-button px-8 py-3 text-sm rounded-lg transition-all duration-300 group"
            >
              Get in touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform inline" />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic keyframes for random dot movement - more chaotic movement */}
      <style>
        {dots.map((dot) => `
          @keyframes randomFloat-${dot.id} {
            0%, 100% {
              transform: translate(-50%, -50%) translateX(0px) translateY(0px);
            }
            25% {
              transform: translate(-50%, -50%) translateX(${(Math.random() - 0.5) * 150}px) translateY(${(Math.random() - 0.5) * 150}px);
            }
            50% {
              transform: translate(-50%, -50%) translateX(${(Math.random() - 0.5) * 120}px) translateY(${(Math.random() - 0.5) * 120}px);
            }
            75% {
              transform: translate(-50%, -50%) translateX(${(Math.random() - 0.5) * 180}px) translateY(${(Math.random() - 0.5) * 180}px);
            }
          }
        `).join('\n')}
      </style>
    </section>
  );
};

export default Hero;
