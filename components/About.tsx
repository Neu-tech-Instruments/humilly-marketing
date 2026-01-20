import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-50/50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative reveal">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-red-900/10 transform transition-transform hover:scale-[1.02] duration-500 min-h-[500px] md:min-h-[600px] flex aspect-[3/4] md:aspect-auto">
                            <img
                                src="/images/about-founder.jpg"
                                alt="Humilly Founders"
                                className="w-full h-full object-cover absolute inset-0 bg-slate-100"
                            />

                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-24 text-white z-20">
                                <p className="font-serif italic text-2xl mb-1">"Human first. Always."</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-[#D71920]">Founder & CEO</p>
                            </div>
                        </div>

                        {/* Decorative Elements around image */}
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#D71920]/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute top-10 -left-10 w-20 h-20 border-2 border-[#D71920]/20 rounded-full"></div>
                        <div className="absolute bottom-20 -right-4 w-4 h-4 bg-[#D71920] rounded-full animate-ping"></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 reveal">
                        <h4 className="text-[#D71920] font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-[#D71920]"></span>
                            Our DNA
                        </h4>

                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                            We Don't Just Optimize. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D71920] to-red-600">
                                We Humanize.
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                            <p>
                                In a digital landscape dominated by cold algorithms and automated feeds,
                                <span className="text-slate-900 font-bold"> Humilly </span>
                                stands for something different. We believe that behind every screen is a heartbeat, and behind every click is a human desire.
                            </p>
                            <p>
                                We started with a simple question: <span className="italic text-slate-800">"What if marketing felt like a conversation?"</span>
                            </p>
                            <p>
                                Today, we help ambitious brands translate their soul into the visual language of Pinterest, creating galleries that don't just get views—they get feelings. Because when people feel seen, they act.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8">
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-slate-900 mb-1">50M+</span>
                                <span className="text-sm text-slate-500 uppercase tracking-wider font-bold">Monthly Views</span>
                            </div>
                            <div className="w-[1px] h-12 bg-slate-200 my-auto hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-slate-900 mb-1">120+</span>
                                <span className="text-sm text-slate-500 uppercase tracking-wider font-bold">Brands Humanized</span>
                            </div>
                            <div className="w-[1px] h-12 bg-slate-200 my-auto hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-slate-900 mb-1">∞</span>
                                <span className="text-sm text-slate-500 uppercase tracking-wider font-bold">Connections</span>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-[#D71920] font-bold">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <p className="text-sm text-slate-500 italic max-w-sm">
                                    "The algorithm changes every day. Human nature stays the same."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
