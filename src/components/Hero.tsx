
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated multicolor orb background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="orb-container">
          <div className="multicolor-orb"></div>
        </div>
      </div>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

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
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Turn AI Into Your{' '}
            <span className="text-gradient bg-gradient-to-r from-flux-green via-flux-blue to-flux-purple bg-clip-text text-transparent">
              Competitive Advantage
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
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
              className="bg-flux-green hover:bg-flux-green/90 text-black font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-flux-green/25 hover:-translate-y-1 group border-0"
            >
              Get Your AI Readiness Assessment
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-xl transition-all duration-300 hover:border-white/60 group backdrop-blur-sm"
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
                className="glass-dark rounded-2xl p-8 hover-lift group animate-on-scroll border border-white/10"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-flux-green mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white/80 text-base md:text-lg leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-20 bg-gradient-to-b from-flux-green to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
