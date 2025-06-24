
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-flux-dark via-slate-900 to-flux-dark">
      {/* Animated background particles */}
      <div className="particles absolute inset-0">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-flux-blue/10 via-transparent to-flux-purple/10"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Turn AI Into Your{' '}
            <span className="text-gradient bg-gradient-to-r from-flux-blue via-flux-purple to-flux-green bg-clip-text text-transparent">
              Competitive Advantage
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We help ambitious businesses harness automation, chatbots, and AI-driven growth strategies without the technical overwhelm.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              size="lg"
              className="bg-flux-blue hover:bg-flux-blue/90 text-flux-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-flux-blue/25 hover:-translate-y-1 group"
            >
              Get Your AI Readiness Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-300 hover:border-white/50 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-dark rounded-xl p-6 hover-lift group animate-on-scroll"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-flux-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm md:text-base leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-flux-blue to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
