import React, { useState } from 'react';

const Process = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [businessInput, setBusinessInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [strategyResults, setStrategyResults] = useState<any>(null);

  const steps = [
    {
      number: "01.",
      title: "Assess",
      description: "We dive deep into your current operations to identify AI opportunities that matter. No generic assessments—just strategic insights tailored to unlock your specific competitive advantages."
    },
    {
      number: "02.",
      title: "Architect", 
      description: "Your custom AI roadmap takes shape. We design solutions that integrate seamlessly with your existing workflows while positioning you for exponential growth ahead."
    },
    {
      number: "03.",
      title: "Activate",
      description: "Implementation begins with precision and pace. Our team deploys your AI systems—from intelligent chatbots to automated workflows—delivering measurable results within 30 days."
    },
    {
      number: "04.",
      title: "Optimize",
      description: "Performance monitoring meets continuous improvement. We refine, adjust, and enhance your AI systems until they're operating at peak efficiency and maximum ROI."
    },
    {
      number: "05.",
      title: "Accelerate",
      description: "Scale without limits. With proven AI infrastructure in place, we help you expand capabilities, capture new markets, and establish your position as the industry leader you're destined to become."
    }
  ];

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const handleGenerateStrategy = async () => {
    if (!businessInput.trim()) {
      alert("Please enter a business type or goal.");
      return;
    }

    setIsLoading(true);
    
    const prompt = `You are an expert AI strategy consultant. A potential client in the '${businessInput}' industry is looking for growth opportunities. Generate a concise, 3-step AI strategy for them. For each step, provide a clear action and a brief explanation of the benefit. Format the output as a JSON object with a 'strategy' array, where each object has 'step', 'action', and 'benefit' keys.`;

    const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
    const payload = {
      contents: chatHistory,
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            "strategy": {
              "type": "ARRAY",
              "items": {
                "type": "OBJECT",
                "properties": {
                  "step": { "type": "STRING" },
                  "action": { "type": "STRING" },
                  "benefit": { "type": "STRING" }
                }
              }
            }
          }
        }
      }
    };
    
    const apiKey = "AIzaSyApc4zoUO-EUzKPn-5FI2pDCFdaxiSI52Q";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
      
      const result = await response.json();
     
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        
        const jsonText = result.candidates[0].content.parts[0].text;
        const parsedJson = JSON.parse(jsonText);
        setStrategyResults(parsedJson);
        showModal();

      } else {
        throw new Error("Invalid response structure from API.");
      }

    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setStrategyResults({ error: "Sorry, we couldn't generate a strategy at this time. Please try again later." });
      showModal();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id="process" className="process-section-enhanced bg-charcoal">
        <div className="container-custom">
          <h2 className="process-heading-enhanced fade-in-section">
            Our <span className="accent-text-enhanced">Process</span>
          </h2>
          
          <div className="process-grid-enhanced">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="process-card-enhanced fade-in-section"
                style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="card-text-content-enhanced">
                  <h3 className="card-title-enhanced">
                    <span className="accent-text-enhanced">{step.number}</span> {step.title}
                  </h3>
                  <p className="card-description-enhanced">{step.description}</p>
                </div>
              </div>
            ))}
            
            {/* AI Strategist Card */}
            <div 
              className="process-card-enhanced strategist-card fade-in-section"
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="strategist-graphic-enhanced">
                <h3 className="card-title-enhanced">✨ Try Our AI Strategist</h3>
                <p className="card-description-enhanced">
                  Enter your industry or business goal below to see how AI can create a competitive advantage for you.
                </p>
                <input 
                  type="text" 
                  className="business-input-enhanced"
                  placeholder="e.g., 'a local coffee shop' or 'increase online sales'"
                  value={businessInput}
                  onChange={(e) => setBusinessInput(e.target.value)}
                />
                <button 
                  className="generate-strategy-btn-enhanced"
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
          </div>
        </div>
      </section>

      {/* Modal for displaying results */}
      {isModalVisible && (
        <div className="modal-overlay-enhanced" onClick={(e) => e.target === e.currentTarget && hideModal()}>
          <div className="modal-content-enhanced">
            <button className="modal-close-btn-enhanced" onClick={hideModal}>
              &times;
            </button>
            <div className="strategy-results-enhanced">
              {strategyResults?.error ? (
                <p style={{ color: '#ff8a8a' }}>{strategyResults.error}</p>
              ) : strategyResults?.strategy ? (
                <>
                  <h4>AI Strategy for: <span className="accent-text-enhanced">{businessInput}</span></h4>
                  {strategyResults.strategy.map((item: any, index: number) => (
                    <div key={index} className="strategy-step-enhanced">
                      <h5>{item.step}: {item.action}</h5>
                      <p>{item.benefit}</p>
                    </div>
                  ))}
                </>
              ) : (
                <p>No strategy could be generated. Please try a different query.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Process;
