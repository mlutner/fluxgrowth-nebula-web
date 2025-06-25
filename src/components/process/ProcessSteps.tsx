
import React from 'react';

export const processSteps = [
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
    // Replacing SVG with code snippet animation structure
    svg: (
      <div className="architect-card-graphic code-container rounded-xl"> {/* Added scoping class and structure from snippet */}
          <div className="collaborator-cursor">Live Build</div>
          <div className="code-snippet">
              <pre dangerouslySetInnerHTML={{ __html: `
<span class="syntax-keyword">import</span> { FeatureSection } <span class="syntax-keyword">from</span> <span class="syntax-component">'nebula-template'</span>;

<span class="syntax-keyword">const</span> App = () => {
  <span class="syntax-keyword">return</span> (
      <span class="syntax-tag">&lt;div&gt;</span>
          <span class="syntax-component">&lt;Header /&gt;</span>
          <span class="syntax-component">&lt;HeroSection /&gt;</span>
          <span class="syntax-component">&lt;FeatureSection /&gt;</span>
          <span class="syntax-component">&lt;Footer /&gt;</span>
      <span class="syntax-tag">&lt;/div&gt;</span>
  );
}

<span class="syntax-keyword">export default</span> App;

<span class="syntax-comment">// Deployment in progress...</span>
<span class="syntax-comment">// CI/CD pipeline running...</span>
<span class="syntax-comment">// ✓ Linting complete.</span>
<span class="syntax-comment">// ✓ Tests passed.</span>
<span class="syntax-comment">// ✓ Building production modules...</span>
<span class="syntax-comment">// Build successful.</span>
<span class="syntax-comment">// Deploying to production environment...</span>
`}} />
          </div>
      </div>
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
    // Replacing SVG with progress bar structure
    svg: (
      <div className="optimize-card-graphic progress-bars-container rounded-xl"> {/* Added scoping class and structure from snippet */}
          {/* Speed */}
          <div className="progress-item">
              <span className="progress-label">Speed</span>
              <div className="progress-track">
                  <div className="progress-fill progress-fill-speed"></div>
              </div>
          </div>
          {/* Security */}
          <div className="progress-item">
              <span className="progress-label">Security</span>
              <div className="progress-track">
                  <div className="progress-fill progress-fill-security"></div>
              </div>
          </div>
          {/* Accuracy */}
          <div className="progress-item">
              <span className="progress-label">Accuracy</span>
              <div className="progress-track">
                  <div className="progress-fill progress-fill-accuracy"></div>
              </div>
          </div>
      </div>
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
