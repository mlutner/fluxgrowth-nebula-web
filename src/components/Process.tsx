
import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...prev, stepIndex]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('.process-step');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Assess",
      subtitle: "Week 1",
      description: "Comprehensive AI readiness audit to identify opportunities and technical requirements.",
      details: ["Current process analysis", "Technical infrastructure review", "ROI potential assessment"]
    },
    {
      number: "02", 
      title: "Architect",
      subtitle: "Week 2",
      description: "Custom solution design and implementation roadmap tailored to your specific needs.",
      details: ["Solution architecture design", "Integration planning", "Success metrics definition"]
    },
    {
      number: "03",
      title: "Activate",
      subtitle: "Weeks 3-4",
      description: "Full implementation with comprehensive training and support for your team.",
      details: ["System deployment", "Team training sessions", "Quality assurance testing"]
    },
    {
      number: "04",
      title: "Accelerate",
      subtitle: "Ongoing",
      description: "Continuous optimization and performance monitoring to maximize your ROI.",
      details: ["Performance monitoring", "Continuous optimization", "Strategic expansion planning"]
    }
  ];

  return (
    <section id="process" className="section-padding bg-gradient-to-br from-flux-dark via-slate-900 to-flux-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-on-scroll">
            From Strategy to Scale in{' '}
            <span className="text-gradient">30 Days</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-on-scroll">
            Our proven methodology ensures rapid deployment and immediate value delivery.
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-flux-blue via-flux-purple to-flux-green rounded-full hidden lg:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`process-step flex flex-col lg:flex-row items-center gap-8 lg:gap-16 transition-all duration-1000 ${
                  visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                data-step={index}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="glass-dark rounded-2xl p-8 hover-lift">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                      <span className="text-4xl font-bold text-flux-blue">{step.number}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <span className="text-flux-blue font-semibold">{step.subtitle}</span>
                      </div>
                    </div>
                    
                    <p className="text-white/80 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-flux-green flex-shrink-0" />
                          <span className="text-white/70">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-flux-blue to-flux-purple flex items-center justify-center shadow-lg transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'scale-100 animate-glow' : 'scale-75'
                  }`}>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 lg:hidden">
                      <ArrowRight className="w-6 h-6 text-flux-blue rotate-90" />
                    </div>
                  )}
                </div>

                {/* Visual element */}
                <div className="flex-1 flex justify-center">
                  <div className={`w-64 h-64 rounded-2xl bg-gradient-to-br from-flux-blue/20 to-flux-purple/20 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-1000 ${
                    visibleSteps.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-flux-blue to-flux-purple rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                      <p className="text-flux-blue font-medium">{step.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <button className="bg-flux-blue hover:bg-flux-blue/90 text-flux-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-flux-blue/25 hover:-translate-y-1">
            Start Your 30-Day Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
