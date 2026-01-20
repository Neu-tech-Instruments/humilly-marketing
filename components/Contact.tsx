
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="reveal max-w-6xl mx-auto bg-slate-50 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] flex flex-col md:flex-row border border-slate-100">
          <div className="w-full md:w-5/12 p-8 md:p-12 lg:p-16 bg-[#D71920] text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tight">Let's build something <br className="hidden md:block" /> human together.</h2>
              <p className="text-lg text-white/80 mb-10 md:mb-16 leading-relaxed">
                Ready to stop guessing and start growing? Tell us about your business and we'll send you a custom Pinterest game plan.
              </p>
              
              <div className="space-y-6 md:space-y-10">
                <div className="group flex items-start gap-4 md:gap-5 cursor-pointer">
                  <div className="bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl group-hover:bg-white group-hover:text-[#D71920] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-lg md:text-xl mb-1">Email Us</h4>
                    <p className="text-white/70 font-medium text-sm md:text-base">hello@humillymarketing.com</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 md:gap-5 cursor-pointer">
                  <div className="bg-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl group-hover:bg-white group-hover:text-[#D71920] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-lg md:text-xl mb-1">Location</h4>
                    <p className="text-white/70 font-medium text-sm md:text-base">Remote-first | Worldwide Reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 bg-white flex flex-col justify-center min-h-[500px]">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 reveal delay-200">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2 md:space-y-3">
                    <label htmlFor="name-input" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input id="name-input" required type="text" placeholder="John Doe" className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#D71920] focus:bg-white focus:ring-0 transition-all font-bold text-slate-900 outline-none" />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Business Name</label>
                    <input required type="text" placeholder="Humilly Co." className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#D71920] focus:bg-white focus:ring-0 transition-all font-bold text-slate-900 outline-none" />
                  </div>
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input required type="email" placeholder="john@company.com" className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#D71920] focus:bg-white focus:ring-0 transition-all font-bold text-slate-900 outline-none" />
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service of Interest</label>
                  <div className="relative">
                     <select className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#D71920] focus:bg-white focus:ring-0 transition-all font-bold text-slate-900 outline-none appearance-none">
                      <option>Pinterest SEO & Growth</option>
                      <option>Full Account Management</option>
                      <option>Pin Design Packages</option>
                      <option>Consulting & Strategy</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Goals</label>
                  <textarea rows={4} placeholder="I want to reach 500k monthly views..." className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#D71920] focus:bg-white focus:ring-0 transition-all font-bold text-slate-900 outline-none resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-slate-900 text-white py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-[#D71920] transition-all shadow-xl hover:shadow-[#D71920]/20 active:scale-[0.98] uppercase tracking-widest">
                  Start Growing Today
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center shadow-inner">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className="space-y-3 md:space-y-4 px-4">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Thank You!</h3>
                  <p className="text-base md:text-xl text-slate-600 max-w-sm mx-auto leading-relaxed">
                    We've received your request. A member of the Humilly team will get in touch with you shortly to discuss your Pinterest strategy.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#D71920] font-black uppercase tracking-widest text-xs md:text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
