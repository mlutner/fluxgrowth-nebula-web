
import React, { useState, useEffect } from 'react';

const About = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const [showEmojis, setShowEmojis] = useState({ first: false, second: false });
  
  const words = [
    { text: "We're", isGreen: false },
    { text: "your", isGreen: false },
    { text: "AI", isGreen: false },
    { text: "transformation", isGreen: true },
    { text: "partners", isGreen: false },
    { text: "🤝", isEmoji: true, key: 'first' },
    { text: "We", isGreen: false },
    { text: "turn", isGreen: false },
    { text: "complex", isGreen: false },
    { text: "technology", isGreen: false },
    { text: "into", isGreen: false },
    { text: "competitive", isGreen: false },
    { text: "💎", isEmoji: true, key: 'second' },
    { text: "business", isGreen: true },
    { text: "advantages.", isGreen: true }
  ];
  
  useEffect(() => {
    if (visibleWords < words.length) {
      const timer = setTimeout(() => {
        setVisibleWords(visibleWords + 1);
        
        // Show emojis when they become visible
        const currentWord = words[visibleWords];
        if (currentWord?.isEmoji) {
          setTimeout(() => {
            setShowEmojis(prev => ({ ...prev, [currentWord.key]: true }));
          }, 300);
        }
      }, 200); // Delay between word reveals
      
      return () => clearTimeout(timer);
    }
  }, [visibleWords, words.length]);

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.85] tracking-tighter">
            {words.map((word, index) => {
              if (word.isEmoji) {
                return (
                  <span 
                    key={index}
                    className={`inline-flex items-center justify-center w-16 h-16 mx-2 rounded-2xl transition-all duration-500 animated-word ${
                      index < visibleWords ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } ${
                      showEmojis[word.key] 
                        ? 'bg-sage-green/20 border border-sage-green/30 scale-100' 
                        : 'scale-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-4xl">{word.text}</span>
                  </span>
                );
              }
              
              return (
                <span
                  key={index}
                  className={`animated-word inline-block mx-1 ${
                    index < visibleWords ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  } ${word.isGreen ? 'text-sage-green' : ''} transition-all duration-600 ease-out`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word.text}
                </span>
              );
            })}
            {visibleWords === words.length && (
              <span className="animate-pulse ml-1">|</span>
            )}
          </h2>
        </div>
      </div>
      
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent"></div>
    </section>
  );
};

export default About;
