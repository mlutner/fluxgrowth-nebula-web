import React from 'react';
import { CheckCircle } from 'lucide-react';

const Results = () => {
  return (
    <section id="results" className="section-padding bg-charcoal">
      <div className="container-custom">
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
