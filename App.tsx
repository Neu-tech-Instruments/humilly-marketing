
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PinGallery from './components/PinGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handlePlaceholderLink = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setModalContent(label);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#D71920] selection:text-white overflow-x-hidden bg-white">
      <Navbar scrolled={scrolled} onPlaceholderClick={handlePlaceholderLink} />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        
        <section id="portfolio" className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[120px] animate-drift -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] animate-drift -z-10" style={{animationDelay: '-5s'}}></div>

          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-20 reveal">
              <h4 className="text-[#D71920] font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#D71920]"></span>
                Portfolio
              </h4>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900">
                Visual <br className="hidden md:block" /> Storytelling.
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                We don't just pin images; we craft scroll-stopping digital assets that convert casual browsers into high-intent buyers.
              </p>
            </div>
            <PinGallery />
          </div>
        </section>

        <CaseStudies />
        <Testimonials />

        <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#D71920]/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white/5 rounded-full blur-[100px] animate-drift"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10 reveal">
            <h2 className="text-4xl md:text-7xl font-black mb-10 max-w-5xl mx-auto leading-[0.9] tracking-tighter">
              Ready to Humanize Your <br className="hidden md:block" />
              <span className="text-[#D71920]">Growth Engine?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Join dozens of world-class brands scaling their Pinterest presence with our human-first methodology.
            </p>
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-4 bg-[#D71920] text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-red-700 hover:shadow-[0_20px_50px_rgba(215,25,32,0.4)] hover:-translate-y-1 transition-all active:scale-95"
            >
              Request Free Strategy Audit
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </section>

        <Contact />
      </main>

      <Footer onPlaceholderClick={handlePlaceholderLink} />

      {/* Global Transition Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="bg-white w-full max-w-xl rounded-[3.5rem] p-12 md:p-16 text-center shadow-[0_80px_150px_-30px_rgba(0,0,0,0.5)] relative overflow-hidden border border-slate-100">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#D71920]"></div>
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-10 text-[#D71920]">
              <div className="w-14 h-14 bg-[#D71920] rounded-full flex items-center justify-center text-white font-serif text-3xl italic font-bold animate-pulse">
                h
              </div>
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">Crafting Experience...</h3>
            <p className="text-slate-500 text-xl mb-12 font-medium leading-relaxed">
              We're currently humanizing the <span className="text-[#D71920] font-black">"{modalContent}"</span> section. Check back soon for the full story.
            </p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-slate-900 text-white py-6 rounded-3xl font-black text-xl hover:bg-[#D71920] transition-all shadow-2xl hover:shadow-red-200"
            >
              Keep Exploring
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
