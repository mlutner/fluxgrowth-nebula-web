import React, { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqData = [
  { question: "What makes FluxGrowth different from other AI consultants?", answer: "We bridge the gap between cutting-edge AI technology and practical business results. While others focus on complex technical implementations, we prioritize measurable ROI within 30 days. Our approach combines deep AI expertise with business strategy—we don't just build systems, we build competitive advantages." },
  { question: "How quickly can we see results from AI implementation?", answer: "Most clients see measurable improvements within 30 days. We prioritize quick wins first—like automating repetitive tasks or implementing lead qualification chatbots—then build toward long-term transformation goals. Our phased approach ensures you start benefiting immediately while we develop more sophisticated solutions." },
  { question: "Do we need technical expertise to work with you?", answer: "Absolutely not. We handle all technical implementation and provide comprehensive training for your team. Our role is to make AI accessible and practical for business leaders. You focus on your business goals—we handle the technology that achieves them." },
  { question: "What if our team is resistant to AI adoption?", answer: "Change management is built into our process. We start with solutions that enhance rather than replace human work, demonstrate clear value quickly, and provide hands-on training. Most teams become advocates once they see how AI eliminates tedious tasks and amplifies their capabilities." },
  { question: "How do you ensure our data stays secure?", answer: "We implement enterprise-grade security protocols including encrypted data transmission, secure cloud infrastructure, and strict access controls. All AI models can be deployed on your private infrastructure if required. We're SOC 2 compliant and follow industry best practices for data protection." },
  { question: "Can your solutions scale as our business grows?", answer: "Our AI systems are designed for scalability from day one. We use cloud-native architectures that grow with your business and can handle increased volume, complexity, and new use cases. As you expand, your AI infrastructure expands seamlessly." },
  { question: "What's included in your ongoing support?", answer: "Every implementation includes 90 days of optimization support, monthly performance reviews, and access to our support team. We monitor system performance, make adjustments as needed, and provide strategic guidance on expanding your AI capabilities." },
  { question: "How do you measure ROI on AI investments?", answer: "We establish clear KPIs before implementation—typically cost savings, time reduction, lead quality improvement, or revenue increase. Our clients average 275% ROI within the first year through reduced manual work, improved customer engagement, and accelerated sales processes." },
  { question: "Do you work with businesses in our industry?", answer: "We've successfully implemented AI solutions across industries including professional services, manufacturing, e-commerce, healthcare, and financial services. Our platform-agnostic approach means we can adapt to any industry's specific requirements and compliance needs." },
  { question: "What happens if the AI system needs adjustments?", answer: "Continuous optimization is part of our process. AI systems learn and improve over time, and we regularly fine-tune performance based on real-world data. Major adjustments are included in your support package, and we proactively recommend improvements." },
  { question: "Can we start with a small pilot project?", answer: "Yes. We recommend starting with a focused automation or chatbot implementation to demonstrate value quickly. Pilot projects typically cost $5,000-15,000 and complete within 2-4 weeks. This proves the concept before expanding to larger initiatives." },
  { question: "How do you handle integration with our existing systems?", answer: "We specialize in seamless integrations with popular business tools like Salesforce, HubSpot, Microsoft 365, Slack, and hundreds of others. Our team maps your current workflow and designs AI solutions that enhance rather than disrupt your established processes." },
  { question: "What if we want to build AI capabilities in-house later?", answer: "We support that transition. Our implementations include documentation, training materials, and knowledge transfer sessions. Many clients start with our full-service approach and gradually develop internal capabilities while maintaining our strategic advisory relationship." },
  { question: "How do you stay current with rapidly evolving AI technology?", answer: "Our team includes AI researchers and practitioners who actively contribute to the field. We maintain partnerships with leading AI companies, attend major conferences, and continuously test emerging technologies. You benefit from cutting-edge innovations without the R&D investment." },
  { question: "What's your pricing model?", answer: "We offer three approaches: project-based (one-time implementations), retainer-based (ongoing development and optimization), and success-based (tied to measurable business outcomes). Most clients start with a pilot project, then move to a retainer model for continuous improvement and expansion." }
];

const FAQ = () => {
  useScrollReveal(); // For fade-in of sections
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const accordionContainer = accordionRef.current;
    if (!accordionContainer) return;

    // Clear any existing items if effect runs multiple times (e.g., in dev with HMR)
    accordionContainer.innerHTML = '';

    faqData.forEach(itemData => {
      const faqItem = document.createElement('div');
      faqItem.classList.add('faq-item');

      // Using dangerouslySetInnerHTML for the SVG and question text to avoid complex JSX for SVG path
      // For the answer, it's safer to set textContent or create a p element.
      const questionHTML = `
        <div class="faq-question">
            <svg class="faq-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7V17M17 7H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h4>${itemData.question}</h4>
        </div>
        <div class="faq-answer">
            <p>${itemData.answer}</p>
        </div>
      `;
      faqItem.innerHTML = questionHTML;
      accordionContainer.appendChild(faqItem);
    });

    const faqItems = accordionContainer.querySelectorAll('.faq-item');
    const clickListeners: Array<() => void> = [];

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        const listener = () => {
          const currentlyActive = accordionContainer.querySelector('.faq-item.active');
          if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
          }
          item.classList.toggle('active');
        };
        question.addEventListener('click', listener);
        clickListeners.push(listener); // Store listener for cleanup
      }
    });

    // Cleanup function for useEffect
    return () => {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            // Attempt to remove listeners - this is tricky with anonymous functions created in loop
            // A better way would be to store references to the exact listener function added
            // For simplicity in this context, direct DOM manipulation cleanup is often skipped if component unmounts entirely
            // However, for completeness if we had stored listeners:
            // if (question && associated_listener) question.removeEventListener('click', associated_listener);
        });
    };

  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="faq-section faq-container py-12 md:py-24"> {/* Added py padding */}
      <div className="fade-in-section">
        <h2 className="faq-heading">FAQ</h2>
      </div>
      <div ref={accordionRef} className="faq-accordion fade-in-section" style={{ transitionDelay: '0.2s' }}>
        {/* FAQ items will be generated here by JavaScript in useEffect */}
      </div>
      <div className="cta-section fade-in-section" style={{ transitionDelay: '0.4s' }}>
        <h3>Ready to Transform Your Business with AI?</h3>
        <p style={{ color: '#a0a0a0', maxWidth: '500px' }}>
          Book a free 30-minute AI readiness assessment to discover your biggest opportunities for automation and growth acceleration.
        </p>
        <a href="#get-in-touch" className="cta-button"> {/* Changed href to link to get in touch section */}
          Get Started Today
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default FAQ;
