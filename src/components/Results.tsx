
import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const Results = () => {
  const caseStudies = [
    {
      industry: "B2B SaaS",
      company: "TechFlow Solutions",
      metric: "300%",
      description: "Increase in qualified leads",
      details: "Implemented AI-powered lead scoring and automated nurture sequences",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      industry: "Professional Services", 
      company: "Meridian Consulting",
      metric: "40 hours",
      description: "Saved per week",
      details: "Deployed intelligent automation for client onboarding and reporting",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    },
    {
      industry: "E-commerce",
      company: "StyleCraft Retail",
      metric: "25%",
      description: "Conversion rate boost",
      details: "AI-powered product recommendations and personalized customer journeys",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      industry: "Manufacturing",
      company: "Precision Dynamics",
      metric: "60%",
      description: "Cost reduction achieved",
      details: "Predictive maintenance and supply chain optimization through AI",
      icon: Users,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      quote: "FluxGrowth transformed our entire sales process. We're now generating 3x more qualified leads and our team is more productive than ever.",
      name: "Sarah Chen",
      title: "VP of Sales",
      company: "TechFlow Solutions"
    },
    {
      quote: "The chatbot implementation alone saved us 40 hours per week. The ROI was immediate and continues to compound.",
      name: "Michael Rodriguez",
      title: "Operations Director",
      company: "Meridian Consulting"
    },
    {
      quote: "Their AI-powered recommendations increased our conversion rate by 25%. The results speak for themselves.",
      name: "Emma Thompson",
      title: "Head of Digital",
      company: "StyleCraft Retail"
    }
  ];

  return (
    <section id="results" className="section-padding bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-flux-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-flux-dark dark:text-white mb-6 animate-on-scroll">
            Real Results from{' '}
            <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-on-scroll">
            See how our AI solutions have transformed operations and accelerated growth for companies across industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 animate-on-scroll"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <study.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-flux-blue bg-flux-blue/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-flux-dark dark:text-white mb-2">
                    {study.company}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gradient bg-gradient-to-r from-flux-blue to-flux-purple bg-clip-text text-transparent">
                      {study.metric}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                      {study.description}
                    </p>
                  </div>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {study.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-flux-dark to-slate-900 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12 animate-on-scroll">
            What Our Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-dark rounded-xl p-6 hover-lift animate-on-scroll"
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-flux-blue mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <p className="text-white/90 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-flux-blue text-sm">{testimonial.title}</p>
                  <p className="text-white/60 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <button className="bg-flux-blue hover:bg-flux-blue/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-flux-blue/25 hover:-translate-y-1">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;
