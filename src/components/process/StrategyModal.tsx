
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
              <div className="cta-section-enhanced" style={{ 
                marginTop: '30px', 
                textAlign: 'center', 
                borderTop: '1px solid #232323', 
                paddingTop: '25px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
              }}>
                <p style={{ 
                  fontFamily: 'Inter Tight, sans-serif', 
                  color: '#858585', 
                  marginBottom: '0', 
                  fontSize: '1rem',
                  maxWidth: '400px'
                }}>
                  Ready to turn this strategy into reality? Let's discuss how we can implement these AI solutions for your business.
                </p>
                <button 
                  onClick={handleGetStarted}
                  style={{
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(20, 20, 20, 0.8)',
                    border: '1px solid rgba(181, 227, 192, 0.4)',
                    color: '#b5e3c0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: `
                      0 0 20px rgba(181, 227, 192, 0.4),
                      0 0 40px rgba(181, 227, 192, 0.2),
                      0 0 60px rgba(181, 227, 192, 0.1)
                    `
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 0 30px rgba(181, 227, 192, 0.6),
                      0 0 60px rgba(181, 227, 192, 0.3),
                      0 0 90px rgba(181, 227, 192, 0.15)
                    `;
                    e.currentTarget.style.borderColor = 'rgba(181, 227, 192, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 0 20px rgba(181, 227, 192, 0.4),
                      0 0 40px rgba(181, 227, 192, 0.2),
                      0 0 60px rgba(181, 227, 192, 0.1)
                    `;
                    e.currentTarget.style.borderColor = 'rgba(181, 227, 192, 0.4)';
                  }}
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
