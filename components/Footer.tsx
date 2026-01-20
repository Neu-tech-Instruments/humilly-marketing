
import React from 'react';

interface FooterProps {
  onPlaceholderClick: (e: React.MouseEvent, label: string) => void;
  onShowAbout: (e: React.MouseEvent) => void;
}

const Footer: React.FC<FooterProps> = ({ onPlaceholderClick, onShowAbout }) => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <div className="w-10 h-10 bg-[#D71920] rounded-full flex items-center justify-center text-white font-serif text-2xl italic font-bold">
                h
              </div>
              <span className="text-2xl font-extrabold tracking-tighter">Humilly</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Human-centric digital marketing strategies for small businesses. Tips on Social Media Growth, Pinterest Marketing, and Branding.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.pinterest.com/HumillyHQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D71920] transition-all cursor-pointer group"
                title="Follow Humilly on Pinterest"
              >
                <svg className="w-5 h-5 fill-white opacity-70 group-hover:opacity-100" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-300">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" onClick={onShowAbout} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="https://www.pinterest.com/HumillyHQ/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pinterest Profile</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-300">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/growth-tips" onClick={(e) => onPlaceholderClick(e, 'Growth Tips')} className="hover:text-white transition-colors">Growth Tips</a></li>
              <li><a href="/seo-guides" onClick={(e) => onPlaceholderClick(e, 'SEO Guides')} className="hover:text-white transition-colors">SEO Guides</a></li>
              <li><a href="/brand-workshops" onClick={(e) => onPlaceholderClick(e, 'Brand Workshops')} className="hover:text-white transition-colors">Brand Workshops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-300">Newsletter</h4>
            <p className="text-slate-400 mb-6">Weekly tips for human-centric growth.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-slate-800 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#D71920] transition-all text-white"
              />
              <button
                onClick={(e) => onPlaceholderClick(e, 'Newsletter Signup')}
                className="absolute right-2 top-2 bottom-2 bg-[#D71920] text-white px-4 rounded-lg font-bold hover:bg-red-700 transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Humilly Marketing. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="/privacy" onClick={(e) => onPlaceholderClick(e, 'Privacy Policy')} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" onClick={(e) => onPlaceholderClick(e, 'Terms of Service')} className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
