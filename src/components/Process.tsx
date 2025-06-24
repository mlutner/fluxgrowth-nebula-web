
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
      title: "Subscribe",
      subtitle: "Week 1",
      description: "Choose your preferred plan to start and cancel or pause at anytime you like. So you're as flexible as your business' needs.",
      details: ["Current process analysis", "Technical infrastructure review", "ROI potential assessment"]
    },
    {
      number: "02", 
      title: "Request",
      subtitle: "Week 2",
      description: "Start requesting the workflow-automations and AI applications you need, your developers are right there to transform your ideas into reality.",
      details: ["Solution architecture design", "Integration planning", "Success metrics definition"]
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Weeks 3-4",
      description: "Our developers swiftly begin building your custom solutions, prioritising speed without compromising on quality.",
      details: ["System deployment", "Team training sessions", "Quality assurance testing"]
    },
    {
      number: "04",
      title: "Test & optimize",
      subtitle: "Ongoing",
      description: "Continuous optimization and performance monitoring to maximize your ROI.",
      details: ["Performance monitoring", "Continuous optimization", "Strategic expansion planning"]
    }
  ];

  return (
    <section id="process" className="section-padding bg-charcoal">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 animate-on-scroll">
            Our{' '}
            <span className="bg-gradient-to-r from-[#a8d5ba] via-[#a8d5ba] to-[#a8d5ba] bg-clip-text text-transparent">
              process
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto animate-on-scroll font-light">
            Our proven methodology ensures rapid deployment and immediate value delivery.
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#a8d5ba] via-[#8fbc8f] to-[#a8d5ba] rounded-full hidden lg:block"></div>

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
                  <div className="glass-charcoal rounded-2xl p-8 hover-lift">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                      <span className="text-4xl font-light text-[#a8d5ba]">{step.number}</span>
                      <div>
                        <h3 className="text-2xl font-light text-white">{step.title}</h3>
                        <span className="text-[#a8d5ba] font-light">{step.subtitle}</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-lg mb-6 leading-relaxed font-light">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                          <span className="text-white/60 font-light">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#a8d5ba] to-[#8fbc8f] flex items-center justify-center shadow-lg transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'scale-100 animate-glow' : 'scale-75'
                  }`}>
                    <span className="text-charcoal font-light text-lg">{step.number}</span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 lg:hidden">
                      <ArrowRight className="w-6 h-6 text-[#a8d5ba] rotate-90" />
                    </div>
                  )}
                </div>

                {/* Visual element */}
                <div className="flex-1 flex justify-center">
                  <div className={`w-64 h-64 rounded-2xl bg-gradient-to-br from-[#a8d5ba]/10 to-[#8fbc8f]/10 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-1000 ${
                    visibleSteps.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#a8d5ba] to-[#8fbc8f] rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-light text-charcoal">{step.number}</span>
                      </div>
                      <h4 className="text-xl font-light text-white">{step.title}</h4>
                      <p className="text-[#a8d5ba] font-light">{step.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <button className="subtle-button-primary px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#a8d5ba]/25 hover:-translate-y-1">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
