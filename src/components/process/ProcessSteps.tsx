
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
