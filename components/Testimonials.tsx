
import React from 'react';

const reviews = [
  {
    quote: "Humilly didn't just grow our views; they grew our brand affinity. Our Pinterest traffic is now our highest converting source.",
    author: "Sarah Jenkins",
    role: "Founder, EcoLife Home",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "The visual storytelling they brought to our skincare line was breathtaking. It finally feels like our online presence matches our product quality.",
    author: "Elena Rossi",
    role: "Marketing Director, Veda Skin",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Finally, an agency that understands 'Human' isn't just a buzzword. Their strategy is logical, data-driven, and incredibly effective.",
    author: "Marcus Thorne",
    role: "CEO, The Daily Brew",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h4 className="text-[#D71920] font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Loved by Humans.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="reveal p-10 rounded-[3rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all duration-500"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div>
                <div className="text-[#D71920] mb-6">
                  <svg className="w-10 h-10 fill-current opacity-20" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C14.8079 14 13.017 12.2091 13.017 10V5C13.017 3.89543 13.9124 3 15.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V10C23.017 12.2091 21.2261 14 19.017 14V16H20.017C21.1216 16 22.017 16.8954 22.017 18V21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6V14H4C1.79086 14 0 12.2091 0 10V5C0 3.89543 0.89543 3 2 3H8C9.10457 3 10 3.89543 10 5V10C10 12.2091 8.20914 14 6 14V16H7C8.10457 16 9 16.8954 9 18V21H1Z"/>
                  </svg>
                </div>
                <p className="text-xl font-medium text-slate-700 leading-relaxed mb-8 italic">
                  "{review.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.author} className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover" />
                <div>
                  <h4 className="font-black text-slate-900 leading-none mb-1">{review.author}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
