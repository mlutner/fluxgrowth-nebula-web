
import React from 'react';
import { Brain, Zap, MessageSquare, Target, Cog, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Roadmapping",
      description: "Custom AI implementation plans tailored to your business goals and technical capabilities."
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Streamline operations with smart automation that learns and adapts to your workflows."
    },
    {
      icon: MessageSquare,
      title: "Chatbot Development & Optimization",
      description: "Deploy conversational AI that handles customer inquiries 24/7 with human-like precision."
    },
    {
      icon: Target,
      title: "AI-Powered Lead Generation",
      description: "Identify and qualify high-value prospects using predictive analytics and machine learning."
    },
    {
      icon: Cog,
      title: "Sales Process Automation",
      description: "Automate your entire sales funnel from lead capture to deal closure."
    },
    {
      icon: GraduationCap,
      title: "Education & Change Management",
      description: "Train your team and ensure smooth adoption of AI solutions across your organization."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-flux-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-flux-dark dark:text-white mb-6 animate-on-scroll">
            How We Accelerate Your{' '}
            <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-on-scroll">
            Comprehensive AI solutions designed to transform your business operations and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 hover:border-flux-blue/30 animate-on-scroll"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-flux-blue to-flux-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-flux-dark dark:text-white mb-4 group-hover:text-flux-blue transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-flux-blue to-flux-purple rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <button className="bg-flux-blue hover:bg-flux-blue/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-flux-blue/25 hover:-translate-y-1">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
