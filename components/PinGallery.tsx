
import React from 'react';

const pins = [
  {
    id: 1,
    title: 'GROW FAST ON PINTEREST!',
    subtitle: 'Scale your brand today',
    tag: 'GROWTH',
    category: 'CASE STUDY',
    type: 'tall',
    img: '/images/growth-graph.png'
  },
  {
    id: 2,
    title: 'SEO SECRETS REVEALED',
    subtitle: 'How we hit 1M views',
    tag: 'STRATEGY',
    category: 'TUTORIAL',
    type: 'short',
    img: '/images/strategy-desk.png'
  },
  {
    id: 3,
    title: 'HUMAN CONTENT PLAN',
    subtitle: 'Connect with humans',
    tag: 'CONTENT',
    category: 'INSIGHT',
    type: 'medium',
    img: '/images/human-connection.png'
  },
  {
    id: 4,
    title: 'UNLOCK THE ALGORITHM',
    subtitle: 'Step-by-step guide',
    tag: 'VIRAL',
    category: 'CASE STUDY',
    type: 'tall',
    img: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=800&h=1400'
  },
  {
    id: 5,
    title: 'PIN DESIGN SECRETS',
    subtitle: 'Stop the scroll now',
    tag: 'DESIGN',
    category: 'GUIDE',
    type: 'medium',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800&h=1000'
  },
  {
    id: 6,
    title: 'THE HUMAN ELEMENT',
    subtitle: 'Our custom approach',
    tag: 'BRANDING',
    category: 'MANIFESTO',
    type: 'short',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600'
  },
];

const PinGallery: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pinterest-grid-container">
        {pins.map((pin, index) => (
          <div
            key={pin.id}
            className={`reveal delay-${(index % 5 + 1) * 100} relative rounded-[2.5rem] overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 cursor-pointer ${pin.type === 'tall' ? 'md:row-span-4' : pin.type === 'short' ? 'md:row-span-2' : 'md:row-span-3'
              } h-[450px] md:h-auto bg-slate-900`}
          >
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0">
              <img
                src={pin.img}
                alt={pin.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            </div>

            {/* Top Right Bookmark Button */}
            <div className="absolute top-6 right-6 z-20">
              <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-2xl border border-white/20 hover:bg-white hover:text-[#D71920] transition-all shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
            </div>

            {/* Card Content (Matched to Screenshot) */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#D71920] text-[10px] font-black text-white px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg">
                  {pin.tag}
                </span>
                <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">
                  {pin.category}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white leading-none mb-3 tracking-tighter">
                {pin.title}
              </h3>

              <p className="text-white/70 text-sm md:text-base font-medium mb-8">
                {pin.subtitle}
              </p>

              <a
                href="https://www.pinterest.com/HumillyHQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#D71920] text-white px-8 py-5 rounded-2xl text-xs font-black hover:bg-red-600 transition-all w-full text-center uppercase tracking-[0.2em] shadow-[0_15px_30px_-5px_rgba(215,25,32,0.4)]"
              >
                Learn The Strategy
              </a>
            </div>

            {/* Visual Center Accent (Mimicking the 'N' in the screenshot) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <span className="text-[15rem] font-serif italic font-bold text-[#D71920] blur-sm">h</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center reveal px-6">
        <a
          href="https://www.pinterest.com/HumillyHQ/"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto flex items-center justify-center gap-6 bg-white border-4 border-slate-900 px-12 py-5 rounded-3xl font-black text-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-2xl transition-all active:scale-95"
        >
          <span className="text-lg">View Our Full Board</span>
          <div className="bg-[#D71920] p-2 rounded-xl text-white">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PinGallery;
