
import React from 'react';

const cases = [
  {
    client: 'EcoLife Home',
    result: '1.2M+ Monthly Views',
    growth: '+420% Organic Traffic',
    description: 'We transformed their dormant profile into a traffic-generating machine by focusing on aesthetic home decor storytelling.',
    image: '/images/case-study-eco.png',
    tags: ['E-commerce', 'Home Decor']
  },
  {
    client: 'Veda Skin',
    result: '500k Monthly Views',
    growth: '15% Monthly Conversion Rate',
    description: 'Using high-intent keyword research, we positioned Veda as the go-to authority for sustainable skincare routines.',
    image: '/images/case-study-veda.png',
    tags: ['Beauty', 'Brand Authority']
  },
  {
    client: 'The Daily Brew',
    result: '800k Monthly Reach',
    growth: '10k Website Visits/mo',
    description: 'Coffee lifestyle content that drives real people to local shop locations and online subscriptions.',
    image: '/images/case-study-coffee.png',
    tags: ['Food & Bev', 'Local Business']
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-[#D71920] font-bold uppercase tracking-widest text-sm mb-4">Case Studies</h4>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Real Growth for <br /><span className="text-[#D71920]">Real Brands.</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 max-w-sm">
            Proven strategies that turn Pinterest from a "nice-to-have" into your primary traffic driver.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {cases.map((study, idx) => (
            <div key={idx} className="group flex flex-col h-full bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:shadow-red-100 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-2">{study.client}</h3>

                <div className="flex flex-col gap-1 mb-6">
                  <span className="text-[#D71920] font-black text-3xl">{study.result}</span>
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1 uppercase tracking-wider">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
                    </svg>
                    {study.growth}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {study.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-[#D71920] transition-colors group/btn"
                >
                  View Full Case Study
                  <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-black mb-4">Want numbers like these?</h3>
            <p className="text-slate-400 text-lg">Every brand is unique. We build the strategy that works specifically for your niche and audience.</p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap bg-[#D71920] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-red-700 transition-all hover:shadow-lg shadow-red-500/20"
          >
            Get My Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
