'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20 flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-blue-950/50 to-indigo-950/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="max-w-4xl">
          {/* Top label */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium">
              Business Development & Advisory
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-light text-white leading-[1.05] tracking-tight">
              Accelerating
              <br />
              <span className="font-normal">Business Growth</span>
              <br />
              <span className="font-light text-white/90">in Dubai</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl font-light">
              Strategic business development, market entry, and corporate advisory services for local and international companies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-white text-slate-950 hover:bg-white/90 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 w-full sm:w-auto">
                Explore Our Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-light text-white mb-1">10+</span>
                <span className="text-sm text-white/70 font-light">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-light text-white mb-1">500+</span>
                <span className="text-sm text-white/70 font-light">Businesses Supported</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-light text-white mb-1">100%</span>
                <span className="text-sm text-white/70 font-light">Mainland & Free Zone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
