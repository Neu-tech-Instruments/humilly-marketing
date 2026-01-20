
import React from 'react';

const services = [
  {
    title: 'Pinterest SEO Mastery',
    description: 'We optimize your profile and pins using the latest keyword research to ensure you show up exactly where your customers are searching.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Custom Pin Design',
    description: 'High-conversion, click-worthy pin graphics designed to stop the scroll and drive traffic directly to your offers or website.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Account Management',
    description: 'Hands-off marketing. We handle scheduling, Tailwind management, idea pins, and trend-spotting so you can focus on your business.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: 'Content Strategy',
    description: 'Aligning your brand voice with visual storytelling to turn casual scrollers into loyal, long-term brand advocates.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden relative">
      {/* Hand-drawn accent */}
      <div className="absolute top-10 right-[10%] hidden lg:block opacity-20 rotate-12">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50C30 20 80 20 110 50C90 80 40 80 10 50Z" stroke="#D71920" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5"/>
          <path d="M60 10V110" stroke="#D71920" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h4 className="text-[#D71920] font-bold uppercase tracking-widest text-sm mb-4">What We Do</h4>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Tailored <span className="relative">Systems
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 4 C 20 8 80 0 100 4" stroke="#D71920" strokeWidth="4" fill="transparent" />
              </svg>
            </span> <br className="hidden md:block" /> for Organic Growth.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="reveal group p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:bg-slate-50 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Subtle inner glow for glass effect */}
              <div className="absolute inset-0 border border-white/50 rounded-[2.5rem] pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-[#D71920] mb-8 group-hover:bg-[#D71920] group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{service.description}</p>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-[#D71920] font-bold text-sm">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
