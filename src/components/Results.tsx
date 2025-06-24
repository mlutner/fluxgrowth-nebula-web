
import React from 'react';
import { TrendingUp, Clock, DollarSign, Users, CheckCircle } from 'lucide-react';

const Results = () => {
  const caseStudies = [
    {
      year: "2023",
      company: "Doodle - customer support chatbot",
      description: "Implemented AI-powered lead scoring and automated nurture sequences",
      icon: TrendingUp,
      color: "from-[#a8d5ba] to-[#8fbc8f]"
    },
    {
      year: "2024", 
      company: "Dash - AI calling system",
      description: "Deployed intelligent automation for client onboarding and reporting",
      icon: Clock,
      color: "from-[#a8d5ba] to-[#8fbc8f]"
    },
    {
      year: "2024",
      company: "Atomic - AI driven outreach",
      description: "AI-powered product recommendations and personalized customer journeys",
      icon: DollarSign,
      color: "from-[#a8d5ba] to-[#8fbc8f]"
    }
  ];

  const testimonials = [
    {
      quote: "We're delighted with our development subscription from Nebula",
      subtext: "Their flexible subscription based model is so innovative, we can just pause it whenever we want!",
      name: "Peter Davis",
      company: "Atomic"
    },
    {
      quote: "Their AI-development consulting report was eye-opening",
      subtext: "Nebula has done an amazing job for us with their AI consulting sessions, absolutely eye-opening!",
      name: "Sofie Bezos",
      title: "CEO",
      company: "Tobri"
    },
    {
      quote: "Nebula has increased our productivity",
      subtext: "Can't recommend them enough, they've been a real game-changer for our workflow.",
      name: "Alex Johnson",
      company: "TechFlow"
    }
  ];

  return (
    <section id="results" className="section-padding bg-charcoal">
      <div className="container-custom">
        {/* Our Work Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 animate-on-scroll">
              Our{' '}
              <span className="bg-gradient-to-r from-[#a8d5ba] via-[#a8d5ba] to-[#a8d5ba] bg-clip-text text-transparent">
                Work
              </span>
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="group glass-charcoal rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-[#a8d5ba]/30 animate-on-scroll flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-light text-white/60 bg-white/5 px-3 py-1 rounded-full">
                      {study.year}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-2 group-hover:text-[#a8d5ba] transition-colors duration-300">
                    {study.company}
                  </h3>
                  
                  <p className="text-white/60 font-light leading-relaxed">
                    {study.description}
                  </p>
                </div>

                <div className="ml-8">
                  <div className="w-12 h-12 flex items-center justify-center text-white/60 group-hover:text-[#a8d5ba] transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7l10 10M17 7l-10 10" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What our clients say */}
        <div className="mb-32">
          <h3 className="text-4xl md:text-5xl font-light text-white text-center mb-16 animate-on-scroll">
            What our{' '}
            <span className="bg-gradient-to-r from-[#a8d5ba] via-[#a8d5ba] to-[#a8d5ba] bg-clip-text text-transparent">
              clients say
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-charcoal rounded-2xl p-8 hover-lift animate-on-scroll border border-white/10"
              >
                <div className="mb-8">
                  <h4 className="text-xl font-light text-white mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </h4>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    {testimonial.subtext}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#a8d5ba] to-[#8fbc8f] rounded-full flex items-center justify-center">
                    <span className="text-charcoal font-medium text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white font-light text-sm">{testimonial.name}</p>
                    {testimonial.title && <p className="text-[#a8d5ba] text-xs">{testimonial.title}</p>}
                    <p className="text-white/60 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plans Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 animate-on-scroll">
              Plans to suit your{' '}
              <span className="bg-gradient-to-r from-[#a8d5ba] via-[#a8d5ba] to-[#a8d5ba] bg-clip-text text-transparent">
                needs
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="glass-charcoal rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-lg font-light text-white/80 mb-2">Basic</h3>
                <div className="mb-4">
                  <span className="text-4xl font-light text-white">€1,997</span>
                  <span className="text-white/60 font-light ml-2">Per month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">2 dedicated developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Custom workflow automations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Unlimited requests</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Unlimited revisions</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-white/40 font-light line-through">Business consulting</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-white/40 font-light line-through">Custom chatbots</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Cancel & pause anytime</span>
                </div>
              </div>

              <button className="w-full animated-cta-button px-6 py-3 rounded-lg transition-all duration-300">
                <span className="relative z-10">Get Started with Basic →</span>
              </button>
            </div>

            {/* Pro Plan */}
            <div className="glass-charcoal rounded-2xl p-8 border border-[#a8d5ba]/30 hover:border-[#a8d5ba]/50 transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#a8d5ba] text-charcoal px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-light text-white/80 mb-2">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-light text-white">€3,997</span>
                  <span className="text-white/60 font-light ml-2">Per month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">2 dedicated developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Custom workflow automations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Unlimited requests</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Unlimited revisions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Business consulting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Custom chatbots</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Cancel & pause anytime</span>
                </div>
              </div>

              <button className="w-full animated-cta-button px-6 py-3 rounded-lg transition-all duration-300">
                <span className="relative z-10">Get Started with Pro →</span>
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-charcoal rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-lg font-light text-white/80 mb-2">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-light text-white">Custom</span>
                  <span className="text-white/60 font-light ml-2">Per month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">X dedicated developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Custom workflow automations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Unlimited requests</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Unlimited revisions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Business consulting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Custom chatbots</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#a8d5ba] flex-shrink-0" />
                  <span className="text-white/80 font-light">Cancel & pause anytime</span>
                </div>
              </div>

              <button className="w-full animated-cta-button px-6 py-3 rounded-lg transition-all duration-300">
                <span className="relative z-10">Contact us →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
