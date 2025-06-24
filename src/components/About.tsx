
import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const words = [
    { text: "We're", isGreen: false, class: "word-1" },
    { text: "your", isGreen: false, class: "word-2" },
    { text: "AI", isGreen: false, class: "word-3" },
    { text: "transformation", isGreen: true, class: "word-4" },
    { text: "partners", isGreen: false, class: "word-5" },
    { text: "🤝", isEmoji: true, class: "animated-emoji" },
    { text: "We", isGreen: false, class: "word-6" },
    { text: "turn", isGreen: false, class: "word-7" },
    { text: "complex", isGreen: false, class: "word-8" },
    { text: "technology", isGreen: false, class: "word-9" },
    { text: "into", isGreen: false, class: "word-10" },
    { text: "competitive", isGreen: false, class: "word-11" },
    { text: "💎", isEmoji: true, class: "sparkle-emoji" },
    { text: "business", isGreen: true, class: "word-12" },
    { text: "advantages.", isGreen: true, class: "word-13" }
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
      className="explainer-section section-padding relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 800px 400px at center, rgba(181, 227, 192, 0.03) 0%, transparent 50%),
          radial-gradient(ellipse 1200px 600px at center, rgba(181, 227, 192, 0.02) 0%, transparent 60%),
          transparent
        `
      }}
    >
      <div className="container-custom">
        <div className="max-w-7xl mx-auto text-center">
          <p className="explainer-text text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tighter pb-8 px-4">
            {words.map((word, index) => {
              if (word.isEmoji) {
                return (
                  <span 
                    key={index}
                    className={`${word.class} inline-flex items-center justify-center mx-3 md:mx-6`}
                  >
                    <span className="text-5xl md:text-6xl lg:text-7xl">{word.text}</span>
                  </span>
                );
              }
              
              return (
                <span
                  key={index}
                  className={`animated-word ${word.class} inline-block mx-2 md:mx-4 ${
                    word.isGreen ? 'highlight-text' : ''
                  }`}
                >
                  {word.text}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
