
import React, { useEffect, useState } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: "01.",
      title: "Assess",
      description: "We conduct a comprehensive AI readiness assessment, identifying opportunities for automation, efficiency gains, and competitive advantages specific to your business."
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
        <h2 className="section-title">
          Our <span className="highlight">process</span>
        </h2>
        
        <div className="mockup-container">
          {/* Step 1: AI Assessment */}
          <div className={`mockup-visual ${activeStep === 1 ? 'active' : ''}`}>
            <div className="assessment-mockup">
              <div className="toggle-section">
                <div className="toggle-switch">
                  <div className="toggle-circle"></div>
                </div>
                <span>AI Readiness</span>
              </div>
              <div className="assessment-options">
                <div className="assessment-btn">Basic</div>
                <div className="assessment-btn active">Pro</div>
                <div className="assessment-btn">Custom</div>
              </div>
            </div>
          </div>
          
          {/* Step 2: Strategy Development */}
          <div className={`mockup-visual ${activeStep === 2 ? 'active' : ''}`}>
            <div className="strategy-grid">
              <div className="strategy-icon">🎯</div>
              <div className="strategy-icon">🚀</div>
              <div className="strategy-icon">⚡</div>
              <div className="strategy-icon">📊</div>
              <div className="strategy-icon">🔧</div>
              <div className="strategy-icon">💡</div>
            </div>
          </div>
          
          {/* Step 3: Implementation */}
          <div className={`mockup-visual ${activeStep === 3 ? 'active' : ''}`}>
            <div className="code-mockup">
              <div className="code-line">// AI Implementation Strategy</div>
              <div className="code-line">const aiStrategy = {'{'}</div>
              <div className="code-line">&nbsp;&nbsp;automation: 'workflow-optimized',</div>
              <div className="code-line">&nbsp;&nbsp;chatbots: 'lead-generation',</div>
              <div className="code-line">&nbsp;&nbsp;analytics: 'predictive-insights'</div>
              <div className="code-line">{'};'}</div>
              <div className="code-line"><span className="blinking-cursor">|</span></div>
            </div>
          </div>
          
          {/* Step 4: Optimization */}
          <div className={`mockup-visual ${activeStep === 4 ? 'active' : ''}`}>
            <div className="metrics-container">
              <div className="metric">
                <div className="metric-label">Efficiency</div>
                <div className="progress-bar">
                  <div className="progress-fill efficiency"></div>
                </div>
              </div>
              <div className="metric">
                <div className="metric-label">Accuracy</div>
                <div className="progress-bar">
                  <div className="progress-fill accuracy"></div>
                </div>
              </div>
              <div className="metric">
                <div className="metric-label">ROI</div>
                <div className="progress-bar">
                  <div className="progress-fill roi"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 5: Scale & Lead */}
          <div className={`mockup-visual ${activeStep === 5 ? 'active' : ''}`}>
            <div className="globe-container">
              <div className="globe">
                <div className="globe-dots"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`process-step ${activeStep === index + 1 ? 'active' : ''}`}
              onMouseEnter={() => handleStepHover(index + 1)}
            >
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
