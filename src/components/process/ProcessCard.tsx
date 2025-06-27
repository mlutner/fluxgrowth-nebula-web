
import React, { useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

  // Enhanced hover interactions for specific cards
  const handleHover = (hovering: boolean) => {
    setIsHovered(hovering);
    
    const card = document.querySelector(`[data-process-card="${index}"]`) as HTMLElement;
    if (!card) return;
    
    // Enhanced interactions for the Assess card (index 0)
    if (index === 0) {
      const radarContainer = card.querySelector('.assess-radar-container') as HTMLElement;
      if (radarContainer) {
        if (hovering) {
          // Accelerate radar animations on hover
          radarContainer.style.setProperty('--radar-speed', '0.6');
          radarContainer.style.setProperty('--target-intensity', '1.2');
          radarContainer.style.setProperty('--connection-opacity', '0.8');
        } else {
          // Return to normal speed
          radarContainer.style.setProperty('--radar-speed', '1');
          radarContainer.style.setProperty('--target-intensity', '1');
          radarContainer.style.setProperty('--connection-opacity', '0.6');
        }
      }
    }
    
    // Enhanced interactions for the Activate card (index 2)
    if (index === 2) {
      const deploymentContainer = card.querySelector('.activate-deployment-container') as HTMLElement;
      if (deploymentContainer) {
        if (hovering) {
          // Accelerate deployment animations on hover
          deploymentContainer.style.setProperty('--activation-speed', '0.7');
          deploymentContainer.style.setProperty('--node-intensity', '1.3');
          deploymentContainer.style.setProperty('--flow-speed', '0.8');
        } else {
          // Return to normal speed
          deploymentContainer.style.setProperty('--activation-speed', '1');
          deploymentContainer.style.setProperty('--node-intensity', '1');
          deploymentContainer.style.setProperty('--flow-speed', '1');
        }
      }
    }
  };

  return (
    <div 
      data-process-card={index}
      className="process-card-enhanced-v2 fade-in-section"
      style={{ 
        transitionDelay: `${(index + 1) * 0.1}s`,
        transform: index === 0 && isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onFocus={() => handleHover(true)}
      onBlur={() => handleHover(false)}
      tabIndex={index === 0 || index === 2 ? 0 : undefined}
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
