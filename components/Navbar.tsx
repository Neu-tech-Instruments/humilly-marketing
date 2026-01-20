
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
  onPlaceholderClick: (e: React.MouseEvent, label: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onPlaceholderClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-[#D71920] rounded-full flex items-center justify-center text-white font-serif text-2xl italic font-bold transition-transform group-hover:rotate-12">
            h
          </div>
          <span className={`text-2xl font-extrabold tracking-tighter text-slate-900`}>Humilly</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <a 
            href="#portfolio" 
            onClick={(e) => handleLinkClick(e, '#portfolio')}
            className="text-slate-600 hover:text-[#D71920] font-bold text-sm uppercase tracking-widest transition-colors"
          >
            Work
          </a>
          <a 
            href="/about" 
            onClick={(e) => onPlaceholderClick(e, 'About Humilly')}
            className="text-slate-600 hover:text-[#D71920] font-bold text-sm uppercase tracking-widest transition-colors"
          >
            About
          </a>
          <a 
            href="https://www.pinterest.com/HumillyHQ/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-slate-600 hover:text-[#D71920] font-medium transition-colors text-sm uppercase tracking-widest"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
            </svg>
            Follow
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="bg-[#D71920] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
          >
            Work With Us
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-slate-900 p-2 focus:outline-none z-[110]"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
          <a 
            href="#portfolio" 
            onClick={(e) => handleLinkClick(e, '#portfolio')}
            className="text-4xl font-black text-slate-900 hover:text-[#D71920] transition-colors"
          >
            Portfolio
          </a>
          <a 
            href="/about" 
            onClick={(e) => { setIsMenuOpen(false); onPlaceholderClick(e, 'About Us'); }}
            className="text-4xl font-black text-slate-900 hover:text-[#D71920] transition-colors"
          >
            About
          </a>
          <a 
            href="https://www.pinterest.com/HumillyHQ/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-4xl font-black text-slate-900 hover:text-[#D71920] transition-colors"
          >
            Pinterest
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="text-4xl font-black text-[#D71920] transition-colors"
          >
            Contact
          </a>
          
          <div className="mt-8 pt-8 border-t border-slate-100 w-full max-w-xs">
            <p className="text-slate-500 font-medium mb-4">Ready to start?</p>
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="block w-full bg-[#D71920] text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-red-200"
            >
              Get Free Audit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
