
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
                    background: 'rgba(181, 227, 192, 1)',
                    color: '#080807',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '600',
                    fontSize: '1rem',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px 32px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    minHeight: '48px',
                    boxShadow: '0 2px 8px rgba(181, 227, 192, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(181, 227, 192, 0.9)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(181, 227, 192, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(181, 227, 192, 1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(181, 227, 192, 0.3)';
                  }}
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
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
