
import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const words = [
    { text: "We're", isNormal: true, class: "word-1" },
    { text: "your", isNormal: true, class: "word-2" },
    { text: "AI", isNormal: true, class: "word-3" },
    { text: "transformation", isHighlight: true, class: "word-4" },
    { text: "partners", isNormal: true, class: "word-5" },
    { text: "🤝", isEmoji: true, class: "animated-emoji" },
    { text: "We", isNormal: true, class: "word-6" },
    { text: "turn", isNormal: true, class: "word-7" },
    { text: "complex", isNormal: true, class: "word-8" },
    { text: "technology", isNormal: true, class: "word-9" },
    { text: "into", isNormal: true, class: "word-10" },
    { text: "competitive", isHighlight: true, class: "word-11" },
    { text: "💎", isEmoji: true, class: "sparkle-emoji" },
    { text: "business", isHighlight: true, class: "word-12" },
    { text: "advantages.", isHighlight: true, class: "word-13" }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true);
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimating]);

  return (
    <section 
      ref={sectionRef}
      className="explainer-section section-padding bg-charcoal relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <p className="explainer-text">
            {words.map((word, index) => {
              if (word.isEmoji) {
                return (
                  <span 
                    key={index}
                    className={`${word.class} emoji inline-block mx-1`}
                  >
                    {word.text}
                  </span>
                );
              }
              
              return (
                <span
                  key={index}
                  className={`animated-word ${word.class} inline-block mx-3 ${
                    word.isHighlight ? 'highlight-word' : 'normal-word'
                  }`}
                >
                  {word.text}
                </span>
              );
            })}
          </p>
        </div>
      </div>
      
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent"></div>
    </section>
  );
};

export default About;
