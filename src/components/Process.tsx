import React, { useState, useEffect } from 'react';

const Process = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [businessInput, setBusinessInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [strategyResults, setStrategyResults] = useState<any>(null);

  const steps = [
    {
      number: "01.",
      title: "Assess",
      description: "We dive deep into your current operations to identify AI opportunities that matter. No generic assessments—just strategic insights tailored to unlock your specific competitive advantages.",
      svg: (
        <svg className="assess-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="radar-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(211, 255, 202, 0.4)"/>
              <stop offset="100%" stopColor="rgba(211, 255, 202, 0)"/>
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="45" stroke="#232323" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="50" r="30" stroke="#232323" strokeWidth="1" fill="none" strokeDasharray="4"/>
          <g className="radar-sweep">
            <path d="M 50 50 L 50 5 A 45 45 0 0 1 85.3 27.5 Z" fill="url(#radar-gradient)"/>
          </g>
          <circle className="radar-pulse" cx="65" cy="35" r="4" fill="rgb(211, 255, 202)"/>
          <circle className="radar-pulse" cx="30" cy="60" r="3" fill="rgb(211, 255, 202)" style={{animationDelay: '0.5s'}}/>
        </svg>
      )
    },
    {
      number: "02.",
      title: "Architect", 
      description: "Your custom AI roadmap takes shape. We design solutions that integrate seamlessly with your existing workflows while positioning you for exponential growth ahead.",
      svg: (
        <svg className="architect-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#232323" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          <path className="slide-anim" d="M 85 15 L 85 85 L 15 85" stroke="rgb(211, 255, 202)" strokeWidth="2" fill="none" />
          <path className="draw-anim" d="M 25 75 A 50 50 0 0 1 75 25" stroke="rgb(211, 255, 202)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      )
    },
    {
      number: "03.",
      title: "Activate",
      description: "Implementation begins with precision and pace. Our team deploys your AI systems—from intelligent chatbots to automated workflows—delivering measurable results within 30 days.",
      svg: (
        <svg className="activate-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="pulse-grad">
              <stop offset="0%" stopColor="rgba(211, 255, 202, 0.8)"/>
              <stop offset="100%" stopColor="rgba(211, 255, 202, 0)"/>
            </radialGradient>
          </defs>
          <circle className="node-center" cx="50" cy="50" r="10" fill="url(#pulse-grad)"/>
          <line className="node-line" x1="50" y1="50" x2="20" y2="20" stroke="rgba(211, 255, 202, 0.5)" strokeWidth="2"/>
          <line className="node-line" x1="50" y1="50" x2="80" y2="20" stroke="rgba(211, 255, 202, 0.5)" strokeWidth="2" style={{animationDelay: '0.5s'}}/>
          <line className="node-line" x1="50" y1="50" x2="20" y2="80" stroke="rgba(211, 255, 202, 0.5)" strokeWidth="2" style={{animationDelay: '1s'}}/>
          <line className="node-line" x1="50" y1="50" x2="80" y2="80" stroke="rgba(211, 255, 202, 0.5)" strokeWidth="2" style={{animationDelay: '1.5s'}}/>
          <circle cx="50" cy="50" r="5" fill="rgb(211, 255, 202)"/>
        </svg>
      )
    },
    {
      number: "04.",
      title: "Optimize",
      description: "Performance monitoring meets continuous improvement. We refine, adjust, and enhance your AI systems until they're operating at peak efficiency and maximum ROI.",
      svg: (
        <svg className="optimize-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path className="data-line" d="M10 80 C 30 80, 40 30, 60 30 S 70 20, 90 20" stroke="rgb(211, 255, 202)" strokeWidth="3" fill="none"/>
          <circle className="data-point" cx="10" cy="80" r="4" fill="#0F0F0F" stroke="rgb(211, 255, 202)" strokeWidth="2" style={{'--delay': '0.5s'} as React.CSSProperties}/>
          <circle className="data-point" cx="60" cy="30" r="4" fill="#0F0F0F" stroke="rgb(211, 255, 202)" strokeWidth="2" style={{'--delay': '2s'} as React.CSSProperties}/>
          <circle className="data-point" cx="90" cy="20" r="4" fill="#0F0F0F" stroke="rgb(211, 255, 202)" strokeWidth="2" style={{'--delay': '3s'} as React.CSSProperties}/>
        </svg>
      )
    },
    {
      number: "05.",
      title: "Accelerate",
      description: "Scale without limits. With proven AI infrastructure in place, we help you expand capabilities, capture new markets, and establish your position as the industry leader you're destined to become.",
      svg: (
        <svg className="accelerate-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path className="arrow1" d="M 10 30 L 30 50 L 10 70" stroke="rgb(211, 255, 202)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path className="arrow2" d="M 40 30 L 60 50 L 40 70" stroke="rgb(211, 255, 202)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path className="arrow3" d="M 70 30 L 90 50 L 70 70" stroke="rgb(211, 255, 202)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

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

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const handleGenerateStrategy = async () => {
    if (!businessInput.trim()) {
      alert("Please enter a business type or goal.");
      return;
    }

    setIsLoading(true);
    
    const prompt = `You are a world-class AI strategy consultant. A potential client from the '${businessInput}' sector wants to understand how AI can create a competitive advantage. Generate a concise, actionable, 3-step AI strategy for them. For each step, provide a clear 'action' and a 'benefit' explaining the value. The tone should be professional, insightful, and inspiring. Format the output as a JSON object with a 'strategy' array, where each object has 'step', 'action', and 'benefit' keys.`;

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

  const handleGetStarted = () => {
    hideModal();
    // Scroll to the contact section or trigger contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no contact section, you could open a contact modal or navigate to contact page
      window.location.href = '#contact';
    }
  };

  return (
    <>
      <section id="process" className="process-section-enhanced-v2 bg-charcoal">
        <div className="container-custom">
          <h2 className="process-heading-enhanced-v2 fade-in-section">
            Our <span className="accent-text-enhanced">Process</span>
          </h2>
          
          <div className="process-grid-enhanced-v2">
            {steps.map((step, index) => (
              <div 
                key={index}
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
            ))}
            
            {/* AI Strategist Card */}
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
          </div>
        </div>
      </section>

      {/* Modal for displaying results */}
      {isModalVisible && (
        <div className="modal-overlay-enhanced-v2" onClick={(e) => e.target === e.currentTarget && hideModal()}>
          <div className="modal-content-enhanced-v2">
            <button className="modal-close-btn-enhanced-v2" onClick={hideModal}>
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
                      className="cta-btn-enhanced"
                      onClick={handleGetStarted}
                      style={{
                        backgroundColor: 'rgb(211, 255, 202)',
                        color: '#080807',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: '700',
                        fontSize: '1rem',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '14px 28px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgb(211, 255, 202)';
                        e.currentTarget.style.transform = 'translateY(0)';
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
      )}
    </>
  );
};

export default Process;
