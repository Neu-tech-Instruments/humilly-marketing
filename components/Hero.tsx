
import React from 'react';

const Hero: React.FC = () => {
  const handleScaleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    const nameInput = document.getElementById('name-input') as HTMLInputElement;
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Focus the input after scroll finishes
      setTimeout(() => {
        if (nameInput) {
          nameInput.focus();
        }
      }, 800);
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-56 md:pb-40 overflow-hidden bg-white">
      {/* Dynamic light leaks */}
      <div className="absolute top-0 left-[-10%] w-[800px] h-[800px] bg-red-50/50 rounded-full blur-[150px] -z-10 animate-drift opacity-60"></div>
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -z-10 animate-drift opacity-40" style={{animationDelay: '-4s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="reveal">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900 text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-10 shadow-xl">
                <span className="flex h-2 w-2 rounded-full bg-[#D71920] animate-ping"></span>
                Human-Centric Branding
              </div>
            </div>
            
            <h1 className="reveal delay-100 text-6xl md:text-[9rem] font-black text-slate-900 leading-[0.85] mb-12 tracking-tighter">
              Grow <br className="hidden sm:block" /> 
              <span className="text-[#D71920] relative inline-block">Fast
                <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0 6 Q 50 12 100 6" stroke="#D71920" strokeWidth="8" fill="transparent" strokeLinecap="round" />
                </svg>
              </span> <br /> on Pinterest.
            </h1>
            
            <p className="reveal delay-200 text-xl md:text-3xl text-slate-500 mb-14 max-w-2xl mx-auto lg:mx-0 leading-tight font-medium tracking-tight">
              We help aesthetic brands connect with real people through elite visual strategy and algorithmic mastery.
            </p>
            
            <div className="reveal delay-300 flex flex-col sm:flex-row gap-6 max-w-lg mx-auto lg:mx-0">
              <a 
                href="#contact" 
                onClick={handleScaleClick}
                className="group relative overflow-hidden bg-[#D71920] text-white px-12 py-6 rounded-3xl font-black text-2xl text-center transition-all shadow-2xl shadow-red-200 hover:shadow-red-400/40 hover:-translate-y-2 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Scaling
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <div className="absolute inset-0 bg-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a 
                href="#portfolio" 
                className="group flex items-center justify-center border-4 border-slate-900 text-slate-900 px-12 py-6 rounded-3xl font-black text-2xl text-center hover:bg-slate-900 hover:text-white transition-all shadow-lg active:scale-95"
              >
                Our Work
              </a>
            </div>
            
            <div className="reveal delay-400 mt-20 flex flex-col sm:flex-row items-center gap-10">
              <div className="flex -space-x-4">
                {[
                  '1438761681033-6461ffad8d80',
                  '1500648767791-00dcc994a43e',
                  '1494790108377-be9c29b29330',
                  '1507003211169-0a1dd7228f2d',
                  '1534528741775-53994a69daeb'
                ].map((id, i) => (
                  <img 
                    key={i}
                    src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=150&h=150`} 
                    alt="Success Partner" 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-white object-cover shadow-2xl hover:scale-125 hover:z-20 transition-all duration-500 cursor-pointer"
                  />
                ))}
              </div>
              <div className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] text-center lg:text-left">
                <span className="text-slate-900 text-2xl tracking-tighter">1.8M+</span> <br />
                monthly reach generated
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 relative reveal delay-300 mt-16 lg:mt-0 px-4 md:px-0">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-[100px] animate-drift"></div>
            
            <div className="animate-float">
              <div className="bg-white p-6 rounded-[4rem] shadow-[0_100px_150px_-30px_rgba(215,25,32,0.18)] relative overflow-hidden border border-slate-50">
                <div className="absolute top-8 right-8 z-20">
                  <div className="bg-[#D71920] text-white p-4 rounded-3xl shadow-2xl transform rotate-12 flex flex-col items-center">
                    <span className="text-2xl font-black">+420%</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Growth</span>
                  </div>
                </div>
                
                <img 
                  src="/images/hero-workspace.png" 
                  alt="Elite Aesthetic Office" 
                  className="rounded-[3rem] w-full h-[400px] lg:h-[600px] object-cover"
                />
                
                <div className="mt-10 px-4 pb-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-5 bg-slate-100 rounded-full w-2/3"></div>
                    <div className="h-5 bg-red-50 rounded-full w-1/4"></div>
                  </div>
                  <div className="h-5 bg-slate-100 rounded-full w-1/2 mb-10"></div>
                  
                  <div className="flex justify-between items-center pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#D71920] rounded-2xl flex items-center justify-center text-white font-black text-xl italic">h</div>
                      <div>
                        <div className="text-sm font-black text-slate-900 tracking-tight">Humilly Agency</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Global Reach</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Interaction UI */}
            <div className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 hidden md:block animate-float" style={{animationDelay: '-3s'}}>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900 tracking-tighter">Viral Engine</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enabled</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
