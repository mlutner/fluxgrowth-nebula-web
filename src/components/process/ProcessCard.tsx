
import React from 'react';

interface ProcessCardProps {
  step: {
    number: string;
    title: string;
    description: string;
    svg: React.ReactNode;
  };
  index: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ step, index }) => {
  return (
    <div 
      className="process-card-enhanced-v2 fade-in-section"
      style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
    >
      <div className="card-graphic-container-enhanced-v2">
        {step.svg}
      </div>
      <div className="card-text-content-enhanced">
        <h3 className="card-title-enhanced">
          <span className="accent-text-enhanced">{step.number}</span> {step.title}
        </h3>
        <p className="card-description-enhanced">{step.description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
