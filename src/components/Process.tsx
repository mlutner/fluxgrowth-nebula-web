
import React, { useState, useEffect } from 'react';
import ProcessCard from './process/ProcessCard';
import AIStrategist from './process/AIStrategist';
import StrategyModal from './process/StrategyModal';
import { processSteps } from './process/ProcessSteps';

const Process = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [strategyResults, setStrategyResults] = useState<any>(null);
  const [businessInput, setBusinessInput] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => { 
      observer.observe(section); 
    });

    return () => observer.disconnect();
  }, []);

  const showModal = (results: any, input: string) => {
    setStrategyResults(results);
    setBusinessInput(input);
    setIsModalVisible(true);
  };

  const hideModal = () => setIsModalVisible(false);

  return (
    <>
      <section id="process" className="process-section-enhanced-v2 bg-charcoal">
        <div className="container-custom">
          <h2 className="process-heading-enhanced-v2 fade-in-section">
            Our <span className="accent-text-enhanced">Process</span>
          </h2>
          
          <div className="process-grid-enhanced-v2">
            {processSteps.map((step, index) => (
              <ProcessCard key={index} step={step} index={index} />
            ))}
            
            <AIStrategist onShowModal={showModal} />
          </div>
        </div>
      </section>

      <StrategyModal 
        isVisible={isModalVisible}
        onClose={hideModal}
        strategyResults={strategyResults}
        businessInput={businessInput}
      />
    </>
  );
};

export default Process;
