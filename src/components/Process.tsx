
import React, { useState } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: "01.",
      title: "Assess",
      description: "We conduct a comprehensive AI readiness assessment, identifying opportunities for automation, efficiency gains, and competitive advantages specific to your business.",
      image: "/lovable-uploads/b87fac7c-777b-468b-bdde-7d426356cd23.png"
    },
    {
      number: "02.",
      title: "Architect", 
      description: "Our team designs a custom AI strategy and implementation roadmap, prioritizing quick wins while building toward long-term transformation goals."
    },
    {
      number: "03.",
      title: "Activate",
      description: "We implement your AI solutions with precision - from chatbots and automation workflows to predictive analytics and lead generation systems."
    },
    {
      number: "04.",
      title: "Optimize",
      description: "Continuous monitoring and optimization ensure peak performance. We track metrics, refine algorithms, and maximize ROI from your AI investments."
    },
    {
      number: "05.",
      title: "Accelerate",
      description: "With proven AI systems in place, we help you scale operations, expand capabilities, and establish your position as an industry leader."
    }
  ];

  const handleStepHover = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  return (
    <section id="process" className="process-section bg-charcoal">
      <div className="container-custom">
        <h2 className="process-title-smaller">
          Our <span className="highlight">process</span>
        </h2>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`process-step ${activeStep === index + 1 ? 'active' : ''}`}
              onMouseEnter={() => handleStepHover(index + 1)}
            >
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              {step.image && (
                <div className="step-image mb-4">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-32 object-contain"
                  />
                </div>
              )}
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
