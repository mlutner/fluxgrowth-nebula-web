
import React from 'react';

interface StrategyModalProps {
  isVisible: boolean;
  onClose: () => void;
  strategyResults: any;
  businessInput: string;
}

const StrategyModal: React.FC<StrategyModalProps> = ({ 
  isVisible, 
  onClose, 
  strategyResults, 
  businessInput 
}) => {
  const handleGetStarted = () => {
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#contact';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay-enhanced-v2" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content-enhanced-v2">
        <button className="modal-close-btn-enhanced-v2" onClick={onClose}>
          &times;
        </button>
        <div className="strategy-results-enhanced-v2">
          {strategyResults?.error ? (
            <p style={{ color: '#ff8a8a' }}>{strategyResults.error}</p>
          ) : strategyResults?.strategy ? (
            <>
              <h4>AI Strategy for: <span className="accent-text-enhanced">{businessInput}</span></h4>
              {strategyResults.strategy.map((item: any, index: number) => (
                <div key={index} className="strategy-step-enhanced-v2">
                  <h5><span className="step-number-enhanced">Step {index + 1}:</span> {item.action}</h5>
                  <p>{item.benefit}</p>
                </div>
              ))}
              <div className="cta-section-enhanced" style={{ marginTop: '30px', textAlign: 'center', borderTop: '1px solid #232323', paddingTop: '25px' }}>
                <p style={{ fontFamily: 'Inter Tight, sans-serif', color: '#858585', marginBottom: '20px', fontSize: '1rem' }}>
                  Ready to turn this strategy into reality? Let's discuss how we can implement these AI solutions for your business.
                </p>
                <button 
                  className="generate-strategy-btn-enhanced-v2"
                  onClick={handleGetStarted}
                  style={{ width: 'auto', minWidth: '200px' }}
                >
                  Get Started Today
                </button>
              </div>
            </>
          ) : (
            <p>No strategy could be generated. Please try a different query.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StrategyModal;
