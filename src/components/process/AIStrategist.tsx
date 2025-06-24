
import React, { useState } from 'react';
import { generateAIStrategy } from './utils/apiUtils';

interface AIStrategistProps {
  onShowModal: (results: any, businessInput: string) => void;
}

const AIStrategist: React.FC<AIStrategistProps> = ({ onShowModal }) => {
  const [businessInput, setBusinessInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateStrategy = async () => {
    if (!businessInput.trim()) {
      alert("Please enter a business type or goal.");
      return;
    }

    setIsLoading(true);
    
    try {
      const results = await generateAIStrategy(businessInput);
      onShowModal(results, businessInput);
    } catch (error) {
      console.error("Error generating strategy:", error);
      onShowModal({ error: "Sorry, we couldn't generate a strategy at this time. Please try again later." }, businessInput);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="process-card-enhanced-v2 fade-in-section"
      style={{ transitionDelay: '0.6s' }}
    >
      <div className="strategist-card-content-enhanced-v2">
        <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 32C48 40.8366 40.8366 48 32 48C28.2427 48 24.8143 46.7584 22.1856 44.7801L16 50L19.2199 43.8144C17.2416 41.1857 16 37.7573 16 34C16 25.1634 23.1634 18 32 18C40.8366 18 48 25.1634 48 32Z" stroke="rgb(211, 255, 202)" strokeWidth="3"/>
          <circle cx="26" cy="33" r="2" fill="rgb(211, 255, 202)"/>
          <circle cx="38" cy="33" r="2" fill="rgb(211, 255, 202)"/>
        </svg>
        <h3 className="card-title-enhanced">Try Our AI Strategist</h3>
        <p className="card-description-enhanced">
          Get a glimpse of your AI-powered future. Enter an industry or goal, and our AI will draft a preliminary growth strategy for you.
        </p>
        <input 
          type="text" 
          className="business-input-enhanced-v2"
          placeholder="e.g., 'boutique fitness studio' or 'reduce customer support tickets'"
          value={businessInput}
          onChange={(e) => setBusinessInput(e.target.value)}
        />
        <button 
          className="generate-strategy-btn-enhanced-v2"
          onClick={handleGenerateStrategy}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="loader-enhanced"></div>
          ) : (
            'Generate Strategy'
          )}
        </button>
      </div>
    </div>
  );
};

export default AIStrategist;
