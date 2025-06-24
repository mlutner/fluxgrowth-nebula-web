
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "1,275%", label: "Average ROI on Chatbot Implementations" },
    { value: "45%", label: "Reduction in Operational Costs" },
    { value: "30-Day", label: "Time-to-Value" }
  ];

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

      {/* Floating particles */}
      <div className="particles absolute inset-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main headline - narrower, longer typography */}
          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-white mb-6 leading-none transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Turn AI Into Your{' '}
            <span className="sage-gradient bg-gradient-to-r from-sage-light via-sage-green to-sage-dark bg-clip-text text-transparent font-light">
              Competitive Advantage
            </span>
          </h1>

          {/* Much smaller subheadline */}
          <p className={`text-sm md:text-base text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We help ambitious businesses harness automation, chatbots, and AI-driven growth strategies without the technical overwhelm.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              size="lg"
              className="bg-sage-green hover:bg-sage-dark text-charcoal font-medium px-10 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-sage-green/25 hover:-translate-y-1 group border-0"
            >
              Get Your AI Readiness Assessment
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/5 px-10 py-6 text-lg rounded-xl transition-all duration-300 hover:border-white/50 group backdrop-blur-sm"
            >
              <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-charcoal rounded-2xl p-8 hover-lift group animate-on-scroll border border-white/5"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-light text-sage-green mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                  {stat.label}
                </div>
              </div>
            ))}
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
