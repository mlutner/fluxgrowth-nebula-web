
import React from 'react';
import { Brain, Zap, MessageSquare, Target, Cog, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Workflow automations",
      description: "We automate your workflows by connecting your favourite applications. Boosting efficiency and enhancing productivity.",
      mockup: "workflow"
    },
    {
      icon: MessageSquare,
      title: "Chatbot development",
      description: "We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.",
      mockup: "chatbot"
    },
    {
      icon: Target,
      title: "Business consulting",
      description: "Using our expertise, we delve deep into your organisation and consult you on how AI-driven automations could enhance your operations.",
      mockup: "consulting"
    }
  ];

  const WorkflowMockup = () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-white/10">
        <div className="w-8 h-8 bg-nebula-lime rounded flex items-center justify-center">
          <span className="text-charcoal text-xs font-semibold">F</span>
        </div>
        <div>
          <div className="text-white text-sm font-medium font-body">Framer</div>
          <div className="text-white/60 text-xs font-body">New contact form submission</div>
        </div>
        <div className="ml-auto w-6 h-6 bg-nebula-lime rounded-full flex items-center justify-center">
          <span className="text-charcoal text-xs">+</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-white/10">
        <div className="w-8 h-8 bg-nebula-lime rounded flex items-center justify-center">
          <span className="text-charcoal text-xs font-semibold">A</span>
        </div>
        <div>
          <div className="text-white text-sm font-medium font-body">Airtable</div>
          <div className="text-white/60 text-xs font-body">Add data to Airtable</div>
        </div>
        <div className="ml-auto w-6 h-6 bg-nebula-lime rounded-full flex items-center justify-center">
          <span className="text-charcoal text-xs">+</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-white/10">
        <div className="w-8 h-8 bg-nebula-lime rounded flex items-center justify-center">
          <span className="text-charcoal text-xs font-semibold">O</span>
        </div>
        <div>
          <div className="text-white text-sm font-medium font-body">OpenAI</div>
          <div className="text-white/60 text-xs font-body">Write personalised message</div>
        </div>
        <div className="ml-auto w-6 h-6 bg-nebula-lime rounded-full flex items-center justify-center">
          <span className="text-charcoal text-xs">+</span>
        </div>
      </div>
    </div>
  );

  const ChatbotMockup = () => (
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">SS</span>
        </div>
        <div>
          <div className="text-white text-sm font-medium font-body">Siena Sinner</div>
          <div className="text-white/60 text-xs font-body">Summarize this report</div>
        </div>
      </div>
      
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-nebula-lime rounded flex items-center justify-center">
          <span className="text-charcoal text-xs font-bold">AI</span>
        </div>
        <div className="flex-1">
          <div className="text-white text-sm font-medium font-body">AI assistant</div>
          <div className="text-white/60 text-xs font-body">Sure, here's a summary:</div>
          <div className="mt-2 p-2 bg-white/5 rounded border border-white/10">
            <div className="w-4 h-4 text-white/60">▶</div>
          </div>
        </div>
      </div>
    </div>
  );

  const ConsultingMockup = () => (
    <div className="relative">
      <div className="absolute top-2 right-2 bg-nebula-lime text-charcoal px-2 py-1 rounded text-xs font-semibold font-body">
        +15%
      </div>
      <svg viewBox="0 0 200 100" className="w-full h-20">
        <path
          d="M 10,80 Q 50,20 100,40 T 190,30"
          stroke="rgb(211, 255, 202)"
          strokeWidth="2"
          fill="none"
          className="opacity-80"
        />
        <path
          d="M 10,85 Q 50,45 100,50 T 190,40"
          stroke="rgb(211, 255, 202)"
          strokeWidth="1.5"
          fill="none"
          className="opacity-60"
        />
      </svg>
    </div>
  );

  const renderMockup = (type: string) => {
    switch (type) {
      case "workflow":
        return <WorkflowMockup />;
      case "chatbot":
        return <ChatbotMockup />;
      case "consulting":
        return <ConsultingMockup />;
      default:
        return null;
    }
  };

  return (
    <section id="services" className="section-padding bg-charcoal">
      <div className="container-custom">
        <div className="text-left mb-16">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Our services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glass-charcoal rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-nebula-lime/30 animate-on-scroll"
            >
              {/* Mockup Section */}
              <div className="mb-8 h-32 bg-white/5 rounded-xl p-4 border border-white/10">
                {renderMockup(service.mockup)}
              </div>
              
              <h3 className="font-body text-2xl font-normal text-white mb-4 group-hover:text-nebula-lime transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="font-body text-white/70 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
