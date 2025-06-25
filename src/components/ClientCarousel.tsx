import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal'; // Assuming this handles 'fade-in-section'

const testimonials = [
  {
    quote: "Their AI-powered lead generation changed the game for us.",
    body: "The automated qualification system filters out noise and delivers high-intent leads directly to our sales team. Our conversion rate has nearly doubled.",
    avatarUrl: "https://placehold.co/100x100/0F0F0F/D3FFCA?text=MC",
    name: "Maya Chen",
    title: "COO, Innovate Dynamics"
  },
  {
    quote: "Finally, a tech partner that understands business outcomes.",
    body: "FluxGrowth didn't just build an automation; they mapped our entire workflow and found efficiencies we never knew existed. The ROI was immediate.",
    avatarUrl: "https://placehold.co/100x100/0F0F0F/D3FFCA?text=BC",
    name: "Ben Carter",
    title: "Founder, QuantumLeap Tech"
  },
  {
    quote: "The chatbot now handles over 85% of our support queries.",
    body: "Our team is now free to focus on high-value interactions. Customer satisfaction is up, and our support overhead is down. An absolute win-win.",
    avatarUrl: "https://placehold.co/100x100/0F0F0F/D3FFCA?text=OR",
    name: "Olivia Reed",
    title: "Head of CX, Stellar Goods"
  },
  {
    quote: "Their consulting report was an eye-opener.",
    body: "The AI readiness assessment gave us a clear, actionable roadmap. We identified three high-impact automation opportunities in the first session alone.",
    avatarUrl: "https://placehold.co/100x100/0F0F0F/D3FFCA?text=DG",
    name: "David Grant",
    title: "CEO, Apex Manufacturing"
  }
];

// Duplicate testimonials for seamless loop effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
  <div className="testimonial-card">
    <h3 className="testimonial-quote">{testimonial.quote}</h3>
    <p className="testimonial-body">{testimonial.body}</p>
    <div className="reviewer-info">
      <div className="reviewer-avatar">
        <img src={testimonial.avatarUrl} alt={`${testimonial.name} Avatar`} />
      </div>
      <div>
        <p className="reviewer-name">{testimonial.name}</p>
        <p className="reviewer-title">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const ClientCarousel = () => {
  useScrollReveal(); // For the main section fade-in

  return (
    <section className="testimonials-section fade-in-section">
      <h2 className="section-heading">
        What our <span className="accent-text">clients</span> say
      </h2>
      <div className="testimonial-carousel">
        <div className="testimonial-track">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
